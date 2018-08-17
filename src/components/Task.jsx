import React from 'react';

const Task = (props) => {
    const {removeTask, checkTask, text, id, checked} = props;
    return (
        <div>
            <li className={`${checked&& "checked"}`} onClick= {() => {checkTask(id)}}>{text}</li>
            <button className='rmvBtn' onClick= {() => {removeTask(id)}}>X</button>
        </div>
    );
};

export default Task;