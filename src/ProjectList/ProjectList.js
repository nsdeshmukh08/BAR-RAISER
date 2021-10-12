import React, { useEffect, useRef, useState} from 'react';
import { Button } from 'antd';
import {updateLocalStorage, getProjetsData} from './ProjectList.helper';

import './ProjectList.css';

const projectsInfo = getProjetsData();

function ProjectList({query=''}) {
  const [projects, setProjects] = useState(projectsInfo);
  const timerRef = useRef({});
  const queryRef = useRef(query);

  useEffect(() =>{
    setProjects(projectsInfo);
  },[]);

   // Filter the projects as per the query entered.
  useEffect(()=>{
    queryRef.current = query;
    const filterProjects = projectsInfo.filter(({name}) => name.toLowerCase().includes(query));
    setProjects(filterProjects);
  }, [query]);

   // Keep counter on if page is reloaded.
  useEffect(()=>{
    const timerToRestart = projectsInfo.filter(({button}) => button === 'Stop');
    timerToRestart.forEach(({id}) =>{
      startTimerOnLoad(id);
    })
  },[]);


  const startCounter = (_id, affectedProj) => {
    let [hour, minute, second ] = affectedProj.time.split(':');

    const interval = setInterval(() => {
      second ++;
      timerRef.current[_id] = {hour, minute,  second};

      if(second/60 === 1){
        second = 0;
        minute ++;
        timerRef.current[_id] = {hour, minute, second};
        if(minute/60 === 1){
          minute = 0;
          hour ++;
          console.log(hour);
          timerRef.current[_id] = {hour, minute, second};
        }
      }
      affectedProj.time = hour + ':' + minute + ':' +second;
      const filterProjects = projectsInfo.filter(({name}) => name.toLowerCase().includes(queryRef.current));
      updateLocalStorage(projects);
      setProjects([...filterProjects]);
    }, 1000);

    return interval;
  }
  
  const startTimerOnLoad = (_id) =>{
    const affectedProj =  projects.find(({id}) => id === _id);
    const interval = startCounter(_id, affectedProj, false);
    affectedProj.interval = interval;
    setProjects([...projects]);
  }

  const startProjectTime = (_id) => {
    const affectedProj =  projects.find(({id}) => id === _id);
    affectedProj.button = affectedProj.button === "Start" ? "Stop" : 'Start';

    if(affectedProj.interval){
      clearInterval(affectedProj.interval);
      affectedProj.interval = '';
    }else{
      const interval = startCounter(_id, affectedProj, true);
      affectedProj.interval = interval;
    }
    updateLocalStorage(projects);
    setProjects([...projects]);
  };

  if(!Boolean(projects.length)){
    return (
      <div className="ProjectList ProjectList_empty">
        <h3>It seems like no projects are available, please add some.</h3>
      </div>
    )
  }

  return (
      <ul className="ProjectList">
        {
          projects.map(({name, id, time, button})=>{
            return (
              <li key={id} className="ProjectList__project">
                <span>{name}</span>
                <div>
                  <span className="ProjectList__time">{time}</span>
                  <Button onClick={startProjectTime.bind(null, id)} type="primary" className="ProjectList__timeActionButton">{button}</Button>
                </div>
              </li>);
          })
        }
      </ul>
  );
}

export default ProjectList;
