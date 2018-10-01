import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Sprite extends Component {

  static propTypes = {
    offset: PropTypes.array,
    onPlayStateChanged: PropTypes.func,
    repeat: PropTypes.bool,
    scale: PropTypes.number,
    src: PropTypes.string,
    state: PropTypes.number,
    steps: PropTypes.array,
    style: PropTypes.object,
    ticksPerFrame: PropTypes.number,
    tileHeight: PropTypes.number,
    tileWidth: PropTypes.number,
    className: PropTypes.string,
    positionX:PropTypes.number,
    positionY:PropTypes.number,
  };

  static defaultProps = {
    offset: [0, 0],
    onPlayStateChanged: () => {},
    src:"images/explosion.png",
    scale:1,
    explosionState:0,
    steps:[7, 7, 7, 7],
    playAllSteps:true,
    tileWidth:64,
    tileHeight:64,
    ticksPerFrame:8
  };

  static contextTypes = {
    loop: PropTypes.object,
    scale: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.loopID = null;
    this.tickCount = 0;
    this.finished = false;

    this.state = {
      currentStep: 0,
      explosionState:0,
    };
  }

  componentDidMount() {
    this.props.onPlayStateChanged(1);
    const animate = this.animate.bind(this, this.props);
    this.loopID = this.context.loop.subscribe(animate);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.loopID);
  }

  animate(props) {
    const {ticksPerFrame, steps } = props;
    const { currentStep, explosionState } = this.state;
    if (this.tickCount === ticksPerFrame && !this.finished) {
      if (steps[explosionState] !== 0) {
        const lastStep = steps[explosionState];
        const nextStep = currentStep === lastStep ? 0 : currentStep + 1;

        this.setState({
          currentStep: nextStep,
        });
        if (currentStep === lastStep && explosionState < steps.length) {
          this.setState({
            explosionState: explosionState+1,
          });
        }
        if(explosionState === steps.length) {
          this.finished = true;
          this.props.onPlayStateChanged(0);
        }
      }

      this.tickCount = 0;
    } else {
      this.tickCount++;
    }

  }

  getImageStyles() {
    const { currentStep, explosionState } = this.state;
    const left = this.props.offset[0] + (currentStep * 100)+21;
    const top = 21+(explosionState*100);
    return {
      position: 'absolute',
      transform: `translate(-${left}px, -${top}px)`,
    };
  }

  getWrapperStyles() {
    return {
      height: this.props.tileHeight,
      width: this.props.tileWidth,
      overflow: 'hidden',
      position: 'relative',
        transform: `translate(${this.props.positionX}px, ${this.props.positionY}px)`,
      transformOrigin: 'top left',
      imageRendering: 'pixelated',

    };
  }

  render() {
    return (
      <div className={this.props.className} style={{ ...this.getWrapperStyles(), ...this.props.style }}>
        <img
          style={this.getImageStyles()}
          src={this.props.src}
        />
      </div>
    );
  }

}
