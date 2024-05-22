import './App.css';
import Card from './components/Cards';
import Banner from './components/Banner';

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
            <Card id={1}/>
          </div>
          <div className='col'>
            <Card id={2}/>
          </div>
          <div className='col'>
            <Card id={3}/>
          </div>
        </div>
      </div>
    </>
  );
}

