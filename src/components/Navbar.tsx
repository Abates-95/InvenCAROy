import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        console.log('dropDown')
        setIsVisible(!isVisible)
        console.log(isVisible);
    };

    const clicked = () => {
        setIsVisible(false)
    };

  return (
    <nav className='flex items-center justify-between flex-wrap bg-red-700 p-1'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight text-black'>InvenCARoy</Link>
        </div>
        <div className="block">
            <button
                onClick={dropDown} 
                className="flex items-center px-3 py-2 text-black border rounded border-black 
                hover:text-white hover:border-white"
                >
                <i className="fas fa-solid fa-sitemap"></i>
            </button>
        </div>
        { isVisible ? (
        <div className='w-full block flex-grow items-center'>
            <div className='text-sm lg:flex-grow'>
                <Button className='p-2 m-5 bg-gray-800 justify-center hover:bg-red-700 rounded '>
                    <div>
                        <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-red-600 hover:text-black'>
                            Home
                        </Link>
                    </div>
                </Button>
                <Button className='p-2 m-5 bg-gray-800 justify-center hover:bg-red-700 rounded'>
                    <div>
                        <Link to='/about' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-red-600 hover:text-black'>
                            About
                        </Link>
                    </div>
                </Button>
                <Button className='p-2 m-5 bg-gray-800 justify-center hover:bg-red-700 rounded'>
                    <div>
                        <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                        text-red-600 hover:text-black'>
                            Dashboard
                        </Link>
                    </div>
                </Button>
            </div>
        </div>
        ) : (
        <></>
        )}
    </nav>
  );
};

export default Navbar