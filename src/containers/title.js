import React from 'react'
import {connect} from 'react-redux'

const Title = ({ state })=>{
    return(
        <div className="board-info">
            <h1>Project Board</h1>
            <p>Total no of task available : {state.length} </p>
        </div>
        )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Title);