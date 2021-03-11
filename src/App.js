import './App.css';
import firebase from './firebase.js';
import Header from './components/Header.js';
import { useState, useEffect } from 'react';
import UpdateStock from './components/UpdateStock';
import BuyList from './components/BuyList';



function App() {
  const [inventory, setInventory] = useState([]);
  // const [filteredInventory, setFilteredInventory] = useState([])
  const [itemsAdded, setItemsAdded] = useState([])
 
  //add useEffect hook
  useEffect(() => {
    //create ref to firebase, on value, data.val
    const dbRef = firebase.database().ref('/stockItems');
    
    
    dbRef.on('value',(response) => {
      const newState = [];
      
      const foodData = response.val();


      for (let foodKey in foodData) {
        newState.push({
          key: foodKey,
          capacity: foodData[foodKey].capacity,
          type: foodData[foodKey].type,
          currentStock: foodData[foodKey].currentStock,
          inCart: foodData[foodKey].inCart
        });
        
      }
      //update inventory stock w firebase data
      setInventory(newState);
    })

  }, [])

  function addToCart(quantity, itemType){
    const copy = [...itemsAdded, {inCart: quantity, type: itemType }]
      setItemsAdded(copy)
  }
  
  return (
    <div className="App">
      <Header />
    
     <main className="wrapper"> 
      <section className="stock-main">
          <h3>Our Current Stock</h3>
            <ul className="food-stock">
              {inventory.map((stockItem) => {
                return (
                  <>
                  <UpdateStock stockItem = {stockItem} addToCart = {addToCart}/>
                   </>
                )
              })}
           </ul>
      </section>

      <section className="grocery-list">
                  <BuyList itemsAdded={itemsAdded} />
      </section>
     </main>
     <footer>Created at <a href="https://junocollege.com/">Juno College</a>
     </footer>

    </div>
  );
}

export default App;

