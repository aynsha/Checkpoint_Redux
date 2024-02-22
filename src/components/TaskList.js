import React, { useState } from "react";
import { connect } from "react-redux";
import { taskEdit, cancelEdit } from "../JS/Actions/actions";
import { toggleTaskStatus } from "../JS/Actions/actions";
import Task from "./Task";
//Création  du composant  TaskList qui va afficher  la liste des taches et permettre d'ajouter une nouvelle tache.
const TaskListComponent = ({
  tasks,
  toggleTaskStatus,
  taskEdit,
  cancelEdit,
}) => {//Appel de tasks passer en props pour afficher la liste des tâches et de notre action toggleTaskStatus passer en props pour basculer entre les tâche fait ou non fait
  
  //Création de nos states 
  const [filter, setFilter] = useState("all");
  const [newId, setNewId]=useState('');
  const [newDescription, setNewDescription]=useState('');

  //Fonction  qui va filtrer les taches en fonction de la valeur de filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") {
      return task.isDone;
    } else if (filter === "notDone") {
      return !task.isDone;
    } else {
      return true;
    }
  });

  //Fontion pour modifier nos tâches 
  const handleTaskClick = (id, description) => {
    setNewId(id);
    setNewDescription(description);
  };

  const handleSaveTask=()=>{
    let newTask={ 
      id:newId,
      description:newDescription,
      isDone : false
      }
    
    taskEdit(newTask.id, newTask.description);
    setNewId('')
    setNewDescription('')
    }

  const handleCancelEdit = (id, description) => {
   
  };

  return (
    <div>
      <h2>Liste des taches</h2>
      <div>
        {/* Les Boutons de filtrage */}
        <button onClick={() => setFilter("all")}>Toutes</button>
        <button onClick={() => setFilter("done")}>Faites</button>
        <button onClick={() => setFilter("notDone")}>Non Faites</button>
      </div>
      <ul>

        {/* Condition  */}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            onClick={() => handleTaskClick(task.id, task.description)}
          >
            {newId === task.id ? (
              <div>
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <button onClick={handleSaveTask}>Enregistrer</button>
                <button onClick={handleCancelEdit}>Annuler</button>
              </div>
            ) : (
              //Appel du composant Task pour afficher les tâches
              <Task
                key={task.id}
                task={task}
                toggleTaskStatus={toggleTaskStatus}
              /> 
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

//fonction qui retourne l'état et le transmet à TaskList en tant que props
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

//fonction qui retourne l'état mais pour les actions en les connectant  au props de TaskList
const mapDispatchToProps = (dispatch) => ({
  toggleTaskStatus: (id) => dispatch(toggleTaskStatus(id)),
  taskEdit: (newTask) => dispatch(taskEdit(newTask)),
  cancelEdit: () => dispatch(cancelEdit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
