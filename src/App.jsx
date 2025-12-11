import Layout from './components/Layout';
import Hero from './components/Hero';
import Capabilities from './pages/Capabilities';
import Vision from './components/Vision';
import JoinTeam from './components/JoinTeam';
import AboutSection from './pages/About';
import ShowreelsSection from './pages/Showreels';
import TeamSection from './pages/Team';
import NewsSection from './pages/News';
import JoinSection from './pages/Join';
import ContactSection from './pages/Conatctus';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Capabilities />
        <ShowreelsSection />
        {/* <Vision /> */}
        {/* <JoinTeam /> */}
        <TeamSection />
        <AboutSection />
        {/* <NewsSection /> */}

        <JoinSection />
        {/* <ContactSection /> */}
      </Layout>
    </div>
  );
}

export default App;
