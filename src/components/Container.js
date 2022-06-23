import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Recipe from './Recipe';

const Container = () => {
    return (
        <div className="container">
            <Recipe/>
        </div>
    );
}

export default Container;

