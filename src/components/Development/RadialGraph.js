import React, { PureComponent } from 'react';
import {CircularGridLines, RadialChart, GradientDefs} from 'react-vis';
/*
Hook up to Redux
  - conect function
  - actions
  - state for interactivity
  -
*/
class RadiaGraph extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
     hoveredSection: false
   };
  }

  mapData = (hoveredSection) => {
   const { skills } = this.props;
   return skills.map((row, index) => {
     return {
       ...row,
       innerRadius: hoveredSection === index ? row.radius + 2 : null,
       opacity: !hoveredSection || hoveredSection === index ? 1 : 0.6,
       gradientLabel:row.label,
     };
   });
 }

  render() {
    const { hoveredSection } = this.state;
    const { skills } = this.props;
    return (
      <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        colorType={'literal'}
        colorDomain={[0, 100]}
        colorRange={[0, 10]}
        getColor={data => `url(#${data.gradientLabel})`}
        data={this.mapData(hoveredSection)}
        onValueMouseOver={row => this.setState({hoveredSection: row.id})}
        onMouseLeave={() => this.setState({hoveredSection: false})}
        width={600}
        height={300}
        labelsRadiusMultiplier={1.1}
      >
      <GradientDefs>
       { skills.map((skill) => {
             return (
              <linearGradient key={skill.id} id={skill.label} x1="0" x2="0" y1="0" y2="1">
               <stop offset="0%" stopColor={skill.color} stopOpacity={0.8} />
               <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
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

export default RadiaGraph;
