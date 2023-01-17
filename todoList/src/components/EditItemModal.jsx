import "../styles/modal.css"

import { connect } from 'react-redux'
import { 
    showEditModalChange, 
    editTargetTitleChange,
    editTargetStateChange,
    editTargetUrlChange,
    editTargetCreatedAtChange,
    editTargetUpdatedAtChange, 
    todoItemUpdate,    
} from "../redux/actions"


const EditItemModal= ({
    // states and actions
    editTargetItem,
    showEditModalChange,
    editTargetTitleChange,
    editTargetStateChange,
    editTargetUrlChange,
    editTargetCreatedAtChange,
    editTargetUpdatedAtChange,
    todoItemUpdate,
})=>{
    return (
        <div id="overlay">
          <div id="content">

            <p>{editTargetItem.id}</p>
            <form className="form-horizontal">
            <div id="id" className="form-group row">
                <label className="control-form">ID:</label>
                <label className="form-control">{editTargetItem.id}</label>
            </div>
            <div id="title" className="form-group row">
                <label className="control-form">TITLE:</label>
                <input type="text" className="form-control"
                value={editTargetItem.title} onChange={(e)=>editTargetTitleChange(e.target.value)}/>
            </div>
            <div id="state" className="form-group row">
                <label>STATE:</label>
                <input type="text" value={editTargetItem.state} onChange={(e)=>editTargetStateChange(e.target.value)}/>
            </div>
            <div id="url" className="form-group row">
                <label>URL:</label>
                <input type="text" value={editTargetItem.url} onChange={(e)=>editTargetUrlChange(e.target.value)}/>
            </div>
            <div id="createdAt" className="form-group row">
                <label>CREATED AT:</label>
                <input type="text" value={editTargetItem.createdAt} onChange={(e)=>editTargetCreatedAtChange(e.target.value)}/>
            </div>
            <div id="updatedAt" className="form-group row">
                <label>UPDATED AT:</label>
                <input type="text" value={editTargetItem.updatedAt} onChange={(e)=>editTargetUpdatedAtChange(e.target.value)}/>
            </div>
            </form>
            
            <button onClick={()=>{
                todoItemUpdate(editTargetItem)
                alert("saved item!")
                showEditModalChange()
            }}>save</button>
            <button onClick={()=>showEditModalChange()}>close</button>
          </div>
          
        </div>
      )
}
const mapStateToProps = (state) => {
    return {
      todoItems: state.todoItems,
      editTargetItem: state.editTargetItem,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        showEditModalChange:()=>dispatch(showEditModalChange()),
        editTargetTitleChange: (title) => dispatch(editTargetTitleChange(title)),
        editTargetStateChange: (state) => dispatch(editTargetStateChange(state)),
        editTargetUrlChange: (url) => dispatch(editTargetUrlChange(url)),
        editTargetCreatedAtChange: (createdAt) => dispatch(editTargetCreatedAtChange(createdAt)),
        editTargetUpdatedAtChange: (updatedAt) => dispatch(editTargetUpdatedAtChange(updatedAt)),
        todoItemUpdate:(item) => dispatch(todoItemUpdate(item)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditItemModal);