import React, {useEffect, useState} from "react";
import axios from "axios";



export default function App() {
const[people, setPeople] = useState([]);
function getPeople(){
  const url = 'https://localhost:7128/people';
//   fetch(url, {
//     method: 'GET'
//   })
//   .then(response => response.json())
//   .then(peopleFromServer =>{
//     console.log(peopleFromServer);
//     setPeople(peopleFromServer);
//   })
//   .catch((error) =>{
//    console.log(error);
//    alert(error);
//  })
axios.get(url).then(res => {
  if (res.status >= 400){
    throw 'Error';
  }

  setPeople(res.data);
}).catch(error => alert(error));
}

useEffect(() => getPeople(),[]);

  return (
    <div className="container">
      <div className="row">
        <div className="">
         <div> <h1 className="text-center">Table People API</h1></div>
         <div className="mt-6">
            <button onClick={getPeople} className='btn btn-dark btn-lg w-100'>Get Person </button>
            <button onClick={getPeople} className='btn btn-secondary btn-lg w-100 mt-4'>Creat New Person </button>
         </div>

        </div>
          {people.length > 0 && <PeopleTable/>}
      </div>
    </div>
  );

  function PeopleTable(){
    return(
      <div className="table-responive mt-6">
        <table className="table table-bordered border-blue">
          <thead>
            <tr>
              <th scope="col">Person Id(PK)</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Contact Info</th>
              <th scope="col">Title</th>
              <th scope="col">CRUD OPERATIONS</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) =>(
             <tr key={person.id}>
              <th scope="row">{person.id}</th>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.title}</td>
              <td>
                <button className="btn btn-dark btn-lg mx-3 my-3">Update</button>
                <button className="btn btn-secondary btn-lg">Delete</button>
              </td>
            </tr> 

            ))}
          </tbody>
          </table>
          <button onClick={()=> setPeople([])} className= "btn btn-dark btn-lg w-100"> Empty place</button>
      </div>
    )
  }
}


