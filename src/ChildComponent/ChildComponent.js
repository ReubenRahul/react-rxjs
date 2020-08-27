import React from 'react';
class ChildComponent extends React.Component {
  //not react feature
  // but still load very first in lifecyle
  constructor(props) {
    console.log('%c <---1 Child constructor -->', "color: red");

    super(props);
  }

  componentDidMount() {
    console.log('%c <-- 4 Child Component Did Mount Trigger-->', "color: green");
  }

  render() {
    console.log('%c <-- 2 Child Render Trigger -->', "color: blue");

    return (
      <div>
          {console.log('%c <-- 3 Child JSX Trigger -->', "color: orange") }
        <h2>
         Child Component
        </h2>
      </div>
    )
  }

}

export default ChildComponent;
