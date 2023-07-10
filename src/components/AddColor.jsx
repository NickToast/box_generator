import React, { useState } from 'react'

const AddColor = (props) => {

    const [formData, setFormData] = useState({
        color: "",
        size: ""
    })

    //need to look through the form data useState and connect each name to its appropriate field
    //need the name of what we want to change in the useState, and the value in the text box
    //to add anything more, we just add states in the formData
    
    const submitForm = (e) => {
        e.preventDefault();
        props.newColor(formData);
        setFormData({
            color: "",
            size: ""
        })
    }
    
    const handleChange = (e) => {
        //destructure name and value from e.target
        const {name, value} = e.target
        //spread currentData, then select the key we want to change which is identified by name
        setFormData((currentData) => ({...currentData, [name]: value}))
    }

    return (
        <form onSubmit={submitForm}>
            <label>Color: </label>
            <input type="text" name="color" onChange={handleChange} value={formData.color}/>
            <br/>
            <label>Size: </label>
            <input type="text" name="size" onChange={handleChange} value={formData.size} />
            <br/>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default AddColor