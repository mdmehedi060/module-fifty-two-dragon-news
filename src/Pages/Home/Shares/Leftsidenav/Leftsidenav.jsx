import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl">All Category</h2>
      {categories.map((category) => (
        <Link
          className="block ml-4 text-xl font-semibold px-4"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Leftsidenav;
