import React from 'react';
import RadialGraph from './RadialGraph';
import Button from '../CommonComponents/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Content from './Content';

const InteractiveGraph = ({skill, skills, showExamplesAction, prevSkill, nextSkill}) => {
  return (
      <div className="row  align-items-center justify-content-center h-100">
        <div className="col-sm-1">
          <FontAwesomeIcon icon="chevron-left" onClick={prevSkill} />
        </div>
        <div className="col-xs-11 col-sm-4">
          <RadialGraph skills={skills}/>
        </div>
        <div className="col-xs-11 col-sm-6">
          { skill.length ? <Content skills={skill[0]} /> : <Content skills={skills[0]} />}
        </div>
        <div className="col-sm-1">
          <FontAwesomeIcon icon="chevron-right" onClick={nextSkill}/>
        </div>
        <div className="col-xs-12 col-sm-7 offset-sm-5">
          <Button handleClickEvent={showExamplesAction} content="See App Examples" styleClasses="btn btn-intro"/>
        </div>
      </div>
  );
};

export default InteractiveGraph;
