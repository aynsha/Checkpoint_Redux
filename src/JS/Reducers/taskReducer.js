import { ADD_TASK, TOGGLE_TASK_STATUS } from "../Constants/actions-types";

//Initialisation de notre état
const initialState= {
    tasks: [],
};

//Création de notre  reducer qui va gérer l'évolution de notre state en fonction des actions déclenchées
const taskReducer = (state = initialState, action) => {
    switch(action.type){
        //Pour ajouter une nouvelle tâche à la liste
        case ADD_TASK:
            return{
                ...state, 
                tasks: [
                    ...state.tasks,
                    {
                        id: action.id,
                        description: action.description,
                        isDone: false, // par défaut la tache n'est pas faite
                    },
                ],
            };
            
            // Pour mettre à jour  le statut d'une tache (clique sur checkbox) 'fait' ou 'pas fait'
            case TOGGLE_TASK_STATUS:
                return{
                    ...state,
                    tasks: state.tasks.map((task)=>
                    task.id === action.id? {...task, isDone: !task.isDone}: task),
                };
  
                default:
                    return state;
    }
  };
  
  export default taskReducer;