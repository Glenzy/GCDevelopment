import React, {PureComponent} from 'react';
import posed, { PoseGroup } from 'react-pose';
//import PropTypes from 'prop-types';
const Children = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    x:0,
    staggerChildren: 550
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
      <div className="developmentContent">
        <PoseGroup>
          <Children key={`${skills.id}-a`}>
            <img src={skills.imgSrc}className="skill-logo"/>
            </Children>
            <Children key={`${skills.id}-b`}>
            <h4>{skills.label}</h4>
            </Children>
            <Children key={`${skills.id}-c`}>
            <p>{skills.info}</p>
            </Children>

        </PoseGroup>
      </div>
    );
  }
}

export default Content;
