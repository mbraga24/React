function WarningBanner(props) {
  if(!props.warn) {
    console.log("Inside if-WarningBanner: " + !props.warn);
    return null;
  }
  console.log("Outside if-WarningBanner: " + !props.warn)
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    // this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick = (event) => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
       </button>
      </div>
    );

  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
