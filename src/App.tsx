import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConceptPage from './pages/ConceptPage';
import { concepts } from './data/concepts';
import Layout from './components/Layout';

function App() {
  return (
    <Layout concepts={concepts}>
      <Routes>
        <Route path="/" element={<Home concepts={concepts} />} />
        <Route path="/:slug" element={<ConceptPage concepts={concepts} />} />
      </Routes>
    </Layout>
  );
}

export default App;
