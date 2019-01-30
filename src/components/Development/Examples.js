import React from 'react';
import { examplesPropTypes } from '../../types/DevelopmentTypes';
import GameContainer from '../Game/GameContainer';

const Examples = ({ showExamplesAction }) => {
    return (
        <div className="row  align-items-center justify-content-center h-100">
          <h4 onClick={showExamplesAction}>Go back</h4>
          <div className="col-12">
            <div id="spaceInvaders" className="gameContainerWrapper">
              <GameContainer />
            </div>
          </div>
        </div>
    );
  };
Examples.propTypes = {
  ...examplesPropTypes
};
export default Examples;
