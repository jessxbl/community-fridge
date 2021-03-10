//listen which "+" button was clicked
//display chosen item on page in new list
//update item quantity in new list every time button is pressed

function BuyList(props) {
     const itemsAdded = props
     const cartItems= props.itemsAdded
     console.log(itemsAdded)
     console.log(cartItems)
     return (
         <h3>hi</h3>
     )
    //  const indivCartItem = cartItems.map((cartItem)=> {
    //      <li>{cartItem}</li>
    //      return (
    //          <>
    //          <h3>hello</h3>
    //          <ul>{indivCartItem}</ul>
    //        </>
    //      )

    //  })
   
    // console.log(props)
    // itemsAdded.map((item) => {
    //     console.log(item)
    //     return(
    //       <h1>hello</h1>
    //     )

    // })
    
    // return (
        
    //     addToCart.map((item) => {
    //         console.log(item)
    //         return (
    //             <>
    //                 <div className="indiv-item">
    //                     {/* <li>{stockItem.type}</li>
    //                     <UpdateStock stockItem={stockItem} /> */}
    //                 </div>
    //             </>
    //         )
    //     })
    
    // )
}

export default BuyList;