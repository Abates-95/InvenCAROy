import Info from "../components/Info";
import Background from '../assets/images/homebg.svg';
import Title from "../components/Title";

function About() {
  return (
    <>
    <div
        className='flex flex-col justify-center items-center h-screen bg-cover bg-fixed'
        style={{ backgroundImage: `url(${Background})` }}
    >
    <Title 
    titleText="About InvenCARoy"
    className="text-red-700 mt-10 p-3 bg-gray-600 bg-opacity-50 rounded shadow-2xl"
    />
    <Info />
    </div>
    
    </>
  )
}

export default About
