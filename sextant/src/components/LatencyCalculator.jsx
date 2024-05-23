import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:55455');

function LatencyCalculator() {
    const [latency, setLatency] = useState(0);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onclose = () => {
            console.log('WebSocket Client Closed');
        };

        client.onmessage = (message) => {
            const receivedTime = new Date().getTime();
            const sentTime = parseInt(message.data, 10); // Ensure the message data is parsed as an integer
            setLatency(receivedTime - sentTime);
            console.log(latency);
        };

        client.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };
    }, []);

    return (
        <div>
            <h1>Packet Latency</h1>
            <p>Latency: {latency !== null ? `${latency} ms` : 'No data yet'}</p>
        </div>
    );
}

export default LatencyCalculator;