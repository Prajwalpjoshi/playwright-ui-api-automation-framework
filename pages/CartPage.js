class CartPage {

 constructor(page){
  this.page = page
  this.checkout = '#checkout'
 }

 async checkoutProduct(){

  await this.page.click(this.checkout)

 }

}

module.exports = CartPage