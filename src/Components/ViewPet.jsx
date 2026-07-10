import React from 'react'
import NavBar from './NavBar'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewCar = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        }
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Pet Details</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>
                                            <div className="card">
                                                <img src={value.image} className="card-img-top" alt={value.petId} height="300px" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.petName}</h5>
                                                    <p className="card-text"><strong>Species: </strong>{value.species}</p>
                                                    <p className="card-text"><strong>Breed: </strong>{value.breed}</p>
                                                    <p className="card-text"><strong>Age: </strong>{value.age}</p>
                                                    <p className="card-text"><strong>Gender: </strong>₹{value.gender}</p>
                                                    <p className="card-text"><strong>Adoption Fee: </strong>₹{value.adoptionFee}</p>
                                                    <a href="#" className="btn btn-primary">Book now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCar