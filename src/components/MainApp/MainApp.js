// External libraries
import React, { Component } from 'react';

// Components
const Warning = React.lazy(() => import('../Warning'));

class App extends Component {
  state = { count: 0 };

  // Methods
  handleIncrease = () => this.setState(state => ({ count: state.count + 1 }));
  handleDecrease = () => this.setState(state => ({ count: state.count - 1 }));

  render () {
    const { count } = this.state;

    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Count: {count}</h2>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        { (count > 10)
            ? (
                <React.Suspense fallback={null}>
                  <Warning />
                </React.Suspense>
              )
            : null
        }
      </div>
    );
  };
};

export default App;
