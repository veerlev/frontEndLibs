class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div> 
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        <ChildComponent />

        { /* change code above this line */ }
      </div>
    );
  }
};
