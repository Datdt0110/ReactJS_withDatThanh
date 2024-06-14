// App.js
import React from 'react';
import Clothes from './components/Clothes'; // Lưu ý sửa lỗi chính tả từ 'Clothers' thành 'Clothes'
import './App.css';
import logo from './logo.svg';

function App(props) {
  return (
    <div>
      <Clothes name="Quần jean" type="Skinny" color="Đen" size="L">Clothes 1</Clothes>
      <Clothes name="Váy" type="váy công chúa" color="Trắng" size="M">Clothes 2</Clothes>
      <Clothes name="Áo" type="áo Jeann" color="Trắng" size="XXL">Clothes 3</Clothes>
    </div>
  );
}

export default App;
