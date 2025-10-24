import axios from "axios";
import { useEffect, useState } from "react";
import ProductPresenter from "./ProductPresenter";

function ProductContainer() {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCatergories();
  }, []);

  const BASE_URL = "http://localhost:3001";

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/products`);
      if (response.status === 200) {
    

        setProducts(response.data);
      }
    } catch (error) {
      setError(error, "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories from API
  const fetchCatergories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/categories`);
      if (response.status === 200) {
      
        setCategories(response.data);
      }
    } catch (error) {
      setError(error, "Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };


// Handle adding product to cart
  const handleAddToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      return;
    }
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  // Handle increasing product quantity in cart
  const handleIncreaseQuantity = (productId) => {
    const product = products.find((p) => p.id === productId);
    const cartItem = cartItems.find((item) => item.id === productId);

    if (!product || !cartItem) return;

    if (cartItem.quantity >= product.stock) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle decreasing product quantity in cart
  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle removing product from cart
  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Handle filtering products by category
  const handleFilter = async (categoryId) => {
    try {
      const products = await axios.get(
        `${BASE_URL}/api/products?category=${
          categoryId || "all"
        }&sort=price-low`
      );
      setProducts(products.data);
    } catch (error) {
      setError(error, "Failed to fetch filtered products");
    }
  };

// Handle searching products by name
  const handleSearch = async (query) => {
    try {
      const searchProducts = await axios.get(
        `${BASE_URL}/api/products?search=${query}`
      );
      setProducts(searchProducts.data);
    } catch (error) {
      setError(error, "Failed to fetch searched products");
    }
  };

  // Handle sorting products
  const handleSort = async (option) => {
    try {
      const products = await axios.get(
        `${BASE_URL}/api/products?category=all&sort=${option}`
      );
      setProducts(products.data);
    } catch (error) {
      setError(error, "Failed to fetch sorted products");
    }
  };

  return (
    <div>
      <ProductPresenter
        products={products}
        loading={loading}
        error={error}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
        onRemove={handleRemoveItem}
        categories={categories}
        onFilter={handleFilter}
        onSearch={handleSearch}
        onSort={handleSort}
      />
    </div>
  );
}

export default ProductContainer;
