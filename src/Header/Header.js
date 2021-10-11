import React, {useContext, useRef} from 'react'
import { Input } from 'antd';
import { Button } from 'antd';

import {debounce} from '../utility/Debounce';

import './Header.css';

function Header({setQuery}) {

  const searchProject = (e) =>{
    setQuery(e.target.value);
  }

  const deBouncedProjectSearch = debounce(searchProject, 500);

  return (
    <div className="Header">
        <Input placeholder="Search Project Name" onChange={deBouncedProjectSearch}/>
        <Button type="primary">Add Project</Button>
    </div>
  )
}

export default Header
