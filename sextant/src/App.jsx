import './App.css';
import Card from './components/Cards';
import Banner from './components/Banner';

// https://www.ipify.org/
const IPv4_API = 'https://api.ipify.org?format=json'
// const IPv6_API = 'https://api6.ipify.org?format=json'
// const IPv4_IPv6 = 'https://api64.ipify.org?format=json'

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
  let ipAdd = '';

  getMyIpAddress(IPv4_API).then(ip => {
    if (ip) {
      console.log(`My IP address is: ${ip}`);
      ipAdd = ip
    } else {
      console.log('Failed to retrieve IP address.');
    }
  });
  console.log('App function ' + ipAdd)
  return (
    <>
      <div className='col-4 rounded text-bg-primary p-3 mx-auto my-4'>
        <Banner title={title} />
      </div>

      {/* display cards */}
      <div className='container'>
        <div className='row my-2'>
          <div className='col'>
            <Card id={1} ip={ipAdd} />
          </div>
          <div className='col'>
            <Card id={2} ip={ipAdd} />
          </div>
          <div className='col'>
            <Card id={3} ip={ipAdd} />
          </div>
        </div>
      </div>
    </>
  );
}

