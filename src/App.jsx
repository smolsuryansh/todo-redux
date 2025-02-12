import { useState } from 'react';
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {

  const [viewMode, setViewMode] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  } 

  const toggleViewMode = () => {
    setViewMode(viewMode === 'list' ? 'card' : 'list');
  }

  const toggleSideBar = () => {
    setShowSideBar(prevState => !prevState)
  }

  return (
    <>
      <Navbar toggleViewMode={toggleViewMode} viewMode={viewMode} onSearch={handleSearch} toggleSideBar={toggleSideBar} showSideBar={showSideBar}/>
      {/* <AddTodos /> */}
      <Todos viewMode={viewMode} searchTerm={searchTerm} showSideBar={showSideBar}/>
    </>
  )
}

export default App
