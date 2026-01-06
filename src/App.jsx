import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { selectAllProducts } from './features/products/productsSlice';
import { fetchProducts } from './features/products/productsAPI';
import router from './router/router';

function App() {
  const products = useSelector(selectAllProducts);
  console.log('products:', products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
