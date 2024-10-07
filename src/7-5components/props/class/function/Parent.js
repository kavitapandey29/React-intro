import React from 'react'
import Child from './Child';

export default function Parent() {
    let a=10;
  return (
    <div>
      <p>Parent</p>
      <Child b="kavita" firstname="chadni" lastname="bhatt" a={a}/>
    </div>
    
  )
 
}


