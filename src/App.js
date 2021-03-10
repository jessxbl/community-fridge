import './App.css';
import firebase from './firebase.js';
import Header from './components/Header.js';
import { useState, useEffect } from 'react';



function App() {
  // const [stock, setStock] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [groceryLi, setGroceryLi] = useState([{type:'type', quantity: null}]);
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
          currentStock: foodData[foodKey].currentStock
          
        });
      }
      
      //update inventory stock w firebase data
      setInventory(newState);

    })

  }, [])
  const handleClickIncr = (event, currentStock) => {
     const ref = event.target.name;
     console.log(event.target)
     const stock = currentStock || 0;
    //  console.log(event);
     const itemRef = firebase.database().ref(`stockItems/${ref}`);
     itemRef.update({
       currentStock: parseInt(stock) + 1
     })
  };

  const handleClickAddLi = (foodType) => {
    console.log(foodType);
      <li>{foodType}</li>
    return(
        <ul className="user-list">
          <li>{foodType}</li>
        </ul>
    )
    
  };


  const handleClickRemove = (event, currentStock) => {
    const ref = event.target.name;
    const stock = currentStock || 0;
    const itemRef = firebase.database().ref(`stockItems/${ref}`);
    itemRef.update({
      currentStock: parseInt(stock) - 1
    })
  };
  
  return (
    <div className="App">
      <Header />
     <main>

      <section className="stock-main">
          <h3>Our Current Stock</h3>
          <div className="food-list">
            <ul className="food-type">
              {inventory.map((stockItem) => {
                // console.log(stockItem)
                return (
                  <>
                  <div className="indiv-item">
                  <li>{stockItem.type}</li>
                  {/* <input name ={stockItem.key} type="text" readOnly value={stockItem.currentStock}/> */}
                  <li name={stockItem.key}>{stockItem.currentStock}</li>

                  <li>/{stockItem.capacity}</li>

                      {/* <button name={stockItem.key} onClick={(event) => handleClickIncr(event, stockItem.currentStock)}>+</button> */}
                      
                      <button name={stockItem.key} onClick={(event) => {handleClickIncr(event, stockItem.currentStock); handleClickAddLi(stockItem.type)}}>+</button>

                      <button name={stockItem.key} onClick={(event) => handleClickRemove(event, stockItem.currentStock)}>-</button>

                  </div>
                   </>
                )
              })}
           </ul>
          </div>

      </section>
      <section className="grocery-list">
      </section>
     </main>

    </div>
  );
}

export default App;

//set up useState adn then pass setUseState as value to db.update()


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