import { useState, useEffect } from 'react';
import api from '../axios'; // Asegúrate de que la ruta sea correcta

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response = await api.get('/articles');
        setArticulos(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchArticulos();
  }, []);

  if (loading) {
    return <p>Cargando artículos...</p>;
  }

  if (error) {
    return <p>Ocurrió un error al cargar los artículos: {error.message}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Noticias y Artículos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="bg-white p-4 rounded shadow">
            <div className="relative h-48 w-full overflow-hidden">
              <img src={`http://localhost:1337${articulo.attributes.image.data.attributes.url}`} alt={articulo.attributes.title} className="object-contain object-center h-full w-full" />
            </div>
            <h2 className="text-xl font-bold mt-2">{articulo.attributes.title}</h2>
            <p className="mt-2">{articulo.attributes.summary}</p>
            <a href={`/articulo/${articulo.id}`} className="text-blue-500 mt-4 inline-block">Leer más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articulos;
