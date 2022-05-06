import React, {Component} from 'react';

class List extends Component {
  render() {
    const {userList, err, isInitPage, isLoading} = this.props;
    return (
      <div className="row">
        {
          isInitPage ? <h3>搜索结果在这里展示...</h3> :
          isLoading ? <h3>加载中...</h3> :
          err === '' ?
            userList.map((user) => {
              return (
                <div className="card" key={user.id}>
                  <a href={user.html_url} target="_blank">
                    <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              );
            }) : <h3>{err}</h3>
        }
      </div>
    );
  }
}

export default List;