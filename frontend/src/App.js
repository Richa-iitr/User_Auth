import './App.css';
import { BrowserRouter,Route } from 'react-router-dom'
import Landing from "./Screens/Landing/Landing";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
const App = () => (
  <BrowserRouter>
    <Header/>
      <main >
      <Route path='/' component={Landing} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/register' component={Register} exact/>
      </main>
    <Footer/>
  </BrowserRouter>
)

export default App;
