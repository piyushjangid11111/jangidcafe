import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  
  private baseurl:string = "https://localhost:7124/api/User/"

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:" Sandwich",
       foodDetails:"Pan-fried masala paneer grilled Sandwich,Fruit Sandwich,Vegetable Sandwich",
      foodPrice:200,
       foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Pizza",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , Red Paprika topped with Cheese",
      foodPrice: 349,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:" Burger",
      foodDetails:"panner Burger, Aloo Tikki Burger, Vegetable Burger",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted topped with bitter-sweet chocolate .",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:" Ice Cream",
      foodDetails:"Oreo ice cream ,Vanilla ice cream, Butterscotsch ice cream, Strawberry, Mango, Toffee ice cream",
      foodPrice:150,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    {
      id:7,
      foodName:"Chilled Beer",
       foodDetails:"Tuborg Strong Beer",
      foodPrice:300,
      foodImg:"data:image/jpeg;base64,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"
      },
      {
        id:8,
        foodName:"Cake",
        foodDetails:"All Variety of Cakes",
        foodPrice: 399,
        foodImg:"https://b.zmtcdn.com/data/dish_photos/0ef/46dc3f3c99cb16719d67a8542df610ef.jpg"

      },
      {
        id:8,
        foodName:"Noodles",
        foodDetails:"Best Chinese",
        foodPrice: 249,
        foodImg:"https://b.zmtcdn.com/data/dish_photos/514/0e0d035494e8c24257ddc3578c4c9514.jpg"
      }
    
  ]


  

}