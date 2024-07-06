import { useEffect, useRef, useState } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import './style.css'
function NewClient() {
  const stepperRef = useRef(null);
  const [currentDate, setCurrentDate] = useState('');
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setCurrentDate(formattedDate);
  }, []);
  const handleDateChange = (event) => {
    setCurrentDate(event.target.value);
  };
  return (
    <div className='container-dash'>
      <div className='card  flex justify-content-center mt-4 pt-4'>
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
          <StepperPanel header='General info'>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                />
              </div>

              <div className='col-md-6 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Age'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Weight'
                  aria-label='Weight'
                  aria-describedby='basic-addon2'
                />
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='height'
                  aria-label='height'
                  aria-describedby='basic-addon2'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Muscle mass'
                  aria-label='Muscle mass'
                  aria-describedby='basic-addon2'
                />
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Fat mass'
                  aria-label='Fat mass'
                  aria-describedby='basic-addon2'
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Number of sessions'
                  aria-label='Number of sessions'
                  aria-describedby='basic-addon2'
                />
              </div>
              <div className='col-md-6 mb-3'>
                <input
                  type='date'
                  className='form-control'
                  value={currentDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <input
                  type='number'
                  className='form-control'
                  aria-label='Amount (to the nearest dollar)'
                  placeholder='Total Calorie'
                />
              </div>
              <div className='col-md-6 mb-3'>
                <select
                  name='gender'
                  id='gender'
                  className='form-control'
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <option value='' disabled>
                    Select gender
                  </option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
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
          <StepperPanel header='Fitness info'>
            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                History of heart problems, chest pain, or stroke
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                increased blood preassure
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Any chronic illness or condition
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Difficulty with physical exercise
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Advice from physician not to exercise
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Recent surgery (last 12 months)
              </label>
            </div>

            {gender === 'female' && (
              <div className='form-check form-switch'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  role='switch'
                />
                <label
                  className='form-check-label'
                  htmlFor='flexSwitchCheckDefault'
                >
                  Pregnancy (now or within last 3 months)
                </label>
              </div>
            )}

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Breathing or lung problems
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Muscle, joint or back disorder
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Any previous injury still affecting you
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Diabetes or thyroid condition
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                History of heart problems in immediate family
              </label>
            </div>

            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Hernia or any condition that may be aggravated by Lifting
                weights
              </label>
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
          <StepperPanel header='More info'>
            <div className=''>
           <textarea name="more-info" className='w-100 form-control mb-3' placeholder='Please, Explain any "YES" in the above questions!' id=""></textarea>
           <textarea name="more-info" className='w-100 form-control' placeholder='Are you currently taking any medications?' id=""></textarea>
            </div>
            <div className='d-flex pt-4 justify-content-between'>
              <Button
                label='Back'
                severity='secondary'
                icon='pi pi-arrow-left'
                onClick={() => stepperRef.current.prevCallback()}
              />
              <Button className='add-new-client p-button' label='Add Client'  severity='secondary' />
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    </div>
  );
}

export default NewClient;
