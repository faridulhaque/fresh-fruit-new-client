import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import "../securedRoutes/securedRoutes.css";


const MyItemEditModal = ({ isEditing, setEditing, action }) => {
    const [item, setItem] = useState({})
    const { _id } = isEditing;
    const [incrementValue, setIncrementValue] = useState(0)

    const handleUpdate = async (data) => {
        const body = { data }
        await axios.put(`http://localhost:5000/fruit/update/${data._id}`, body)
            .then((response) => {
                if (response.data.acknowledged) {
                    toast.success('Available Quantity updated successfully',
                        {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    )
                }
                else if (response.data.errorMessage) {
                    toast.warn(`${response.data.errorMessage}`, {

                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            })
    }

    const closeModal = async () => {
        await setEditing(null)
        action()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/singleItemData/${_id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item, _id])

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="py-4">{item.description}</p>
                    <p className="py-2"><span className='font-bold'>Minimum Quantity:{" "}</span>{item.minQuantity}</p>
                    <p className="py-2" style={{ display: 'flex', alignItems: 'center' }}><span className='font-bold mr-2'>Available Quantity: </span>{item.avlQuantity} <svg onClick={() => handleUpdate({ ...item, type: 'decrement' })} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="handleItem w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    </p>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Increase your product's quantity</span>
                        </label>
                        <input
                            onChange={(e) => setIncrementValue(e.target.value)}
                            type="number"
                            placeholder="Input a positive value"
                            className="input input-bordered"
                        />
                        <label onClick={() => handleUpdate({ ...item, type: 'increment', incrementValue })} className="btn btn-primary mt-5">Restock</label>
                    </div>

                    <div className="modal-action">
                        <label onClick={closeModal} htmlFor="my-modal" className="btn btn-primary">Close</label>


                    </div>
                </div>
            </div>
            <ToastContainer

            ></ToastContainer>
        </>
    );
};

export default MyItemEditModal;