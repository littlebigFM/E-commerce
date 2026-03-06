import React, { createContext, useState, useCallback } from "react";
import { supabase } from "../Library/supabase";

// Create the context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Products state
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productCategory, setProductCategory] = useState("Sneakers");
  const [productSearch, setProductSearch] = useState("");
  const [productPage, setProductPage] = useState(1);

  // Customers state
  const [customers, setCustomers] = useState([]);
  const [customersLoading, setCustomersLoading] = useState(false);
  const [customerPage, setCustomerPage] = useState(1);

  // Transactions state
  const [transactions, setTransactions] = useState([]);
  const [transactionsLoading, setTransactionsLoading] = useState(false);
  const [transactionPage, setTransactionPage] = useState(1);

  // Sales data
  const [salesData, setSalesData] = useState({
    totalSales: 0,
    orders: 0,
    avgOrderValue: 0,
  });

  // Notification state
  const [notifications, setNotifications] = useState([]);

  // API Methods
  const fetchProducts = useCallback(async (filters = {}) => {
    try {
      setProductsLoading(true);
      // Call your API here
      // const { data } = await supabase.from('products').select('*').match(filters);
      // setProducts(data);
      console.log("Fetching products with filters:", filters);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setProductsLoading(false);
    }
  }, []);

  const fetchCustomers = useCallback(async (page = 1) => {
    try {
      setCustomersLoading(true);
      // Call your API here
      console.log("Fetching customers for page:", page);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setCustomersLoading(false);
    }
  }, []);

  const fetchTransactions = useCallback(async (page = 1) => {
    try {
      setTransactionsLoading(true);
      // Call your API here
      console.log("Fetching transactions for page:", page);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setTransactionsLoading(false);
    }
  }, []);

  const fetchSalesReport = useCallback(async () => {
    try {
      setProductsLoading(true);
      // Call your API here
      console.log("Fetching sales report...");
    } catch (error) {
      console.error("Error fetching sales report:", error);
    } finally {
      setProductsLoading(false);
    }
  }, []);

  const value = {
    // Products
    products,
    setProducts,
    productsLoading,
    productCategory,
    setProductCategory,
    productSearch,
    setProductSearch,
    productPage,
    setProductPage,
    fetchProducts,

    // Customers
    customers,
    setCustomers,
    customersLoading,
    customerPage,
    setCustomerPage,
    fetchCustomers,

    // Transactions
    transactions,
    setTransactions,
    transactionsLoading,
    transactionPage,
    setTransactionPage,
    fetchTransactions,

    // Sales
    salesData,
    setSalesData,
    fetchSalesReport,

    // Notifications
    notifications,
    setNotifications,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
