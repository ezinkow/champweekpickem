import React from 'react'
import { useState } from 'react'

export default function PicksAM() {
    const [uScore, setUScore] = useState('')
    const [fScore, setFScore] = useState('')

    const handleUScore = event => {
        setUScore(event.target.value)
    }

    const handleFScore = event => {
        setFScore(event.target.value)
    }

    return (
        <tr>
            <td>Tiebreaker: Big Ten Score</td>
            <td>Put winning score first</td>
            <td><input onChange={handleUScore} type="text" id="tiebreakeru" name="underdog score" size="10" /></td>
            <td><input onChange={handleFScore} type="text" id="tiebreakerf" name="favorite score" size="10" /></td>
        </tr>
    )
}

