import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world! 34565434565re1234</div>,
  },
]);

const root = createRoot(document.getElementById('root')!);

root.render(<RouterProvider router={router} />);
