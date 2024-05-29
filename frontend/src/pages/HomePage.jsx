import Navbar from '../components/Navbar';
import HomeCallToAction from '../components/HomeCallToAction';
import HomeFeatures from '../components/HomeFeatures';

function HomePage() {
  return (
    <div className="w-full">
      <HomeCallToAction />
      <HomeFeatures />
    </div>
  );
}

export default HomePage;
