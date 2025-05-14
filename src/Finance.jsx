// // import { useState } from "react";

// // function Finance(){
// //     const [income,setIncome] = useState(0)
// //     const[expenses,setExpenses] =  useState(0);
// //     const[saving,setSaving] = useState(0)
// //     const [balance,setBalance] = useState(0);

// // //     const [transactions, setTransactions] = useState([]);
// // //    const [type,setType] = useState("Income")
// // //    const [amount, setAmount] = useState("");

// // const handleSubmit = (e) =>{
// //     if(!amount || isNaN(amount)) return;

// //     const newTransaction = {
// //         id: Date.now(),
// //         type,
// //         amount : parseFloat(amount),
// //     };
// //     setTransactions([...transactions,newTransaction])
// //     setAmount("")
// // }

// //     function handleExpenses(){

// //     }
// //     function handleSaving(){

// //     }
// //     function handleBalance(){

// //     }
// //     function handleTransactions(){
// //        let income = 0,expenses = 0;
// //        handleTransactions.forEach(t => {
// //         if(t.type === 'income'){
// //             income +=t.income
// //         }
// //         else{
// //             expenses +=t.expenses
// //         }

// //        });
// //     }
// //     return(

// //     //         <div className="header-div">
// //             //   <header>
// //             //   <h2 className="header">Financial Tracker</h2>
// //             //   </header>
// //     //       <div className="container">
// //     //     <div className="input-div">
// //     //         <form className="input">
// //     //             <label for="item">Type: </label>
// //     //             <select>
// //     //                 <option>Income</option>
// //     //                 <option>Saving</option>
// //     //                 <option>Expenses</option>
// //     //                 <option>Income</option>
// //     //             </select><br/>
// //     //             <label for="amount">Amount:</label>
// //     //             <input type="number" id="amount" /><br/>
// //     //             <button id="btn"
// //     //             onClick={handleTransactions}>Add Transaction</button>
// //     //         </form>
// //     //    <div className="track-expenses">
// //     //     <h2>Summary</h2>

// //     //    </div>
// //     //       <div>
// //     //           <h2>Financial Overview</h2>
// //     //       </div>
// //     //       </div>
// //     //     </div>
// //     //     </div>
// //     <>
// //     <header>
// //               <h2 className="header">Financial Tracker</h2>
// //               </header>

// //         <div className="container">

// // {/* 2 div for transaction and one for summary */}

// //         <div className="content">

// //             <div className="child">
// // <form className="inputDetails">
// // <label for="item">Type: </label>
// //       <select>
// //           <option>Income</option>
// //           <option>Saving</option>
// //           <option>Expenses</option>
// //           <option>Income</option>
// //       </select><br/>
// //       <label for="amount">Amount:</label>
// //       <input type="number" id="amount" /><br/>
// //       <button id="btn"
// //       onClick={handleTransactions}>Add Transaction</button>
// // </form>
// //             </div>

// //            <div className="summary">
// //             <h2> Summary</h2>
// //             <p>Net Balance:$4198</p>
// //             <p>Income:$4355</p>
// //             <p>Expenses:$1255</p>
// //             <p>Saving:$7553</p>
// //           </div>

// //             </div>
// //             <div className="chart">
// //             <h2>Financial Overview</h2>
// //             </div>

// //         </div>
// //         </>

// //     )

// // }
// // export default Finance;

// function Finance() {
//   return (

//       <div className="container">

//         <div className="header">
//           <h2>Finance Tracker</h2>
//         </div>

//         <div className="content">

//           <div className="child">

//             <div className="inputDetails">
//             <div>
//             <label for="item">Type: </label>
//                 <select>
//                   <option>Income</option>
//                   <option>Saving</option>
//                   <option>Expenses</option>
//                   <option>Income</option>
//                 </select>
//             </div>
//             <div>
//             <label for="amount">Amount:</label>
//                 <input type="number" id="amount" />
               
//             </div>
              
//                 <button id="btn">Add Transaction</button>
             
//             </div>

//             <div className="details">
//               <h2 className="sHeading">Summary</h2>
//                <p>Net Balance:$4198</p>
//                <p>Income:$4355</p>
//                <p>Expenses:$1255</p>
//                <p>Saving:$7553</p>
//             </div>
//           </div>
  
//           <div className="chart">

//             <h1>Financial Overview</h1>
//             <div>Hello</div>
//             </div>
//         </div>
//       </div>
    
//   );
// }
// export default Finance;
