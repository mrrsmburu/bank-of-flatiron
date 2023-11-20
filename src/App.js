import { useState, useEffect } from 'react';
import './App.css';
import Forms from './components/Forms';
import Table from './components/Table';



function App() {

  const[formData, setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:"",
   })
  
  const [transactions, setTransactions] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      const filteredTransactions =transactions.filter((transaction)=>transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));
      setTransactions(filteredTransactions);
  }, [searchTerm]);

  const collectData = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTransactions([...transactions, formData]);
    fetch('http://localhost:3000/transactions', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData),
    })
    .then(response=>response.json)
    .then(data=>{
      console.log('Form Submitted successfully', data);
    })
    .catch(error=>{console.log('Error posting data:', error);});

    setFormData({
      date:"",
      description:"",
      category:"",
      amount:"",
    });
    console.log(formData);
  }


  return (
    <div className="container mt-4">
      <input
       type ="text"
       placeholder='Search transactions by description'
       value ={searchTerm}
       onChange = {(e) => setSearchTerm(e.target.value)}
    />
      <h3 className="text-centre">Submission Form</h3>
      <Forms 
      date={formData.date}
      description={formData.description} 
      category={formData.category} 
      amount={formData.amount}
      onchange={collectData}
      onsubmit={handleSubmit}
      />

      <h5 className='text-centre mt-4'>Transaction Table</h5>
      <Table  />
      
  
    </div>
  );
}

export default App;
