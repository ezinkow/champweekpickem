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
                const response2 = await axios(`api/picksdisplayoverflow`)
                let newArr = response.data
                let newArr2 = response2.data
                for (let i = 0; i < newArr.length; i++) {
                    const thisPickSet = newArr[i];
                    const thisPickSet2 = newArr2[i];
                    const newPickArr = thisPickSet.pick.split(',')
                    if (thisPickSet2) {
                        const newPickArr2 = thisPickSet2.pick.split(',')
                        const newNewPickArr = newPickArr.concat(newPickArr2)
                        newArr[i].pick = newNewPickArr   
                    } else {
                        newArr[i].pick = newPickArr   
                    }
                }
                setPicks(newArr)
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

    return (

        <div className="table">
            <h3>Picks:</h3>
            <div className="table-scroll">
                <table className="table-main picksTable">
                    <thead>
                        <tr>
                            <th className="fix-col" key='game id'>Name</th>
                            {games.length > 0 ? games.map(game =>
                                <th key={game.id}>{game.underdog} vs {game.favorite} (-{game.line})</th>
                            ) : ""
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {picks.length > 0 ? picks.map(thisPickSet =>
                            <tr>
                                <th className="fix-col">{thisPickSet.name} ({thisPickSet.points})</th>
                                <td key={thisPickSet.pick[0]}>{thisPickSet.pick[0]}</td>
                                <td key={thisPickSet.pick[1]}>{thisPickSet.pick[1]}</td>
                                <td key={thisPickSet.pick[2]}>{thisPickSet.pick[2]}</td>
                                <td key={thisPickSet.pick[3]}>{thisPickSet.pick[3]}</td>
                                <td key={thisPickSet.pick[4]}>{thisPickSet.pick[4]}</td>
                                <td key={thisPickSet.pick[5]}>{thisPickSet.pick[5]}</td>
                                <td key={thisPickSet.pick[6]}>{thisPickSet.pick[6]}</td>
                                <td key={thisPickSet.pick[7]}>{thisPickSet.pick[7]}</td>
                                <td key={thisPickSet.pick[8]}>{thisPickSet.pick[8]}</td>
                                <td key={thisPickSet.pick[9]}>{thisPickSet.pick[9]}</td>
                                <td key={thisPickSet.pick[10]}>{thisPickSet.pick[10]}</td>
                                <td key={thisPickSet.pick[11]}>{thisPickSet.pick[11]}</td>
                                <td key={thisPickSet.pick[12]}>{thisPickSet.pick[12]}</td>
                                <td key={thisPickSet.pick[13]}>{thisPickSet.pick[13]}</td>
                                <td key={thisPickSet.pick[14]}>{thisPickSet.pick[14]}</td>
                                <td key={thisPickSet.pick[15]}>{thisPickSet.pick[15]}</td>
                                <td key={thisPickSet.pick[16]}>{thisPickSet.pick[16]}</td>
                                <td key={thisPickSet.pick[17]}>{thisPickSet.pick[17]}</td>
                                <td key={thisPickSet.pick[18]}>{thisPickSet.pick[18]}</td>
                                <td key={thisPickSet.pick[19]}>{thisPickSet.pick[19]}</td>
                                <td key={thisPickSet.pick[20]}>{thisPickSet.pick[20]}</td>
                                <td key={thisPickSet.pick[21]}>{thisPickSet.pick[21]}</td>
                                <td key={thisPickSet.pick[22]}>{thisPickSet.pick[22]}</td>
                                <td key={thisPickSet.pick[23]}>{thisPickSet.pick[23]}</td>
                                <td key={thisPickSet.pick[24]}>{thisPickSet.pick[24]}</td>
                                <td key={thisPickSet.pick[25]}>{thisPickSet.pick[25]}</td>
                                <td key={thisPickSet.pick[26]}>{thisPickSet.pick[26]}</td>
                                <td key={thisPickSet.pick[27]}>{thisPickSet.pick[27]}</td>
                                <td key={thisPickSet.pick[28]}>{thisPickSet.pick[28]}</td>
                                <td key={thisPickSet.pick[29]}>{thisPickSet.pick[29]}</td>
                                <td key={thisPickSet.pick[30]}>{thisPickSet.pick[30]}</td>
                                <td key={thisPickSet.pick[31]}>{thisPickSet.pick[31]}</td>
                                <td key={thisPickSet.pick[32]}>{thisPickSet.pick[32]}</td>
                                <td key={thisPickSet.pick[33]}>{thisPickSet.pick[33]}</td>
                                <td key={thisPickSet.pick[34]}>{thisPickSet.pick[34]}</td>
                                <td key={thisPickSet.pick[35]}>{thisPickSet.pick[35]}</td>
                                <td key={thisPickSet.pick[36]}>{thisPickSet.pick[36]}</td>
                                <td key={thisPickSet.pick[37]}>{thisPickSet.pick[37]}</td>
                                <td key={thisPickSet.pick[38]}>{thisPickSet.pick[38]}</td>
                                <td key={thisPickSet.pick[39]}>{thisPickSet.pick[39]}</td>
                                <td key={thisPickSet.pick[40]}>{thisPickSet.pick[40]}</td>
                                <td key={thisPickSet.pick[41]}>{thisPickSet.pick[41]}</td>
                                <td key={thisPickSet.pick[42]}>{thisPickSet.pick[42]}</td>
                                <td key={thisPickSet.pick[43]}>{thisPickSet.pick[43]}</td>
                                <td key={thisPickSet.pick[44]}>{thisPickSet.pick[44]}</td>
                                <td key={thisPickSet.pick[45]}>{thisPickSet.pick[45]}</td>
                                <td key={thisPickSet.pick[46]}>{thisPickSet.pick[46]}</td>
                                <td key={thisPickSet.pick[47]}>{thisPickSet.pick[47]}</td>
                                <td key={thisPickSet.pick[48]}>{thisPickSet.pick[48]}</td>
                                <td key={thisPickSet.pick[49]}>{thisPickSet.pick[49]}</td>
                                <td key={thisPickSet.pick[50]}>{thisPickSet.pick[50]}</td>
                                <td key={thisPickSet.pick[51]}>{thisPickSet.pick[51]}</td>
                                <td key={thisPickSet.pick[52]}>{thisPickSet.pick[52]}</td>
                                <td key={thisPickSet.pick[53]}>{thisPickSet.pick[53]}</td>
                                <td key={thisPickSet.pick[54]}>{thisPickSet.pick[54]}</td>
                                <td key={thisPickSet.pick[55]}>{thisPickSet.pick[55]}</td>
                                <td key={thisPickSet.pick[56]}>{thisPickSet.pick[56]}</td>
                                <td key={thisPickSet.pick[57]}>{thisPickSet.pick[57]}</td>
                                <td key={thisPickSet.pick[58]}>{thisPickSet.pick[58]}</td>
                                <td key={thisPickSet.pick[59]}>{thisPickSet.pick[59]}</td>
                                <td key={thisPickSet.pick[60]}>{thisPickSet.pick[60]}</td>
                                <td key={thisPickSet.pick[61]}>{thisPickSet.pick[61]}</td>
                                <td key={thisPickSet.pick[62]}>{thisPickSet.pick[62]}</td>
                                <td key={thisPickSet.pick[63]}>{thisPickSet.pick[63]}</td>
                                <td key={thisPickSet.pick[64]}>{thisPickSet.pick[64]}</td>
                                <td key={thisPickSet.pick[65]}>{thisPickSet.pick[65]}</td>
                                <td key={thisPickSet.pick[66]}>{thisPickSet.pick[66]}</td>
                                <td key={thisPickSet.pick[67]}>{thisPickSet.pick[67]}</td>
                                <td key={thisPickSet.pick[68]}>{thisPickSet.pick[68]}</td>
                                <td key={thisPickSet.pick[69]}>{thisPickSet.pick[69]}</td>
                                <td key={thisPickSet.pick[70]}>{thisPickSet.pick[70]}</td>
                                <td key={thisPickSet.pick[71]}>{thisPickSet.pick[71]}</td>
                                <td key={thisPickSet.pick[72]}>{thisPickSet.pick[72]}</td>
                                <td key={thisPickSet.pick[73]}>{thisPickSet.pick[73]}</td>
                                <td key={thisPickSet.pick[74]}>{thisPickSet.pick[74]}</td>
                                <td key={thisPickSet.pick[75]}>{thisPickSet.pick[75]}</td>
                                <td key={thisPickSet.pick[76]}>{thisPickSet.pick[76]}</td>
                                <td key={thisPickSet.pick[77]}>{thisPickSet.pick[77]}</td>
                                <td key={thisPickSet.pick[78]}>{thisPickSet.pick[78]}</td>
                                <td key={thisPickSet.pick[79]}>{thisPickSet.pick[79]}</td>
                                <td key={thisPickSet.pick[80]}>{thisPickSet.pick[80]}</td>
                                <td key={thisPickSet.pick[81]}>{thisPickSet.pick[81]}</td>
                                <td key={thisPickSet.pick[82]}>{thisPickSet.pick[82]}</td>
                                <td key={thisPickSet.pick[83]}>{thisPickSet.pick[83]}</td>
                                <td key={thisPickSet.pick[84]}>{thisPickSet.pick[84]}</td>
                                <td key={thisPickSet.pick[85]}>{thisPickSet.pick[85]}</td>
                                <td key={thisPickSet.pick[86]}>{thisPickSet.pick[86]}</td>
                                <td key={thisPickSet.pick[87]}>{thisPickSet.pick[87]}</td>
                                <td key={thisPickSet.pick[88]}>{thisPickSet.pick[88]}</td>
                                <td key={thisPickSet.pick[89]}>{thisPickSet.pick[89]}</td>
                                <td key={thisPickSet.pick[90]}>{thisPickSet.pick[90]}</td>
                                <td key={thisPickSet.pick[91]}>{thisPickSet.pick[91]}</td>
                                <td key={thisPickSet.pick[92]}>{thisPickSet.pick[92]}</td>
                                <td key={thisPickSet.pick[93]}>{thisPickSet.pick[93]}</td>
                                <td key={thisPickSet.pick[94]}>{thisPickSet.pick[94]}</td>
                                <td key={thisPickSet.pick[95]}>{thisPickSet.pick[95]}</td>
                                <td key={thisPickSet.pick[96]}>{thisPickSet.pick[96]}</td>
                                <td key={thisPickSet.pick[97]}>{thisPickSet.pick[97]}</td>
                                <td key={thisPickSet.pick[98]}>{thisPickSet.pick[98]}</td>
                                <td key={thisPickSet.pick[99]}>{thisPickSet.pick[99]}</td>
                                <td key={thisPickSet.pick[100]}>{thisPickSet.pick[100]}</td>
                                <td key={thisPickSet.pick[101]}>{thisPickSet.pick[101]}</td>
                                <td key={thisPickSet.pick[102]}>{thisPickSet.pick[102]}</td>
                                <td key={thisPickSet.pick[103]}>{thisPickSet.pick[103]}</td>
                                <td key={thisPickSet.pick[104]}>{thisPickSet.pick[104]}</td>
                                <td key={thisPickSet.pick[105]}>{thisPickSet.pick[105]}</td>
                                <td key={thisPickSet.pick[106]}>{thisPickSet.pick[106]}</td>
                                <td key={thisPickSet.pick[107]}>{thisPickSet.pick[107]}</td>
                                <td key={thisPickSet.pick[108]}>{thisPickSet.pick[108]}</td>
                                <td key={thisPickSet.pick[109]}>{thisPickSet.pick[109]}</td>
                                <td key={thisPickSet.pick[110]}>{thisPickSet.pick[110]}</td>
                                <td key={thisPickSet.pick[111]}>{thisPickSet.pick[111]}</td>
                                <td key={thisPickSet.pick[112]}>{thisPickSet.pick[112]}</td>
                                <td key={thisPickSet.pick[113]}>{thisPickSet.pick[113]}</td>
                                <td key={thisPickSet.pick[114]}>{thisPickSet.pick[114]}</td>
                                <td key={thisPickSet.pick[115]}>{thisPickSet.pick[115]}</td>
                                <td key={thisPickSet.pick[116]}>{thisPickSet.pick[116]}</td>
                                <td key={thisPickSet.pick[117]}>{thisPickSet.pick[117]}</td>
                                <td key={thisPickSet.pick[118]}>{thisPickSet.pick[118]}</td>
                                <td key={thisPickSet.pick[119]}>{thisPickSet.pick[119]}</td>
                                <td key={thisPickSet.pick[120]}>{thisPickSet.pick[120]}</td>
                                <td key={thisPickSet.pick[121]}>{thisPickSet.pick[121]}</td>
                                <td key={thisPickSet.pick[122]}>{thisPickSet.pick[122]}</td>
                                <td key={thisPickSet.pick[123]}>{thisPickSet.pick[123]}</td>
                                <td key={thisPickSet.pick[124]}>{thisPickSet.pick[124]}</td>
                                <td key={thisPickSet.pick[125]}>{thisPickSet.pick[125]}</td>
                                <td key={thisPickSet.pick[126]}>{thisPickSet.pick[126]}</td>
                                <td key={thisPickSet.pick[127]}>{thisPickSet.pick[127]}</td>
                                <td key={thisPickSet.pick[128]}>{thisPickSet.pick[128]}</td>
                            </tr>
                        ) : ""
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}



