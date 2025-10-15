//--Login Function--
function SubmitFun(event){
  event.preventDefault()

  var Email = document.getElementById('Email').value;
  var Password = document.getElementById('Password').value;

  if(Email == 'Aakash123@gmail.com' && Password == 'Aakash@123'){
    window.location.href='home.html'
  }
  else{
    document.getElementById("Ptag").innerHTML = "*Invalid Username or Password";
    document.getElementById("Ptag").style.color = "red";
  }
}

//---Display Products and Map function---
const all_products=[
  {
    id:1,
    image:'assets/card/card1.jpg',
    title:'HP Laptop',
    desc:'High-performance HP laptop featuring Intel Core processor, 8GB RAM, 512GB SSD storage, and full HD display. Perfect for work, gaming, and multimedia tasks with long battery life.',
    price:'75000'
  },
  {
    id:2,
    image:'assets/card/card2.jpg',
    title:'DELL Laptop',
    desc:'Reliable DELL laptop with powerful processing capabilities, sleek design, and robust build quality. Equipped with advanced graphics and excellent keyboard for professional use.',
    price:'55000'
  },
  {
    id:3,
    image:'assets/card/card3.jpg',
    title:'HP Laptop',
    desc:'Premium HP laptop with cutting-edge technology, ultra-slim profile, and superior performance. Features high-resolution display, fast SSD, and advanced cooling system.',
    price:'85000'
  },
  {
    id:4,
    image:'assets/card/card4.jpg',
    title:'LENOVA Laptop',
    desc:'Versatile Lenovo laptop designed for productivity and entertainment. Offers excellent performance, durable construction, and innovative features for business and personal use.',
    price:'65000'
  },
  {
    id:5,
    image:'assets/card/card5.jpg',
    title:'ACER Laptop',
    desc:'Affordable ACER laptop with reliable performance and modern features. Great value for students and professionals, featuring decent specs and sturdy build quality.',
    price:'45000'
  },
  {
    id:6,
    image:'assets/card/card6.jpg',
    title:'Vivo y22',
    desc:'Stylish Vivo Y22 smartphone with impressive camera quality, long-lasting battery, and smooth performance. Features vibrant display and sleek design for everyday use.',
    price:'25000'
  },
  {
    id:7,
    image:'assets/card/card7.jpg',
    title:'Redme Note10',
    desc:'Popular Redmi Note 10 with exceptional value for money. Offers great camera performance, fast charging, vibrant AMOLED display, and reliable day-to-day performance.',
    price:'15000'
  },
  {
    id:8,
    image:'assets/card/card8.jpg',
    title:'RealMeproMax ',
    desc:'Advanced Realme Pro Max smartphone featuring flagship-level performance, premium design, ultra-fast charging, and professional-grade camera system for photography enthusiasts.',
    price:'45000'
  },
  {
    id:9,
    image:'assets/card/card9.jpg',
    title:'Iphone 13pro',
    desc:'Premium iPhone 13 Pro with A15 Bionic chip, ProRes video recording, advanced camera system with macro photography, and stunning Super Retina XDR display.',
    price:'45000'
  },
  {
    id:10,
    image:'assets/card/card10.jpg',
    title:'Wireless Headphone',
    desc:'High-quality wireless headphones with active noise cancellation, premium sound quality, comfortable over-ear design, and long battery life for immersive audio experience.',
    price:'15000'
  },
  {
    id:11,
    image:'assets/card/card11.jpg',
    title:'Video Games',
    desc:'Latest collection of popular video games featuring action, adventure, and sports titles. Compatible with multiple gaming platforms and offering hours of entertainment.',
    price:'85000'
  },
  {
    id:12,
    image:'assets/card/card12.jpg',
    title:'Quality Headphone',
    desc:'Professional-grade headphones with studio-quality sound, comfortable padding, adjustable headband, and superior build quality for audiophiles and music professionals.',
    price:'35000'
  },
  {
    id:13,
    image:'assets/card/card13.jpg',
    title:'Smart Watch',
    desc:'Feature-rich smartwatch with fitness tracking, heart rate monitoring, GPS, and smartphone connectivity. Perfect companion for active lifestyle.',
    price:'35000'
  },
  {
    id:14,
    image:'assets/card/card14.jpg',
    title:'AirBuds',
    desc:'True wireless earbuds with crystal clear sound, seamless Bluetooth connectivity, touch controls, and compact charging case. Ideal for music and calls on the go.',
    price:'10000'
  },
  {
    id:15,
    image:'assets/card/card15.jpg',
    title:'Bluetooth Speaker',
    desc:'Portable Bluetooth speaker with powerful bass, 360-degree sound, water-resistant design, and long-lasting battery. Perfect for outdoor activities and parties.',
    price:'35000'
  },
  {
    id:16,
    image:'assets/card/card16.jpg',
    title:'Bluetooth Speaker',
    desc:'Compact Bluetooth speaker offering excellent sound quality, wireless connectivity, and durable construction for music lovers on the move.',
    price:'15000'
  },
  {
    id:17,
    image:'assets/card/card17.jpg',
    title:'Sony Camera',
    desc:'Professional Sony camera with high-resolution sensor, advanced autofocus system, 4K video recording, and versatile lens compatibility for photography enthusiasts.',
    price:'95000'
  },
  {
    id:18,
    image:'assets/card/card18.jpg',
    title:'Smart watch',
    desc:'Advanced smartwatch with comprehensive health monitoring, GPS tracking, multiple sport modes, long battery life, and stylish design for modern lifestyle.',
    price:'35000'
  },
  {
    id:19,
    image:'assets/card/card19.jpg',
    title:'Headphones',
    desc:'Premium headphones delivering exceptional audio quality, comfortable fit, noise isolation, and durable construction. Perfect for music enthusiasts and professionals.',
    price:'55000'
  },
  {
    id:20,
    image:'assets/card/card20.jpg',
    title:'Wireless Keyboard and Mouse',
    desc:'Wireless keyboard and mouse combo with responsive keys,long battery life, and sleek design for comfortable computing experience.',
    price:'35000'
  },
]
const displayProducts= ()=>{
var productData=''
all_products.map((value)=>{
  productData+= `
    <div class="col-lg-3 col-md-6 col-12" >
    <div class="zoomparent">
        <div class="card mb-4" >
            <img src="${value.image}" alt="" height="200"  >
            <div class="card-body">
            <h4>${value.title}</h4>
            <p>${value.desc}</p>
            <div class="d-flex justify-content-between">
            <p class="text-success fs-5">Prize:${value.price}</p>
            <p class="text-warning fs-3 ms-3">*****</p><span class="text-secondary me-2 fs-5">(102)</span>
            </div>
            <div class="d-flex justify-content-between">
             <i class="fa-solid fa-cart-shopping fs-2 text-success cartitem" onclick="addtoCart(${value.id})"></i>
             <i class="fa-solid fa-heart fs-2  text-danger cartitem" onclick="addToWishlist(${value.id})"></i>
             </div>
            </div>
        </div>
        </div>
    </div> 
  `
})
document.getElementById('cardRow').innerHTML=productData
}
displayProducts()

