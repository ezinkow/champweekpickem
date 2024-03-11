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
                console.log('response', response)
                setPicks(response.data)
                console.log('picks', picks)
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
                console.log('response', response)
                setGames(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchGames()
    }, [])
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
                        {picks.length > 0 ? picks.map(thisPick =>
                            <tr>
                                <td key={thisPick.name}>{thisPick.name}</td>
                                {thisPick.length > 0 ? thisPick.map(singlePick =>
                                    <td key={thisPick.id}>{singlePick.pick}</td>
                                ) : ""
                                }
                            </tr>
                        ) : ""
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}



