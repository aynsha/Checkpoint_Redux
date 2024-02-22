import { ADD_TASK, TASK_EDIT, TOGGLE_TASK_STATUS, CANCEL_EDIT } from "../Constants/actions-types";

//Initialisation de notre état
const initialState= {
    tasks: [],
    editTask: null,
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

                //Pour modifier une tâche 
                case TASK_EDIT:
                    return {
                      ...state,
                      tasks: state.tasks.map(task => 
                        task.id === action.id ? { ...task, description : action.description } : task
                      ),
                      editTask: null,
                  }; 
                case CANCEL_EDIT:
                    return {
                      ...state,
                      editTask: null,
                  };   
                default:
                    return state;
    }
  };
  
  export default taskReducer;