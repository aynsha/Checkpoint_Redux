import { createStore } from "redux";
import taskReducer  from '../JS/Reducers/taskReducer';

//Création de notre magasin qui va contenir l'état de notre app
const store= createStore(taskReducer);

export default store;