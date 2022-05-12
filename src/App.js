import 'antd/dist/antd.min.css'

// Components
import MapView from './views/MapView';

//Dependecies
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MapView />
    </div>
  );
}

export default App;
