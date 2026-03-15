class ProductPage {

 constructor(page){
  this.page = page
  this.addToCart = '#add-to-cart-sauce-labs-backpack'
  this.cartIcon = '.shopping_cart_link'
 }

 async addProduct(){

  await this.page.click(this.addToCart)
  await this.page.click(this.cartIcon)

 }

}

module.exports = ProductPage