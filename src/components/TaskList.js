import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTaskStatus } from "../JS/Actions/actions";
import Task from "./Task";

//Création  du composant  TaskList qui va afficher  la liste des taches et permettre d'ajouter une nouvelle tache.
const TaskListComponent = ({ tasks, toggleTaskStatus }) => {//Appel de tasks passer en props pour afficher la liste des tâches et de notre action toggleTaskStatus passer en props pour basculer entre les tâche fait ou non fait
  
  //Création de nos states
  const [filter, setFilter] = useState("all");

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
        {/* Pour  */}
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {/* //Appel du composant Task pour afficher les tâches */}
            <Task
              key={task.id}
              task={task}
              toggleTaskStatus={toggleTaskStatus}
            />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
