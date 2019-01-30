import React, {PureComponent} from 'react';
import posed, { PoseGroup } from 'react-pose';
import { developmentContentPropTypes } from '../../types/DevelopmentTypes';
const Children = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    staggerChildren: 250

  },
  exit: {
    opacity: 0,
   }
});
export const SkillLogo = posed.img({
  enter:{
    opacity:1,
    delay:300,
    x:0,
  },
  exit: {
    opacity:0,
    x:-50,
  }
});
export const SkillTitle = posed.h4({
  enter:{
    opacity:1,
    delay:300,
    x:0,
  },
  exit: {
    opacity:0,
    x:50,
  }
});
export const SkillContent = posed.p({
  enter:{
    opacity:1,
    delay:400,
    x:0,
    y:0,
  },
  exit: {
    opacity:0,
    x:0,
    y:50,
  }
});
class Content extends PureComponent {
  render() {
    const { skills } = this.props;
    return (
      <div className="developmentContent">
        <PoseGroup>
          <Children key={`${skills.id}`}>
            <SkillLogo src={skills.imgSrc} className="skill-logo" key={`${skills.id}-a`} />
            <SkillTitle key={`${skills.id}-b`}>{skills.label}</SkillTitle>
            <SkillContent key={`${skills.id}-c`}>{skills.info}</SkillContent>
          </Children>
        </PoseGroup>
      </div>
    );
  }
}

Content.propTypes = {
  ...developmentContentPropTypes,
};
export default Content;
