import { DataGrid, GridColDef } from '@mui/x-data-grid';
import VehicleForm from './VehicleForm';
import { useGetData } from '../my_hook/GetData';
import { useState } from "react";
import { server_calls } from "../api/backend";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: 'make', headerName: 'Make', width: 100 },
  { field: 'model', headerName: 'Model', width: 100 },
  { field: 'year', headerName: 'Year', width: 100 },
  { field: 'color', headerName: 'Color', width: 100 },
  { field: 'doors', headerName: 'Doors', width: 100 },
  { field: 'classification', headerName: 'Classification', width: 100 },
  { field: 'id', headerName: 'ID', width: 400 }

];

export default function VehicleDataTable() {
  const {vehicleData, getData} = useGetData();
  const [ selectionModel, setSelectionModel] = useState<string[]>([])
  const navigate = useNavigate()

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`selection model: ${selectionModel}`);
    setTimeout( () => { navigate('/') }), 1000   
}
 

  return (
    <div>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={vehicleData} columns={columns} 
        checkboxSelection={true}
        onRowSelectionModelChange={(item:any) => {
            setSelectionModel(item)
        }}
        />
      </div>
      <button 
      onClick={deleteData}
      className='animate-pulse text-2xl max-w-208px w-6/6 border-4 text-red-700 border-red-700 p-3 m-5
                          bg-gray-400 hover:border-gray-400 hover:bg-red-700 hover:text-gray-500'>
        Delete Vehicle
      </button>
      <VehicleForm id={selectionModel} />
    </div>
  );
}

