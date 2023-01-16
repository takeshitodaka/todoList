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
import { showEditModalChange } from "./redux/actions"

// redux関連アクションとか
import { connect } from 'react-redux'
import { showEditModalChange, showCreateModalChange } from "../redux/actions"

function App() {

  const editItemFunc=(id)=>{
    showEditModalChange()
    
    console.log("edit"+id)
  }
  const deleteItemFunc=(id)=>{
    
    console.log("delete" + id)
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
          <th>+</th> 
          <th></th> 
        </tr></thead>
        <tbody>
          
            {itemsData.items.map((item)=> 
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.title}</td>
              <td> {item.state}</td>
              <td> {item.url}</td>
              <td> {item.created_at}</td>
              <td> {item.updated_at}</td>
              <td><img src={penIcon} width="20" onClick={()=>editItemFunc(item.id)} alt="" /></td>
              <td><img src={trashIcon} width="20" onClick={()=>deleteItemFunc(item.id)} alt="" /></td>
            </tr>
            )}
        </tbody>
        
      </table>
      {showEditModal? 
      <EditItemModal 
       id = {0}
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

export default App
