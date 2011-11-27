/**
 * ShoppingCartTest.js - Test case of ShoppingCart.
 */
ShoppingCartTest = TestCase('ShoppingCartTest');

ShoppingCartTest.prototype.testAdd = function() {
  var cart = new shop.Cart();
  cart.add('hoge', 10);
  cart.add('hoge', 5);
  assertEquals(15, cart.getAmount('hoge'));
  jstestdriver.console.log('cart.getAmount("hoge"): ', cart.getAmount('hoge'));
};

ShoppingCartTest.prototype.testRemove = function() {
  var cart = new shop.Cart();
  cart.add('piyo', 20);
  cart.remove('piyo', 10);
  assertEquals(10, cart.getAmount('piyo'));
  jstestdriver.console.log('cart.getAmount("piyo"): ', cart.getAmount('piyo'));
};

ShoppingCartTest.prototype.testClear = function() {
  var cart = new shop.Cart();
  cart.add('hoge', 10);
  cart.add('piyo', 20);
  cart.clear();
  assertEquals(0, cart.getAmount('hoge'));
  assertEquals(0, cart.getAmount('piyo'));
  jstestdriver.console.log('cart.getAmount("hoge"): ', cart.getAmount('hoge'));
  jstestdriver.console.log('cart.getAmount("piyo"): ', cart.getAmount('piyo'));
};

//TestCase('ShoppingCartTest', {
//  // inline code here.
//  testAdd: function() {
//    var cart = new shop.Cart();
//    cart.add('hoge', 10);
//    cart.add('hoge', 5);
//    assertEquals(15, cart.getAmount('hoge'));
//    jstestdriver.console.log('cart.getAmount("hoge"): ', cart.getAmount('hoge'));
//  }
//});
