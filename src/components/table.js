import { useEffect, useState } from "react";
import TableRow from "./TableRow";


function Table(){

    const[data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then(res=> res.json())
        .then(data => setData(data))
    }, [])
    return (
      <table className="table">
         <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>

            
          </tr>
         </thead>
         <tbody>
          { data.map((item) => {
            return (
                <TableRow 
                  key= {item.id}
                  id={item.id}
                  date = {item.date}
                  description ={item.description}
                  category = {item.category}
                  amount = {item.amount}
                />
            )
          }
        )} 

          </tbody>
          </table>
    )
}

export default Table