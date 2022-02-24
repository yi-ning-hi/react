import React from 'react';
//import {Component} from 'react';
//class cc extends Component{} 部分導入

class CC extends React.Component {
  constructor() {
    super();
    this.state = { total: 0 };
  }
  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
            //類別型元件，{ total: this.state.total + 1 } 傳入值是物件
          }}
        >
          {this.state.total}
        </h1>
      </>
    );
  }
}
export default CC;
