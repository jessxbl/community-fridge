import firebase from '../firebase';
    // const dbRef = firebase.database().ref();
     const foodLists = {
           stockItems : [
            {
            type: 'milk/ milk alternatives',
            capacity: 5,
            currentStock: '',
            inCart: 0
            },
    
            {
            type:'protein',
            capacity: 10,
            currentStock: '',
            inCart: 0
            },
            {
            type:'fruits',
            capacity: 20,
            currentStock: '',
            inCart: 0
            },
            {
            type: 'veggies',
            capacity: 20,
            currentStock: '',
            inCart: 0
            },
            {
            type: 'flour',
            capacity: 5,
            currentStock: '',
            inCart: 0
            },
            {
            type: 'rice',
            capacity: 5,
            currentStock: '',
            inCart: 0
            },
            {
            type: 'oils',
            capacity: 5,
            currentStock:'',
            inCart: 0
            },
            {
            type: 'bread',
            capacity: 5,
            currentStock:'',
            inCart: 0
            },
            {
            type: 'canned goods',
            capacity: 10,
            currentStock:'',
            inCart: 0
            },
    
           ],
    
           groceryItem : [
            {
            type: '',
            amount: ''
            },
            {
            type: '',
            amount: ''
            },
            {
                type: '',
                amount: ''
            },
        
           ]
       };
       

//    dbRef.push(foodLists);
export default foodLists;