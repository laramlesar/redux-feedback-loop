import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Support extends Component{
  state = {
    support: ''
  }


  handleSupport = (event) => {
    console.log('so supportive');
        this.setState({
            support: event.target.value,
        })
  }

  handleClick = () => {
    if (this.state.support === '') {
      alert('Must answer before proceedin')
  } else {
      this.props.dispatch({
          type: 'SET_SUPPORT',
          payload: this.state.support,
      })
      this.props.history.push('/comments')
      //where it goes next
      }
  }

  render() {
    return (
        <div>
            <h2>How well are you being supported?</h2>
            <p>Support</p>
            <select value={this.state.feeling} onChange={this.handleFeelings}>
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
    );
  }
}
    

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}



export default connect(mapStateToProps)(Support);