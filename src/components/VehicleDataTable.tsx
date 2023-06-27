import { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import VehicleForm from './VehicleForm';
import { useGetData } from '../my_hook/GetData';

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
  const {vehicleData} = useGetData();
  const [rows, setRows] = useState<GridRowsProp>([
    
  ]);

  const handleSubmit = (make: string, model: string, year: string, price: string) => {
    const newRow = {
      id: rows.length + 1,
      col1: make,
      col2: model,
      col3: year,
      col4: price,
    };

    setRows([...rows, newRow]);
  };

  return (
    <div>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={vehicleData} columns={columns} />
      </div>
      <VehicleForm onSubmit={handleSubmit} />
    </div>
  );
}

