import logo from './Me.png';
import './App.css'
import ReactFloaterJs from 'react-floaterjs'


function App() {
  return (
    <div className="App"> 
    <ReactFloaterJs>
    <div className="Pic">
      <img src={logo} className="Me" alt="logo" />
    </div>
    </ReactFloaterJs>

    <div className="Info">
      <h1> Who is Owusu?</h1>
      <p> Uhhh paragraph coming soon O_o</p>
    </div>

    </div>
  );
}

export default App;
