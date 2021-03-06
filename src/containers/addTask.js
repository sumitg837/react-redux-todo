import React from 'react'
import {connect} from 'react-redux'

import { todoActions } from '../actions'

const AddTask = ({ dispatch, state})=>{
    let inputText, inputExecutor;

    const submitTask = (e) => {
        e.preventDefault();

        if (!inputText.value.trim())
            return;
        let data = {
            text: inputText.value,
            executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
        }
        dispatch(todoActions({ type: 'ADD_TASK', data: data}))

        inputText.value = '';
        inputExecutor.value = '';
    };
    return (
        <div className="form-container">
            <form onSubmit={submitTask}>
                <input className="task-form-text" placeholder="New task..." ref={node => inputText = node} />
                <input className="task-form-executor" placeholder="Who..." ref={node => inputExecutor = node} />
                <input className="task-form-submit" type="submit" value="Add" />
            </form>
        </div>
    )
}


export default connect()(AddTask)