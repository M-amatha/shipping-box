import React, { useState } from "react";



function ShippingForm(props)
{ 
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      weight: weight,
      color: color,
      place: place,
    };
    props.addToListCallback(data)
  };
  return (

    <div>
        <form onSubmit={handleSubmit}>
            <h1>Shipping Form</h1>
            <label></label><br></br><input type="text" value={title} placeholder="Title" onChange={(e )=> setTitle(e.target.value)} /><br></br><label></label>
            <label></label><br></br><input type="number" value={weight} placeholder="Weight" onChange={(e )=> setWeight(e.target.value)} /><br></br><label></label>
            <br></br><label>Color</label><br></br>
            <label></label><br></br><input type="color" value={color} placeholder="Color" onChange={(e )=> setColor(e.target.value)} /><br></br>
            <label></label><br></br><input type="text" value={place} placeholder="Place" onChange={(e )=> setPlace(e.target.value)}/><br></br>
            <label></label><br></br><button>Submit</button>
        </form>
    </div>
  ) 
}


export default ShippingForm