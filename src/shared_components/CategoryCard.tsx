import React from "react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={onClick}
      />
      <div className="p-4">
        <h2 className="text-dark-black font-bold text-lg">{title}</h2>
        <p className="text-light-black mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
