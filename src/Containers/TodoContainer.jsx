import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList'
import TaskInput from '../components/TaskInput'
import * as actions from '../Actions/actions.js'

const mapStateToProps = (state) =>{
    return {
       data: state.todos.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
       addTask: (val)=> {dispatch(actions.addTask(val))},
       removeTask: (id)=>{dispatch(actions.removeTask(id))},
       checkTask: (id)=>{dispatch(actions.checkTask(id))}
    };
}

class TodoContainer extends Component {
    render() {
        const {addTask, removeTask, checkTask, data} = this.props;
        return (
            <div>
                <TaskInput addTask={addTask}/>
                <TaskList removeTask={removeTask} checkTask={checkTask} data={data}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps,
)(TodoContainer);