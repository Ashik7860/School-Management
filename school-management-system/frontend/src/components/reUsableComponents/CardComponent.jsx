import React from 'react'
import ButtonComponent from './ButtonComponent';

const CardComponent = ({buttonConfig,title,onClick,Icon}) => {
  return (
    <div className='w-1/3 min-h-60 bg-cardBackground flex flex-col items-center justify-center p-6'>
    {/* Title */}
    <div className='text-center font-bold text-primary mb-4'>{title}</div>

    {/* Icon */}
    <div className="flex justify-center items-center">
        {Icon && <Icon className='text-primary rounded-lg h-20 w-20' />}
      </div>

    <ButtonComponent
                label={buttonConfig.label}
                type={buttonConfig.type}
                btnWidth={buttonConfig.btnWidth}
                btnHeight={buttonConfig.btnHeight}
                variant={buttonConfig.variant}
                onClick={onClick}
              />
  </div>
);
};


export default CardComponent
