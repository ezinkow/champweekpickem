import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import NameSubmit from '../components/NameSubmit'


export default function Home() {


    return (
        <div>
            <Navbar />
            <div className='container'>
                The game:
                Pick every conference tournamet game <u>against the spread</u> from the following conferences:
                American
                ACC
                Big East
                Big 10
                Big 12
                SEC
                A10 (new this year)
                Mountain West (new this year)
                <br></br>
                <br></br>
                AND ALL conference championship games between March 8th and 16th.
                <br></br>
                <br></br>
                <Link to="/picksam"><h3>Make Today's AM Picks</h3></Link>
                <Link to="/pickspm"><h3>Make Today's PM Picks</h3></Link>
                <br></br>
                <br></br>
                <h5>Conference Tournament Schedules:</h5>
                <a href='https://www.ncaa.com/news/basketball-men/article/2025-02-12/2025-ncaa-conference-tournaments-schedules-brackets-scores-auto-bids' target="_blank">FULL LIST OF CONFERENCE TOURNAMENTS</a>
            </div>
        </div>
    )
}