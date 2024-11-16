import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeadingCard from '../components/articleDetail/HeadingCard';
import RelatedArticlesCard from '../components/articleDetail/RelatedArticlesCard';
import ShareArticle from '../components/articleDetail/ShareArticle';
import ArticleNavigation from '../components/articleDetail/ArticleNavigation';
import axios from 'axios';
import { formatDate } from '../utils/dateUtils'; // Import the utility function
import { getCapitalizedString } from '../utils/stringUtils';

// Define the body structure of the article
interface IArticleBody {
  id: string;
  heading: string;
  body: string;
  _id: string;
}

// Define the main article structure
interface IArticle {
  _id: string;
  title: string;
  body: IArticleBody[];
  imageUrl: string;
  author: number; // Assuming author is represented by an ID
  postDate: number; // Assuming postDate is a timestamp
  readTime: number;
  topics: string[];
  __v: number; // Version key, usually used by MongoDB
}

// Define the response structure
interface IArticleResponse {
  success: boolean;
  data: IArticle;
}

interface IRelatedArticles {
  relatedArticles: IArticle[];
}

// Define the Section List Interface structure
export interface ISection {
  id: string;
  title: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<IArticleResponse | null>(null);
  const [sectionsList, setSectionsList] = useState<ISection[]>([]);
  const [relatedArticles, setRelatedArticles] =
    useState<IRelatedArticles | null>(null);

  const setSectionsListFromArticleResponse = (data: IArticle) => {
    const bodyWithSections = data.body;
    const currSectionsList: ISection[] = [];

    for (const section of bodyWithSections) {
      const currObj: ISection = {
        id: section.id,
        title: section.heading,
      };
      currSectionsList.push(currObj);
    }

    console.log(currSectionsList);

    setSectionsList(currSectionsList);

    console.log('***********************');
    console.log(sectionsList);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchArticle = async () => {
      try {
        const articleResponse = await axios.get<IArticleResponse>(
          `http://localhost:6969/api/articles/${id}`,
        );
        const relatedArticlesResponse = await axios.get<IRelatedArticles>(
          `http://localhost:6969/api/articles/related/${id}`,
        );
        const data = articleResponse.data.data;
        setArticle(articleResponse.data);
        setRelatedArticles(relatedArticlesResponse.data);
        setSectionsListFromArticleResponse(data);
        console.log(data); // Handle the fetched article data as needed
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Side: Article Details */}
        <div className="col-span-1 lg:col-span-8 space-y-4">
          {/* Heading Card */}
          <HeadingCard
            imageUrl={article?.data.imageUrl}
            topic={
              article?.data.topics[0]?.charAt(0).toUpperCase() +
              article?.data.topics[0]?.slice(1)
            }
            title={article?.data.title}
            publishedDate={formatDate(article?.data.postDate)}
            readTime={article?.data.readTime}
          />

          {/* Article Content */}
          <div className="mt-4 mb-8">
            {article?.data.body.map((item, index) => (
              <div key={index} className="mb-6">
                <div id={item.id}>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {item.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Social Links and Navigation */}
        <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-4 h-auto lg:h-screen">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {relatedArticles?.relatedArticles.map((item, index) => (
            <div key={index}>
              <RelatedArticlesCard
                topic={getCapitalizedString(item.topics[0])}
                title={item.title}
                publishedDate={item.postDate}
                imageUrl={item.imageUrl}
                readingTime={item.readTime}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
