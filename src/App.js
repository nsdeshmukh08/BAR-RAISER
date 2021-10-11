import React, {useState, useEffect} from 'react';
import Header from './Header/Header';
import ProjectList from './ProjectList/ProjectList';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className='App'>
      <Header setQuery={setQuery}/>
      <ProjectList query={query}/>
    </div>
  );
}

export default App;
