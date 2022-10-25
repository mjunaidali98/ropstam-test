import React from 'react'

const Index = ({ cars = []}) => {
    return (
        <div className='mt-16'>
            <h1 className='text-blue-800 text-5xl my-10'>
                Dashboard
            </h1>
            <div className='max-w-[350px] justify-between space-x-5 p-4 h-auto flex items-center bg-white drop-shadow-lg shadow-lg'>
                <img className='h-14 w-14 object-cover' alt='' src='https://img.icons8.com/ios-filled/344/wheel.png' />
                <div className='flex flex-col w-2/3'>
                    <p className='font-bold text-xl'>
                        Number of Cars
                        Registered
                    </p>

                    <p className='font-bold text-[40px]'>
                        {cars.length}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index