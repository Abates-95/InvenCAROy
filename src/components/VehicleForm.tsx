import React, { useState } from 'react';

interface VehicleFormProps {
  onSubmit: (make: string, model: string, year: number, price: number) => void;
}

const VehicleForm: React.FC<VehicleFormProps> = ({ onSubmit }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(make, model, year, price);
    setMake('');
    setModel('');
    setYear(0);
    setPrice(0);
  };


  return (
    <form onSubmit={handleSubmit}
    className='flex flex-col p-3 m-6'
    >
      <input
        className='max-w-208px w-1/6 border-4 border-red-700 p-3 m-5'
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        required
      />
      <input
        className='max-w-208px w-1/6 border-4 border-red-700 p-3 m-5'
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        required
      />
      <input
        className='max-w-208px w-1/6 border-4 border-red-700 p-3 m-5'
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
        required
      />
      <input
        className='max-w-208px w-1/6 border-4 border-red-700 p-3 m-5'
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <button
      className='animate-pulse text-2xl max-w-208px w-1/6 border-4 text-red-700 border-red-700 
      p-3 m-5 bg-gray-500 hover:border-gray-500 hover:bg-red-700 hover:text-gray-500' 
      type="submit"
      >
        Add Car
      </button>
    </form>
  );
};

export default VehicleForm;
