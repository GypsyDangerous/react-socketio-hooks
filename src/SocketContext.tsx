import React, {useRef, useCallback, useContext, createContext} from 'react'
import io from "socket.io-client";

interface Props {
    path: string,
}

const SocketContext = createContext({})

const SocketContextProvider : React.FC<Props> = ({path}) =>  {
    const SocketRef = useRef<SocketIOClient.Socket>(null)


    return (
        <SocketContext.Provider>

        </SocketContext.Provider>    
    )
}

export default SocketContext
