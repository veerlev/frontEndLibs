class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  submitMessage(){
    const currentMessages = this.state.messages.concat(this.state.input);
    this.setState({
      messages: currentMessages,
      input: ""
    })
  }
  render() {
    const messages = this.state.messages.map(item => {
      return <li>item</li>});
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button className="submit" onClick={this.submitMessage}>Submit message</button>
        <ul>{messages}</ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
