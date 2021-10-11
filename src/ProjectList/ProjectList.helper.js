const projectData = [
  {name:'Project 1', id:"2313", time:"00:00:00", button:'Start'},
  {name:'Project 2', id:"2323", time:"00:00:00",  button:'Start'},
];
localStorage.setItem('projects',JSON.stringify([...projectData]));


export const updateLocalStorage = (projects) => localStorage.setItem('projects',JSON.stringify([...projects]));

export const getProjetsData = () => JSON.parse(localStorage.projects);