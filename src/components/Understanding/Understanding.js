import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component{
    render()
    console.log('understanding things');
        return{

    }
}



const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }

export default connect(mapStateToProps)(Understanding);