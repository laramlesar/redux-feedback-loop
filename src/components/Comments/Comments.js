import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'



class Comments extends Component {
    state = {
        comments: ''
    }

handleComments = (event) => {
    console.log('all the comments');
    this.setState({
        comments: event.target.value,
    })
}

handleClick = () => {
    this.props.dispatch({
        type: 'SET_COMMENTS',
        payload: this.state.comments,
    })
    this.props.history.push('/thankyou')
    //second to last stop

}



render() {
    return (
        <div>
            <h2>Any famous last words?</h2>
            <p>Comments?</p>
            <input value={this.state.comments} onChange={this.handleComments}/>

            <div>
                
                <button onClick={this.handleClick}>Next</button>
            </div>

        </div>
    );
}
}


const mapStateToProps = (reduxState) => {
return reduxState;
}

export default connect(mapStateToProps)(Comments);