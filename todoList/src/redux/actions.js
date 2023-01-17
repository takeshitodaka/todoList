export const todoItemCreate = (item) => {
    return {
        type: "CREATE_TODOITEM",
        payload: { item }
    };
}
export const todoItemUpdate = (item) => {
    return {
        type: "UPDATE_TODOITEM",
        payload: { item }
    };
}
export const todoItemDelete = (id) => {
    return {
        type: "DELETE_TODOITEM",
        payload: {id}
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
export const editTargetItemChange = (item) => {
    return {
        type: "CHANGE_EDIT_TARGET",
        payload: {item}
    };
}
export const editTargetTitleChange = (title) => {
    return {
        type: "CHANGE_EDIT_TARGET_TITLE",
        payload: {title}
    };
}
export const editTargetStateChange = (state) => {
    return {
        type: "CHANGE_EDIT_TARGET_STATE",
        payload: {state}
    };
}
export const editTargetUrlChange = (url) => {
    return {
        type: "CHANGE_EDIT_TARGET_URL",
        payload: {url}
    };
}
export const editTargetCreatedAtChange = (createdAt) => {
    return {
        type: "CHANGE_EDIT_TARGET_CREATED_AT",
        payload: {createdAt}
    };
}
export const editTargetUpdatedAtChange = (updatedAt) => {
    return {
        type: "CHANGE_EDIT_TARGET_UPDATED_AT",
        payload: {updatedAt}
    };
}

