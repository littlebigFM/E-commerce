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

const mockProductsThree = [
  {
    id: "02131",
    name: "Leslie Alexander",
    image: "https://via.placeholder.com/40",
    contact: "+1 819 314 1435",
    purchases: 80,
    orderQty: "30 Orders",
    address: "Santa Ana, Illinois",
    categoryThree: "Customer",
    // status: "shipping",
  },
];

const useProducts = ({
  category,
  categoryTwo,
  categoryThree,
  page,
  search,
}) => {
  const [products, setProducts] = useState([]);
  const [productsTwo, setProductsTwo] = useState([]);
  const [productsThree, setProductsThree] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      let filtered = mockProducts;
      let filteredTwo = mockProductsTwo;
      let filteredThree = mockProductsThree;

      if (category) {
        filtered = filtered.filter((item) => item.category === category);
      }

      if (categoryTwo) {
        filteredTwo = filteredTwo.filter(
          (item) => item.categoryTwo === categoryTwo,
        );
      }

      if (categoryThree) {
        filteredThree = filteredThree.filter(
          (item) => item.categoryThree === categoryThree,
        );
      }

      if (search) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        );
      }

      setProducts(filtered);
      setProductsTwo(filteredTwo);
      setProductsThree(filteredThree);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [category, categoryTwo, categoryThree, page, search]);

  return { products, productsTwo, productsThree, loading };
};

export default useProducts;
