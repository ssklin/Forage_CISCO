import './App.css';
import Card from './components/Card';
import Banner from './components/Banner';
import LatencyCalculator from './components/LatencyCalculator';
import IpDisplay from './components/IpDisplay';

export default function App() {
  const title = 'Sextant';

  return (
    <>
      <div className='col-4 rounded text-bg-primary p-3 mx-auto my-4'>
        <Banner title={title} />
      </div>

      {/* display cards */}
      <div className='container'>
        <div className='row my-2'>
          <div className='col'>
            <Card cardTitle='IPv4' child={<IpDisplay ipVersion='IPv4'/>} />
          </div>
          <div className='col'>
            <Card cardTitle='IPv6' child={<IpDisplay ipVersion='IPv6'/>} />
          </div>
          <div className='col'>
            <Card cardTitle='Latency' child={<LatencyCalculator />} >
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

