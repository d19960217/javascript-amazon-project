export const cart=[];

export function addToCart(productId){
  let matchingItem;
   cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
     matchingItem =cartItem;
    }
   });
   //判断相同按钮后加1
   if(matchingItem){
    matchingItem.quantity+=1;
   }else{
    cart.push(
      {productId:productId,
        quantity: 1
      }
    );
   }
}
