import Product from './product/product';
import Global from './globalCss/global';
import { useState } from 'react';
import './App.css';

function App() {
  return(
    <Global>
      <Product/>
    </Global>
  )
}

export default App;
