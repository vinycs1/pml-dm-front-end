import React, { useState } from 'react'
import './result.css'
import { axiosClient } from "../shared/axios"
import Button from '@atlaskit/button/standard-button';

export const Result =()=>{
    const [result, setResult] = useState([])

    const showResult =() =>{
        axiosClient.get(`anwsers/`)
            .then(res => setResult(res.data))
    }

    return (
        <div style={{marginTop: '20px'}}>
             <Button appearance="primary" onClick={showResult} >Go!</Button>
            <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Resposta</th>
                </tr>
            </thead>
                <tbody>
            {result.map((result, index) => (
                <tr key={result.name}>
                    <td style={{color: 'white'}}>{index +1}</td>
                    <td style={{color: 'white'}}>{result.name}</td>
                    <td style={{color: 'white'}}>{result.awnser}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    )
}