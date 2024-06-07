import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CV from '../pages/cv/cv';
import Design from '../pages/design/design';

const Routers: React.FC = () => {
  const renderRoutes = [
    { id: 'cv', path: '/', element: <CV /> },
    { id: 'design', path: '/design', element: <Design /> },
  ];

  return (
    <Routes>
      {renderRoutes.map(route => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Routers;
