import * as types from './actionTypes.js'

export const addTask = (val) => {
    
    return {
        type: types.ADD_TASK,
        payload: val,
    };
};

export const removeTask = (id) => {
    return {
        type: types.REMOVE_TASK,
        payload: id,
    };
};

export const checkTask = (id) => {
    return {
        type: types.CHECK_TASK,
        payload: id,
    };
};

// module.exports = {
// addTask,
// removeTask,
// checkTask,
// };