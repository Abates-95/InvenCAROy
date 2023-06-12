import  { useEffect, useState } from 'react';

function Footer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledToTop = currentScrollPos < prevScrollPos;

      setIsVisible(isScrolledToTop);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 w-full flex justify-center transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="bottom">
        <div className="c_right text-white flex justify-center items-center border-2 border-red-500 w-auto p-6 h-12 mx-auto bg-gray-600">
          &copy; Austin Bates, 2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;



