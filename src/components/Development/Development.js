import React, {PureComponent} from 'react';
//import PropTypes from 'prop-types';
import * as actions from '../../actions/DevExampleActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Content from './Content';
import Examples from './Examples';
class SectionTwo extends PureComponent {

  render() {
    const { DevExamples } = this.props;
    return (
    <div className="clearfix section two" id="development">
      <div className="row v-center">
        <h2>Developer skillset</h2>
        <Content skills={DevExamples.skills}/>
        <Examples />
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

export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);
