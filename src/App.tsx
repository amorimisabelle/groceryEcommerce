import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Header pode ir aqui - ficará visível em todas as páginas */}
      <AppRoutes />
      {/* Footer pode ir aqui - ficará visível em todas as páginas */}
    </BrowserRouter>
  );
}

export default App;
