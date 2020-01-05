import React, { Component } from 'react';

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

export default Main;
