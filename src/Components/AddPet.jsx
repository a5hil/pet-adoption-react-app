import React from 'react'
import NavBar from './NavBar'

const AddPet = () => {
    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Add Pet</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pet Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Species</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Breed</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="Male" />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="Female" />
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vaccination Status</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="vaccinationStatus" value="Yes" />
                                    <label className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="vaccinationStatus" value="No" />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Adoption Fee</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col col-12	col-sm-6	col-md-6	col-lg-6	col-xl=6	col-xxl=6">
                                <label htmlFor="" className="form-label">Image URL</label>
                                <input type="url" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPet