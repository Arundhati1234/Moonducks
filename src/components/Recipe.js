import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import '../css/Recipe.css';
import {data} from '../data';

const Recipe = () => {
    const [recipe, setRecipe] = useState(0);
    return (
        <div className="container">
            {data.map((item) => {
                const {id, image, name, recipe} = item;
                return (
                    <div className="card">
                    <div class="image-div">
                    <img src = {image} alt={name}/>
                    </div>
                    <div className='details'>
                    <h2>{name}</h2>
                    <h4>{recipe}</h4>
                    </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Recipe;