import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div>
        <Link to={'/article/12'} className="m-4 text-blue-600 font-semibold">
          Go To Article 12
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
