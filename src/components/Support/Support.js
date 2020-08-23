import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component{
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

export default connect(mapStateToProps)(Support);