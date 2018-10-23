import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Menu from './CommonComponents/Menu';
import Container from './Routes';
library.add(faChevronRight, faChevronLeft);
class App extends React.Component {
  render() {
    const {history} = this.props;
    return (
      <ConnectedRouter history={history}>
      <div>
        <Menu links="left" logo="right"/>
        <Container/>
      </div>
    </ConnectedRouter>);
  }
}
App.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object.isRequired,
};
export default App;
