import { Routes } from 'react-router-dom';
import { Home } from './Pages';
import { Route } from 'react-router-dom';
function App() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
