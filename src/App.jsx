import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/productsAPI';
import { selectAllProducts } from './features/products/productsSlice';

function App() {
  const products = useSelector(selectAllProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section>
      <h1 className="pt-02 bg-amber-400 text-3xl font-bold underline">Hello world!</h1>

      <p className="pt-02 bg-amber-400 text-3xl font-bold underline">Vite + React</p>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </section>
  );
}

export default App;
