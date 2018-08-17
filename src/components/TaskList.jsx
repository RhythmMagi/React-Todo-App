import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    const {removeTask, checkTask, data} = props;
    const tasks = [];
    for (let i = 0; i < data.length; i++){
        tasks.push(<Task checkTask={checkTask} removeTask={removeTask} text={data[i].text} key={i} id={data[i].id} checked={data[i].checked}/>)

   }
    return (
        <div>
            <ul>
                {tasks}
            </ul>
        </div>
    );
};

export default TaskList;