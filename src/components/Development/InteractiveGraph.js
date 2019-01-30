import React from 'react';
import RadialGraph from './RadialGraph';
import { interactiveGraphPropTypes } from '../../types/DevelopmentTypes';
import Button from '../CommonComponents/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swipeable from 'react-swipeable';
import Content from './Content';

const InteractiveGraph = ({skill, skills, showExamplesAction, prevSkill, nextSkill}) => {
  return (
    <Swipeable
      trackMouse={true}
      preventDefaultTouchmoveEvent={false}
      onSwipedLeft={() => prevSkill}
      onSwipedRight={() => nextSkill}
      onTap={()=> nextSkill}
      >
      <div className="row  align-items-center justify-content-center h-100">
        <div className="col-sm-1 d-none d-lg-block">
          <FontAwesomeIcon icon="chevron-left" onClick={prevSkill} />
        </div>
        <div className="col-lg-4 col-md-12">
          <RadialGraph skills={skills}/>
        </div>
        <div className="col-md-12 col-lg-6">
          { skill.length ? <Content skills={skill[0]} /> : <Content skills={skills[0]} />}
        </div>
        <div className="col-sm-1 d-none d-lg-block">
          <FontAwesomeIcon icon="chevron-right" onClick={nextSkill}/>
        </div>
        <div className="col-md-12 col-lg-7 offset-lg-5">
          <Button handleClickEvent={showExamplesAction} content="See App Examples" styleClasses="btn btn-intro"/>
        </div>
      </div>
    </Swipeable>
  );
};
InteractiveGraph.propTypes = {
  ...interactiveGraphPropTypes
};
export default InteractiveGraph;
