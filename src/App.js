import './App.css';
import firebase from './firebase.js';
import Header from './components/Header.js';
import foodLists from './components/foodLists';
import { useState } from 'react';
// import Tracker from './components/Tracker.js';
// import AddButton from './components/AddButton.js'
// import RemoveButton from './components/RemoveButton.js';


function App() {
  const [stock, setStock] = useState(0);
  return (
    <div className="App">
      <Header />
     <main>

      <section className="stock-main">
          <h3>Our Current Stock</h3>
          <div className="food-list">
            <ul className="food-type">
              {foodLists['stockItems'].map((stockItem) => {
                const currentStock = stockItem.currentStock;
                return (
                  <>
                  <div className="indiv-item">
                  <li>{stockItem.type}</li>
                  <li>{currentStock}/{stockItem.capacity}</li>
                      <button onClick={() => setStock(stock + 1)}>+</button>
                      <button onClick={() => setStock(stock - 1)}>-</button>

                  </div>
                   </>
                )
                })}
           </ul>
          </div>




        {/* <h3>Our Current Stock</h3>
        <div className="food-list">
            <ul className="food-type">
              {foodLists['stockItems'].map((stockItem) => {
                return (
                  <li>{stockItem.type}</li>
                )
              })}
            </ul>
            <ul className="stock-number">
              {foodLists['stockItems'].map((stockItem) => {
                const currentStock = stockItem.currentStock;
                return (
                  <li>{currentStock}/ {stockItem.capacity}</li>
                )
              })}
            </ul>
        </div> */}
       

      </section>

      <section className="grocery-list">

      </section>

     </main>

      
    </div>
  );
}

export default App;

//set up useState adn then pass setUseState as value to db.update()
