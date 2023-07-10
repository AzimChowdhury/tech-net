import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div>
      {/* toaster */}
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
