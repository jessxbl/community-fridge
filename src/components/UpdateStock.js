//button click increases or decreases currenStock amount in firebase database
//dynamically changes state on page 
import firebase from '../firebase';
// import { useState } from 'react'

function UpdateStock (props) {
    const {stockItem} = props;
    // const [filteredInventory, setFilteredInventory] = useState([])
    const handleClickIncr = (event, currentStock, inCart, type) => {
        const ref = event.target.name;
        const stock = currentStock || 0;
        const itemRef = firebase.database().ref(`stockItems/${ref}`);
        itemRef.update({
            currentStock: parseInt(stock) + 1,
            inCart: + 1
            
        })
        //call separate function to add item to cart 
        props.addToCart (inCart, type)
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
        <>
        <div className="indiv-item">
            <li className="item-name">{stockItem.type}</li>
            <div className="item-counter">
                    <input name={stockItem.key} 
                    type="text" 
                    readOnly
                    value={`${stockItem.currentStock} /${stockItem.capacity}`}/>
                </div>
                    

            {/* <li className name={stockItem.key}>
                    <span className="current-stock">{stockItem.currentStock}
                        </span>/{stockItem.capacity}</li> */}

            <div className="buttons">
            <button name={stockItem.key} onClick={(event) => { handleClickIncr(event, stockItem.currentStock, stockItem.inCart, stockItem.type) }}>+</button>
        
            <button name={stockItem.key} onClick={(event) => handleClickRemove(event, stockItem.currentStock)}>-</button>

            </div>
        </div>
        </>
    )
}

export default UpdateStock;