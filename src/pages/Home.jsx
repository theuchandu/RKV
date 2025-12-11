import Hero from '../components/Hero';
import Vision from '../components/Vision';
import News from '../components/News';
import JoinTeam from '../components/JoinTeam';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Vision />
      {/* <News /> */}
      <JoinTeam />
    </div>
  );
};

export default Home;

