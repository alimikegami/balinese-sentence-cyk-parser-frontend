import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
   <ChakraProvider>
     <ColorModeScript initialColorMode="light"></ColorModeScript>
   <App />
   </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

