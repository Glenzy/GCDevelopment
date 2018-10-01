import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import PropTypes from 'prop-types';
import Menu from './CommonComponents/Menu';
import Container from './Routes';
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
