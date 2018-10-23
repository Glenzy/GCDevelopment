import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import * as actions from '../../actions/DevExampleActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Content from './Content';
import Examples from './Examples';
import RadialGraph from './RadialGraph';
class Development extends Component {
/*
  TO DO:
    Add swipeable for mobile navigation
    Add an "Examples" button to bring up game when clicked
      - Fix game ADD TESTS!!!!
*/
getActive = (skills) => {
  return skills.filter((skill) => skill.active === true);
}
 nextSkill = () => {
   let skills = this.props.DevExamples.skills;
   let skill = this.getActive(skills);
   let id = skill[0].id;
   if(id+1 >= skills.length-1){
     return this.props.actions.interactedWithGraph(0);
   } else {
       return this.props.actions.interactedWithGraph(id+1);
   }
 }
 prevSkill = () => {
   let skills = this.props.DevExamples.skills;
   let skill = this.getActive(skills);
   let id = skill[0].id;
   if(id <= 0){
     return this.props.actions.interactedWithGraph(skills.length-1);
   } else {
       return this.props.actions.interactedWithGraph(id-1);
   }
 }
  render() {
    const skills = this.props.DevExamples.skills;
    const skill = this.getActive(skills);
    return (
    <div className="section two" id="development">
      <div className="container">
        <div className="row  skillwrapper align-items-center justify-content-center h-100">
          <div className="col-12"><h2>Developer skillset</h2></div>
          <div className="col-sm-1">
            <FontAwesomeIcon icon="chevron-left" onClick={this.prevSkill} />
          </div>
          <div className="col-sm-4">
            <RadialGraph skills={skills}/>
          </div>
          <div className="col-sm-6">
            { skill.length ? <Content skills={skill[0]} /> : <Content skills={skills[0]} />}
          </div>
          <div className="col-sm-1">
            <FontAwesomeIcon icon="chevron-right" onClick={this.nextSkill}/>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12"><Examples/></div>
        </div>
      </div>
    </div>);
  }

}

function mapStateToProps(state) {
  return {DevExamples: state.DevExamples};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...actions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Development);
