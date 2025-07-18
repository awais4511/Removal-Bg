import React from 'react';
import { assets } from '../assets/assets';

const Step = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Steps to remove background <br /> image in seconds.
      </h1>

      <div className='flex gap-6 mt-16 xl:mt-24 justify-center flex-nowrap'>
        <div className='flex w-full sm:w-auto items-center gap-4 bg-white border drop-shadow-md p-6 rounded hover:scale-105 transition-all duration-500'>
          <img className='w-9 h-9' src={assets.upload_icon} alt="Upload Icon" />
          <div>
            <p className='text-xl font-medium'>Upload Image</p>
            <p className='text-sm text-neutral-500 mt-1'>
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>

        <div className='flex w-full sm:w-auto items-center gap-4 bg-white border drop-shadow-md p-6 rounded hover:scale-105 transition-all duration-500'>
          <img className='w-9 h-9' src={assets.remove_bg_icon} alt="Remove BG Icon" />
          <div>
            <p className='text-xl font-medium'>Remove Background</p>
            <p className='text-sm text-neutral-500 mt-1'>
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>

        <div className='flex w-full sm:w-auto items-center gap-4 bg-white border drop-shadow-md p-6 rounded hover:scale-105 transition-all duration-500'>
          <img className='w-9 h-9' src={assets.download_icon} alt="Download Icon" />
          <div>
            <p className='text-xl font-medium'>Download Image</p>
            <p className='text-sm text-neutral-500 mt-1'>
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
