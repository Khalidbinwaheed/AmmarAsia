

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router basename="/AmmarAsia">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here if needed in future */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
