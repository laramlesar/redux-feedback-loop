import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Feeling extends Component {

  state = {
      feeling: ''
  }

  handleFeelings = (event) => {
      console.log('i have feelings');
      this.setState({
          feeling: event.target.value,
      })
  }

  handleClick = () => {
      if (this.state.feeling === '') {
          alert('Enter feelings before proceeding')
      } else {
          this.props.dispatch({
              type: 'Set_FEELING',
              payload: this.state.feeling,
          })
          this.props.history.push('/understanding')
          //where it goes next
      }
  }

  render() {
      return (
          <div>
              <h2>How are you feeling today?</h2>
              <p>Feeling?</p>
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


const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default withRounter(connect(mapReduxStateToProps)(Feeling));