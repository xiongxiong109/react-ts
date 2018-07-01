import * as React from 'react'
import './hello.css'

interface Iprops {
  nm: string;
  age?: number;
}

// function Hello({nm, age}: Iprops) {
//   return (
//     <div>
//       <p>hello, {nm}</p>
//       {
//         age
//         ? <p>aged: {age}</p>
//         : null
//       }
//     </div>
//   )  
// }

class Hello extends React.Component<Iprops, object> {
  public render() {
    const { nm, age } = this.props;
    return (
      <div className="hello">
        <p>hello, {nm}</p>
        {
          age
          ? <p>aged: {age}</p>
          : null
        }
      </div>
    )
  }
}

export default Hello