import React from 'react';

const TaskInput = (props) => {

    let newTask;
    console.log(props);
    const {addTask} = props;

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          console.log('enter press here! ')
          addTask(newTask.value);
          newTask.value = '';
        }
      }

    return (
        <div>
            <input type="text" id="taskInput" placeholder="Task..." onKeyPress={handleKeyPress} ref={input => {
                newTask = input;
            }}/>
            <button onClick={() => {
                addTask(newTask.value);
                newTask.value = '';
            }}>
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;