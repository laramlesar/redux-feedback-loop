import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component{
  handleUnderstanding = (event) => {
    this.props.dispatch({type: 'SET_FEEDBACK', payload: event.target.name})
  }

  handleClick = () => {
    this.props.history.push('/support');
  }
    render(){
        return(
            <div>
            <h2>How are you understanding the content?</h2>
            <label for="understanding">Understanding (between 1 and 5):</label>
            <input onChange={this.handleUnderstanding} type="number" name="Understanding" />
            <button onClick={this.handleClick}>NEXT!</button>
            
            
            </div>
        )
    
        
}



const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }

export default connect(mapStateToProps)(Understanding);