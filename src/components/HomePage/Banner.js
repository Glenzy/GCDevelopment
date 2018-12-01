import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
class Banner extends Component {
  componentDidMount() {}

  render() {
    return (
    <header className="bg overlay relative v-center section">
      <div className="absolute foreground"/>
      <div className="container">
        <div className="row v-center">
          <div className="col-sm-8 text-center header-text mx-auto">
            <h1 className="">Front-end Developer</h1>
            <Link to="/development">
              <FontAwesomeIcon icon={faCode} />
              Dev Examples
            </Link>
            <Link to="/hire-me" className="btn btn-intro">Hire Me</Link>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Banner;
