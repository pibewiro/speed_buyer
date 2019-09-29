import React from 'react'
import {Link} from "react-router-dom"

export default function Profile() {

    return (
        <div className="child">

        <Link to="/choose_profile" className="btn crt-prf-btn">Create Profile</Link>
        </div>
        )
}
