import React, { useState } from "react";
import Pagination from "../shared_components/Pagination";
import CategoryCard from "../shared_components/CategoryCard";
import { categories } from "../services/Category.service";
import Popup from "../shared_components/Popup";

const ITEMS_PER_PAGE = 12;

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalCategories = categories?.length || 0;
  const totalPages = Math.ceil(totalCategories / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedCategories = categories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-dark-black font-bold text-lg">
        Top shopify collections
      </h2>
      <div className="flex justify-between mb-5 mt-4 md:mt-0">
        <p className="text-light-black mt-2">
          We use an agile approach to test assumptions and connect with needs of
          your audience early and often.
        </p>
        <a href="/" className="hover:text-purple-600">
          See all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedCategories.map((category) => (
          <CategoryCard
            key={category.id} // Ensure `key` is unique
            title={category.title}
            description={category.description}
            image={category.image}
            appNumber={category.appNumber}
            onClick={togglePopup}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      <Popup
        isOpen={isPopupOpen}
        title="Connects you soon"
        onClose={togglePopup}
      />
    </div>
  );
};

export default Home;
