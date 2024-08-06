import Chats from "./components/chats/chats"
import Detail from "./components/detail/detail"
import Lists from "./components/lists/lists"

const App = () => {
  return (
    <div className='container'>
      <Lists/> 
      <Chats/>  
      <Detail/> 
    </div>
  )
}

export default App