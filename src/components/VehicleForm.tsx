import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from "../api/backend";
import { useDispatch, useStore } from "react-redux";
import { chooseMake, chooseModel, chooseYear, chooseColor, chooseDoors, chooseClassification } from "../redux/slices/RootSlice";
import { useNavigate } from 'react-router';

interface VehicleFormProps {
  id?: string[];
}

interface FilteredData {
  [key: string]: any;
}
const VehicleForm = (props: VehicleFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();

  const filteredData: FilteredData = {};

    // Filter out fields with empty strings
    Object.entries(data).forEach(([key, value]) => {
      if (value !== '') {
        filteredData[key] = value;
      }
    });

    if (props.id && props.id.length > 0) {
      await server_calls.update(props.id[0], filteredData);
      console.log(`updated: ${JSON.stringify(filteredData)} ${props.id}`);
          setTimeout(() => {
              navigate('/'); // Navigate to the dashboard page
            }, 2000);
    } else {
        console.log("~ Working on Getting Vehicle Added ~")
        dispatch(chooseMake(data.make));
        dispatch(chooseModel(data.model));
        dispatch(chooseYear(data.year));
        dispatch(chooseColor(data.color));
        dispatch(chooseDoors(data.doors));
        dispatch(chooseClassification(data.classification));
  
        await server_calls.create(store.getState());
        console.log('~ Vehicle Has Been Added ~');
        setTimeout(() => {
            navigate('/');
          }, 2000);
    }
}
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center h-screen -mt-36 '>
      <div>
        <h1 className="text-4xl mb-5 border-b-8 border-t-8 border-double border-red-700 p-3 rounded"
          >
            Vehicle Creation Center
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="flex p-1">
            <button className="animate-pulse text-2xl max-w-208px w-6/6 border-4 text-red-700 border-red-700 p-3 m-5
                            bg-gray-400 hover:border-gray-400 hover:bg-red-700 hover:text-gray-500"
            >
              Submit Vehicle
            </button>
        </div>
        <div className="flex p-1">
            <button className="animate-pulse text-2xl max-w-208px w-6/6 border-4 text-red-700 border-red-700 p-3 m-5
                            bg-gray-400 hover:border-gray-400 hover:bg-red-700 hover:text-gray-500"
            >
              Edit Vehicle
            </button>
        </div>
      </div>
      <div className='border-double border-4 border-red-700 rounded-md p-6'>
        <div className="flex flex-row">
          <div className='border-double max-w-208px border-l-2 border-r-2 border-red-700 rounded-md p-2 m-5'>
            <Input {...register('make')} name='make' placeholder="Make" />
          </div>
          <div className='border-double max-w-208px border-l-2 border-r-2 border-red-700 rounded-md p-2 m-5'>       
            <Input {...register('model')} name='model' placeholder="Model" />
          </div>
          <div className='border-double max-w-208px  border-l-2 border-r-2 border-red-700 rounded-md p-2 m-5'>
            <Input {...register('year')} name='year' placeholder="Year" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className='border-double max-w-208px border-l-2 border-r-2 border-red-700 rounded-md p-2 m-5'>
            <Input {...register('color')} name='color' placeholder="Color" />
          </div>
          <div className='border-double max-w-208px border-l-2 border-r-2 border-red-700 rounded-md p-2 m-5'>
            <Input {...register('doors')} name='doors' placeholder="Doors" />
          </div>
          <div className='border-double max-w-208px border-l-2 border-r-2 border-red-700 rounded-md p-2 m-5'>
            <Input {...register('classification')} name='classification' placeholder="Classification" />
          </div>
        </div>
      </div>
    </form> 
  );
};

export default VehicleForm;

