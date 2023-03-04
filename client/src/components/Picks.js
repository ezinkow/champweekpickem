import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';

export default function Picks() {
    const [name, setName] = useState('SELECT YOUR NAME IN DROPDOWN!')
    const [names, setNames] = useState([''])
    const [games, setGames] = useState([])
    const [picks, setPicks] = useState([])
    const [nameToast, setNameToast] = useState('')
    const [currentPick, setCurrentPick] = useState([])
    const [modalIsOpen, setIsOpen] = useState('')
    const todaysDate = '34'

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
        async function fetchGames() {
            try {
                const response = await axios(`api/games/${todaysDate}`)
                setGames(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchGames()
    }, [])

    useEffect(() => {
        async function fetchNames() {
            try {
                const response = await axios('api/names')
                const sortedList = response.data.sort((a, b) =>
                    a.name.localeCompare(b.name));
                setNames(sortedList)
            } catch (e) {
                console.log(e)
            }
        }
        fetchNames()
    }, [])

    // Set Name
    const handleNameSelect = event => {
        setName(event);
        setNameToast(event);
    };

    const namesList =
        names.map(name =>
            <Dropdown.Item
                eventKey={name.name}
                key={name.name}
            >
                {name.name}
            </Dropdown.Item>
        )

    // Set Picks
    const handleChange = (event, id, underdog, favorite, line) => {
        let activePicks = picks
        const currentPick = event.target.value
        const currentGameId = id
        const currentUnderdog = underdog
        const currentFavorite = favorite
        const currentLine = line
        const currentPickObj = {
            game: currentGameId,
            pick: currentPick,
            dog: currentUnderdog,
            fave: currentFavorite,
            lin: currentLine
        }
        setCurrentPick(currentPick)
        if (activePicks.length > 0) {
            let findCurrentPick = activePicks.find(o => o.game === currentGameId)
            if (findCurrentPick === undefined) {
                activePicks.push(currentPickObj)
                setPicks(activePicks)
            } else {
                findCurrentPick.pick = currentPick
                setPicks(activePicks)
            }
        } else {
            activePicks.push(currentPickObj)
            setPicks(activePicks);
        }
    }

    const tableGrid =
        games.map(game =>
            // picks.map(pick =>
            <tr>
                <>
                    <td key={game.id}>{game.id}</td>
                    <td key={game.time}>{game.time}</td>
                    <td key={game.underdog}>{game.underdog}</td>
                    <td key={game.favorite}>{game.favorite}</td>
                    <td key={game.line}>-{game.line}</td>
                    <td>
                        <select
                            key={game.id}
                            value={game.id}
                            onChange={() => { handleChange(event, game.id, game.underdog, game.favorite, game.line) }}
                        >
                            <option
                                key='pick'
                                value=''
                            >

                            </option>
                            <option
                                key={game.underdog}
                                value={game.underdog}
                            >
                                {game.underdog} (+{game.line})
                            </option>
                            <option
                                key={game.favorite}
                                value={game.favorite}
                            >
                                {game.favorite} (-{game.line})
                            </option>
                        </select>
                    </td>
                    {/* <td>{pick.pick}</td> */}
                </>
            </tr>
            // )
        )


    // Send name and picks to database and reset fields
    function handleSubmitClick(event) {

        // toast.error('Come back later when games are ready to make your picks!',
        // {
        //     duration: 5000,
        //     position: 'top-center',
        //     style: {
        //         border: '2px solid #713200',
        //         padding: '20px',
        //         marginTop: '100px',
        //         backgroundColor: 'rgb(255,0,0)',
        //         color: 'rgb(255,255,255)'
        //     },})

        if (name != 'SELECT YOUR NAME IN DROPDOWN!') {
            event.preventDefault()
            setIsOpen(true);
            for (let i = 0; i < picks.length; i++) {
                const game_id = picks[i].game;
                const pick = picks[i].pick
                axios.post('api/picks', {
                    name,
                    game_id,
                    pick
                })
                setName("")
                setPicks("")
                toast.success(`Thanks, ${nameToast}, picks submitted.`,
                    {
                        duration: 10000,
                        position: 'top-center',
                        style: {
                            border: '2px solid #713200',
                            padding: '20px',
                            marginTop: '100px',
                            color: 'white',
                            backgroundColor: 'rgb(60, 179, 113, 0.7)'
                        },
                        icon: '🏀',
                        role: 'status',
                        ariaLive: 'polite',
                    });
            }
        } else {toast.error('Please select name in dropdown!',
        {
            duration: 5000,
            position: 'top-center',
            style: {
                border: '2px solid #713200',
                padding: '20px',
                marginTop: '100px',
                backgroundColor: 'rgb(255,0,0)',
                color: 'rgb(255,255,255)'
            },
        });}

    }

    return (
        <div className='container'>
            <Toaster />
            <h3>Steps:</h3>
            <ul>
                <li>Select CORRECT name from drop down</li>
                <li>Make your picks. Try to do them in order. You can always go back and change your pick</li>
                <li>Picks will show up in the table down below</li>
                <li>When ready, submit your picks. If you need to make a change, just reach out to me. DO NOT re-submit picks</li>
                <li>The google doc will still house your picks and results</li>
            </ul>
            <DropdownButton
                id="dropdown-basic-button"
                title='Name'
                onSelect={handleNameSelect}
                key='dropdown'>{namesList}
            </DropdownButton>
            <h4> Name: {name} || Your last pick: {currentPick}</h4>
            <div className="table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Game #</th>
                            <th>Time (ET)</th>
                            <th>Underdog</th>
                            <th>Favorite</th>
                            <th>Line</th>
                            <th>Pick</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableGrid}
                    </tbody>
                </Table>

                <Button onClick={handleSubmitClick}>Submit</Button>
            </div>
            <>
                <h3>Picks:</h3>
                <div className="table picksTable">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th key='game id'>#</th>
                                <th key='game'>Game</th>
                                <th key='game pick'>Pick</th>
                            </tr>
                        </thead>
                        <tbody>
                            {picks.length > 0 ? picks.map(thisPick =>
                                <tr>
                                    <td key={thisPick.game}>{thisPick.game}</td>
                                    <td key='matchup'>{thisPick.dog} vs {thisPick.fave} (-{thisPick.lin})</td>
                                    <td key={thisPick.pick}>{thisPick.pick}</td>
                                </tr>
                            ) : ""
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        </div>
    )
}

