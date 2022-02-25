import React from 'react';
//import {Component} from 'react';
//class cc extends Component{} 部分導入

class CCLifecycle extends React.Component {
  constructor() {
    super();
    this.state = { total: 0 };
    console.log('consturctor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    //元件無法自己移除，父母才能移除
  }

  render() {
    console.log('render');
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
export default CCLifecycle;
