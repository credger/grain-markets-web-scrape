import getPrideAgCashBids from "./getPrideAgCashBids.js";
import getAdmCashBids from "./getAdmCashBids.js";


const prideAgMiloBid = await getPrideAgCashBids()
const admMiloBid = await getAdmCashBids()

console.log('Milo')
console.log('PrideAg:\t', '$', prideAgMiloBid )
console.log('ADM:\t\t', '$', admMiloBid )