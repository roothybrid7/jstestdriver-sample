/**
 * ShoppingCart.js - testing script.
 */
var shop = {};

/**
 * Shopping cart.
 * @constructor
 */
shop.Cart = function() {
  items = {};
};

/**
 * Add item to cart.
 * @param {string} item Adding item.
 * @param {number} amount calculating amount.
 */
shop.Cart.prototype.add = function(item, amount) {
  if (!items[item]) {
    items[item] = 0;
  }
  items[item] += amount;
};

/**
 * Remove item from cart.
 * @param {string} item Removing item.
 * @param {number} amount Removing amount.
 */
shop.Cart.prototype.remove = function(item, amount) {
  if (items[item]) {
    if (items[item] > 0) {
      items[item] -= amount;
    }
  }
};

/**
 * Clear all items from cart.
 */
shop.Cart.prototype.clear = function() {
  for (var item in items) {
    items[item] = 0;
  }
};

/**
 * Returing item amount.
 * @param {string} item get amount of item.
 * @return {number} Amount of item.
 */
shop.Cart.prototype.getAmount = function(item) {
  if (!items[item]) {
    items[item] = 0;
  }
  return items[item];
};
