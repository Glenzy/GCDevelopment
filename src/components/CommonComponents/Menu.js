import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import  { menuPropTypes } from '../../types';
import * as actions from '../../actions/MenuActions';
import {NavLink} from 'react-router-dom';
import posed from 'react-pose';

const Sidebar = posed.ul({
open: {
  delayChildren: 50,
  staggerChildren: 150
},
closed: {
  delayChildren: 50,
  staggerChildren: 150
 }
});
const Item = posed.li({
open: { y: 0, opacity: 1 },
closed: { y: 20, opacity: 0 }
});

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
  }

  clickedLink = (id) => {
    const activateMenu = this.props.Menu.open ? false : true;
    this.props.actions.openMenu(activateMenu);
    return this.props.actions.linkClicked(id);
  }

  openMenuAction = () => {
    const activateMenu = this.props.Menu.open ? false : true;
    return this.props.actions.openMenu(activateMenu);
  }

  render() {
    const {links, open} = this.props.Menu;
    return (
      <nav id="nav" className="header" ref={this.menuRef}>
      <NavLink className="brand" to="/"><span>GC</span>Development</NavLink>
      <div className="menuWrapper" onClick={() => this.openMenuAction()}>
        <div className={open ? 'menuIcon open' : 'menuIcon'} />
        <div className={open ? 'menuIcon hide' : 'menuIcon'} />
        <div className={open ? 'menuIcon open' : 'menuIcon'} />
      </div>
      <Sidebar pose={open ? 'open' : 'closed'} className={open ? 'linkWrapper open' : 'linkWrapper closed'} onClick={() => this.openMenuAction()}>
        {
          links.map((menuItem) => {
            return (
              <Item key={menuItem.id}>
                <NavLink
                  to={`${menuItem.navigationLink}`}
                  className={`${menuItem.classNames}`}
                  title={menuItem.title}
                  onClick={() =>this.clickedLink(menuItem.id)}
                  key={menuItem.id}>
                  {menuItem.name ? menuItem.name : menuItem.title}
                </NavLink>
              </Item>
            );
          })
        }
      </Sidebar>
    </nav>);
  }

}

Menu.propTypes = {
  ...menuPropTypes
};

function mapStateToProps(state) {
  return {Menu: state.Menu};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...actions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
