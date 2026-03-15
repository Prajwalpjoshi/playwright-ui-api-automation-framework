class CheckoutPage {

 constructor(page){
  this.page = page
  this.firstName = '#first-name'
  this.lastName = '#last-name'
  this.zip = '#postal-code'
  this.continue = '#continue'
  this.finish = '#finish'
 }

 async completeCheckout(){

  await this.page.fill(this.firstName,'John')
  await this.page.fill(this.lastName,'Doe')
  await this.page.fill(this.zip,'560001')

  await this.page.click(this.continue)
  await this.page.click(this.finish)

 }

}

module.exports = CheckoutPage