//--- Search functions ---
const searchDevices=()=>{
  var userSearch=document.getElementById('searchInput').value.toUpperCase()
  if(userSearch.length==0){
    document.getElementById('searchProducts').innerHTML=''
  }
  else{
     var filterSearch= all_products.filter((value)=>value.title.toUpperCase().includes(userSearch))
  var searchlist=''
  filterSearch.map((value)=>{
    searchlist+=`
     <div class="col-lg-3 col-md-6 col-12" >
     <div class="zoomparent">
        <div class="card mb-4" >
            <img src="${value.image}" alt="" height="200"  class="zoom">
            <div class="card-body">
            <h3>${value.title}</h3>
            <p>${value.desc}</p>
            <p>${value.price}</p>
           <div class="d-flex justify-content-between">
             <i class="fa-solid fa-cart-shopping fs-2 text-success" onclick="addtoCart(${value.id})"></i>
             <i class="fa-solid fa-heart fs-2  text-danger" onclick="addToWishlist(${value.id})"></i>
             </div>
            </div>
        </div>
        </div>
    </div> 
    `
  })
  document.getElementById('searchProducts').innerHTML=searchlist || `<p class="text-center fs-4 text-danger">No Devices Found</p>`
  }
}

// Initialize variables
var cart=[];
var wishlist = []; // Fixed: Using consistent variable name
var TotalAmt=0;
var cartCounts=0;

