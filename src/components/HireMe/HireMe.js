import React, {Component} from 'react';
import Content from './Content';
//import Boxes from './Boxes';


class SectionThree extends Component {

  render() {
    return (
    <div className="clearfix section three" id="sectionThree">
      <h2>Hire me</h2>
      <div className="row v-center">
        <Content />
      </div>
    </div>
    );
  }

}

export default SectionThree;
