import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {

    const { store, actions } = useContext(Context);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")


    return (
        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="d-flex justify-content-center">
                        <h1 className="">Add a new contact</h1>
                    </div>
                    <section>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="text" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" name="phone" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" onChange={e => setPhone(e.target.value)} value={phone} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" name="address" className="form-control" id="exampleFormControlInput1" placeholder="Address" onChange={e => setAddress(e.target.value)} value={address} />
                        </div>


                    </section>
                    <button type="button" className="btn btn-primary w-100" onClick={() => { actions.createContact(name, email, phone, address) }}>Save</button>
                    <Link to="/">
                        <span>or get back to contacts</span>
                    </Link>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    )
}