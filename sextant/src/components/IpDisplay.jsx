import { useEffect, useState } from "react";

const IPv4 = 'IPv4';
const IPv6 = 'IPv6';

const IpDisplay = ({ipVersion}) => {
    // https://www.ipify.org/
    const IPv4_API = 'https://api.ipify.org?format=json';
    const IPv6_API = 'https://api64.ipify.org?format=json';

    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        const fetchIpAddress = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const ip = data.ip.toString();
                if (ip) {
                    setIpAddress(ip)
                    console.log(`My IP address is: ${ip}`);

                } else {
                    console.log('Failed to retrieve IP address.');
                }
            } catch (error) {
                console.error('Error retrieving IP address:', error);
            }
        };

        if (ipVersion === IPv4) {
            fetchIpAddress(IPv4_API, IPv4);
            console.log('useEffect IPv4');
        } else if (ipVersion === IPv6) {
            fetchIpAddress(IPv6_API, IPv6);
            console.log('useEffect IPv6');
        }

    }, [ipVersion]);


    return (
        <div>
            {ipAddress}
        </div>
    );
}

/*
const IPv4 = 'IPv4';
const IPv6 = 'IPv6';

const IpDisplay = ({ ipVersion }) => {
    const IPv4_API = 'https://api.ipify.org?format=json';
    const IPv6_API = 'https://api64.ipify.org?format=json';

    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        const fetchIpAddress = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const ip = data.ip.toString();
                if (ip) {
                    setIpAddress(ip);
                    console.log(`My IP address is: ${ip}`);
                } else {
                    console.log('Failed to retrieve IP address.');
                }
            } catch (error) {
                console.error('Error retrieving IP address:', error);
            }
        };

        if (ipVersion === IPv4) {
            fetchIpAddress(IPv4_API);
            console.log('useEffect IPv4');
        } else if (ipVersion === IPv6) {
            fetchIpAddress(IPv6_API);
            console.log('useEffect IPv6');
        }
    }, [ipVersion]);

    return (
        <div>
            {ipAddress}
        </div>
    );
};

*/

export default IpDisplay;