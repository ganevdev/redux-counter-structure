import React, { Component } from 'react';
import { connect } from 'react-redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

class Main extends Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  increment,
  decrement,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
