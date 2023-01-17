// styleとか
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

//ボタンアイコン
import penIcon from "./assets/pen.svg"
import trashIcon from "./assets/trash.svg"

//コンポーネント
import EditItemModal from "./components/EditItemModal"
import CreateItemModal from "./components/CreateItemModal"

// redux関連アクションとか
import { connect } from 'react-redux'
import {
  showEditModalChange, 
  showCreateModalChange,
  editTargetItemChange,
  todoItemDelete,
  todoItemCreate,
 } from "./redux/actions"

function App({
  todoItems,
  showEditModal,
  showCreateModal,
  showEditModalChange,
  showCreateModalChange,
  editTargetItemChange,
  todoItemDelete,
  todoItemCreate,
}) {
  // 擬似的にIDをautoIncrementする
  const getNewId=()=>{
    let newId=0
    todoItems.map(item=>{
      if(item.id>newId){
        newId=item.id
      }
    })
    return newId+1
  }

  const createItemFunc=()=>{
    // 擬似的に空のアイテムを追加します
    const newItemId=getNewId()
    const newItem = {id:newItemId,title:"",state:"",url:"",createdAt:"",updatedAt:""} 
    console.log(newItem)
    todoItemCreate(newItem)
    editTargetItemChange(newItem)
    showEditModalChange()

  }
  const editItemFunc=(id)=>{
    editTargetItemChange(id)
    showEditModalChange()
    
  }
  const deleteItemFunc=(id)=>{
    todoItemDelete(id)
  }


  return (
    <div className="App">
      <table className={"table table-striped"}>
        <thead><tr>
          <th>ID</th> 
          <th>Title</th> 
          <th>State</th> 
          <th>URL</th> 
          <th>Created At</th> 
          <th>Updated At</th> 
          <th><button onClick={createItemFunc} >+</button></th> 
          <th></th> 
        </tr></thead>
        <tbody>
          
            {todoItems && todoItems.map(item => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.title}</td>
              <td> {item.state}</td>
              <td> {item.url}</td>
              <td> {item.createdAt}</td>
              <td> {item.updatedAt}</td>
              <td><img src={penIcon} width="20" onClick={()=>editItemFunc(item)} alt="" /></td>
              <td><img src={trashIcon} width="20" onClick={()=>deleteItemFunc(item.id)} alt="" /></td>
            </tr>
            ))}
        </tbody>
        
      </table>
      

      {showEditModal? 
      <EditItemModal 
       
      />
        :<></>
      }
      {showCreateModal? 
      <CreateItemModal />
        :<></>
      }
      
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    todoItems: state.todoItems,
    showEditModal: state.showEditModal,
    showCreateModal: state.showCreateModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showEditModalChange: () => dispatch(showEditModalChange()),
    showCreateModalChange: () => dispatch(showCreateModalChange()),
    editTargetItemChange:(id)=>dispatch(editTargetItemChange(id)),
    todoItemDelete:(id)=>dispatch(todoItemDelete(id)),
    todoItemCreate:(item)=>dispatch(todoItemCreate(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
