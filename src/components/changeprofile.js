// Import the useContext hook and the AppContext so we can use the global context values here
import {useContext, useState} from 'react'
import {AppContext} from '../App'

export const ChangeProfile = () => {
    // I can now transfer variables and functions to this context with useContext
   const {setUsername} = useContext(AppContext);

    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input onChange={(event)=> {setNewUsername(event.target.value)
            }}/>
            
            <button onClick={()=>{
                setUsername(newUsername)
            }}>Update username</button>
        </div>
    )}