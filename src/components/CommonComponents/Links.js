import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
class Links extends PureComponent {
  render() {
    const {title, navigationLink, onClick, name, id, classNames,} = this.props;
    return (
      <Link to={`${navigationLink}`} className={`${classNames}`} title={title} id={id} onClick={onClick}>
        {name ? name : title}
      </Link>
    );
  }
}
export default Links;
