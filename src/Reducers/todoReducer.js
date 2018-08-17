import * as types from '../Actions/actionTypes'

window.id = 0;

const initialState = {
    data: []
};

const todoReducer = (state=initialState,action) => {
    let data;
    switch(action.type){
        case types.ADD_TASK:
            let newTask =  {text: action.payload, id: window.id++, checked: false}
            data = state.data.concat(newTask);
        
            return {
                data,
            }

        case types.REMOVE_TASK:
            data = state.data.filter((task)=>{
                if (task.id !== action.payload){
                return task;
                }
                // return;
            })

            return {
                data,
            }
        
        case types.CHECK_TASK:
            data = state.data.map((task)=>{
                if (task.id === action.payload){
                    task.checked = !task.checked;
                }
                return task;
            })

            return {
                data,
            }

        default:
        return state;
    }
}

export default todoReducer;