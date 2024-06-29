import Card from './../Card/Card';
import CustomerTabel from './../CustomerTabel/CustomerTabel';
import './../Home/Home.css';

function Home() {
  return (
    <>
      <div>
        <a
          href='/newClient'
          rel='noopener noreferrer'
          className='p-button add-client  text-white font-bold'
        >
          Add New Client
        </a>
      </div>

      <div className='mt-4 container'>
        <div className='row gap-3'>
          <Card title='test' body='some text to test' footer='footer test' />
        </div>
       
      </div>

      <CustomerTabel />
    </>
  );
}

export default Home;
