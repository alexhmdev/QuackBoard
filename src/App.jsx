import { Routes } from 'react-router-dom';
import { Home, Quack } from './Pages';
import { Route } from 'react-router-dom';
import { FollowMouse } from './components';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <FollowMouse />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quack" element={<Quack />} />
      </Routes>
    </main>
  );
}

export default App;
