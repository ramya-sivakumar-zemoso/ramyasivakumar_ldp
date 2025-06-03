import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginCard from './components/molecules/LoginCard';
import AssignmentList from './components/organisms/AssignmentList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/assignments" element={<AssignmentList />} />
      </Routes>
    </Router>
  );
}

export default App;
