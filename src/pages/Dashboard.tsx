import FormDisplay from '../components/FormDisplay'
import Title from '../components/Title'

function Dashboard() {
  return (
    <>
    <Title
    titleText="Welcome to your future Dashboard, we are currently under construction."
    className='flex flex-row justify-center p-5 m-6 text-xl bg-gray-600 rounded shadow-xl text-yellow-400' 
    />
    <FormDisplay />
    </>
  )
}

export default Dashboard
