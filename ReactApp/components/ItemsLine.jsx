import React from 'react'
import Item from './Item'
import './item.css'

const shoes=[
  {
    id: 1,
    name: "Nike Air Max 270",
    model: "AM270",
    price: 9599.00,
    imageUrl: "https://cdn.shopify.com/s/files/1/0260/3241/products/am270-2_3a837288-08bc-4fcd-852d-26ee50121ff4_1024x1024.jpg?v=1534367319",
    rating: 4.7
  },
  {
    "id": 2,
    "name": "Adidas Ultraboost 23",
    "model": "UB23",
    "price": 4800.00,
    "imageUrl": "https://th.bing.com/th/id/OIP._k6NyD2gzfqU4-18ri4l9AHaHa?rs=1&pid=ImgDetMain",
    "rating": 4.8
  },
  {
    "id": 3,
    "name": "Puma RS-X",
    "model": "RSX",
    "price": 6200.00,
    "imageUrl": "https://sneakernews.com/wp-content/uploads/2018/10/puma-rs-x-reinvention-red-white-blue-release-date-5.jpg",
    "rating": 4.5
  },
  {
    "id": 4,
    "name": "Reebok Nano X3",
    "model": "NanoX3",
    "price": 3130.00,
    "imageUrl": "https://th.bing.com/th/id/OIP.JWXKg5Dvg_i_BMX5KhwD4wHaEK?w=279&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "rating": 4.6
  },
  {
    "id": 5,
    "name": "New Balance 574",
    "model": "NB574",
    "price": 7999.00,
    "imageUrl": "https://footwearnews.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-11-at-8.06.03-PM.png?resize=768",
    "rating": 4.4
  },
  {
    "id": 6,
    "name": "Asics Gel-Kayano 30",
    "model": "GK30",
    "price": 11600.00,
    "imageUrl": "https://therunningoutlet.co.uk/wp-content/uploads/2023/06/Asics-Womens-Kayano-30-1012B357-004-side.jpg",
    "rating": 4.7
  },
  {
    "id": 7,
    "name": "Under Armour HOVR",
    "model": "UAHP",
    "price": 5400.00,
    "imageUrl": "https://th.bing.com/th/id/OIP.t-qQYeTyqEXS0dzStDmtDgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
    "rating": 4.5
  },
  {
    "id": 8,
    "name": "Vans Old Skool",
    "model": "VOS",
    "price": 8080.00,
    "imageUrl": "https://th.bing.com/th/id/OIP.FanYMZV-Gcl9yfEyZ-PZGAHaHa?rs=1&pid=ImgDetMain",
    "rating": 4.3
  },
  {
    "id": 9,
    "name": "Converse Chuck Taylor",
    "model": "CTAS",
    "price": 4170.00,
    "imageUrl": "https://th.bing.com/th/id/OIP.zJVjxB6V9zIb-utpk7NpnQHaFj?rs=1&pid=ImgDetMain",
    "rating": 4.6
  },
  {
    "id": 10,
    "name": "Jordan 1 Retro High",
    "model": "J1RH",
    "price": 9200.00,
    "imageUrl": "https://sneakernews.com/wp-content/uploads/2021/01/air-jordan-1-retro-high-og-hyper-royal-555088-402-release-date-7.jpg",
    "rating": 4.9
  },
  {
    "id": 11,
    "name": "Nike Air Force 1",
    "model": "AF1",
    "price": 2110.00,
    "imageUrl": "https://th.bing.com/th/id/OIP.ST_OUoAR5BNtBzyLbHR7dwHaHa?rs=1&pid=ImgDetMain",
    "rating": 4.8
  },
  {
    "id": 12,
    "name": "Adidas Yeezy Boost 350",
    "model": "YB350",
    "price": 9450.00,
    "imageUrl": "https://sneakernews.com/wp-content/uploads/2022/08/adidas-yeezy-boost-350-pirate-black-bb5350-3.jpg",
    "rating": 4.9
  },
  {
    "id": 13,
    "name": "Puma Suede Classic",
    "model": "PSC",
    "price": 2485.00,
    "imageUrl": "https://www.80scasualclassics.co.uk/images/puma-suede-classic-bboy-fabulous-trainers-red-white-p10271-63762_image.jpg",
    "rating": 4.4
  },
  {
    "id": 14,
    "name": "Reebok Classic Leather",
    "model": "RCL",
    "price": 3900.00,
    "imageUrl": "https://th.bing.com/th/id/OIP.g4yNrR7s4Xkqh3bYYM1NPQAAAA?rs=1&pid=ImgDetMain",
    "rating": 4.5
  },
  {
    "id": 15,
    "name": "New Balance 327",
    "model": "NB327",
    "price": 3130.00,
    "imageUrl": "https://images.stockx.com/360/New-Balance-327-Levis-Blue-W/Images/New-Balance-327-Levis-Blue-W/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=3&updated_at=1635258524&h=320&q=41",
    "rating": 4.6
  },
  {
    "id": 16,
    "name": "Asics Gel-Lyte III",
    "model": "GL3",
    "price": 3120.00,
    "imageUrl": "https://sneakernews.com/wp-content/uploads/2020/06/ASICS-GEL-Lyte-III-Techno-Cyan-2.jpg",
    "rating": 4.7
  },
  {
    "id": 17,
    "name": "Under Armour Curry 10",
    "model": "UAC10",
    "price": 11160.00,
    "imageUrl": "https://cdn.runrepeat.com/i/under-armour/39311/under-armour-curry-10-ea8e-main.jpg",
    "rating": 4.8
  },
  {
    "id": 18,
    "name": "Vans Slip-On",
    "model": "VSO",
    "price": 11000.00,
    "imageUrl": "https://cdn.shopify.com/s/files/1/0112/4394/6046/products/VN00018EBWW_1.jpg?v=1589326369",
    "rating": 4.5
  },
  {
    "id": 19,
    "name": "Converse One Star",
    "model": "COS",
    "price": 4999.00,
    "imageUrl": "https://cdna.lystit.com/photos/endclothing/a7fd0cd0/converse-black-one-star-74.jpeg",
    "rating": 4.4
  },
  {
    "id": 20,
    "name": "Jordan 4 Retro",
    "model": "J4R",
    "price": 4220.00,
    "imageUrl": "https://th.bing.com/th/id/OIP.TvB-l_c3_x_r9XE7wfZP3AHaHa?rs=1&pid=ImgDetMain",
    "rating": 4.9
  }

]
function itemsLine() {
  return (
       <div className='items'>
        {shoes.map((s)=>
          <div>
          <Item key={s.id} imageUrl={s.imageUrl} name={s.name} model={s.model} price={s.price} rating={s.rating} />
          </div>
        
        )}
        
       </div>
    
  )
}
export default itemsLine