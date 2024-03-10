import React from 'react'
import Navbar from '../components/Navbar'
import ActiveGames from '../components/ActiveGames'

export default function TodaysActiveGames() {


    return (
        <div>
            <Navbar />
            <div className='=container'>
                <ActiveGames />
            </div>
        </div>
    )
}