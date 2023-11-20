function Forms( {date, description, category, amount, onchange, onsubmit}){

    return(
      <form onSubmit={onsubmit}>
          <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
               <input 
               type="date"
               className="form-control"
               id="date"
               value={date}
               onChange={onchange}
              />
              
          </div>

          <div className="mb-3">
                <label htmlFor="category" className="category">Category</label>
               <input 
               type="text" 
               className="form-control" 
               id="category"  
               value={category}
               onChange={onchange}
               />
              
          </div>
          <div className="mb-3">
                <label htmlFor="description" className="description">Description</label>
               <input 
               type="text" 
               className="form-control" 
               id="description"  
               value={description}
               onChange={onchange}
               />
              
          </div>

          <div className="mb-3">
                <label htmlFor="amount" className="amount">Enter Amount</label>
               <input
                type="number" 
                className="form-control" 
                id="amount"  
                value={amount}
                onChange={onchange}
               />
              
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}
  


export default Forms;