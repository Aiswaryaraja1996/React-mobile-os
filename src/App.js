
import './App.css';
import ListItems from './components/ListItems';

function App() {
  return (
    <div className="App">
    <ListItems title="Mobile Operating System" m1="Android" m2="BlackBerry" m3="IPhone" m4="Windows Phone"></ListItems>
    <ListItems title="Mobile Manufacturers" m1="Samsung" m2="HTC" m3="Micromax" m4="Apple"></ListItems>
    </div>
  );
}

export default App;
