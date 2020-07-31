import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients,healthLabels,dietLabels,cautions})=>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image_style} src={image} alt="some image"/>
            <h4>Ingredients:</h4>
            <ol className={style.ingredients}>
            {ingredients.map(ingredient=>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <div className={style.content}>
            <div className={style.content_header}> Calories:</div>
            <div>{Math.round(calories*100)/100}</div>
            </div>
            <ul><h4>Health Labels</h4>
                {healthLabels.map(hlabel=>(
                    <li>{hlabel}</li>
                ))}
            </ul>
            <div className={style.content}>
            <div className={style.content_header}> DietLabels:</div>
            <div>{dietLabels}</div>
            </div>
            <ul><h4>Cautions</h4>
                {cautions.map(caution=>(
                    <li>{caution}</li>
                ))}
            </ul>
            
            
        </div>
    )
}

export default Recipe