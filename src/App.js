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
    // console.log(dbRef);
    
    dbRef.on('value',(response) => {
      const newState = [];
      // console.log(response)
      const foodData = response.val();


      for (let foodKey in foodData) {
        // console.log(foodKey);
        // console.log(foodData)
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
      // console.log(itemsAdded)
  }

  // console.log(inventory)
  
  return (
    <div className="App">
      <Header />
    
     <main className="wrapper"> 
      <section className="stock-main">
          <h3>Our Current Stock</h3>
            <ul className="food-stock">
              {inventory.map((stockItem) => {
                // console.log(stockItem)
                return (
                  <>
                 
                  <UpdateStock stockItem = {stockItem} addToCart = {addToCart}/>
                   </>
                )
              })}
           </ul>
      </section>

      <section className="grocery-list">
          {/* <BuyList stockItem={stockItem} itemsAdded={itemsAdded} /> */}
            
                <div className="indiv-item">
                  {/* <li>{stockItem.type}</li> */}
                  <BuyList itemsAdded={itemsAdded} />
                  {/* stockItem={stockItem} */}
                </div>

      </section>
     </main>
     <footer>Created at <a href="https://junocollege.com/">Juno College</a>
     </footer>

    </div>
  );
}

export default App;

//set up useState adn then pass setUseState as value to db.update()
 // const handleClickIncr = (event, currentStock) => {
  //    const ref = event.target.name;
  //    console.log(event.target)
  //    const stock = currentStock || 0;
  //   //  console.log(event);
  //    const itemRef = firebase.database().ref(`stockItems/${ref}`);
  //    itemRef.update({
  //      currentStock: parseInt(stock) + 1
  //    })
  // };

  // const handleClickAddLi = (foodType) => {
  //   console.log(foodType);
  //     <li>{foodType}</li>
  //   return(
  //       <ul className="user-list">
  //         <li>{foodType}</li>
  //       </ul>
  //   )

  // };


  // const handleClickRemove = (event, currentStock) => {
  //   const ref = event.target.name;
  //   const stock = currentStock || 0;
  //   const itemRef = firebase.database().ref(`stockItems/${ref}`);
  //   itemRef.update({
  //     currentStock: parseInt(stock) - 1
  //   })
  // };




          /*
              const handleClick = (e, currentStock) => {
                const ref = e.target.name;
                // use the name attribute on the button (e.target.name) to match the key in firebase (0, 1, etc)
                const itemRef = firebase.database().ref(ref); // targets that specific key
                itemRef.update({
                  currentStock: currentStock + 1
                })
              }
                // use the update method to change the value to what it was when the button was clicked (quan) and add 1 to it
                // use the same approach for decrease() function but subtract

                */
              /*
               <input name={item.key} type="text" readOnly value={item.quan}/>
              <button name={item.key} onClick={(e) => handleClick(e, item.quan)}>increase</button>
              <button name={item.key} onClick={(e) => handleClickTwo(e, item.quan)}>Decrease</button>
              */


/* <h3>Our Current Stock</h3>
        <div className="food-list">
            <ul className="food-type">
              {newState['stockItems'].map((stockItem) => {
                return (
                  <li>{stockItem.type}</li>
                )
              })}
            </ul>
            <ul className="stock-number">
              {newState['stockItems'].map((stockItem) => {
                const currentStock = stockItem.currentStock;
                return (
                  <li>{currentStock}/ {stockItem.capacity}</li>
                )
              })}
            </ul>
        </div> */