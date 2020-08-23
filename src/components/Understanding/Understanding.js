import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Understanding extends Component{
  state = {
    understanding: ''
  }
  
  handleUnderstanding = (event) => {
    console.log('understanding is good');
    this.setState({
        understanding: event.target.value,
    })
}

  handleClick = () => {
    if (this.state.understanding === '') {
      alert('Enter understanding before proceeding.  Understood?')
  } else {
      this.props.dispatch({
          type: 'SET_UNDERSTANDING',
          payload: this.state.understanding,
      })
      this.props.history.push('/support')
      //where it goes next
  }
    
  }
    render(){
        return(
          <div>
          <h2>How are you understanding the content?</h2>
          <p>Understanding?</p>
          <select value={this.state.understanding} onChange={this.handleChange}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>

          <div>
              <button onClick={this.handleClick}>Next</button>
          </div>

      </div>
            
        )
    
        
}
}



const mapStateToProps = (reduxState) => {
  return reduxState;
}

export default withRouter(connect(mapStateToProps)(Understanding));