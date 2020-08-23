import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component{
    render()
    console.log('all the feels');
        return{

    }
}



const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }

export default connect(mapStateToProps)(Feelings);