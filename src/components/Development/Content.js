import React, {PureComponent} from 'react';
import posed, { PoseGroup } from 'react-pose';
//import PropTypes from 'prop-types';

const Children = posed.div({
  enter: {
    opacity: 1,
    delay: 100,
    x:0,
    staggerChildren: 50
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
      <div className="developmentContent v-center">
        <PoseGroup>
          <Children key={`${skills.id}`}>
            <img src={skills.imgSrc} key={`${skills.id}-a`} className="skill-logo"/>
            <h4 key={`${skills.id}-b`}>{skills.label}</h4>
            <p key={`${skills.id}-c`}>{skills.info}</p>
          </Children>
        </PoseGroup>
      </div>
    );
  }
}

export default Content;


/*
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


*/
