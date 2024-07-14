import React, { Component } from 'react'
import PropTypes from 'prop-types'
import loading from './loading.gif'

// export class Spinner extends Component {
//   static propTypes = {

//   }
const Spinner =()=>{
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" style={{"height" : "50px", "width" : "50px"}} />
      </div>
    )
  }


export default Spinner
