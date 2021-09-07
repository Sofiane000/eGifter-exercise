
import './App.css';
import Routes from "./routes/routes";
import Header from './components/header/header';
import { useMainStyles } from "./styles";
function App() {
  const classes = useMainStyles();
  return(
    <div className={classes.main}>
    <Header/>
    <Routes />
    </div>
  );
}

export default App;
