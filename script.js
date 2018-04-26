var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: this.props.startCounter
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  discement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('span', {}, 'Counter ' + this.state.counter),
      React.createElement('button', {
        onClick: this.increment
      }, '+ button'),
      React.createElement('button', {
        onClick: this.discement
      }, '- button')
    );
  }
});

var element = React.createElement('div', null,
  React.createElement(Counter, {
    startCounter: 6
  }),
  React.createElement(Counter, {
    startCounter: -6
  })
);
ReactDOM.render(element, document.getElementById('app'));