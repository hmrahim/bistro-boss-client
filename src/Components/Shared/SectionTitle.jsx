import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='w-full md:w-2/6 mx-auto'>
            <p className='text-[#D99904] text-xl text-center mb-2 '>---{subTitle}---</p>
            <h1 className='text-4xl text-center border-y-2 py-5 '>{title}</h1>
            
        </div>
    );
};

export default SectionTitle;