import React,{useState, useEffect} from 'react';
import Select from '@atlaskit/select';
import { axiosClient } from "../shared/axios"

export const MembersSelector = ({onChange}) =>{
    const [members, setMembers] = useState([])

    useEffect(()=>{
        axiosClient.get(`anwsers/members/`)
        .then(res => {
            setMembers(res.data)
        })
        .catch(e=> console.log(e));
    }, [])

    return(
        <Select 
            onChange={onChange} 
            options={members.map(member => ({value: member.id, label: member.name}))}
        />
    )
}