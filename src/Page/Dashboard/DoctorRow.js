import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email} = doctor;

    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data =>{
            // console.log(data);
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted`)
                refetch();
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th><div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={img} alt={name}/>
                </div>
            </div></th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-error btn-xs">Delete</button></td>
        </tr>

    );
};

export default DoctorRow;