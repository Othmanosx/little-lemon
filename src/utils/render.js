import { BrowserRouter } from 'react-router-dom';
import { render as renderReact } from '@testing-library/react';

export const render = (children) => {
  return renderReact(<BrowserRouter>{children}</BrowserRouter>);
};
