import { Link } from 'react-router-dom'
import axios from "axios"
import { useHistory } from 'react-router-dom'
const url = 'http://localhost:8081/admin'
const PetRow = ({ pet }) => {
  const history = useHistory()
  const onEdit =(pet)=>{
    console.log(pet.image)
    localStorage.setItem("childId", pet.petId);
    alert(localStorage.getItem("childId"))
    history.push(`/editpetprofile/${pet.petId}`)
  }
  const onDelete =(pet)=>{
    localStorage.setItem("childId", pet.petId);
    alert(localStorage.getItem("childId"))
    history.push("/deletepet")
  }
  
  return (
    <tr>
      <td>{pet.petId}</td>
      <td>{pet.name}</td>
      <td>{pet.age}</td>
      <td>{pet.bloodGroup}</td>
      <td>{pet.colourComplexity}</td>
      <td>{pet.deficiency}</td>
      <td>{pet.education}</td>
      <td>{pet.gender}</td>
      <td>{pet.medicalHistory}</td>
      <td>{pet.other}</td>
      <td>{pet.status}</td>
      <td>
        <img height="100"
          src={"http://localhost:8081/" + pet.image}
          alt="na"
          className="thumbnail-sm"
        />
      </td>
      
      <td>
      
      <button onClick={() => {onDelete(pet)}} className="btn btn-danger" >Delete</button>
         <button onClick={() =>{onEdit(pet)}} className="btn btn-info mt-2">Edit</button>
      
    </td>
    </tr>
  )
}

export default PetRow
