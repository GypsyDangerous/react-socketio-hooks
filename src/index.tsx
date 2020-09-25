import {useEffect, useCallback, useRef} from "react";
import io from "socket.io-client";

export const useSocket = (path: string) => {
    const SocketRef = useRef<SocketIOClient.Socket>()
    
    useEffect(() => {
        if(!SocketRef.current){
            SocketRef.current = io(path)
        }
        return () => {
            SocketRef.current?.disconnect()
        }
    }, [path])

    const addEventListener = useCallback((name: string, callback: any)  => {
        SocketRef.current?.on(name, callback)
        
    }, [])

	return {SocketRef, addEventListener};
};
