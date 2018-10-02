import React, {PureComponent} from 'react';
import posed from 'react-pose';
import {CircularGridLines, RadialChart} from 'react-vis';
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
       console.log('mapData', hoveredSection);
       return skills.map((row, index) => {
         return {
           ...row,
           innerRadius: hoveredSection === index ? row.radius + 9 : null,
           opacity: !hoveredSection || hoveredSection === index ? 1 : 0.6
         };
       });
     }
  render() {
    const { skills } = this.props;
    const { hoveredSection } = this.state;
    return (
      <div className="content">
          <h2>Developer skillset</h2>
        <RadialChart
          animation
          showLabels
          radiusDomain={[0, 20]}
          data={this.mapData(hoveredSection)}
          labelsAboveChildren
          onValueMouseOver={row => this.setState({hoveredSection: row.id})}
          onMouseLeave={() => this.setState({hoveredSection: false})}
          width={600}
          height={300}
        >
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
