import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = ()=> {
  const APP_ID = "d70e7a05"
  const APP_KEY = "dd016303f01dc970e4be85822916e009"
  // const exampleReq =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState("banana")

  useEffect(()=>{
    getRecipes()
  },[query])

  const getRecipes = async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Submit</button>
      </form>
      <div className="recipes">
           {recipes.map(recipe=>(
             <Recipe 
             key={recipe.recipe.label}
             title={recipe.recipe.label} 
             calories={recipe.recipe.calories}
             image={recipe.recipe.image}
             ingredients={recipe.recipe.ingredients}
             healthLabels={recipe.recipe.healthLabels}
             dietLabels={recipe.recipe.dietLabels}
             cautions={recipe.recipe.cautions}
             
             />
           ))}
      </div>
    </div>
  );
}

export default App;
