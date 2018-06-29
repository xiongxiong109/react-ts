import * as React from 'react'

interface Iprops {
  nm: string;
  age?: number;
}

function Hello({nm, age}: Iprops) {
  return (
    <div>
      <p>hello, {nm}</p>
      {
        age
        ? <p>aged: {age}</p>
        : null
      }
    </div>
  )  
}

export default Hello