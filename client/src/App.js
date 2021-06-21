import React, {useState, useEffect} from 'react';
import './App.css';
import Novels from './components/great-novels'
import {fetchData, filtered} from './utils/great-novels'

function App() {
  const [novelsData, setNovelsData] = useState([])
  const [filteredNovels, setFilteredNovels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    async function pullData() {
      const data = await fetchData()
      setNovelsData(data)
      setFilteredNovels(data)
    }
    pullData()
  }, )
  return (
    <div className="App">
      <Novels/>
    </div>
  );
}

export default App;
