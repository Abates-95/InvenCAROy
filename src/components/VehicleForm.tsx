import React, { useState } from 'react';

interface VehicleFormProps {
  onSubmit: (make: string, model: string, year: string, price: string) => void;
}

const VehicleForm: React.FC<VehicleFormProps> = ({ onSubmit }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(make, model, year, price);
    setMake('');
    setModel('');
    setYear('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-screen'>
      <div className='border-double border-4 border-red-700 rounded-md p-6'>
        <input
          className='max-w-208px border-2 border-red-700 rounded-md p-3 m-5'
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
        <input
          className='max-w-208px border-2 border-red-700 rounded-md p-3 m-5'
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <input
          className='max-w-208px border-2 border-red-700 rounded-md p-3 m-5'
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <input
          className='max-w-208px border-2 border-red-700 rounded-md p-3 m-5'
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        </div>
        <div className="flex justify-center">
        <button
          className="animate-pulse text-2xl max-w-208px w-6/6 border-4 text-red-700 border-red-700 p-3 m-5 bg-gray-500 hover:border-gray-500 hover:bg-red-700 hover:text-gray-500"
          type="submit"
        >
          Add Car
        </button>
      </div>
    </form>
  );
};

export default VehicleForm;

