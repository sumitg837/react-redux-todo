import React from 'react';

const Card = ({
    id,
    text,
    executor,
    onChangeClick,
    onRemoveClick
})=>{
    return (
        <div className="project-card" onClick={() => onChangeClick({ type: "CHANGE_TASK_STATUS", data:{id: id} })}>
            <p className="card-text">{text}</p>
            <span className="card-executor">{executor}</span>
            <span className="card-remove" onClick={() => onRemoveClick({ type: "REMOVE_TASK", data: { id: id } })}>-</span>
        </div>
    )
}

export default Card;