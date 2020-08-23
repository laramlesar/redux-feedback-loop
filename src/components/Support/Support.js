import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component{
  handleSupport = (event) => {
    this.props.dispatch({type: 'SET_FEEDBACK', payload: event.target.name})
  }

  handleClick = () => {
    this.props.history.push('/comments');
  }
    render(){
        return(
            <div>
            <h2>How well are you being supported?</h2>
            <label for="support">Support (between 1 and 5):</label>
            <input onChange={this.handleSupport} type="number" name="Support" />
            <button onClick={this.handleClick}>NEXT!</button>
            
            
            </div>
        )
        
            }
            
}

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}



export default connect(mapStateToProps)(Support);