import React from 'react';

//Création de notre composant tâche qui va afficher nos tâches 
const Task = ({ task, toggleTaskStatus}) => {
  const handleToggleTaskStatus=()=>{
    toggleTaskStatus(task.id); //envoie l'ID de la tache à la fonction du parent
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTaskStatus}
      />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
    </li>
  );
};

export default Task;
