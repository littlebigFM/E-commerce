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
    category: "Bags",
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

const mockProductsTwo = [
  {
    id: "02131",
    name: "Adidas Hoodie",
    image: "https://via.placeholder.com/40",
    customer: "Leslie Alexander",
    price: 80,
    date: "2026/02/03",
    payment: "paid",
    status: "shipping",
    categoryTwo: "All Orders",
  },
];

const useProducts = ({ category, categoryTwo, page, search }) => {
  const [products, setProducts] = useState([]);
  const [productsTwo, setProductsTwo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let filtered = mockProducts;
      let filteredTwo = mockProductsTwo;

      if (categoryTwo) {
        filteredTwo = filteredTwo.filter(
          (item) => item.categoryTwo === categoryTwo,
        );
      }

      if (category) {
        filtered = filtered.filter((item) => item.category === category);
      }

      if (search) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        );
      }

      setProducts(filtered);
      setProductsTwo(filteredTwo);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [category, categoryTwo, page, search]);

  return { products, productsTwo, loading };
};

export default useProducts;
