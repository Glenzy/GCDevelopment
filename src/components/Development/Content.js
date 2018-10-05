import React, {PureComponent} from 'react';
import posed from 'react-pose';
import {CircularGridLines, RadialChart, GradientDefs} from 'react-vis';
//import PropTypes from 'prop-types';
const Image = posed.img({
    enter: {
      opacity: 1,
      delay: 100,
      x:0,
      beforeChildren: true
    },
    exit: {
      opacity: 0,
      x:50
     }
});

class Content extends PureComponent {
      state = {
       hoveredSection: false
     };
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
     /*
     This function should return a bunch of svg gradient definiteion
     */
     getGradients = () => {
       const { skills } = this.props;
       return (
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
        );
     }

  render() {
    const { skills } = this.props;
    const { hoveredSection } = this.state;
    const GetGradients = this.getGradients;
    return (
      <div className="content">
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
          <GetGradients />
          <CircularGridLines tickTotal={20} rRange={[0, 150]} />
        </RadialChart>
        <div className="skillwrapper left">
          <h4>Front-end skills</h4>
        {skills.map((skill, index) => {
          if(index < 4){
            return (
            <div key={skill.id}>
              <Image src={skill.imgSrc} className="skill-logo"/>
              <h4 className="skill-name">{skill.radius}</h4>
              <div>'...'</div>
            </div>);
          }
        })}
      </div>
      <div className="skillwrapper right">
        <h4>Backend skills</h4>
      {skills.map((skill, index) => {
        if(index >= 4){
          return (
          <div key={skill.id}>
              <Image src={skill.imgSrc} className="skill-logo" />
            <h4 className="skill-name">{skill.radius}</h4>
            <div>'...'</div>
          </div>);
        }
      })}
    </div>
  </div>
    );
  }
}

export default Content;
