import React, {Component} from 'react';
import MyNavLink from "../MyNavLink";
import axios from "axios";

class Sider extends Component {
  state = {
    menuList: []
  }
  componentDidMount() {
    axios.get("/api/menu/list").then(res => {
      const data = res.data.data;
      console.log("获取菜单列表", res.data);
      this.setState({'menuList': data});
    });
  }

  render() {
    const {menuList} = this.state;
    return (
      <div className="menu">
        <div className="menu-top">
          <div className="menu-item">官网</div>
        </div>
        <ul className="menu-list">
          {
            // 编写路由
            menuList.map((menu) => {
              return (<MyNavLink key={menu.id} to={menu.path} >{menu.title}</MyNavLink>);
            })
          }
        </ul>
      </div>
    );
  }
}

export default Sider;