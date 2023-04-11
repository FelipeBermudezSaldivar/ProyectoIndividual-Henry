
import { Home, Landing, Detail, Form, NavBar, HomeFood, RecipeCreate } from './views'
import { Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation(); /* esto es un hook para ver las donde estamos */
  console.log(location);

  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} /> {/* de esta forma no puedo pasar prop por paramettro */}
      <Route path="/create" component={Form} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/FelipeBermudez" render={() => <Home />} /> {/* con el metodo render podemos mandar prop por parametro */}
      <Route path="/Food" component={HomeFood} />
      <Route path="/recipe-create" component={RecipeCreate} />
    </div>
  );
}

export default App;
