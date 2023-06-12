
import Title from "../components/Title";
import Footer from "../components/Footer";
import Background from '../assets/images/homebg.svg';

function Home() {
  return (
    <>
      <div 
        className='flex flex-col justify-center items-center h-screen bg-cover bg-fixed'
        style={{ backgroundImage: `url(${Background})` }}
      >
      <Title 
      titleText="Welcome to InvenCARoy"
      className="text-white mt-10 p-3 bg-gray-600 bg-opacity-95 rounded shadow-2xl"
      />
      <Footer />
      </div>
      
    </>
  );
}

export default Home;
