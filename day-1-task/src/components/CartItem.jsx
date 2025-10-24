import React from "react";


export default function CartItem({
  cartItems ,
  onIncrease = () => {},
  onDecrease = () => {},
  onRemove = () => {},
  taxRate = 0.1,
  shipping = 15,
}) {

 
  
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * taxRate;
  const total = subtotal + tax + (cartItems.length > 0 ? shipping : 0);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>

      {cartItems?.length === 0 ? (
        <div className="text-center text-gray-500 py-10">Your cart is empty</div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b last:border-none pb-4"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div className="flex flex-col flex-1">
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-sm text-gray-500">${item.price.toFixed(2)}</span>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    className="border rounded-lg px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => onDecrease(item.id)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    className="border rounded-lg px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => onIncrease(item.id)}
                  >
                    +
                  </button>

                  <button
                    className="ml-4 text-red-500 text-sm hover:underline"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Section */}
      <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-2">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        {cartItems?.length > 0 && (
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
        )}
        <div className="border-t mt-2 pt-2 flex justify-between font-semibold text-gray-900 text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        disabled={cartItems?.length === 0}
        className={`w-full py-3 rounded-xl font-medium text-white text-center transition mt-2 ${
          cartItems?.length === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-emerald-600 hover:bg-emerald-700"
        }`}
      >
        Checkout
      </button>
    </div>
  );
}
