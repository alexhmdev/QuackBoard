import { Routes } from 'react-router-dom';
import { Home, Quack, Shared } from './Pages';
import { Route } from 'react-router-dom';
import { FollowMouse } from './components';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <FollowMouse />
      <Toaster
        toastOptions={{ className: 'bg-[#222] text-white', duration: 1500 }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quack" element={<Quack />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
