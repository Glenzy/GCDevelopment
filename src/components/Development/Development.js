import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import * as actions from '../../actions/DevExampleActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import posed, { PoseGroup } from 'react-pose';
import Examples from './Examples';
import InteractiveGraph from './InteractiveGraph';
const SkillWapper = posed.div({
  500:{
    height:500,
    transition:{
      duration: 400,
      ease: 'linear'
    },
    delay:400,
    flip: true
  },
  800:{
    height:800,
    transition:{
      duration: 400,
      ease: 'linear'
    },
    delay:200,
    flip: true
  }
});
const FadeInExamples = posed.div({
  show: {
    opacity:1,
    x:0,
    delay:400,
  },
  hide:{
    opacity:0,
    x:-100,
  }
});
const FadeInContent = posed.div({
  show: {
    opacity:1,
    x:0,
    delay:500,
  },
  hide:{
    opacity:0,
    x:-100,
  }
});
export class Development extends Component {
/*
  TO DO:
    Add swipeable for mobile navigation
    Break out each Component into it's own so Examples and COntent are mounted and un mounted as rendered
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

showExamplesAction = () =>{
  return this.props.actions.showExamples();
}

  render() {
    const{ skills, showExamples} = this.props.DevExamples;
    const skill = this.getActive(skills);
    return (
    <div className="section two" id="development">
      <div className="container">
        <div className="row  align-items-center justify-content-center h-100">
          <div className="col-12"><h2>Developer skillset</h2></div>
        </div>
        <SkillWapper className="skillwrapper" pose={showExamples ? '800' :'500'}>
          <PoseGroup>
             <FadeInContent pose={showExamples ? 'hide' :'show'} key="interactiveGraph" className={showExamples ? 'pin-top' : 'shown pin-top'}>
              <InteractiveGraph
                skill={skill}
                skills={skills}
                showExamplesAction={this.showExamplesAction}
                showExamples={showExamples}
                prevSkill={this.prevSkill}
                nextSkill={this.nextSkill}
                className={showExamples ? 'shown' : ''}
                key="interactiveGraph" />
            </FadeInContent>
            <FadeInExamples  pose={showExamples ? 'show' :'hide'} key="examples" className={showExamples ? 'shown pin-top' : 'pin-top'}>
               <Examples showExamplesAction={this.showExamplesAction} showExamples={showExamples}  key="examples" />
            </FadeInExamples>
          </PoseGroup>
        </SkillWapper>
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
