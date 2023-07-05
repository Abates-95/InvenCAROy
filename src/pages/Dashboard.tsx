import VehicleDataTable from '../components/VehicleDataTable'
import Title from '../components/Title'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <>
    <Title
    titleText="Welcome to your dashboard!  Here you can CREATE, UPDATE, or DELETE any vehicles from your inventory!"
    className="text-4xl mb-10 border-b-8 border-t-8 border-double border-red-700 p-3 rounded mt-5"
    />
    <VehicleDataTable />
    <Footer/>
    </>
  );
};

export default Dashboard
