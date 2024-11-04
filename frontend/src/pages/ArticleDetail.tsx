import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeadingCard from '../components/articleDetail/HeadingCard';
import RelatedArticlesCard from '../components/articleDetail/RelatedArticlesCard';
import ShareArticle from '../components/articleDetail/ShareArticle';
import ArticleNavigation from '../components/articleDetail/ArticleNavigation';

const ArticleDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    /* id */
  } = useParams(); // Id from article endpoint to be used to fetch article from backend

  const sectionsList = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'relaxation', title: 'How to relax' },
  ];

  return (
    <div className="container mx-auto px-48 mt-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Side: Article Details */}
        <div className="col-span-12 lg:col-span-8">
          {/* Heading Card */}
          <HeadingCard
            imageUrl="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
            topic="Psychology"
            title="Learn how to relax in the age of stress and anxiety"
            publishedDate="13 Oct"
            readTime={12}
          />

          {/* Article Content */}
          <div className="mt-4 mb-8">
            <h2 id="introduction" className="text-xl font-bold mb-2">
              Introduction
            </h2>
            <p className="mb-4">
              In today’s fast-paced world, finding time to relax can often feel
              like an impossible task. However, relaxation is essential for
              maintaining both mental and physical well-being. In this article,
              we’ll explore effective techniques to help you unwind, rejuvenate,
              and embrace a more peaceful state of mind.
            </p>

            <h2 id="relaxation" className="text-xl font-bold mb-2">
              The Importance of Relaxation
            </h2>
            <p className="mb-4">
              Relaxation not only helps reduce stress but also improves your
              mood, enhances focus, and boosts overall productivity.
              Incorporating relaxation techniques into your daily routine can
              lead to a healthier, happier life.
            </p>

            <h2 className="text-xl font-bold mb-2">Tips for Relaxation</h2>
            <ol className="list-decimal list-inside mb-4">
              <li>
                <strong>Deep Breathing Exercises:</strong> Deep breathing is a
                simple yet powerful way to calm your mind and body. Take a
                moment to inhale deeply through your nose, hold for a few
                seconds, and then exhale slowly through your mouth. Repeat this
                process for several minutes to experience a sense of
                tranquility.
              </li>
              <li>
                <strong>Practice Mindfulness Meditation:</strong> Mindfulness
                meditation encourages you to focus on the present moment,
                letting go of distractions and worries. Find a quiet space,
                close your eyes, and concentrate on your breath. Allow thoughts
                to come and go without judgment.
              </li>
              <li>
                <strong>Engage in Physical Activity:</strong> Regular exercise
                is a fantastic way to reduce stress and improve mood. Whether
                it’s a brisk walk, yoga, or dancing, moving your body helps
                release endorphins, promoting feelings of happiness and
                relaxation.
              </li>
              <li>
                <strong>Create a Relaxing Environment:</strong> Your
                surroundings can significantly impact your ability to relax. Set
                up a comfortable space with soft lighting, soothing music, and
                pleasant scents. Consider using essential oils or scented
                candles to enhance the atmosphere.
              </li>
              <li>
                <strong>Disconnect from Technology:</strong> In our digital age,
                constant notifications can increase stress levels. Take breaks
                from your devices, especially social media, to recharge your
                mind. Engage in activities that promote relaxation, such as
                reading or spending time in nature.
              </li>
              <li>
                <strong>Establish a Relaxation Routine:</strong> Consistency is
                key. Set aside dedicated time each day for relaxation. Whether
                it's early in the morning or before bed, having a routine can
                help signal to your body that it’s time to unwind.
              </li>
            </ol>

            <h2 className="text-xl font-bold mb-2">Conclusion</h2>
            <p>
              Incorporating relaxation techniques into your daily life doesn’t
              have to be complicated. By prioritizing time for yourself and
              exploring different methods, you can find what works best for you.
              Remember, relaxation is not a luxury; it’s a necessity for a
              balanced and fulfilling life. So take a deep breath, let go of
              your worries, and enjoy the journey to relaxation.
            </p>

            <div className="border-b border-black mt-4"></div>
          </div>
        </div>

        {/* Right Side: Sticky Social Links and Navigation */}
        <div className="col-span-12 lg:col-span-4 sticky top-4 h-screen">
          <ShareArticle />
          <div className="hidden lg:block lg:mt-8">
            <ArticleNavigation sections={sectionsList} />
          </div>
        </div>
      </div>
      {/* Here comes the related articles section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Related Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RelatedArticlesCard />
          <RelatedArticlesCard />
          <RelatedArticlesCard />
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
