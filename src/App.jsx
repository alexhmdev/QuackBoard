import { Routes } from 'react-router-dom';
import { Home, Quack, Shared } from './Pages';
import { Route } from 'react-router-dom';
import { FollowMouse } from './components';
import { Toaster } from 'react-hot-toast';
import ReactGA4 from 'react-ga4';

ReactGA4.initialize('G-6YBFKZ9PP4');

function App() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <FollowMouse />
      <Toaster
        toastOptions={{
          duration: 1500,
          style: { background: '#222', color: '#fff' },
        }}
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
