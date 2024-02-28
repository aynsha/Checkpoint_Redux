import { ADD_TASK, TOGGLE_TASK_STATUS } from "../Constants/actions-types";
 
//Créations de nos actions pour envoyer  des données au reducer.
let nextTaskId=0;

//action redux ou Fonction qui prend en paramétre description pour l'ajout de la tâche 
export const addTask= (description) =>({
    type:ADD_TASK ,
    id: nextTaskId++, //pour ajouter  un identifiant unique à chaque tache ajouté
    description,
});

//Fonction qui prend en paramétre identifiant de la tâche dont l'état doit basculé entre 'fait' ou 'non fait'
export const toggleTaskStatus= (id)=>({
    type:TOGGLE_TASK_STATUS,
    id,
});
 