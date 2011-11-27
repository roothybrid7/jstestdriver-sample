/**
 * ShoppingCartTest.js - Test case of ShoppingCart.
 */
//ShoppingCartTest = TestCase('ShoppingCartTest');
//
//ShoppingCartTest.prototype.testAdd = function() {
//  var cart = new shop.Cart();
//  cart.add('hoge', 10);
//  cart.add('hoge', 5);
//  assertEquals(15, cart.getAmount('hoge'));
//  jstestdriver.console.log('cart.getAmount("hoge"): ', cart.getAmount('hoge'));
//};

TestCase('ShoppingCartTest', {
  // inline code here.
  testAdd: function() {
    var cart = new shop.Cart();
    cart.add('hoge', 10);
    cart.add('hoge', 5);
    assertEquals(15, cart.getAmount('hoge'));
    jstestdriver.console.log('cart.getAmount("hoge"): ', cart.getAmount('hoge'));
  }
});
