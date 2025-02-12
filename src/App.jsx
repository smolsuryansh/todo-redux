import { useState } from 'react';
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import ImportantTodos from './components/ImportantTodos';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';

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
    <Router>
      <Navbar toggleViewMode={toggleViewMode} viewMode={viewMode} onSearch={handleSearch} toggleSideBar={toggleSideBar} showSideBar={showSideBar}/>

      <Routes>
        <Route path='/' element={<Todos viewMode={viewMode} searchTerm={searchTerm} showSideBar={showSideBar} />}/>
        <Route path='/important' element={<ImportantTodos viewMode={viewMode} searchTerm={searchTerm} showSideBar={showSideBar} />} />
      </Routes>
    </Router>
  )
}

export default App
