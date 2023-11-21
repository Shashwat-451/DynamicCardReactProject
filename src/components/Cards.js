import React, { useState } from "react";
import "./Cards.css";

function Cards() {
 
  const [data,setData]=useState([
    {
      id:1,
      image:"data:image/jpeg;base64,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",
      quote:"The only way to do great work is to love what you do",
      author:"Steve Jobs"
    },
    {
        id:2,
        image:"https://c4.wallpaperflare.com/wallpaper/648/857/293/grayscale-albert-einstein-monochrome-scientists-black-background-portraits-art-monochrome-hd-art-wallpaper-preview.jpg",
        quote:"In the middle of every difficulty lies opportunity.",
        author:"Albert Einstein"
    },
    {
        id:3,
      image:"https://www.getbengal.com/uploads/story_image/Swami-Vivekananda-1-2022.jpg",
      quote:"Arise Awake and stop not until the goal is achieved",
      author:"Swami Vivekananda"
    },
    {
        id:4,
        image:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/theodore-roosevelt-black-and-white-filip-schpindel.jpg",
        quote:"Do what you can, with what you have, where you are",
        author:"Theodore Roosevelt"
    },
    {
        id:5,
        image:"https://thumbs.dreamstime.com/b/socrates-head-sculpture-rotate-slow-black-background-81151376.jpg?w=576",
        quote:"The only true wisdom is in knowing you know nothing",
        author:"Socrates"
    },
    {
        id:6,
      image:"https://wallpapercave.com/wp/wp11757665.jpg",
      quote:"Success is walking from failure to failure with no loss of enthusiasm",
      author:"Winston Churchill"
    }
])

const [formData, setFormData] = useState({
  image: '',
  quote: '',
  author: ''
});


  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //Adding 
//     [...data, formData] is an array expression. It uses the spread operator ... to create a new array. Here's what it does:

// ...data: This spreads the elements of the existing data array into the new array. It effectively copies all the elements from the data array.

// formData: This is an object or value that you're adding as an element to the new array.

// So, the line of code creates a new array that contains all the elements from the existing 

    setData([...data, formData]);
    setFormData({
      image: '',
      quote: '',
      author: ''
    });
  }

  return (
    <>
      <div className="wrapper">
     
        <div className="Logo">
          YourQuote
        </div>
            <form  className="formm" onSubmit={handleSubmit}>
          
              <input
                className="inputt"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleFormChange}
                placeholder="Enter the Image URL"
              />
              <input
                className="inputt"
                type="text"
                name="quote"
                value={formData.quote}
                onChange={handleFormChange}
                placeholder="Enter Quote"
              />
              <input
                className="inputt"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleFormChange}
                placeholder="Enter Author Name"
              />
              <button>Add Quote</button>
             
            </form>
          
        <div className="container">
          
          {data.map((item) => (
            <div className="cards" key={item.id}>
              <div className="images">
                <img src={item.image} alt={item.author} />
              </div>
              <div className="quote">
                <h2>{item.quote}</h2>
              </div>
              <div className="author">{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;



