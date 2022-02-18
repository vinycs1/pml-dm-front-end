import React, {useState} from 'react';

import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button/standard-button';
import {MembersSelector} from '../members/members-selector'
import { axiosClient } from "../shared/axios"

export  const AnwserInput = () => {
    const [value, setValue] = useState({memberId:null, anwser:null})
    const [showError, setShowError] = useState(false)

  const onSubmit = () =>{
    if(!value.memberId || !value.anwser){
      setShowError(true);
      return
    }else{
      setShowError(false);
    }

    axiosClient.post(`anwsers/`, value)
  }

  return(
    <div style={{width: '300px'}}>
      {showError && <div style={{color: 'white'}} >Preenche os bagulhos ai</div>}
        <MembersSelector onChange={(value) => setValue(prev => ({...prev, memberId: value.value }))}/>
        <Textfield
        value={value.anwser} 
        onChange={(e) => setValue(prev =>({ ...prev , anwser:e.target.value}))} />
      <Button appearance="primary" onClick={onSubmit} >Submit</Button>
    </div>
  ) 
 
}