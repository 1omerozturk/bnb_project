import React from 'react';
import './Loader.css'; // Yüklenme animasyonu için CSS dosyasını içe aktarın

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
