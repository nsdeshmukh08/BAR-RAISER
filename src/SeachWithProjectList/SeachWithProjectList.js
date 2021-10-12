import React, {useState} from 'react'
import Header from '../Header/Header';
import ProjectList from '../ProjectList/ProjectList';

function SeachWithProjectList() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <Header setQuery={setQuery}/>
      <ProjectList query={query}/>
    </div>
  )
}

export default SeachWithProjectList
