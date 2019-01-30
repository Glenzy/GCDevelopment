import React, { PureComponent } from 'react';
import {CircularGridLines, RadialChart, GradientDefs} from 'react-vis';
import * as actions from '../../actions/DevExampleActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { radialGraphPropTypes } from '../../types/DevelopmentTypes';

export class RadialGraph extends PureComponent {

  mapData = () => {
   const { skills } = this.props;
   return skills.map((row) => {
     return {
       ...row,
       gradientLabel:row.label,
     };
   });
 }

  render() {
    const { skills, actions } = this.props;
    return (
      <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        colorType={'literal'}
        colorDomain={[0, 100]}
        colorRange={[0, 10]}
        getColor={data => `url(#${data.gradientLabel})`}
        data={this.mapData()}
        onValueMouseOver={row => actions.interactedWithGraph(row.id)}
        onClick={row => actions.interactedWithGraph(row.id)}
        width={300}
        height={300}
        labelsRadiusMultiplier={1.3}
        labelsAboveChildren
      >
      <GradientDefs>
       { skills.map((skill) => {
             return (
              <linearGradient key={skill.id} id={skill.label} x1="0" x2="0" y1="0" y2="1">
               <stop offset="0%" stopColor={skill.color} stopOpacity={skill.stopOpacityA} />
               <stop offset="100%" stopColor={skill.color} stopOpacity={skill.stopOpacityB} />
             </linearGradient>
           );
          })
        }
       </GradientDefs>
        <CircularGridLines tickTotal={20} rRange={[0, 150]} />
      </RadialChart>
    );
  }
}

RadialGraph.propTypes = {
  ...radialGraphPropTypes
};

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

export default connect(mapStateToProps, mapDispatchToProps)(RadialGraph);