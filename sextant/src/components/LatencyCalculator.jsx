import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";


function LatencyCalculator() {
    const [latency, setLatency] = useState('-');

    useEffect(() => {
        const client = new W3CWebSocket('ws://localhost:55455');

        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onclose = () => {
            console.log('WebSocket Client Closed');
        };

        client.onmessage = (message) => {
            console.log(`message = ${message.data}`);
            
            let data;
            try {
                data = JSON.parse(message.data);
            } catch (err) {
                console.error('Error parsing message data as JSON:', err);
                return;
            }

            const receivedTime = new Date().getTime();
            const sentTime = data.timestamp;
            console.log(`receivedTime = ${receivedTime}`);
            console.log(`sentTime = ${sentTime}`);
            
            const calculatedLatency = receivedTime - sentTime;
            setLatency(calculatedLatency);
            console.log(`latency = ${calculatedLatency} ms`);
        };

        client.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };
        return () => {
            client.close();
        };
    }, []);

    return (
        <div>
            <h1>Packet Latency:</h1>
            <p>{latency !== null ? `${latency} ms` : 'No data yet'}</p>
        </div>
    );
}

export default LatencyCalculator;