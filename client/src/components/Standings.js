import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function Standings() {
    const [standings, setStandings] = useState([])
    const [picks, setPicks] = useState()
    
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    useEffect(() => {
        async function fetchStandings() {
            try {
                const response = await axios(`api/standings/`)
                setStandings(response.data)
                // console.log(response.data)
                // let rank = ""
                // let newArr = [{rank: 1, name: response.data[0].name, points:response.data[0].points}]
                // for (let i = 0; i < response.data.length; i++) {
                //     if(response.data[i].points > response.data[i+1].points)
                //     newArr.push({rank: 2, name: response.data[i+1].name, points:response.data[i+1].points})
                //     if (response.data[i].points === response.data[i+1].points) {
                //         newArr.push({rank: 1, name: response.data[i+1].name, points:response.data[i+1].points})
                //     }
                    
                //     console.log(newArr)
                // }
            } catch (e) {
                console.log(e)
            }
        }
        fetchStandings()
    }, []);

    useEffect(() => {
        async function fetchPicks() {
            try {
                const response = await axios(`api/picksdisplay`)
                // console.log('response', response)
                const newArr = response.data
                for (let i = 0; i < newArr.length; i++) {
                    const thisPickSet = newArr[i];
                    const newPickArr = thisPickSet.pick.split(',')
                    newArr[i].pick = newPickArr
                }
                setPicks(newArr)
                // console.log('thissss', picks)
                // console.log('picks', response.data, picks)
                // response.data.map(res => 
                // console.log('respick', res.pick)
                // )
            } catch (e) {
                console.log(e)
            }
        }
        fetchPicks()
    }, []);


    const tableGrid =
        standings.map(standing =>
            <tr>
                <>
                    
                    {/* <td key={standing.rank}>{standing.rank}</td> */}
                    <td key={standing.name}>{standing.name}</td>
                    <td key={standing.points}>{standing.points}</td>
                </>
            </tr>
        )


    return (
        <div className='container'>
            <br></br>
            <div className="table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>Rank</th> */}
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableGrid}
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

