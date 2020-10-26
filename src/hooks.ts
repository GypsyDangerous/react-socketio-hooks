import { useRef, useContext, useCallback, useEffect } from "react";
import { SocketContext } from "./SocketContext";

export function useSocket() {
	const context = useContext(SocketContext);
	if (!context) {
		throw new Error("UseSocket must be used within a SocketProvider");
	}
	return context;
}

export const useSocketEvent = (eventName: string, callback: (...args: any) => void) => {
	const socket = useSocket();

	const subscribe = () => {
		if (eventName) {
			socket.on(eventName, callback);
		}
	};

	const unsubscribe = () => {
		if (eventName) {
			socket.removeListener(eventName, callback);
		}
	};

	useEffect(() => {
		subscribe();

		return unsubscribe;
    }, [eventName]);
    
    return {subscribe, unsubscribe}
};
