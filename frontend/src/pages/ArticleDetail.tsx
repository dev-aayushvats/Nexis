import React from "react";
import { useParams } from "react-router-dom";
import HeadingCard from "../components/HeadingCard"; // Adjust the import path as needed
import InThisArticle from "../components/InThisArticle";

const ArticleDetail: React.FC = () => {
  const { id } = useParams(); // Id from article endpoint to be used to fetch article from backend

  const sectionsList = [
    { id: "introduction", title: "Introduction" },
    { id: "relaxation", title: "How to relax" },
  ];

  return (
    <div className="container mx-auto px-48 mt-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Side: Article Details */}
        <div className="col-span-12 lg:col-span-8">
          {/* Heading Card */}
          <HeadingCard
            imageUrl="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
            topic="Philosophy"
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
          </div>
        </div>

        {/* Right Side: Sticky Social Links and Navigation */}
        <div className="col-span-12 lg:col-span-4 sticky top-4 h-screen">
          <div className="bg-indigo-600 shadow-lg rounded-lg p-4">
            <h2 className="text-lg text-white font-bold mb-4">
              Share this article
            </h2>
            <div className="flex space-x-4">
              {/* Social Share Links */}
              <div className="flex flex-col items-center space-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                    fill="white"
                  ></path>
                </svg>
                <a href="#" className="text-white">
                  Instagram
                </a>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,6v12	c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"
                    fill="white"
                  ></path>
                </svg>
                <a href="#" className="text-white">
                  Twitter
                </a>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"
                    fill="white"
                  ></path>
                </svg>
                <a href="#" className="text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <InThisArticle sections={sectionsList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
