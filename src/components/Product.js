import react, { useState } from 'react';

function Product(props){

    const [namee,setName]=useState(props.items[0].name);

    function handleClick(){
        setName('Laptop');
    }

    return(
       <>
       <h1>{props.items[0].id}</h1>
       <h1>{namee}</h1>
       <h1>{props.items[0].price}</h1>
       <button onClick={handleClick}>Change</button>

       <h1>{props.items[1].id}</h1>
       <h1>{props.items[1].name}</h1>
       <h1>{props.items[1].price}</h1>
       <button onClick={handleClick}>Change</button>

       <h1>{props.items[2].id}</h1>
       <h1>{props.items[2].name}</h1>
       <h1>{props.items[2].price}</h1>
       <button onClick={handleClick}>Change</button>
       </>
    )
};

export default Product;