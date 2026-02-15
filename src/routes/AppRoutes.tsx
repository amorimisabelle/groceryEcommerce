import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

// Importe suas páginas aqui
// import Home from '../pages/Home/Home';
// import Cart from '../pages/Cart/Cart';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Adicione suas rotas aqui */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
