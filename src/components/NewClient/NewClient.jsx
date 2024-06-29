import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import defaultProfileImage from './../../assets/user.png';
function NewClient() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setPreview(null);
//     }
//   };
//   console.log(selectedFile);

  return (
    <form className='my-4'>
      <a href='/' className='fs-3 text-dark'>
        <FontAwesomeIcon icon={faLeftLong} />
      </a>
      <h4 className='my-3'>ADD NEW USER</h4>
      {/* <div className='d-flex'>
        <input
          type='file'
          onChange={handleFileChange}
          accept='image/*'
          name='file'
          id='file'
        />
        {preview ? (
          <div className='mb-3'>
            <img
              src={preview}
              alt='Profile Preview'
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
        ): 
        <img
        src={defaultProfileImage}
        alt='Profile Preview'
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />}
      </div> */}
      <div className='input-group gap-4 flex-wrap mb-3'>
        <input type='text' className='form-control' placeholder='Last name' />
        <input type='text' className='form-control' placeholder='First name' />
      </div>

      <div className='input-group gap-4 mb-3'>
        <input
          type='number'
          className='form-control'
          placeholder="Weight"
          aria-label="Weight"
          aria-describedby='basic-addon2'
        />
        <input
          type='number'
          className='form-control'
          placeholder="height"
          aria-label="height"
          aria-describedby='basic-addon2'
        />
   
      </div>

      <div className='mb-3'>

        <div className='input-group'>
   
          <input
            type='mail'
            className='form-control'
            id='basic-url'
            placeholder='User Email'
            aria-describedby='basic-addon3 basic-addon4'
          />
        </div>
        <div className='form-text' id='basic-addon4'>
          Example help text goes outside the input group.
        </div>
      </div>
      <div className='input-group mb-3'>
        <input
          type='number'
          className='form-control'
          aria-label='Amount (to the nearest dollar)'
          placeholder='Total Calorie'
        />
        <span className='input-group-text'>CAL</span>
      </div>
      <div className='input-group mb-3'>
        <input
          type='number'
          className='form-control'
          aria-label='Amount (to the nearest dollar)'
          placeholder='Fat Percentage'
        />
        <span className='input-group-text'>%</span>
      </div>
    

      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Username'
          aria-label='Username'
        />
        <span className='input-group-text'>@</span>
        <input
          type='text'
          className='form-control'
          placeholder='Server'
          aria-label='Server'
        />
      </div>

      <div className='input-group'>
        {/* <span className='input-group-text'>With textarea</span> */}
        <textarea
          className='form-control'
          aria-label='With textarea'
          placeholder='notes'
        ></textarea>
      </div>
      <div className='mt-3 text-end'>

      <button className='btn btn-info text-white'>Add Client</button>
      </div>
    </form>
  );
}

export default NewClient;
