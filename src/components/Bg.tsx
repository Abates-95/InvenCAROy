import Background from '../assets/images/homebg.svg';

function Bg() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      
    ></div>
  )
}

export default Bg