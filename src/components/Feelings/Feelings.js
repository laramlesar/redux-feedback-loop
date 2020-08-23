import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component{

  handleFeeling = (event) => {
    this.props.dispatch({type: 'SET_FEEDBACK', payload: event.target.name})
  }

  handleClick = () => {
    this.props.history.push('/understanding');
  }
    render(){
        return(
            <div>
            <h2>How are you feeling today?</h2>
            <label for="feeling">Feeling (between 1 and 5):</label>
            <input onChange={this.handleFeeling} type="number" name="Feeling" />
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

export default connect(mapStateToProps)(Feelings);