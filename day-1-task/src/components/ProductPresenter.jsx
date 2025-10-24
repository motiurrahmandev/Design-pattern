import CartItem from "./CartItem";
import ErrorMessage from "./common/ErrorMassege";
import Loading from "./common/Loading";
import ProductCard from "./ProductCard";
import SortAndSearch from "./SortAndSearch";

function ProductPresenter({
  products,
  loading,
  error,
  onAddToCart,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  categories,
  onFilter,
  onSearch,
  onSort,
}) {

  // Display loading state while fetching products
  if (loading) {
    return <Loading message="Loading products..." />;
  }

  // Display error message if any error occurs
  if (error) {
    return (
      <ErrorMessage
        error={error.message}
        onRetry={() => window.location.reload()}
      />
    );
  }


  return (
    <div className="w-full px-5 h-screen ">
      <div className="w-full h-[6vw] ">
        <SortAndSearch categories={categories} onFilter={onFilter} onSearch={onSearch} onSort={onSort} />
      </div>

      {/* productlist */}
      <div className="w-full mt-10 flex flex-wrap justify-center">
        <div className="w-[65%] ">
          <div className="flex gap-3 flex-wrap">
            {products &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                />
              ))}
          </div>
        </div>

        {/* cart list */}
        <div className="w-[33%] h-full">
          <CartItem cartItems={cartItems} onDecrease={onDecrease} onIncrease={onIncrease} onRemove={onRemove} />
        </div>
      </div>
    </div>
  );
}

export default ProductPresenter;
