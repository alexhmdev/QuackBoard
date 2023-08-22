import { useEffect, useState } from 'react';

export const FollowMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  //pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y - 35,
          left: mousePosition.x - 15,
          width: '2rem',
          height: '2rem',
          background: 'url(/images/duck-undertale.gif) no-repeat center center',
          backgroundSize: 'contain',
          zIndex: 9999,
        }}
      ></div>
    </>
  );
};
