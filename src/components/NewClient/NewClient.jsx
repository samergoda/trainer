import { useRef } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

function NewClient() {
  const stepperRef = useRef(null);

  return (
    <div className='container-dash'>
      <div className='card  flex justify-content-center mt-4 pt-4'>
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
          <StepperPanel header='Step I'>
            <div className='flex flex-column h-12rem'>
              <div className='input-group gap-4 flex-wrap mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                />
                <input
                  type='text'
                  className='form-control'
                  placeholder='First name'
                />
              </div>

              <div className='input-group gap-4 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Weight'
                  aria-label='Weight'
                  aria-describedby='basic-addon2'
                />
                <input
                  type='number'
                  className='form-control'
                  placeholder='height'
                  aria-label='height'
                  aria-describedby='basic-addon2'
                />
              </div>
            </div>
            <div className='d-flex pt-4 justify-content-end'>
              <Button
                label='Next'
                icon='pi pi-arrow-right'
                iconPos='right'
                onClick={() => stepperRef.current.nextCallback()}
              />
            </div>
          </StepperPanel>
          <StepperPanel header='Step II'>
            <div className='flex flex-column h-12rem'>
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
            </div>
            <div className='d-flex pt-4 justify-content-between'>
              <Button
                label='Back'
                severity='secondary'
                icon='pi pi-arrow-left'
                onClick={() => stepperRef.current.prevCallback()}
              />
              <Button
                label='Next'
                icon='pi pi-arrow-right'
                iconPos='right'
                onClick={() => stepperRef.current.nextCallback()}
              />
            </div>
          </StepperPanel>
          <StepperPanel header='Step III'>
            <div className='flex flex-column h-12rem'>
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
                {/* <button className='btn btn-info text-white'>Add Client</button> */}
              </div>{' '}
            </div>
            <div className='d-flex pt-4 justify-content-between'>
              <Button
                label='Back'
                severity='secondary'
                icon='pi pi-arrow-left'
                onClick={() => stepperRef.current.prevCallback()}
              />
              <Button
                label='Add Client'
                severity='secondary'
              />
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    </div>

  );
}

export default NewClient;
