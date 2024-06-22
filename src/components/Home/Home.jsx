import Card from './../Card/Card';
import CustomerTabel from './../CustomerTabel/CustomerTabel';
import './../Home/Home.css'

function Home() {
  return (
    <div className=''>
      <div className=''>
        <a
          href='/newClient'
          rel='noopener noreferrer'
          className='p-button add-client  text-white font-bold'
        >
          Add New Client
        </a>
      </div>

      <div className=''>
        <div className='mt-4'>
          <div className='row'>
            <Card title='test' body='some text to test' footer='footer test' />
          </div>
          <div className='col-xl-3 col-md-6 mb-4'>
            <div className='card border-left-primary shadow h-100 py-2'>
              <div className='card-body'>
                <div className='row no-gutters align-items-center'>
                  <div className='col mr-2'>
                    <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                      Earnings (Monthly)
                    </div>
                    <div className='h5 mb-0 font-weight-bold text-gray-800'>
                      $40,000
                    </div>
                  </div>
                  <div className='col-auto'>
                    <i className='fas fa-calendar fa-2x text-gray-300'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomerTabel />
      </div>
    </div>
  );
}

export default Home;
