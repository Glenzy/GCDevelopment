import React, {PureComponent} from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import { parallax, Xparallax } from '../utils/parallax';
import PropTypes from 'prop-types';
import HomePageAnimated from './HomePage/HomePage';
import Development from './Development/Development';
import HireMe from './HireMe/HireMe';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 100,
    x:0,
    beforeChildren: true
  },
  exit: {
    opacity: 0,
    x:50
   }
});
const Image = posed.img({

});

class Container extends PureComponent {
  componentDidMount(){
    parallax();
  }
  componentDidUpdate(prevProps){
    if(this.props.location !== prevProps.location){
      Xparallax();
    }
  }
 firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

getImage = () => {
  const width = document.body.clientWidth;
  if(width > 1040){
    return `${require('../images/banner-bg-c.jpg')}`;
  } else if (width > 600 && width < 1040){
    return `${require('../images/banner-bg-tb.jpg')}`;
  } else {
    return `${require('../images/banner-bg-mbb.jpg')}`;
  }
}

  render() {
    const currentKey = location.pathname.split('/')[1] || '/';
    return (
      <div>
        <Image
          id="parallax"
           src={this.getImage()}
           alt="GCDevelopment React and Javascript Developer"
           className={currentKey}
        />
      <PoseGroup>
        <RoutesContainer key={currentKey}>
            <Switch location={this.props.location}>
              <Route exact path="/" component={HomePageAnimated} key="home" />
              <Route path="/development" component={Development} key="development" />
              <Route path="/contact" component={HireMe}key="contact" />
            </Switch>
        </RoutesContainer>
      </PoseGroup>
    </div>
    );
  }
}

Container.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Container);
