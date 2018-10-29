import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GameContainer from '../Game/GameContainer';

const Examples = ({ showExamplesAction }) => {
    return (
        <div className="row  align-items-center justify-content-center h-100">
          <FontAwesomeIcon icon="window-close" className="closeBtn" onClick={showExamplesAction} />
          <div className="col-12">
            <div id="spaceInvaders" className="gameContainerWrapper">
              <GameContainer />
            </div>
          </div>
        </div>
    );
  };

export default Examples;
