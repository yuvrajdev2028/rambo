import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'

const VetCard = () => {
  return (
    <div className='p-6 bg-white drop-shadow-md'>
        <div className='flex'>
          <div className='flex justify-center items-center h-[50px] w-[50px] rounded-full border-[4px] border-green-600 mr-10'>
          <FontAwesomeIcon icon={faUserDoctor} />
          </div>
          <div>
            <h3 className='font-semibold text-lg'>John Doe</h3>
            <p className='font-thin text-[#838383] text-sm'>42,Worlington St,Nevada</p>
          </div>
        </div>
        <p className='text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis eros, rutrum ac malesuada eget, ultrices et sem. Proin fermentum sit amet purus vitae lacinia. Donec tortor eros, iaculis ac nisl rutrum, ultrices ornare metus. Sed eu nunc congue, tincidunt sapien et, porttitor leo.</p>
    </div>
  )
}

export default VetCard