import { useEffect, useState } from "react";

const mockProducts = [
  {
    id: "SKU-001",
    name: "Nike Air Max",
    image: "https://via.placeholder.com/40",
    price: 120,
    size: "42",
    quantity: 10,
    date: "2026/02/04",
    status: "available",
    category: "Sneakers",
  },
  {
    id: "SKU-002",
    name: "Nike Air Max",
    image: "https://via.placeholder.com/40",
    price: 120,
    size: "42",
    quantity: 10,
    date: "2026/02/04",
    status: "available",
    category: "Sneakers",
  },

  {
    id: "SKU-003",
    name: "Adidas Hoodie",
    image: "https://via.placeholder.com/40",
    price: 80,
    size: "L",
    quantity: 5,
    date: "2026/02/03",
    status: "out",
    category: "Jackets",
  },
];

const useProducts = ({ category, page, search }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let filtered = mockProducts;

      if (category) {
        filtered = filtered.filter((item) => item.category === category);
      }

      if (search) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        );
      }

      setProducts(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [category, page, search]);

  return { products, loading };
};

export default useProducts;
