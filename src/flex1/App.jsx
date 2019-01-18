import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }
  }
  componentDidMount() {
    this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val);//0
     this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val);//0
    const a = setInterval(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);//2
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);//3
      
    clearInterval(a)
    }, 1000);

    // 1 1.2 5 9 6 7 8 2 4.1 3 3.1 4 8.1 4.2 false
    // 1 1.2 5 6 9 7 8 2 3 4.1 3.1 4 8.1 4.2 true
    // promise 没有异步请求直接时直接执行 macro中
    // console.log(1);
    // console.log(1.2);
    // setTimeout(()=>{
    //   console.log(2);
    //   new Promise((resolve) => {
    //     console.log(3);
    //     resolve()
    //   }).then(() => {
    //     console.log(3.1);
    //   }).then(() => {
    //     console.log(4);
    //   })
    //   console.log(4.1);
    //   setTimeout(()=>{
    //     console.log(4.2);
    //   })
    // }, 0)
    // console.log(5);
    // new Promise((resolve) => {
    //   console.log(6);
    //   resolve()
    // }).then(() => {
    //   console.log(7);
    // })
    // new Promise((resolve)=>{
    //   resolve()
    // }).then(() => {
    //   console.log(8);
    //   setTimeout(()=>{
    //     console.log(8.1);
    //   }, 0)
    // })
    // console.log(9);
  }
  componentDidUpdate() {
  }
  render(){
    // console.log(this.state.val);//0 , 1, 2, 3
    return (
      <div className="container">
        <div className="a"></div>
        <div className="content">
          <div className="b"></div>
          <div className="c"></div>
        </div>
      </div>
    )
  }
}
