export function getDeliveryOption(deliveryOptionId){
  
    let deliveryOption;
    console.log(deliveryOptionId);
    deliveryOptions.forEach((option)=>{
    if(option.id===deliveryOptionId){
    deliveryOption=option;
    }
});

return deliveryOption;
}


export const deliveryOptions =[
  {
    id:'1',
    deliveryDays:7,
    priceCents:0

  },
  {
    id:'2',
    deliveryDays:3,
    priceCents:499
  },
{
  id:'3',
  deliveryDays:0,
  priceCents:999
}
]