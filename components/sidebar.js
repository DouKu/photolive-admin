import { Component } from 'react'
import router from 'next/router'

class Sidebar extends Component {
  constructor () {
    super();
    this.state = {
      current: 0
    }
  }
  componentDidMount () {
    const pathname = router.pathname;
    const menus = this.props.menus || [];
    for (let index in menus) {
      if (menus[index].route === pathname) {
        this.setMenuActive(parseInt(index));
        return;
      }
    }
  }
  render () {
    const { menus = [] } = this.props;
    return (
      <div className="sidebar-box">
        {this.drawMenus(menus)}
      </div>
    )
  }
  drawMenus (menus = []) {
    return menus.map((menu, index) => {
      const className = `menu ${this.state.current === index ? 'active' : ''}`;
      return (
        <div className={className} 
          key={index} 
          onClick={this.handleMenusClick.bind(this, menu)}>
          {menu.name}
        </div>
      )
    });
  }
  handleMenusClick (menu) {
    router.push(menu.route);
  }
  setMenuActive (index) {
    this.setState({
      ...this.state,
      current: index
    });
  }
}

export default Sidebar;