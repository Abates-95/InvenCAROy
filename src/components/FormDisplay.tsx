import VehicleForm from '../components/VehicleForm';

function FormDisplay() {
  const handleFormSubmit = (make: string, model: string, year: number, price: number) => {
    console.log('Submitted:', make, model, year, price);
  };

  return (
    <div>
      <VehicleForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default FormDisplay;