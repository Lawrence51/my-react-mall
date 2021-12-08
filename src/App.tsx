import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterLayout from '@/config/routes'
import './App.css';

function App() {
  return (
    <Router>
      <RouterLayout />
    </Router>
    
  );
}

export default App;
