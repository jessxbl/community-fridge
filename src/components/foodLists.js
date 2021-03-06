import firebase from '../firebase';
const dbRef = firebase.database().ref();
 const foodLists = {
       stockItems : [
        {
        type: 'milk/ milk alternatives',
        capacity: 5,
        currentStock: ''
        },

        {
        type:'protein',
        capacity: 10,
        currentStock: ''
        },
        {
        type:'fruits',
        capacity: 20,
        currentStock: ''
        },
        {
        type: 'veggies',
        capacity: 20,
        currentStock: ''
        },
        {
        type: 'flour',
        capacity: 5,
        currentStock: ''
        },
        {
        type: 'rice',
        capacity: 5,
        currentStock: ''
        },
        {
        type: 'oils',
        capacity: 5,
        currentStock:''
        },
        {
        type: 'bread',
        capacity: 5,
        currentStock:''
        },
        {
        type: 'canned goods',
        capacity: 10,
        currentStock:''
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