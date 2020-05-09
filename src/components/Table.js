import React, { useState, useEffect } from 'react';
import db from '../db/db.json';




const Table = () => {

   const [table, setTable] = useState([]);
   const [sortType, setSortType] = useState('id');

   useEffect(() => {
      const sortArr = type => {
         let newArr;

         switch (type) {
            case "id":
               newArr = [...db].sort((a,b) => a.id - b.id);
               break;
            case "first":
               newArr = [...db].sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
               break;
            case "last":
               newArr = [...db].sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
               break;
            case "dept":
               newArr = [...db].sort((a,b) => (a.department > b.department) ? 1 : ((b.department > a.department) ? -1 : 0));
               break;
            default:
               throw new Error(console.log("Invalid value"));
         }
         setTable(newArr);
      }

      sortArr(sortType)
   
   }, [sortType])
   

   return (
      <div className="container">
      <table className="table">
         <thead className="thead-dark">
            <tr>
               <th scope="col"><button onClick={() => setSortType('id')}>id</button></th>
               <th scope="col"><button onClick={() => setSortType('first')}>First Name</button></th>
               <th scope="col"><button onClick={() => setSortType('last')}>Last Name</button></th>
               <th scope="col"><button onClick={() => setSortType('dept')}>Department</button></th>
            </tr>
         </thead>
         <tbody>
            {table.map((emp, key) => (
               <tr key={key}>
                  <th scope="row">{emp.id}</th>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.department}</td>
               </tr>
            ))}
         </tbody>
      </table>
   </div>
   )
};

export default Table;