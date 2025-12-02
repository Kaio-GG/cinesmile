import React from 'react';
import "./index.scss";


 export default function Loader(){
  return (
    <section className='org-loader'>
        <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
        </div>
    </section>

  );
}
