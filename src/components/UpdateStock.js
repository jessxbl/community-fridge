//button click increases or decreases currenStock amount in firebase database
//dynamically changes state on page 
import firebase from '../firebase';
import { useState } from 'react'

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
        <li name={stockItem.key}>{stockItem.currentStock}</li>

        <li>/{stockItem.capacity}</li>

        <button name={stockItem.key} onClick={(event) => { handleClickIncr(event, stockItem.currentStock, stockItem.inCart, stockItem.type) }}>+</button>
       
        {/* <button name={stockItem.key} onClick={(event) => { handleClickIncr(event, stockItem.currentStock); handleClickAddLi(stockItem.type) }}>+</button> */}

        <button name={stockItem.key} onClick={(event) => handleClickRemove(event, stockItem.currentStock)}>-</button>
        </>
    )
}

export default UpdateStock;