import './App.css';
import firebase from './firebase.js';
import Header from './components/Header.js';
import foodLists from './components/foodLists';
// import Tracker from './components/Tracker.js';
// import AddButton from './components/AddButton.js'
// import RemoveButton from './components/RemoveButton.js';


function App() {
  return (
    <div className="App">
      <Header />
     <main>

      <section className="stock-main">
        <h3>Our Current Stock</h3>
        <div className="food-list">
        
        <ul className="food-type">
       {foodLists['stockItems'].map((stockItem)=> {
          return(
              <li>{stockItem.type}</li>
          )
        })}
        </ul>
        <ul className="stock-number">
        {foodLists['stockItems'].map((stockItem) => {
          return (
                  <li>{stockItem.currentStock}/ {stockItem.capacity}</li>
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
