import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-st-modal';
import imgForm from '../../../images/anysuggestion.png'
import { sendingFormData } from '../../../ReduxServices/Actions/formActions';

const Form = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        const email = e.target.email.value;
        const data = {
            email,
            message
        }
        if (email && message) {
            dispatch(sendingFormData(data))
        }
        else {
            Alert("Please don't leave any input field empty", 'Input field is empty')
        }

    }
    return (
        <>

            <h2 className='text-4xl text-center mt-20'> Do you have any query or suggestion?</h2>
            <form onSubmit={handleSubmit}>
                <div className='suggestion-form grid grid-cols-2 justify-items-center my-20'>
                    <div className='suggestion-left w-80 h-80'
                    ><img className='h-full w-full' src={imgForm} alt="" /></div>
                    <div className='suggestion-right w-96 h-80 shadow-2xl px-10 pt-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Input your email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your message</span>
                            </label>
                            <textarea
                                style={{ resize: "none" }}
                                type="text"
                                name="message"
                                placeholder="write your thought"
                                className="input input-bordered h-20"
                            />
                        </div>
                        <div className="form-control my-5">
                            <button
                                className="btn btn-primary btn-block text-white"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    );
};

export default Form;