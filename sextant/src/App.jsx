import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Cards';
import Banner from './components/Banner';

// https://www.ipify.org/
const IPv4_API = 'https://api.ipify.org?format=json'
const IPv6_API = 'https://api64.ipify.org?format=json'

async function getMyIpAddress(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.ip.toString());
    return data.ip.toString();
  } catch (error) {
    console.error(error);
    return '';  // Return an empty string or handle the error as needed
  }
}

export default function App() {
  const title = 'Sextant';

  const IPv4 = 'IPv4';
  const IPv6 = 'IPv6';

  const [ip4Add, setIp4Add] = useState('');
  const [ip6Add, setIp6Add] = useState('');

  useEffect(() => {
    const fetchIpAddress = async (url, ipVersion) => {
      try {
        const ip = await getMyIpAddress(url);
        if (ip) {
          if (ipVersion === IPv4) {
            setIp4Add(ip);
          } else if (ipVersion === IPv6) {
            setIp6Add(ip)
          }
          console.log(`My IP address is: ${ip}`);

        } else {
          console.log('Failed to retrieve IP address.');
        }
      } catch (error) {
        console.error('Error retrieving IP address:', error);
      }
    };

    fetchIpAddress(IPv4_API, IPv4);
    fetchIpAddress(IPv6_API, IPv6);
  }, []);

  return (
    <>
      <div className='col-4 rounded text-bg-primary p-3 mx-auto my-4'>
        <Banner title={title} />
      </div>

      {/* display cards */}
      <div className='container'>
        <div className='row my-2'>
          <div className='col'>
            <Card cardTitle={IPv4} ip={ip4Add} />
          </div>
          <div className='col'>
            <Card cardTitle={IPv6} ip={ip6Add} />
          </div>
        </div>
      </div>
    </>
  );
}

