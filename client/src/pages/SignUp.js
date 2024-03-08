import React from 'react'
import Navbar from '../components/Navbar'
import NameSubmit from '../components/NameSubmit'


export default function SignUp() {


    return (
        <div>
            <Navbar />
            <div className='container'>
                <NameSubmit />
              </div>
        </div>
    )
}