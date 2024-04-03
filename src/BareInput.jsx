import React from 'react'

// class BareInput extends React.Component {
//   render() {
//     return <input {...this.props} />
//   }
// }

function BareInput({ type, ...rest }) {
  return <input {...rest} />
}

export default BareInput
