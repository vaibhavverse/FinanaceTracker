import React from 'react'
import './finanace.css'
import { useEffect,useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line
} from 'recharts';

function Finance() {
 
  const[netBalance,setNetBalance] = useState(0)
  const[income,setIncome] = useState(0)
  const[saving,setSaving] = useState(0)
  const[expenses,setExpenses] = useState(0)
  const[type,setTypes] = useState('income')//default
  const [amount,setAmount] = useState('')
  
  // useEffect(()=>{
  //   const savedData = JSON.parse(localStorage.getItem('financeData'))
  //   if(savedData){
  //     setNetBalance(savedData.netBalance);
  //     setIncome(savedData.income);
  //     setSaving(savedData.saving);
  //     setExpenses(savedData.expenses);
  //   }
  // },[])
  
  // Load data from localStorage on mount
  // useEffect(() => {
  //   const savedData = localStorage.getItem('financeData');
  //   if (savedData) {
  //     try {
  //       const parsedData = JSON.parse(savedData);
  //       setNetBalance(parsedData.netBalance || 0);
  //       setIncome(parsedData.income || 0);
  //       setSaving(parsedData.saving || 0);
  //       setExpenses(parsedData.expenses || 0);
  //     } catch (error) {
  //       console.error('Error parsing saved data:', error);
  //     }
  //   }
  // }, []);
  // useEffect(()=>{
  //   const financeData={
  //     netBalance,
  //     income,
  //     saving,
  //     expenses,
  //   }
  //   localStorage.setItem('financeData',JSON.stringify(financeData))
  // },[netBalance,income,expenses,saving])
 const chartData = [
  {
    name:'Income',
    amount: income
  },
  {
    name:'Expenses',
    amount: expenses
  },
  {
    name:'Saving',
    amount: saving
  }
 ]

  function addIncome(){

    const value = parseFloat(amount)
    if(!value || value <= 0) return;
    if(type === 'income'){
      setIncome(income=>income + value)
      setNetBalance(netBalance=>netBalance + value);
      setSaving(saving => saving+value)
    }
    else if(type === 'expenses' )
    {
      if(value <= netBalance){
      setExpenses( expenses=>expenses + value);
      setNetBalance(netBalance => netBalance - value);
      setSaving(saving => saving - value)
      }
      else 
     {
      alert("Error: You don't have enough balnace to spend this amount")
      setAmount('')
     return;
    }
    }
    setAmount('')
    //console.log("Colc");

  }
     return (
  
        <div className="container">
  
          <div className="header">
            <h2>Finance Tracker</h2>
          </div>
  
          <div className="content">
  
            <div className="child">
              <div className="inputDetails">
              <div>
              <label htmlFor="item">Type: </label>
                  <select value={type} onChange={(e)=>setTypes(e.target.value)}>
                    <option value="income">Income</option>
                    <option value="expenses">Expenses</option>
                  </select>
              </div>
              <div>
              <label htmlFor="amount" >Amount:</label>
                  <input type="number" id="amount"
                   value={amount} placeholder='Enter Amount'
                   onChange={(e)=>setAmount(e.target.value)}/>
                 
              </div>
                  <button id="btn" onClick={(addIncome)}>Add Transaction</button>
              </div>
  
              <div className="details">
                <div>
                <h2 className="sHeading">Summary</h2>
                 <p>Net Balance:${netBalance.toLocaleString()}</p>
                 <p>Income:${income.toLocaleString()}</p>
                 <p>Expenses:${expenses.toLocaleString()}</p>
                 <p>Saving:${saving.toLocaleString()}</p>
                </div>
              </div>
            </div>
    
            <div className="chart">
  
              <h1>Financial Overview</h1>
              <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => value.toLocaleString()} />
        <Tooltip />
        
        <Legend />
        <Bar
          dataKey="amount"
          fill="#8884d8"
          stroke="red"
          strokeWidth={2}
          barSize={100}
          label={{ position: 'top' }}
        />
      </BarChart>
                </ResponsiveContainer>
              </div>
              </div>
          </div>
        </div>
      
    );
  }
  export default Finance;
  