const cartBadgeFun = () => {
    document.getElementById('cartCounts').innerText = cartCounts;
    document.getElementById('cartCounts').style.display = (cartCounts > 0) ? 'inline' : 'none';
};

const wishBadgeFun = () => { // Fixed: Renamed from wishcountFun
    document.getElementById('wishCounts').innerText = wishlist.length;
    document.getElementById('wishCounts').style.display = (wishlist.length > 0) ? 'inline' : 'none';
};

//Add to cart Functions
const addtoCart=(productid)=>{     
  alert("Product Added to Your Cart")
  var cartProduct=all_products.find((value)=>value.id===productid)
  var exisitingProduct=cart.find((value)=>value.id===productid)
  if(exisitingProduct){
    cartProduct.quantity++
  }
  else{
    cartProduct.quantity=1
    cart.push(cartProduct)
  }
    cartCounts++;
    cartBadgeFun();
  Displaycart(cart)
  TotalAmt=TotalAmt + Number(cartProduct.price)
  document.getElementById('totalamt').innerHTML=`Total:${TotalAmt}`
}

const Displaycart=(cartProducts)=>{
 cartlist=''
 if(cartProducts.length===0){
  cartlist=`
  <tr>
  <td colspan="5" class="text-center text-danger">Cart Empty</td>
  </tr>
  `
 }
 cartProducts.map((value)=>{
  cartlist+=`
  <tr>
   <td>${value.title}</td>
   <td>${value.price}</td>
   <td>${value.quantity}</td>
   <td>${value.price* value.quantity}</td>
   <td><button class="btn btn-danger" onclick="removeFromCart(${value.id})">Remove</button></td>
  </tr>
  `
 })
 document.getElementById('cartRow').innerHTML=cartlist
}

//remove function - remove from cart
function removeFromCart(productID){
var cartProduct=cart.find((a)=>a.id ===productID)
if(cartProduct.quantity>1){
  cartProduct.quantity--
  TotalAmt=TotalAmt- Number(cartProduct.price)
  cartCounts--;
}
else{
   cart = cart.filter((a) => a.id !== productID)
    cartCounts -= cartProduct.quantity;
   TotalAmt=TotalAmt - Number(cartProduct.price) * cartProduct.quantity
}
cartBadgeFun(); 
Displaycart(cart)
document.getElementById('totalamt').innerHTML=`Total:${TotalAmt}`
}

// Fixed Wishlist Functions
const addToWishlist = (valueID) => { // Fixed: Renamed from wishFun
  var product = all_products.find((a) => a.id === valueID)
  alert(" Product added to wishlist!")
  var existingProduct = wishlist.find((a) => a.id === valueID) // Fixed: Check existing in wishlist
  if(existingProduct){
    // Product already in wishlist, don't add again
    alert("Product already in wishlist!")
    return;
  } else {
    product.quantity = 1
    wishlist.push(product); // Fixed: Push to wishlist array
    wishBadgeFun(); // Fixed: Call correct function name
  }
  
  displayWishlist(wishlist); // Fixed: Call correct function name
}

const displayWishlist = (products) => { // Fixed: Renamed from wishlist_products
  var wishListHTML = '';
  if(products.length == 0){
    wishListHTML = `<tr>
    <td colspan='6' class="text-center text-danger">Your wishlist is empty</td>
    </tr>`
  } else {
    products.map((value) => {
      wishListHTML += `
      <tr>
      <td><img src="${value.image}" width="200" height="200"></td>             
        <td>${value.title}</td>
        <td>${value.price}</td>
        <td>${value.quantity}</td>
        <td>${value.price * value.quantity}</td>
        <td><button onclick='removeFromWishlist(${value.id})' class="btn btn-danger">Remove</button></td>
      </tr>
      `;
    })
  }
  document.getElementById('wishRow').innerHTML = wishListHTML
}

const removeFromWishlist = (valueID) => { // Fixed: Renamed from removal_cart
  alert("Product removed from wishlist!");
  wishlist = wishlist.filter((a) => a.id !== valueID) // Fixed: Filter wishlist array
  displayWishlist(wishlist); // Fixed: Call correct function
  wishBadgeFun(); // Fixed: Call correct function
};

// Initialize displays
displayWishlist(wishlist)