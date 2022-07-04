import React, { useContext } from 'react'

import { appContext } from '../App';


const Context = () => {
    const details = useContext(appContext);
    return (<>{
        details && (
            <div>
                <h2>Linguagem: {details.language}</h2>
                <h3>Framework: {details.framework}</h3>
                <h3>Projects: {details.projects}</h3>
            </div>
        )
    }
    </>)
}

export default Context