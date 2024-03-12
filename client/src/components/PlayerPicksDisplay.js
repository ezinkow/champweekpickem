import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function PicksDisplay() {
    const [picks, setPicks] = useState([])
    const [games, setGames] = useState([])

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
    }, [])

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await axios(`api/games`)
                // console.log('response', response)
                setGames(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchGames()
    }, []);

    // let pickSet = ""
    // if (picks.length > 0) {
    //     for (let i = 0; i < picks.length; i++) {
    //         for (let j = 0; j < picks.length; j++) {
    //             // const element = picks[j];
    //             pickSet = picks[i].pick[j]
    //             console.log('pickset', pickSet)
    //         }
    //     }
    // }

    return (

        <div className="table">
            <h3>Picks:</h3>
            <div className="table picksTable">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th key='game id'>Name</th>
                            {games.length > 0 ? games.map(game =>
                                <th key='game pick'>{game.underdog} vs {game.favorite}</th>
                            ) : ""
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {picks.length > 0 ? picks.map(thisPickSet =>
                            <tr>
                                <td key={thisPickSet.name}>{thisPickSet.name}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[1]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[2]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[3]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[4]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[5]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[6]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[7]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[8]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[9]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[10]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[11]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[12]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[13]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[14]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[15]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[16]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[17]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[18]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[19]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[20]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[21]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[22]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[23]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[24]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[25]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[26]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[27]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[28]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[29]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[30]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[31]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[32]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[33]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[34]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[35]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[36]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[37]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[38]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[39]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[40]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[41]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[42]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[43]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[44]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[45]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[46]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[47]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[48]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[49]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[50]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[51]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[52]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[53]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[54]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[55]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[56]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[57]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[58]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[59]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[60]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[61]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[62]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[63]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[64]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[65]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[66]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[67]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[68]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[69]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[70]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[71]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[72]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[73]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[74]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[75]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[76]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[77]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[78]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[79]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[80]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[81]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[82]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[83]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[84]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[85]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[86]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[87]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[88]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[89]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[90]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[91]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[92]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[93]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[94]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[95]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[96]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[97]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[98]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[99]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[100]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[101]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[102]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[103]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[104]}</td>
                                <td key={thisPickSet.id}>{thisPickSet.pick[105]}</td>
                            </tr>
                        ) : ""
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}



