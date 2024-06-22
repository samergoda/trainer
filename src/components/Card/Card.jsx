import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Card({ title, body, footer }) {
  return (
    <div className='col-xl-3 p-0 col-md-6 mb-4'>
      <div className='card border-left-primary shadow h-100 py-2'>
        <div className='card-body'>
          <div className='row no-gutters align-items-center'>
            <div className='col mr-2'>
              <div className='fs-4 font-weight-bold text-primary text-uppercase mb-1'>
                {title} (Monthly)
              </div>
              <div className='h5 text-xs mb-0 font-weight-bold text-gray-800'>
                {body}
              </div>
            </div>
            <div className='mt-3 d-flex align-items-center justify-content-between'>
              {/* <i className='fas fa-calendar fa-2x text-gray-300'></i> */}
              <p>{footer}</p>
              <FontAwesomeIcon icon={faCoffee} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  footer: PropTypes.string,
};
export default Card;
