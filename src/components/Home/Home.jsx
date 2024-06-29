import Card from './../Card/Card';
import CustomerTabel from './../CustomerTabel/CustomerTabel';
import './../Home/Home.css';

function Home() {
  return (
    <>
      <div className='mt-4 container-dash'>
        <div className='container-cards gap-3'>
          <Card title='test' body='some text to test' statisticNumber='125' />
          <Card title='test' body='some text to test' statisticNumber='125' />
          <Card title='test' body='some text to test' statisticNumber='125' />
          <Card title='test' body='some text to test' statisticNumber='125' />
        </div>
        <CustomerTabel />

      </div>

    </>
  );
}

export default Home;
