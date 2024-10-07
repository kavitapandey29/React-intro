// import React from 'react'

// export default function Child(props) {
//     console.log(props);
//     console.log(props.firstname);
//     console.log(props.lastname);
    
    
    
//   return (
//     <div>
//         <p>Child</p>
//         <p>firstname:{props.firstname} </p>
//     </div>
//   )
// }

import React from 'react'
import Parent from './Parent'

export default function Child() {
  return (
    <div>
      <p>Child</p>
      <Parent firstname="kavita" lastname="pandey"/>
    </div>
  )
}
