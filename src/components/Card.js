/** @format */

import { MdOutlineSupervisorAccount as PeopleIcon } from 'react-icons/md';
import {TbGasStation as GasStationIcon} from 'react-icons/tb'
import {FaTachometerAlt as OdometerIcon} from 'react-icons/fa'
import {PiSteeringWheelDuotone as SteeringWheelIcon} from 'react-icons/pi'

function Card({ car }) {
  console.log(car.model);

  return (
    <div className='w-[32.5%] p-3 rounded-lg shadow-xl bg-card mt-4'>
      <img className='rounded-xl h-3/5' src={car.image} />
      <div className='p-3 mb-3'>
        <div className='flex justify-between items-center'>
          <h2 className='card-title text-xl'>{car.model + ' ' + car.make}</h2>
          <span className='border-darkBlue border-2 px-1 rounded-xl border-dashed'>
            {car.year}
          </span>
        </div>
        <div className='flex justify-between mt-3'>
          <div className='flex items-center w-1/2'>
            <PeopleIcon />
            <span className='mx-1'> {car.seats} People</span>
          </div>
          <div className='flex items-center w-1/2'>
            <GasStationIcon />
            <span className='mx-1'> {car.fuelType}</span>
          </div>
        </div>
        <div className='flex justify-between mt-2 mb-4'>
          <div className='flex items-center w-1/2'>
            <OdometerIcon />
            <span className='mx-1'> {car.millage}/1 litre</span>
          </div>
          <div className='flex items-center w-1/2'>
            <SteeringWheelIcon />
            <span className='mx-1'> {car.transmission}</span>
          </div>
        </div>
        <hr className='border-[#c7c9cd]'/>

        <div className="flex mt-3 items-center justify-between">
          <div className='items-baseline '>

          <span className='text-3xl'>${car.pricePerDay}</span>
          <span>/Day</span>
          </div>
          <button className='p-3  bg-[#499aed] rounded-xl'>Rent now</button>
        </div>
        
      </div>
    </div>
  );
}
export default Card;
