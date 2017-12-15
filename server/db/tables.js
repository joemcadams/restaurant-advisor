/**
 * Table schema:
 * 
 * Restaurant: {
 *  _id: ObjectId,
 *  name: String,
 *  phone: String,
 *  email: String,
 *  hours: String,
 *  diningType: String,
 *  streetNo: Number,
 *  streetName: String,
 *  city: String,
 *  state: String,
 *  zip: Number,
 *  priceRange: String,
 *  offersDelivery: Boolean,
 *  outdoorSeating: Boolean,
 *  reviews: [{
 *      customer: { email: String },
 *      title: String,
 *      description: String,
 *      date: Date,
 *      xzrating: Number
 *  },...],
 *  orders: [{
 *      date: Date,
 *      isDelivery: boolean,
 *      isTakeOut: boolean,
 *      order: [{
 *          food: {
 *              name: String,
 *              category: String,
 *              description: String
 *              price: Number,
 *              quantity: Number
 *          }
 *      },...]
 *  }]
 *  menu: {
 *      food [{
 *          id: ObjectId,
 *          name: String,
 *          category: String,
 *          description: String
 *          price: Number
 *      },...]
 *  }
 * }
 * 
 * Customer: {
 *  email: String,
 *  fName: String,
 *  mInit: String,
 *  lName: String,
 *  password: String,
 *  streetNo: String,
 *  streetName: String,
 *  city: String,
 *  state: String,
 *  zip: Number
 * }
 */

module.exports = {
    restaurant: "Restaurant",
    customer: "Customer"
}