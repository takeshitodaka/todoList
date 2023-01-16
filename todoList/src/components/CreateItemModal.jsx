import "../styles/modal.css"
const addItem = (newItem)=>{
  // storeにnewItemを渡す、actionのtypeは"addNewItem"
}

const CreateItemModal= (id)=>{
    return (
        <div id="overlay">
          <div id="content">
            <p>これがモーダルウィンドウです。</p>
            <p><button onClick={addItem}>add</button></p>
            <p><button>close</button></p>
          </div>
          
        </div>
      )
}
export default CreateItemModal