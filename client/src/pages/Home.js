import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import NameSubmit from '../components/NameSubmit'


export default function Home() {


    return (
        <div>
            <Navbar />
            <div className='container'>
                <h3>Check out the google doc for your picks results:</h3>
                <a href='https://docs.google.com/spreadsheets/d/1Lrf8mPnABvaX4TH1VlAf88yOWchWGz49sEbH_WUyG2w/edit#gid=0' target="_blank">https://docs.google.com/spreadsheets/d/1Lrf8mPnABvaX4TH1VlAf88yOWchWGz49sEbH_WUyG2w/edit#gid=0</a>
                <br></br>
                <br></br>
                <Link to="/picksam"><h3>Make Today's Pick</h3></Link>
                {/* <Link to="/pickspm"><h3>Make Today's PM Picks</h3></Link> */}
                <br></br>
                <br></br>
                <h5>Conference Tournament Schedules:</h5>
                <a href='https://www.ncaa.com/news/basketball-men/article/2024-02-23/2024-ncaa-conference-tournaments-schedules-brackets-scores-auto-bids' target="_blank">FULL LIST OF CONFERENCE TOURNAMENTS</a>
            </div>
        </div>
    )
}