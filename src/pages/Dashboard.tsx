import VehicleDataTable from '../components/VehicleDataTable'
import Title from '../components/Title'

function Dashboard() {
  return (
    <>
    <Title
    titleText="Welcome to your future Dashboard, we are currently under construction. 
               For now you can view our inventory! 
               The ability to Create, Retrieve, Update and Delete will be 
               functional shortly!"
    className='flex flex-row justify-center p-5 m-6 text-xl bg-gray-600 rounded shadow-xl text-yellow-400' 
    />
    <VehicleDataTable />
    </>
  )
}

export default Dashboard
