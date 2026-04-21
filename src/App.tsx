import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AttendancePolicy from './pages/AttendancePolicy';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-bordeaux antialiased flex flex-col min-h-screen relative">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
            <Route path="/politica-de-atendimento" element={<AttendancePolicy />} />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
