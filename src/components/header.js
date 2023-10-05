/** @format */

import React, { useState } from 'react';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { BiSolidChevronDown } from 'react-icons/bi';

function Header() {

    const [isRelevenceTabOpen, setIsRelevenceTabOpen] = useState(false)
    const [isBrandsTabOpen, setIsBrandsTabOpen] = useState(false)

  return (
    <div className='w-11/12 h-16 bg-header rounded-md  m-auto shadow-xl py-2 px-6 flex items-center'>

      <div className='bg-white h-3/4 w-1/4 rounded-xl relative'>
        <input
          className='h-full w-11/12 rounded-xl p-4 outline-none'
          type='search'
          name=''
          id=''
        />
        <button>
          <SearchIcon className='absolute right-4 bottom-3' />
        </button>
      </div>

      

      <div className='w-full px-6 flex '>

        <div className='flex items-center mr-8 relative'>
          <button onClick={() => setIsRelevenceTabOpen(!isRelevenceTabOpen)} className='flex items-center p-2 rounded-md hover:bg-hoverColor-primary' type='button'>
            Relvence
            <BiSolidChevronDown />
          </button>
          <ul className={isRelevenceTabOpen ? `flex flex-col absolute top-9 left-1 bg-blue`: 'hidden'} >
          <button className='hover:bg-hoverColor-secondary px-4 py-1'>Action</button>
          <button className='hover:bg-hoverColor-secondary px-4 py-1'>Action</button>
          <button className='hover:bg-hoverColor-secondary px-4 py-1'>Action</button>
          
          </ul>
        </div>
        <div className='flex items-center mr-8 relative'>
          <button onClick={() => setIsBrandsTabOpen(!isBrandsTabOpen)} className='flex items-center p-2 rounded-md hover:bg-hoverColor-primary' type='button'>
            Brands
            <BiSolidChevronDown />
          </button>
          <ul className={isBrandsTabOpen ? 'flex flex-col absolute top-9 left-1 bg-blue': 'hidden'}>
            <button className='hover:bg-hoverColor-secondary px-4 py-1'>Action</button>
            <button className='hover:bg-hoverColor-secondary px-4 py-1'>Action</button>
            <button className='hover:bg-hoverColor-secondary px-4 py-1'>Action</button>
            <button>Action</button>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Header;
