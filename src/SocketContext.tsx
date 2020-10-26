import React, { useRef, useEffect, createContext, ReactChild } from "react";
import io from "socket.io-client";

interface Props {
	url: string;
    children: ReactChild;
    opts?: SocketIOClient.ConnectOpts;
}

export const SocketContext = createContext<SocketIOClient.Socket | null>(null);

export const SocketProvider: React.FC<Props> = ({ url, children, opts }) => {
	const SocketRef = useRef<SocketIOClient.Socket | null>(io(url, opts));

	useEffect(() => {
		if (!SocketRef.current) {
			SocketRef.current = io(url, opts);
		}
		return () => {
			SocketRef.current?.disconnect();
			SocketRef.current = null;
		};
	}, [url]);

	return <SocketContext.Provider value={SocketRef.current}>{children}</SocketContext.Provider>;
};
