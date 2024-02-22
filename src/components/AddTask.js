import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../JS/Actions/actions";

const AddTask=({addTask})=>{
    const [description, setDescription]= useState('');

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(description.trim() !== ''){
            addTask(description);
            setDescription('');
        }
    };

    return(
        <form onClick={handleSubmit}>
            <input 
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ajouter une nouvelle tâche"
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

const mapDispatchToProps=(dispatch)=>({
    addTask: (description)=> dispatch(addTask(description)),
});

export default connect(null, mapDispatchToProps)(AddTask);



