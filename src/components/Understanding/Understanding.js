import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component{
    render(){
        return{

        }

    }
    
        
}



const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }

export default connect(mapStateToProps)(Understanding);