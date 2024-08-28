import React from "react";

interface CategoryCardProps {
  appNumber: number;
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  image,
  appNumber,
  onClick,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden">
      <div className="p-4">
        <div>
          <h2 className="text-dark-black font-bold text-lg">{title}</h2>
          <p className="text-light-black mt-2">{description}</p>
        </div>
        <div className="flex flex-row grid-cols-3 gap-x-3 mt-5 mb-3">
          <img
            src={image}
            alt={title}
            className="h-8 w-8 rounded-md object-cover cursor-pointer"
            onClick={onClick}
          />
          <img
            src={image}
            alt={title}
            className="h-8 w-8 rounded-md object-cover  cursor-pointer"
            onClick={onClick}
          />
          <img
            src={image}
            alt={title}
            className="h-8 w-8 rounded-md object-cover cursor-pointer"
            onClick={onClick}
          />
        </div>
        <div className="flex justify-between mt-4 md:mt-0">
          <h2 className="text-green-400 font-bold text-lg">{appNumber} Apps</h2>
          <button className=" hover:text-purple-600 text-white py-1 px-3 bg-black rounded-full flex items-center ">
            Explore more
            <span className="ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15px"
                viewBox="0 -960 960 960"
                width="15px"
                fill="currentColor"
              >
                <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
