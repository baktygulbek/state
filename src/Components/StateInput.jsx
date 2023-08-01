import React,{useState}from 'react';
import Button from './UI/Button';
import './StateInput.css'
import Card from './Card';


//1ci variant --------------------------------------------------------------------------
const StateInput = () => {
                                                                            



const [name,setName] = useState ('')
const [soname,setSoname] = useState ('')
const [date,setDate] = useState ('')

const inputChangeHandler = (event) => {            
 const currentInputName = event.target.name;
 if (currentInputName === 'name') {
   setName(event.target.value)
} else if (currentInputName === 'soname') {
   setSoname (event.target.value)
} else if (currentInputName === 'date') {
    setDate (event.target.value)
}}


//metod slais 2cy -------------------------------------------------------------------------
// const [userInput,setUserInput] = useState({
//     name: '',
//     soname: '',
//     date: '' , 
// })
          

// const inputChangeHandler = (event) => {
//      setUserInput((prevState) => {
//         return {
//             ...prevState,
//             name:event.target.value
//         }})
//         setUserInput((prevState) => {
//             return {
//                 ...prevState,
//                 soname :event.target.value
//             }})
//             setUserInput((prevState) => {
//                 return {
//                     ...prevState,
//                     date:event.target.value
//                 }})
//     }                                                       





// / prevseit 3 cy versia ------------------------------------------------
// const [userInput,setUserInput] = useState({
//     name: '',
//     soname: '',
//     date: '' , 
// })
  
                             
// const nameChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         name: event.target.value
//     })
// }

// const sonameChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         soname: event.target.value
//     })
// } 
// const dateChangeHandler = (event) => {
//     setUserInput({
//         ...userInput,
//         date: event.target.value
//     })
// } 



const addExpense = (event) =>{
    event.preventDefault()
    // console.log(userInput);
    console.log(name);
    console.log(soname);
    console.log(date);
}


    return (
        <Card>
        <form onSubmit={addExpense}>
        <div className='new-expense__controls'>
            <div className='new-expens__contols'>
                <label htmlFor="">Name</label>
                <input value={name} name='name'onChange={inputChangeHandler} type="text" />
            </div>
        </div>
           <div className='new-expense__controls'>
            <label htmlFor="">Soname</label>
            <input value={soname} name='soname'onChange={inputChangeHandler} type="text" />
           </div>
           <div className='new-expense__controls'>
            <label htmlFor="">Date</label>
            <input value={date} name='date'onChange={inputChangeHandler} type="number"/>
           </div>
           <Button className='new expense__action' type='submit'>Add</Button>

        </form>
        </Card>
    );
};

export default StateInput;