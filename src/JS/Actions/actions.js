import { ADD_TASK, TASK_EDIT, TOGGLE_TASK_STATUS, CANCEL_EDIT } from "../Constants/actions-types";
 
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
 
//Action qui permet d'éditer une tache
export const taskEdit =(description, id)=>({
    type: TASK_EDIT,
    id,
    description,
});

//Action  qui annule l'édition d'une tache 
export const cancelEdit = () => ({
    type: CANCEL_EDIT,
  });