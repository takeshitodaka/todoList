const initialState = {
      //↓バックエンドが無い為、仮で初期値は静的JSONを作っておく
    todoItems:[
        {id:0, title:"check Email",state:"Open",url:"https://google.com",createdAt:"2022/01/16 12:00",updatedAt:"2022/01/16 12:00"},
        {id:1, title:"have dinner w my wife",state:"Open",url:"https://google.com",createdAt:"2022/01/16 12:00",updatedAt:"2022/01/16 12:00"},
        {id:2, title:"drink beer w my friends",state:"Open",url:"https://google.com",createdAt:"2022/01/16 12:00",updatedAt:"2022/01/16 12:00"}
    ],
    showEditModal:false,
    showCreateModal:false,
    editTargetItem:null
}
  
export const customReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODOITEM":
        // backendが無いのでcreateもstateの更新に含める
        const newTodoItems = [...state.todoItems, action.payload.item]
        return {...state, todoItems:newTodoItems}
        
    case "UPDATE_TODOITEM":
        const updatedTodoItems = state.todoItems.map(item => {
            return item.id !== action.payload.item.id 
                ? item
                : action.payload.item
        })
        return { ...state, todoItems: updatedTodoItems}
 
    case "DELETE_TODOITEM":
        const deleteTodoItems = state.todoItems.filter((item) => item.id !== action.payload.id)

        return { ...state, todoItems: deleteTodoItems}

    case "CHANGE_EDIT_TARGET":
        const newTargetItem = action.payload.item
        return{...state,editTargetItem:newTargetItem}

    case "CHANGE_SHOW_EDIT_MODAL":
        return { ...state, showEditModal: !state.showEditModal}
    case "CHANGE_SHOW_CREATE_MODAL":
        return { ...state, showCreateModal: !state.showCreateModal}
    case "CHANGE_EDIT_TARGET_TITLE":
        const updatedTitleEditTaragetItem = {...state.editTargetItem, title:action.payload.title}
        return { ...state, editTargetItem:updatedTitleEditTaragetItem}
    case "CHANGE_EDIT_TARGET_STATE":
        const updatedStateEditTaragetItem = {...state.editTargetItem, state:action.payload.state}
        return { ...state, editTargetItem:updatedStateEditTaragetItem}
    case "CHANGE_EDIT_TARGET_URL":
        const updatedUrlEditTaragetItem = {...state.editTargetItem, url:action.payload.url}
        return { ...state, editTargetItem:updatedUrlEditTaragetItem}
    case "CHANGE_EDIT_TARGET_CREATED_AT":
        const updatedCreatedAtEditTaragetItem = {...state.editTargetItem, createdAt:action.payload.createdAt}
        return { ...state, editTargetItem:updatedCreatedAtEditTaragetItem}
    case "CHANGE_EDIT_TARGET_UPDATED_AT":
        const updatedUpdatedAtEditTaragetItem = {...state.editTargetItem, updatedAt:action.payload.updatedAt}
        return { ...state, editTargetItem:updatedUpdatedAtEditTaragetItem}

    default:
      return state
  }
}