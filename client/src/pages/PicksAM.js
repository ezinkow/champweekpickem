import React from 'react'
import Navbar from '../components/Navbar'
import PicksAM from '../components/PicksAM'

export default function TodaysPicksAm() {


    return (
        <div>
            <Navbar />
            <div className='=container'>
                <PicksAM />
            </div>
        </div>
    )
}