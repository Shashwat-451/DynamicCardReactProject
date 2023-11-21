import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Cards from './components/Cards';
function App() {
  const prod=[
    {
         id:1,
         name:"Watch",
         price:2300
    },
    {
      id:2,
      name:"Shoes",
      price:2100
    },
    {
      id:3,
      name:"Mobile",
      price:23300
    }
  ]
  return (
    <>
    <Cards/>
    </>
  );
}

export default App;
