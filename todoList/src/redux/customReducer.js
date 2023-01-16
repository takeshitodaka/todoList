const initialState = {
      //↓バックエンドが無い為、仮で初期値は静的JSONを作っておく
    todoItems:[
        {id:0, title:"check Email",state:"Open",url:"https://google.com",created_at:"2022/01/16 12:00",updated_at:"2022/01/16 12:00"},
        {id:1, title:"have dinner w my wife",state:"Open",url:"https://google.com",created_at:"2022/01/16 12:00",updated_at:"2022/01/16 12:00"},
        {id:2, title:"drink beer w my friends",state:"Open",url:"https://google.com",created_at:"2022/01/16 12:00",updated_at:"2022/01/16 12:00"}
    ],
    showEditModal:false,
    showCreateModal:false,
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
        const deletedTodoItems = state.todoItems.filter((item) => item.id !== action.payload.id)

        return { ...state, todoItems: deletedTodoItems}
    case "CHANGE_SHOW_EDIT_MODAL":
        return { ...state, showEditModal: !state.showEditModal}
    case "CHANGE_SHOW_CREATE_MODAL":
        return { ...state, showEditModal: !state.showCreateModal}

    default:
      return state
  }
}