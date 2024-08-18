import './styles/App.css';
import RegisterComponent from './components/RegisterComponent.js';

function App() {
  return (
    <div className="main-container">
      <h2 className="title-text">Login Token Practice</h2>

      <div className="content-container">
        <RegisterComponent />
      </div>
    </div>
  );
}

export default App;
