import React, {PureComponent} from 'react';
//import PropTypes from 'prop-types';
import * as actions from '../../actions/DevExampleActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Content from './Content';
import Examples from './Examples';
import RadialGraph from './RadialGraph';
class Development extends PureComponent {

  render() {
    const { DevExamples  } = this.props;
    return (
    <div className="section two" id="development">
      <div className="container">
        <div className="row v-center">
          <div className="text-center mx-auto">
            <h2>Developer skillset</h2>
              <div className="content">
                <div className="skillwrapper">
                  <RadialGraph  skills={DevExamples.skills}/>
                {  DevExamples.RadialGraph.hoveredSection && <Content skills={DevExamples.skills[DevExamples.RadialGraph.hoveredSection]}/> }
                </div>
              </div>
            <Examples />
          </div>
        </div>
      </div>
    </div>
    );
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
