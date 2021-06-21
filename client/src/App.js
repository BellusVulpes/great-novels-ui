import React, {useState, useEffect} from 'react';
import './App.css';
import Novels from './components/great-novels';
import {fetchData, filtered} from './utils/great-novels';
import axios from 'axios';

function App() {
  const [novelsData, setNovelsData] = useState([])
  const [filteredNovels, setFilteredNovels] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:8080/api')
      setNovelsData(data)
      setFilteredNovels(data)
    }
    pullData()
  }, [])
  useEffect(() => {
    console.log(novelsData, searchTerm)
    const novels = filtered(novelsData, searchTerm)
    setFilteredNovels(novels)
  }, [searchTerm, novelsData])
  return (
    <div className="App">
      <Novels
        novelsDataAsProps={filteredNovels}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;
