import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-mono">
        <Header />
        <main className="flex-grow w-full">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;