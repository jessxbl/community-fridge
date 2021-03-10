//button click increases or decreases currenStock amount in firebase database
//dynamically changes state on page 
import firebase from '../firebase';

function UpdateStock (props) {
    const {stockItem} = props;
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

    //move to BuyList component??
    const handleClickAddLi = (foodType) => {
        console.log(foodType);
        <li>{foodType}</li>
        return (
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
        <>
        <li name={stockItem.key}>{stockItem.currentStock}</li>

        <li>/{stockItem.capacity}</li>

        <button name={stockItem.key} onClick={(event) => { handleClickIncr(event, stockItem.currentStock); handleClickAddLi(stockItem.type) }}>+</button>

        <button name={stockItem.key} onClick={(event) => handleClickRemove(event, stockItem.currentStock)}>-</button>
        </>
    )
}

export default UpdateStock;