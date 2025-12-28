
import './App.css'
import Board from './Components/Board'
import SideBar from './Components/Sidebar'

function App() {
  

  return (
    <div className="app">
  <div className="sidebar">
    <SideBar />
  </div>
  <div className="board">
    <Board />
  </div>
</div>

  )
}

export default App
