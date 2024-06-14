// App.js
import React from 'react';
import Clothes from './components/Clothes'; // Lưu ý sửa lỗi chính tả từ 'Clothers' thành 'Clothes'
import './App.css';
import logo from './logo.svg';

function App(props) {
  return (
    <div className="container mt-5">
      <h1>Danh Sách </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Color</th>
            <th>Size</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <Clothes name="Quần jean" type="Skinny" color="Đen" size="L">Clothes 1</Clothes>
          <Clothes name="Váy" type="váy công chúa" color="Trắng" size="M">Clothes 2</Clothes>
          <Clothes name="Áo" type="áo Jeann" color="Trắng" size="XXL">Clothes 3</Clothes>
          <Clothes name="balo" type="To nhất" color="Vàng" size="XXL">Clothes 4</Clothes>
        </tbody>
      </table>
    </div>
  );
}

export default App;
