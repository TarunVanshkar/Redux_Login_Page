import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileResult } from '../Redux/actions/profileActions';


const ProfilePage = () => {

    const dispatch = useDispatch();

    const loginData = useSelector(state => state.login.data);
    const loading = useSelector(state => state.profile.loading);
    const data = useSelector(state => state.profile.data);
    const error = useSelector(state => state.profile.error);

    // console.log('inside profile page')
    // console.log(loginData)
    // console.log(loading);
    // console.log(data);
    // console.log(error);
    useEffect(() => {
        if(loginData.id){
            // console.log(data.id);
            dispatch(fetchProfileResult(loginData.id));
        }
    },[loginData])

    return (
        <div className="profile-container">
            <nav>
                <h1>Profile</h1>
            </nav>

            {
                data.id && (
                    <div className="details-container">
                        <img src={data.image} alt={data.username} />
                        <h2 id="username">Username : {data.username}</h2>
                        <br />
                        <h3>Work Details:</h3>
                        <p>Company Name : {data.company.name}</p>
                        <p>Department : {data.company.department}</p>
                        <p>Position : {data.company.title}</p>
                        <p>Company Address : {data.company.address.address}, {data.company.address.city}, {data.company.address.state}, {data.company.address.postalCode}</p>
                        <br />

                        <h3>Bank Details</h3>
                        <p>Currency : {data.bank.currency}</p>
                        <p>Card Type : {data.bank.cardType}</p>
                        <p>Card Number : {data.bank.cardNumber}</p>
                        <p>Card Expiry : {data.bank.cardExpire}</p>
                        <br />

                        <h3>Personal Details</h3>
                        <p>First Name : {data.firstName}</p>
                        <p>Last Name : {data.lastName}</p>
                        <p>Maiden Name : {data.maidenName}</p>
                        <p>Phone Number : {data.phone}</p>
                        <p>Personal Address : {data.address.address}, {data.address.city}, {data.address.state}, {data.address.postalCode}</p>
                        <p>University : {data.university}</p>
                        <p>Age : {data.age}</p>
                        <p>Date of Birth : {data.birthDate}</p>
                        <p>Gender : {data.gender}</p>
                        <p>Height : {data.height}</p>
                        <p>Blood Group : {data.bloodGroup}</p>
                        <p>Eye Color : {data.eyeColor}</p>
                        <p>Hair Color : {data.hair.color}</p>
                        <p>Hair Type : {data.hair.type}</p>
                    </div>
                )
            }
            {
                error && (
                    <p>{error}</p>
                )
            }

            {
                !data.id && <p className="error-message">Invalid Credentials</p>
            }

            <footer id="footer">
                <p>© All rights reserved</p>
            </footer>
        </div>
    )
}

export default ProfilePage;