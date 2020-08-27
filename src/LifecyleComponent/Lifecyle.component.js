import React from 'react';
import ChildComponent from '../ChildComponent/ChildComponent';


class LifecyleComponent extends React.Component {
  //not react feature
  // but still load very first in lifecyle
  constructor(props) {
    console.log('%c <---1 constructor -->', "color: red");
    super(props);
    this.state = {
      count: 0,
    }
  }

// this also trigger before the componentDidUpdate
  static getDerivedStateFromProps(prevProps, prevState) {
    console.log('%c <-- 2 getDerivedStateFromProps-->', "color: grey");
    return null;
  }


  componentDidMount() {
    console.log('%c <-- 5 Component Did Mount Trigger-->', "color: green");
  }

// this trigger just before the componentDidUpdate
getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log(prevProps, {prevState});
    console.log('%c <-- 5 getSnapshotBeforeUpdate Trigger-->', "color: red");
  return null;
}
// before componentDidUpdate jsx code Trigger
  componentDidUpdate() {
    console.log('%c <-- 6 componentDidUpdate Trigger-->', "color: black");
      // can call api request from here.
  }

  shouldComponentUpdate() {
    console.log('should component Update');
    return true;
  }

  render() {
    console.log('%c <-- 3 Render Trigger -->', "color: blue");
    return (
      <div>
          {console.log('%c <-- 4 JSX Trigger -->', "color: orange") }
        <h2>
          Lifecyle
          {this.state.count}

          <button onClick={() => this.setState( { count: this.state.count + 1}) } > Increase </button>
        </h2>
      </div>
    )
  }

}

export default LifecyleComponent;
