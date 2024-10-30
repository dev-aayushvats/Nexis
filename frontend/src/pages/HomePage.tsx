import HeroCarousel from '../components/homePage/HeroCarousel';
import TopicsTabLayout from '../layouts/homePage/TopicsTabLayout';
import PopularArticlesCard from '../components/homePage/PopularArticlesCard';

function HomePage() {
  return (
    <div>
      <div className="px-48">
        <HeroCarousel />
      </div>
      <div className="container mx-auto px-48 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left section - Topics and Articles (spans 2 columns) */}
          <div className="lg:col-span-2">
            <TopicsTabLayout /> {/* You'll need to create this component */}
          </div>

          {/* Right section - Most Liked Articles */}
          <div className="lg:col-span-1">
            <PopularArticlesCard /> {/* You'll need to create this component */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
