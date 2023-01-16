export const todoItemCreate = (item) => {
    return {
        type: "CREATE_TODOITEM",
        payload: { item }
    };
}
export const todoItemUPDATE = (item) => {
    return {
        type: "UPDATE_TODOITEM",
        payload: { item }
    };
}
export const todoItemDelete = (id) => {
    return {
        type: "CREATE_TODOITEM",
        payload: { item }
    };
}
export const showEditModalChange = () => {
    return {
        type: "CHANGE_SHOW_EDIT_MODAL",
        payload: {}
    };
}
export const showCreateModalChange = () => {
    return {
        type: "CHANGE_SHOW_CREATE_MODAL",
        payload: {}
    };
}
