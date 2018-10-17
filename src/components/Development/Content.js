import React, {PureComponent} from 'react';
import posed from 'react-pose';
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
      <div>
        <Image src={skills.logo} />
        <h4>{skills.label}</h4>
        <p>some content</p>
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
