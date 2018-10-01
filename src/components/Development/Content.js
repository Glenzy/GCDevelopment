import React, {PureComponent} from 'react';
import posed, { PoseGroup } from 'react-pose';
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
  render() {
    const { skills } = this.props;
    return (
      <div className="content">
        <h2>Skills that pay bills</h2>
        <div className="skillwrapper left">
        {skills.map((skill, index) => {
          if(index < 4){
            return (
            <div key={skill.id}>
              <Image src={skill.imgSrc} className="skill-logo"/>
              <h4 className="skill-name">{skill.level}</h4>
              <div>'...'</div>
            </div>);
          }
        })}
      </div>
      <div className="skillwrapper right">
      {skills.map((skill, index) => {
        if(index >= 4){
          return (
          <div key={skill.id}>
              <Image src={skill.imgSrc} className="skill-logo" />
            <h4 className="skill-name">{skill.level}</h4>
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
