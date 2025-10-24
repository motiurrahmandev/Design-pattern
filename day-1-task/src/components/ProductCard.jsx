

export default function ProductCard({ product, onAddToCart, cartItems }) {
  const {
    imageUrl,
    category,
    name,
    originalPrice,
    price,
    rating,
    reviewCount,
    inStock,
  } = product;

  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const availableStock = inStock ? product.stock - cartItems.reduce((acc, item) => item.id === product.id ? acc + item.quantity : acc, 0) : 0;  

  return (
    <article className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />

        <span className="absolute left-3 top-3 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>

        {discountPercent > 0 && (
          <span className="absolute right-3 top-3 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold leading-tight text-gray-900">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm">
            {/* Stars */}
            {Array.from({ length: fullStars }).map((_, i) => (
              <svg
                key={`full-${i}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-amber-400 mr-0.5"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.953c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.388 2.716c-.784.57-1.838-.196-1.539-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.627 9.38c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
              </svg>
            ))}

            {hasHalf && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-4 h-4 text-amber-400 mr-0.5"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="half-grad">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half-grad)"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.953c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.388 2.716c-.784.57-1.838-.196-1.539-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.627 9.38c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z"
                />
              </svg>
            )}

            {Array.from({ length: emptyStars }).map((_, i) => (
              <svg
                key={`empty-${i}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 text-gray-300 mr-0.5"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.953c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.388 2.716c-.784.57-1.838-.196-1.539-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.627 9.38c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
              </svg>
            ))}
          </div>

          <span className="text-sm text-gray-500">
            {rating} ({reviewCount})
          </span>
        </div>

        <div className="flex items-baseline gap-3">
          <div className="text-2xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </div>
          {originalPrice > price && (
            <div className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-gray-600">
            {availableStock ? `In stock • ${availableStock} available` : "Out of stock"}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={!availableStock}
            aria-label={`Add ${name} to cart`}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed ${
              availableStock
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 21a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-400">
          Free returns • 2-year warranty
        </div>
      </div>
    </article>
  );
}
