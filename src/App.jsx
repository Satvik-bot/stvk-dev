import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Layout from './components/layout/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
