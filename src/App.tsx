import * as React from 'react';
import Hello from './components/Hello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello
          nm={'bear xiong'}
          age={12}
        />
      </div>
    );
  }
}

export default App;
