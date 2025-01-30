import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

// const [links, setLinks] = useState('ncaa.com')

// useEffect(() => {
//     async function fetchLinks() {
//         try {
//             const response = await axios("api/links/")
//             setLinks(response.data.url)
//             console.log(links)
//         } catch (e) {
//             console.log(e)
//         }
//     }
//     fetchLinks()
// }, [])


export default function Home() {


    return (
        <div>
            <Navbar />
            <div className='container'>
                <br></br>
                <br></br>
                <Link to="/picksam"><h3>Make Today's AM Picks</h3></Link>
                <Link to="/pickspm"><h3>Make Today's PM Picks</h3></Link>
                <br></br>
                <br></br>
                <h5>Conference Tournament Schedules:</h5>
                <a href='https://www.ncaa.com/news/basketball-men/article/2025-03-16/2025-ncaa-conference-tournaments-schedules-brackets-scores-auto-bids' target="_blank">FULL LIST OF CONFERENCE TOURNAMENTS</a>
            </div>
        </div>
    )
}