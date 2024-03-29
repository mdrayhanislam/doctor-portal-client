import React from 'react';
import chair from '../../Assets/Image/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div className="hero w-full min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <img src={chair} className="w-ful lg:max-w-lg rounded-lg shadow-2xl" alt='Dantis chair'/>
    <div className='w-72'>
    <DayPicker
    mode="single"
    selected={date}
    onSelect={setDate}
    />

    </div>
   
  </div>
</div>
    );
};

export default AppointmentBanner;