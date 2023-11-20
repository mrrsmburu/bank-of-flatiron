function TableRow({id, date, description, category, amount,}){
    return (
    
        <tr>
         <th scope="row">{id}</th>
         <td>{date}</td>
         <td>{description}</td>
         <td>{category}</td>
         <td>{amount}</td>
        </tr>

    )
}

export default TableRow;