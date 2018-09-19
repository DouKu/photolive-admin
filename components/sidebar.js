import { Component } from 'react'

class Sidebar extends Component {
  render () {
    const menus = [
      '基础配置', '展示配置', '宣传配置', '其他配置'
    ] 
    return (
      <div className="sidebar-box">
        {this.drawMenus(menus)}
      </div>
    )
  }
  drawMenus (menus = []) {
    return menus.map(menu => {
      return (
        <div className="menu active">{menu}</div>
      )
    });
  }
}

export default Sidebar;