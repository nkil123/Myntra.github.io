import {navbar} from '/comps/navbar/navbar.js';

import {foot} from '/comps/footer/footer.js';

let nav = document.getElementById ('navbar');
nav.innerHTML = navbar ();

let opt1 = document.getElementById ('opt1');
let toshow = document.getElementById ('MEN');
let ddown = document.getElementsByClassName ('ddown');
let name = document.getElementById ('name');
opt1.onmouseover = function () {
  // console.log(toshow);
  opt1.style.borderBottom = '4px solid red';

  toshow.style.visibility = 'visible';
};
opt1.onmouseleave = function () {
  // console.log(toshow);
  opt1.style.borderBottom = null;
  toshow.style.visibility = 'hidden';
};

let opt2 = document.getElementById ('opt2');
let toshow2 = document.getElementById ('WOMEN');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
opt2.onmouseover = function () {
  // console.log(toshow2);
  opt2.style.borderBottom = '4px solid red';
  toshow2.style.visibility = 'visible';
};
opt2.onmouseleave = function () {
  // console.log(toshow2);
  opt2.style.borderBottom = null;
  toshow2.style.visibility = 'hidden';
};

let opt3 = document.getElementById ('opt3');
let toshow3 = document.getElementById ('KIDS');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
console.log (opt3, toshow3);
opt3.onmouseover = function () {
  // console.log(toshow3);
  opt3.style.borderBottom = '4px solid red';
  toshow3.style.visibility = 'visible';
};
opt3.onmouseleave = function () {
  // console.log(toshow3);
  opt3.style.borderBottom = null;
  toshow3.style.visibility = 'hidden';
};

let opt4 = document.getElementById ('opt4');
let toshow4 = document.getElementById ('HOMEL');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
console.log (opt4, toshow4);
opt4.onmouseover = function () {
  // console.log(toshow4);
  opt4.style.borderBottom = '4px solid red';
  toshow4.style.visibility = 'visible';
};
opt4.onmouseleave = function () {
  // console.log(toshow4);
  opt4.style.borderBottom = null;
  toshow4.style.visibility = 'hidden';
};

let opt5 = document.getElementById ('opt5');
let toshow5 = document.getElementById ('BEAUTY');
// let ddown = document.getElementsByClassName("ddown");
// let name = document.getElementById("name");
// console.log(opt4, toshow4);
opt5.onmouseover = function () {
  // console.log(toshow4);
  opt5.style.borderBottom = '4px solid red';
  toshow5.style.visibility = 'visible';
};
opt5.onmouseleave = function () {
  // console.log(toshow5);
  opt5.style.borderBottom = null;
  toshow5.style.visibility = 'hidden';
};

let opt6 = document.getElementById ('profileI');
let toshow6 = document.getElementById ('dprofile');

opt6.onmouseover = function () {
  toshow6.style.visibility = 'visible';
};
opt6.onmouseleave = function () {
  opt6.style.borderBottom = null;
  toshow6.style.visibility = 'hidden';
};

let wishlist = document.getElementById ('wishlistI');
wishlist.style.cursor = 'pointer';
wishlist.onclick = function () {
  window.location.href = '/wishlist/wishlist.html';
};

let logo = document.getElementById ('logo');
logo.onclick = function () {
  window.location.href = '/myntra.html';
};

let bag = document.getElementById ('bagI');
bag.style.cursor = 'pointer';
bag.onclick = function () {
  window.location.href = '/bag.html';
};

let productData = [
  {
    id: 11,
    categories: 'shirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Blue Regular Fit Printed Casual Shirt',
    price: '699',
    gender: 'men',
    description: 'Green and White printed casual shirt, has a spread collar, short sleeves, button placket, curved hem, and 1 patch pocket',
    brand: 'Roadster',
    color: 'navyBlue',
    discount: 40,
    off_price: 1049,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737673-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-3.jpg',
    },
    rating: 3.9,
    count: 29,
  },
  {
    id: 12,
    categories: 'shirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Blue Slim Fit Solid Casual Shirt',
    price: '579',
    gender: 'men',
    description: 'Blue solid casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem',
    brand: 'HERE&NOW',
    color: 'green',
    discount: 42,
    off_price: 999,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836087-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989835985-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-5.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836063-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-2.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836001-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-4.jpg',
    },
    rating: 4.1,
    count: 29,
  },
  {
    id: 13,
    categories: 'kurta',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Grey & Blue Self Design Kurta with Churidar & Nehru Jacket',
    price: '2199',
    gender: 'men',
    description: '',
    brand: 'Clovia',
    color: 'white',
    discount: 60,
    off_price: 5499,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/c18ee8eb-06f6-4d10-8f4a-680ac10fccf21527055151093-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/81b26584-a36d-414d-9653-195b978884141527055151039-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-3.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/f6d3d7cd-1acc-4e28-b8ee-29e5d9cec46c1527055151075-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-2.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/83986b07-a78e-4999-b2bd-7bacbd5532411527055151001-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-4.jpg',
    },
    rating: 5.9,
    count: 29,
  },
  {
    id: 14,
    categories: 'tshirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men White & Navy Blue Pure Cotton Striped Polo Collar T-shirt',
    price: '359',
    gender: 'men',
    description: 'White and navy blue Tshirt for men',
    brand: 'Mast & Harbour',
    color: 'white',
    discount: 10,
    off_price: 899,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/8e12d936-e770-48d3-a285-b72c4c1c74391623996957697-Mast--Harbour-Men-Tshirts-3781623996957278-4.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/db2efb33-c1a0-40b2-8020-fa5eadad32ea1623996957756-Mast--Harbour-Men-Tshirts-3781623996957278-1.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/00f807c0-7a9e-4887-883d-400a542abc161623996957677-Mast--Harbour-Men-Tshirts-3781623996957278-5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14350098/2021/6/18/c72642c3-92a0-4495-8a64-31a49445206b1623996957736-Mast--Harbour-Men-Tshirts-3781623996957278-2.jpg',
    },
    rating: 3.9,
    count: 29,
  },
  {
    id: 15,
    categories: 'short',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Navy Blue Solid Slim Fit Chino Shorts',
    price: '686',
    gender: 'men',
    description: '',
    brand: 'Dressberry',
    color: 'black',
    discount: 45,
    off_price: 1249,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/76a1fe8c-86c9-4ff1-bd68-2d333cfc03831544132056588-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/2bf7f927-99ec-4670-88ae-8e3ef0b9dfb81544132056680-4.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/60cd97ef-9491-4742-8446-28887c9dc4b51544132056702-5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/7/76a1fe8c-86c9-4ff1-bd68-2d333cfc03831544132056588-1.jpg',
    },
    rating: 4.9,
    count: 29,
  },
  {
    id: 16,
    categories: 'shirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Pink Slim Fit White Vertical Stripes Formal Shirt',
    price: '2980',
    gender: 'men',
    description: 'Pink white vertical stripes opaque formal  shirt ,has a spread collar, button placket, patch pocket, long sleeve  straight hem.',
    brand: 'Celfie Design',
    color: 'pink',
    discount: 11,
    off_price: 3349,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/3ec609b9-d503-4018-9b44-8973a43817391624115526512-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/4f34f640-5fff-4629-9734-137a56c705701624115526552-5.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/83e7a941-1882-4541-b740-995a5565047f1624115526542-4.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/91bae618-50fc-4547-b2d9-a1f5387ffd2f1624115526522-2.jpg',
    },
    rating: 3.9,

    count: 29,
  },
  {
    id: 17,
    categories: 'kurta',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Red & Green Striped Pure Cotton Kurta',
    price: '854',
    gender: 'men',
    description: '',
    brand: 'KALINI',
    color: 'red',
    discount: 55,
    off_price: 1899,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/67ad0999-a2f1-4251-a370-207fc1bdad4d1628241598838-Anouk-Men-Red-Striped-Kurta-6691628241598334-3.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/eeb519eb-0f0c-4c75-b74c-8d629c055cd71628241598817-Anouk-Men-Red-Striped-Kurta-6691628241598334-4.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/eeb519eb-0f0c-4c75-b74c-8d629c055cd71628241598817-Anouk-Men-Red-Striped-Kurta-6691628241598334-4.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13238920/2021/8/6/a07ddf2e-c77f-4c3a-8640-d2cbb78123c11628241598859-Anouk-Men-Red-Striped-Kurta-6691628241598334-2.jpg',
    },
    rating: 3.9,
    count: 825,
  },
  {
    id: 18,
    categories: 'shoes',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Tan Mouse High Cushioning Running Shoes',
    price: '749',
    gender: 'men',
    description: 'Textured and patterned outsole',
    brand: 'Roadster',
    color: 'red',
    discount: 25,
    off_price: 999,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/03c95244-17fa-4509-a49a-0c3eb25b40171631785441918CLYMBMenTan1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/9456b860-90b7-4b68-9bbf-2fbeead4b4e71631785441910CLYMBMenTan2.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/80d1d0fd-7309-4f20-9122-2cd39a8e09ee1631785441586CLYMBMenTan5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15497558/2021/9/16/77547986-1f86-4b62-9687-b6f0333609781631785442064CLYMBMenTan7.jpg',
    },
    rating: 2.9,
    count: 824,
  },
  {
    id: 19,
    categories: 'shoes',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Unisex Black Precision V Basketball Shoes',
    price: '4599',
    gender: 'men',
    description: '',
    brand: 'Roadster',
    color: 'black',
    discount: 25,
    off_price: 4999,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/73fc1074-0a84-4845-b452-9a6a080be4cb1635336510062-Nike-Precision-5-Basketball-Shoes-5381635336509646-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/2cd4e8e1-4b3c-4b45-895a-ac5144e824b81635336510034-Nike-Precision-5-Basketball-Shoes-5381635336509646-4.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/99432808-e710-43b9-ab8e-718c9b1a1a001635336510023-Nike-Precision-5-Basketball-Shoes-5381635336509646-5.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15384986/2021/10/27/99432808-e710-43b9-ab8e-718c9b1a1a001635336510023-Nike-Precision-5-Basketball-Shoes-5381635336509646-5.jpg',
    },
    rating: 3.2,
    count: 735,
  },
  {
    id: 20,
    categories: 'tshirt',
    size: 'Sizes : 39, 40, 42, 44...',
    title: 'Men Light Blue Logo Printed Slim Fit Casual T-shirt',
    price: '3299',
    gender: 'men',
    description: 'Blue T-shirt for men',
    brand: 'Roadster',
    color: 'blue',
    discount: 10,
    off_price: 3399,
    images: {
      image1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/3ae9949f-002c-4329-9590-7182c6ebd1421632910116761-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-1.jpg',
      image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/eaf82df0-f587-43c2-b857-d27db4e92f7e1632910116752-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-2.jpg',
      image3: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/99f02959-6e3a-4693-a58a-2e70e98148ba1632910116735-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-4.jpg',
      image4: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14590966/2021/9/29/0e145eb2-0cb6-4001-9a5f-24822cd773b31632910116725-Calvin-Klein-Jeans-Men-Tshirts-4161632910116207-5.jpg',
    },
    rating: 4.9,
    count: 420,
  },

  {
    id: 21,
    title: 'White & Black Sheath Dress & Belt',
    categories: 'dresses',
    price: 903,
    gender: 'women',
    description: 'White and black typography print sheath dress,Round neck,Sleeveless, no sleeves,Above knee length in,straight hem,Comes with a belt',
    brand: 'Clovia',
    color: 'white',
    discount: 35,
    off_price: 1390,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/817dc96e-f893-47aa-824e-98d91f396f261630562359704EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/90a66afe-feb2-40c1-a699-c81cd7a09fbd1630562359723EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/a5bf4c69-c5c9-4d75-a2e7-e3bcc92114101630562359741EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15286934/2021/9/2/179c0b82-63bf-4388-9feb-aec125d4579b1630562359760EarringsURBANICWomenJacketsURBANICWomenCoatsURBANICWomenDres4.jpg',
    },
    rating: 4.2,
    count: 925,
  },

  {
    id: 22,
    title: 'Women Pink Daisy Duck Printed Sweatshirt',
    price: 799,
    gender: 'women',
    categories: 'tops',
    description: '',
    brand: 'Mast & Harbour',
    color: 'pink',
    discount: 60,
    off_price: 1999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/352e3703-d6de-43d5-804b-370082c81f6d1573553236671-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/ebe54fda-7589-4a0b-9332-a35e6b5ee3571573553236609-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/91b2fadd-735f-486c-9bfa-bcb3ba2ea9b71573553236558-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10278877/2019/11/12/a28f02d9-e138-43e2-ab00-03060e27d03d1573553236511-Kook-N-Keech-Disney-Women-Pink-Daisy-Duck-Printed-Sweatshirt-4.jpg',
    },
    rating: 4.5,
    count: 835,
  },
  {
    id: 23,
    title: 'Women Navy Blue & Beige Embroidered Pullover Sweater',
    price: 959,
    categories: 'tops',
    gender: 'women',
    description: 'Navy Blue and Beige solid pullover sweater, has a round neck, long sleeves, and ribbed hem',
    brand: 'Dressberry',
    color: 'blue',
    discount: 70,
    off_price: 2399,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/fce2dfb7-4a8b-44ea-a8fa-57d3a4161ef31604297764803-all-about-you-Women-Sweaters-6661604297763170-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/2e227d7f-a463-44d1-8d44-80501a19c74e1604305672635-all-about-you-Women-Sweaters-4511604305671949-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/1204a9f6-69ac-458e-8645-3aec5cf8ba651604305672584-all-about-you-Women-Sweaters-4511604305671949-4.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12258968/2020/11/2/d9a92fdb-91db-472c-998f-f82bb73a53291604297764597-all-about-you-Women-Sweaters-6661604297763170-5.jpg',
    },
    rating: 4.5,
    count: 835,
  },
  {
    id: 24,
    title: 'Women Red Solid A-Line Dress',
    price: 1049,
    categories: 'dresses',
    gender: 'women',
    description: 'Red solid woven A-line dress with lace detail, has a round neck, long sleeves, flared hem',
    brand: 'Dressberry',
    color: 'red',
    discount: 65,
    off_price: 2999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/ea790e3a-c52f-4fa4-9aee-e1db99ae737e1577961976602-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/57597b08-078d-4bdb-b39f-3833473631101577961976531-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/1bf946b1-365b-4b41-b69d-1c504680d71f1577961976455-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8828611/2020/1/2/56d2fe6c-3a17-4104-bacb-3d1b96f5eb361577961976567-Vero-Moda-Women-Red-Solid-A-Line-Dress-1201577961974902-2.jpg',
    },
    rating: 4,
    count: 675,
  },

  {
    id: 25,
    title: 'Women Blue Mile Super Skinny Fit High-Rise Light Fade Stretchable Jeans',
    price: 2939,
    gender: 'women',
    description: '',
    brand: 'Roadster',
    color: 'blue',
    discount: 40,
    off_price: 4899,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/125fc4ac-7be7-4a35-98cc-0ed8af5e0c581626695221843-Levis-Women-Jeans-4801626695221087-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/af4361b5-a6d2-48f0-ad55-05f45dd3d8a31626695221833-Levis-Women-Jeans-4801626695221087-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/e021dfdf-261d-47fc-a987-5e4d3b611c8b1626695221824-Levis-Women-Jeans-4801626695221087-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13326252/2021/7/19/d471eede-c3aa-49ea-b821-f035fc3e83431626695221812-Levis-Women-Jeans-4801626695221087-4.jpg',
    },
    rating: 4.4,
    count: 768,
  },
  {
    id: 26,
    title: 'Women Mustard Yellow & Green Solid Kurta Set With Embroidery Detail',
    categories: 'tops',
    price: 1399,
    gender: 'women',
    description: 'Mustard yellow and green solid kurta with trousers,Mustard yellow straight calf length kurta with embroidery detail, has a keyhole neck, three-quarter sleeves, straight hem, side slits,Green Solid trousers, has partially elasticated waistband, slip-on closure',
    brand: 'Clovia ',
    color: 'yellow',
    discount: 80,
    off_price: 2999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/c91ccc8e-0a50-4497-a6f1-0b34d3db13ed1582794835211-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/0e222ff4-142f-42b2-ad6a-83aa14e0944f1582794835163-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/4189e086-e74b-42d0-ad6a-520a26d0a0461582794835122-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11457130/2020/2/27/706db7d0-abb7-4f5e-b7ca-b370bf44cd961582794835078-varanga-mustard-silk-zari-and-thread-embroidered-straight-ku-4.jpg',
    },
    rating: 4.1,
    count: 6987,
  },
  {
    id: 27,
    title: 'Women Mustard Yellow & Pink Printed Pure Cotton Anarkali Tiered Maxi Dress',
    price: 2249,
    categories: 'dresses',
    gender: 'women',
    description: 'Mustard yellow and Pink printed woven Anarkali tiered maxi dress with gathers, has a round neck, three-quarter sleeves, an attached lining, and flounce hem',
    brand: 'HERE&NOW',
    color: 'yellow',
    discount: 55,
    off_price: 4999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/bc248d16-5d0c-489d-b5c1-e2c8ee5671471608291727502-W-Yellow-Printed-Tiered-Dress-1091608291724681-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/c1ad9dcf-ce37-44b2-b030-6f5cf4d476bb1608291727416-W-Yellow-Printed-Tiered-Dress-1091608291724681-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/eb96c1bc-e445-491f-a463-19e3448c8c311608291727377-W-Yellow-Printed-Tiered-Dress-1091608291724681-4.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13078216/2020/12/18/2fd07bb2-f22b-471a-ae9a-a7a6a6c6ccdd1608291727335-W-Yellow-Printed-Tiered-Dress-1091608291724681-5.jpg',
    },
    rating: 4.4,
    count: 567,
  },
  {
    id: 28,
    title: 'Women Pink Solid Round Neck T-shirt',
    price: 899,
    categories: 'tshirt',
    gender: 'women',
    description: 'Pink solid T-shirt, has a round neck, and short sleeves',
    brand: 'Mast & Harbour',
    color: 'pink',
    discount: 50,
    off_price: 1799,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/573f7013-7bb5-40c5-8b04-3ec22c5d811e1615530797360-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/66345c42-9508-4455-8431-d96f8aedd4211615530797339-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/11f832dd-c2c0-445a-9624-0351b853e0d51615530797319-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12831554/2021/3/12/1cf3d4e5-09e1-4dc5-aff8-4bc9eba10a4d1615530797299-GAP-Women-Pink-Solid-Round-Neck-T-shirt-9491615530795443-4.jpg',
    },
    rating: 3.9,
    count: 587,
  },
  {
    id: 29,
    title: 'Red & Maroon Tie and Dye RUSH Running Tank Top',
    price: 2999,
    categories: 'tops',
    gender: 'women',
    description: 'Engineered with heat gear technology',
    brand: 'Celfie Design',
    color: 'red',
    discount: 90,
    off_price: 5999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/32141767-702d-4707-a690-8cbccf6695fb1623387738978TopsUNDERARMOURWomenTopsUNDERARMOURWomen1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/b6be3d24-f551-4509-86d0-3178d10491c31623387739147TopsUNDERARMOURWomenTopsUNDERARMOURWomen2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/958e31b1-9b64-4d7d-bc10-cfde876586161623387739288TopsUNDERARMOURWomenTopsUNDERARMOURWomen3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10796206/2021/6/11/6e5cfbd2-062d-4485-9b6f-63c0d94c1ad11623387739436TopsUNDERARMOURWomenTopsUNDERARMOURWomen4.jpg',
    },
    rating: 3.6,
    count: 290,
  },

  {
    id: 30,
    title: 'Black Dri-FIT Swoosh Zip-Front Medium-Support Workout Bra - Lightly Padded',
    price: 2021,
    gender: 'women',
    description: 'Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable.Stretch fabric and an elastic chest band provide a comfortable, compressive feel while shaping to prevent the sensation of empty space in your cups.The semi-auto lock zipper on the front helps prevent unwanted unzipping yet still makes it easy to get in and out',
    brand: 'KALINI',
    color: 'black',
    discount: 25,
    off_price: 2695,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/1896ad8d-3bb0-43d4-b10e-4718d44fb1e31631612114483-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/505e35c2-533d-4f98-b84c-6c3065e3e43e1631612114463-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/4991242e-a848-4db8-bb17-d18495db1ebc1631612114444-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14558962/2021/9/14/32db2112-de4d-49a6-b1f0-f663206f5ca91631612114425-Nike-Black-Dri-FIT-Swoosh-Zip-Front-Medium-Support-Workout-B-4.jpg',
    },
    rating: 4.3,
    count: 290,
  },
  {
    id: 121,
    categories: 'beautycare',
    title: 'Radiance Complexion Compact - Natural Pearl',
    price: 124,
    gender: 'women',
    description: 'Radiance Complexion Compact - Natural Pearl',
    brand: 'Lakme',
    color: 'white',
    discount: 20,
    off_price: 31,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/images/style/properties/Lakme-Women-Compact_8f0ee5108e3225064c1561fae7f3ed51_images.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/4/14/7b4602de-87cf-49e6-b08c-fc403a2dcb371618389150988-15.jpg',
    },
    ratings: 4.3,
    count: 25,
  },
  {
    id: 122,
    categories: 'beautycare',
    title: 'Perfecting Liquid Foundation - Natural Marble 27ml',
    price: 124,
    gender: women,
    description: 'LakmePerfecting Liquid Foundation',
    Shadename: 'Natural Marble',
    brand: 'Lakme',
    color: 'white',
    discount: 20,
    off_price: 31,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/55242/2018/5/3/11525323539195-Lakme-Perfecting-Natural-Marble-Liquid-Foundation-9801525323539158-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/4/14/ef915006-f037-4ad1-80dd-ddb0a4d9a38a1618389161261-15.jpg',
    },
    ratings: 4.3,
    count: 255,
  },
  {
    id: 123,
    categories: 'beautycare',
    title: 'New York Colossal Volume Express Waterproof Mascara - Black 10 g',
    price: 319,
    gender: 'women',
    description: '',
    brand: 'Maybelline',
    color: 'black',
    discount: 20,
    off_price: 70,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10849052/2019/12/4/3e2cb1c3-b3c1-4024-8564-b57f80d02fcd1575450466090MaybellineNewYorkWaterproofBlackVolumeExpressColossalMasacar2.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/6/15/d3930fd7-6ad9-4a23-8b70-b4ff4f27cdc81623745687917-1.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10849052/2019/12/4/645a8cef-8d8d-4da3-87c8-8e08512c32b71575450466046MaybellineNewYorkWaterproofBlackVolumeExpressColossalMasacar1.jpg',
      image4: '',
    },
    ratings: 4.5,
    count: 45,
  },
  {
    id: 124,
    categories: 'beautycare',
    title: 'Perfect Match Primer 30 ml',
    price: 595,
    gender: 'women',
    description: 'Colorbar Perfect Match Primer',
    brand: 'Colorbar',
    color: 'black',
    discount: 10,
    off_price: 140,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/220738/2020/6/15/8b32f353-3189-4b82-9a6f-937a058eccff1592214516880ColorbarPerfectMatchPrimer30ml1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/3/1/8503d2e8-6330-4096-ad76-85290bc228a01614579407303-15.jpg',
    },
    ratings: 48,
    count: 75,

    // ratings:4,
    // >>>>>>> b4bd3b42963ec943f3b61c491c9ecd57d58710db
  },
  {
    id: 125,
    categories: 'beautycare',
    title: 'Insta-Liner - Black 9ml',
    price: 104,
    gender: 'women',
    description: 'Insta-Liner',
    Shadename: 'black',
    brand: 'Lakme',
    color: 'black',
    discount: 20,
    off_price: 26,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11629082/2020/4/17/09540356-4d63-4c69-9767-e140bf455a951587127536678-Lakme-Insta-Liner---Black-9ml-1911587127536433-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/4/14/8fa011ab-7b90-41e7-9b72-ba3229a568181618389182461-15.jpg',
    },
    ratings: 4.4,
    count: 23,
  },
  {
    id: 126,
    categories: 'beautycare',
    title: 'Set of 2 Eyeconic Kajal - Deep Black 0.70 g Each',
    price: 240,
    gender: 'women',
    description: 'Eyeconic Kajal',
    Shade: 'Deep black',
    brand: 'Lakme',
    color: 'black',
    discount: 25,
    off_price: 80,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11629094/2020/7/9/d9cc4f27-9deb-46ca-821e-a37410cbcbd51594288324999LakmeSetof2EyeconicKajal-DeepBlack070g1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/4/14/8fa011ab-7b90-41e7-9b72-ba3229a568181618389182461-15.jpg',
    },
    ratings: 4.6,
    count: 250,
  },
  {
    id: 127,
    categories: 'beautycare',
    title: 'Lip Plumping Sleeping Mask Vitamin C + E - 15 ml',
    price: 355,
    gender: 'women',
    description: 'Lip Plumping Sleeping Mask Vitamin C + E - 15 ml',
    brand: 'DOT & KEY',
    color: '',
    discount: 10,
    off_price: 40,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14373234/2021/8/11/45c372da-2fff-428f-9548-fc3625946d131628671206753DOTKEYLipPlumpingSleepingMaskVitaminCE-15ml1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14373234/2021/8/11/80ecb7bf-38a7-447d-bb81-e41e16c565ea1628671206772DOTKEYLipPlumpingSleepingMaskVitaminCE-15ml3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14373234/2021/8/11/0f5322d8-2d51-48f1-812b-8f292aea648e1628671206783DOTKEYLipPlumpingSleepingMaskVitaminCE-15ml4.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14373234/2021/8/11/99fa7240-9613-4e2c-96fb-e6160a4553451628671206876DOTKEYLipPlumpingSleepingMaskVitaminCE-15ml5.jpg',
    },
    ratings: 4.4,
    count: 253,
  },
  {
    id: 128,
    categories: 'beautycare',
    title: 'New York The Nudes Eyeshadow Palette - Blush 9g',
    price: 633,
    gender: 'women',
    description: 'The Blushed Nudes Eyeshadow Palette',
    ShadeName: 'Blush',
    brand: 'Maybelline',
    color: 'black',
    discount: 30,
    off_price: 272,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10849124/2019/12/4/a62fbd1d-1bb3-4718-86f1-42ad941c134b1575450495021MaybellineNewYorkTheBlushedNudesEyeshadowPalette9g1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10849124/2019/12/4/5b9e78b0-50d3-4521-a1b5-dd22f81c16641575450495073MaybellineNewYorkTheBlushedNudesEyeshadowPalette9g2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10849124/2019/12/4/42706a36-0af8-4f95-8f5a-7a2a76752d431575450495175MaybellineNewYorkTheBlushedNudesEyeshadowPalette9g4.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/banner2021/6/15/95d11d5d-695e-49e7-b859-ec4a2d627dca1623745486350-1.jpg',
    },
    ratings: 4.4,
    count: 225,
  },
  {
    id: 129,
    categories: 'beautycare',
    title: 'New York Super Stay Matte Ink Liquid Lipstick - 120 Artist',
    price: 594,
    gender: 'women',
    description: 'Maybelline New York Super Stay Matte Ink Liquid Lipstick',
    Shadename: 'Artist 120',
    brand: 'Maybelline',
    color: 'pink',
    discount: 15,
    off_price: 105,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8051031/2019/2/1/5c082d93-07e3-4293-afb9-3dfde63434de1549023037771-Maybelline-Women-Lipstick-1691549023037363-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8051031/2019/2/1/216af8dc-747e-47d5-9289-a121dabbe7d31549023037749-Maybelline-Women-Lipstick-1691549023037363-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8051031/2019/2/1/a48b98d3-c77c-4886-8a16-4ade73c48c8d1549023037726-Maybelline-Women-Lipstick-1691549023037363-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8051031/2019/7/26/9dd6f3a1-670d-4858-bf7f-b5c455941c081564133362377-Maybelline-New-York-120-Artist-Super-Stay-Matte-Ink-Liquid-L-4.jpg',
    },
    ratings: 4.5,
    count: 275,
  },
  {
    id: 130,
    categories: 'beautycare',
    title: 'Absolute Blur Perfect Makeup Primer - Mini 10g',
    price: 239,
    gender: 'women',
    description: 'Absolute Blur Perfect Makeup Primer - Mini',
    brand: 'Lakme',
    color: '',
    discount: 20,
    off_price: 60,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13203912/2021/3/24/0f5fe5cb-696c-4cd5-a911-f1cec296f5e51616572811065-Lakme-Women-Foundation-and-Primer-4691616572807941-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13203912/2021/3/24/742b61d1-ea33-4903-905d-81534c0e86411616572811049-Lakme-Women-Foundation-and-Primer-4691616572807941-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13203912/2021/3/24/05be9198-0ea5-46cf-bf00-ab70b68912c51616572811030-Lakme-Women-Foundation-and-Primer-4691616572807941-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13203912/2021/3/24/99beb15e-b8f9-407e-9d92-6a63a269b0f21616572811009-Lakme-Women-Foundation-and-Primer-4691616572807941-4.jpg',
    },
    ratings: 4.3,
    count: 295,
  },

  {
    id: 131,
    categories: 'beautycare',
    title: 'Magneteyes Kajal Black 01',
    price: 143,
    gender: 'women',
    description: 'The Faces Canada MagnetEyes kajal is the new age kohl you all need to make a bold statement! It is waterproof, fadeproof and does not smudge for upto 24hrs, so that you have gorgeous looking deep black eyes all day long.',
    brand: 'FACES CANADA',
    color: 'black',
    discount: 20,
    off_price: 36,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8886405/2020/5/27/8125981f-1326-46db-b28e-0e987c5fed371590583803443FACESCANADAMagneteyesKajal-Black01035g3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8886405/2020/5/27/f7ebb53e-32cf-4d31-b8b5-94f0cd2ac43d1590583803519FACESCANADAMagneteyesKajal-Black01035g4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8886405/2020/5/27/f3c03cf2-6183-4817-a226-b4d21600fc9a1590583803677FACESCANADAMagneteyesKajal-Black01035g5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8886405/2020/5/27/1ebb4026-b6e1-468e-b077-4ae8c65ddef81590583803789FACESCANADAMagneteyesKajal-Black01035g6.jpg',
    },
    ratings: 4.4,
    count: 205,
  },

  {
    id: 132,
    title: 'Girls Black Shorts',
    price: 359,
    gender: 'women',
    description: '',
    category: 'Girls Clothing',
    brand: 'Pantaloons Junior',
    color: 'black',
    discount: 10,
    off_price: 40,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/10/89bcff77-3a32-47ae-ad76-d4ca378b9cde1618061823569-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/10/37df6d82-5298-4014-80e4-27340cabbb591618061823585-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/10/27d29bd4-bd25-4875-8778-75ba4d779bcb1618061823601-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/10/ec7c56bd-b83a-4a0f-853e-fb9ba0620f641618061823622-4.jpg',
    },
    ratings: 4.4,
    count: 275,
  },
  {
    id: 133,
    title: 'Blue Kurti',
    price: 699,
    gender: 'women',
    description: '',
    category: "Women's Clothing",
    brand: 'AKKRITI BY PANTALOONS',
    color: 'blue',
    discount: 10,
    off_price: 709,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2495749/2018/7/6/8c081892-7e67-481e-a7af-a6a4d48ab7681530867771299-AKKRITI-BY-PANTALOONS-Blue-Kurti-381530867771085-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2495749/2018/7/6/357677f9-3c94-4715-9c42-62370cffc57a1530867771271-AKKRITI-BY-PANTALOONS-Blue-Kurti-381530867771085-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2495749/2018/7/6/67b0c877-2c9b-4d30-b2f7-93dce4fb89bc1530867771246-AKKRITI-BY-PANTALOONS-Blue-Kurti-381530867771085-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2495749/2018/7/6/22d1049b-2a9b-4fc0-8069-21347e208e201530867771227-AKKRITI-BY-PANTALOONS-Blue-Kurti-381530867771085-4.jpg',
    },
    ratings: 5.2,
    count: 295,
  },
  {
    id: 134,
    title: 'Black Culottes',
    price: 699,
    gender: 'women',
    description: '',
    category: 'Women Clothing',
    brand: 'Ajile by Pantaloons',
    color: 'black',
    discount: 10,
    off_price: 799,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1450649/2016/8/5/11470396481435-Ajile-by-Pantaloons-Women-Trousers-1041470396480422-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1450649/2016/8/5/11470396481412-Ajile-by-Pantaloons-Women-Trousers-1041470396480422-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1450649/2016/8/5/11470396481390-Ajile-by-Pantaloons-Women-Trousers-1041470396480422-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1450649/2016/8/5/11470396481366-Ajile-by-Pantaloons-Women-Trousers-1041470396480422-4.jpg',
    },
    ratings: 5.6,
    count: 85,
  },
  {
    id: 135,
    title: 'Men Black Striped Sporty Jacket',
    price: 2299,
    gender: 'men',
    description: 'Black solid striped sporty jacket with zip detail, has a hooded, 2 pockets ,has a zip closure, long sleeves, straight hemline, without lining',
    category: 'Men Clothing',
    brand: 'Street Armor by Pantaloons',
    color: 'black',

    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15615048/2021/9/25/998a78d8-157d-4dad-9178-42b130e3915a1632570452832StreetArmorbyPantaloonsMenBlackStripedSportyJacket1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15615048/2021/9/25/a64253af-ec67-4dec-881b-8e0045ba4e5b1632570453105StreetArmorbyPantaloonsMenBlackStripedSportyJacket2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15615048/2021/9/25/849d45fd-c14e-4f2a-a8d1-74cbb63b0bd11632570452971StreetArmorbyPantaloonsMenBlackStripedSportyJacket3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15615048/2021/9/25/ae7ac7db-b4f0-4bee-b010-ac61a609931b1632570453245StreetArmorbyPantaloonsMenBlackStripedSportyJacket4.jpg',
    },
    ratings: 3.6,
    count: 805,
  },
  {
    id: 136,
    title: 'Men Green Solid Stole With Tasseled Border',
    price: 454,
    gender: 'men',
    description: 'Green solid stole, has tasselled border',
    category: 'Men Clothing',
    brand: 'indus route by Pantaloons',
    color: 'green',
    discount: 35,
    off_price: 245,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14213532/2021/4/30/8a964d9c-4e86-494a-8f9d-4d09f13094ee1619760130463indusroutebyPantaloonsMenGreenSolid1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14213532/2021/4/30/e9516f70-9469-43c8-9d70-1b538e206d551619760130527indusroutebyPantaloonsMenGreenSolid3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14213532/2021/4/30/587729f1-9020-4cc6-8c77-e980b0261d061619760130550indusroutebyPantaloonsMenGreenSolid4.jpg',
    },
    ratings: 4.0,
    count: 274,
  },
  {
    id: 137,
    title: 'Women White Solid Pure Cotton Camisole',
    price: 199,
    gender: 'women',
    description: 'White solid non-padded camisole, has an adjustable shoulder strap, scoop neck, and sleeveless',
    category: 'Women Clothing',
    brand: 'Dreamz by Pantaloons',
    color: 'white',
    discount: '20',
    off_price: 349,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15856648/2021/10/20/f7058f62-5437-455b-965c-e6a6527f16d71634712078687DreamzbyPantaloonsWomenWhiteSolidPureCottonCamisole1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15856648/2021/10/20/0ed0e185-6e52-4881-9a17-d74a0d5d9a591634712078709DreamzbyPantaloonsWomenWhiteSolidPureCottonCamisole3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15856648/2021/10/20/c7ef3ec9-b53f-4f2b-8813-96a3b1422bfb1634712078732DreamzbyPantaloonsWomenWhiteSolidPureCottonCamisole2.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15856648/2021/10/20/a72cc9b8-a314-4c64-80bb-0837bdc0efa51634712078720DreamzbyPantaloonsWomenWhiteSolidPureCottonCamisole4.jpg',
    },
    ratings: 4.7,
    count: 205,
  },
  {
    id: 138,
    title: 'Women Black & White Colourblocked Poncho Shrug',
    price: 1699,
    gender: 'women',
    description: 'Black & white colourblocked knitted poncho, has a ribbed mock neck, long sleeves and high-low hemline',
    category: 'Women Clothing',
    brand: 'Annabelle by Pantaloons',
    color: 'white',
    discount: 65,
    off_price: 3200,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/23/50d6bd63-ac50-43c9-8afb-39c5b9a832c31606135974499-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/23/3beba1f4-b639-4048-8d7a-137618f09c1d1606135974549-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/23/5be75c2f-90b5-4163-8689-2feb4771afdd1606135974596-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/23/c004d015-55c8-4a7f-9845-679e27ec54e11606135974639-4.jpg',
    },
    ratings: 1.6,
    count: 256,
  },
  {
    id: 139,
    title: 'Women Pink Textile Running Non-Marking Shoes',
    price: 1199,
    gender: 'women',
    description: 'A pair of pink running shoes, has mid-top Styling, slip-on detail Textile upper Cushioned footbed Textured and patterned outsole',
    category: 'Women Footwear',
    brand: 'Forever Glam by Pantaloons',
    color: 'pink',

    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15527452/2021/9/18/bd6c72f7-278a-41ff-8ec7-e8295e80dff11631963742447SportsShoes3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15527452/2021/9/18/75f70271-69c2-43a9-9dae-71dc8ca191ec1631963742455SportsShoes4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15527452/2021/9/18/3c33f6c6-d8c2-41c6-8fda-82eb6748febb1631963742206SportsShoes5.jpg',
    },
    ratings: 4.2,
    count: 257,
  },
  {
    id: 140,
    title: 'Peach-Coloured Printed Shopper Tote Bag',
    price: 199,
    gender: 'women',
    description: '',
    category: 'Women Accessories',
    brand: 'Forever Glam by Pantaloons',
    color: 'blue',
    discount: 40,
    off_price: 300,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15511298/2021/9/17/a5cd135c-f3e2-469c-823e-e80f58dc82191631869929752ForeverGlambyPantaloonsPeach-ColouredPrintedShopperToteBag1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15511298/2021/9/17/a64d0f8a-850b-4d41-b88b-8d6fc7667a641631869929856ForeverGlambyPantaloonsPeach-ColouredPrintedShopperToteBag2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15511298/2021/9/17/866c183c-c283-47ba-93b9-1ee87fadd4f71631869929650ForeverGlambyPantaloonsPeach-ColouredPrintedShopperToteBag3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15511298/2021/9/17/bc1ec90a-ff32-4b26-bd20-922397370e1f1631869930008ForeverGlambyPantaloonsPeach-ColouredPrintedShopperToteBag4.jpg',
    },
    ratings: 4.5,
    count: 259,
  },

  {
    id: 111,
    title: 'Men Olive Green Solid Active Bomber Jacket',
    price: 2399,
    gender: 'men',
    description: 'Lightweight jacket provides insulation and helps maintain body temperature in mild cold Breathable fabric helps sweat dry fast.',
    Colour: 'green',

    categories: 'shirt',
    brand: 'roadster',
    color: 'Olive Green',
    discount: 40,
    off_price: 1600,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4453297/2019/12/2/77b5d9e0-8d65-4a36-94e7-290ed271db6b1575267599079-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4453297/2019/12/2/fff8b47c-4590-4bf1-9dbd-b8cc23f0eef91575267599038-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4453297/2019/12/2/f36c883f-a15d-4dfe-a738-703e75c05cae1575267598892-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4453297/2019/12/2/e4423e58-eb11-4a71-8fb9-5adb67da52391575267598934-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-4.jpg',
    },
    ratings: 4.3,
    count: 225,
  },
  {
    id: 112,
    title: 'Men Maroon Solid Hooded Sweatshirt',
    price: 1649,
    gender: 'men',
    description: 'Maroon solid sweatshirt, has a hood, two pockets, long sleeves, zip closure, straight hem',
    category: "Men's Clohting",
    brand: 'HRX',
    color: 'red',
    discount: 45,
    off_price: 1350,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846948/2020/9/17/b431435b-1034-4ae2-b8fa-327e93ed6c1e1600332870635-HRX-by-Hrithik-Roshan-Men-Sweatshirts-1831600332868391-3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846948/2020/9/17/4244372a-07e6-4985-be31-a1bd401704391600332870552-HRX-by-Hrithik-Roshan-Men-Sweatshirts-1831600332868391-4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846948/2020/9/17/3c457868-4ff1-425f-ab2f-b2a6ca208d8f1600332870479-HRX-by-Hrithik-Roshan-Men-Sweatshirts-1831600332868391-5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846948/2020/9/17/654b3cab-e573-48d3-ab19-39dfb5d47cf11600332870711-HRX-by-Hrithik-Roshan-Men-Sweatshirts-1831600332868391-2.jpg',
    },
    ratings: 4.5,
    count: 258,
  },
  {
    id: 113,
    title: 'Men Black Solid Rapid Dry Running Joggers',
    price: 1044,
    gender: 'men',
    description: "Take the gym look outdoors with the HRX Men's Active Track Pants. Designed with sweat wicking technology, it'll keep you cool and dry all day long",
    category: "Men's Clothing",
    brand: 'HRX',
    color: 'black',
    discount: 45,
    off_price: 855,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7610386/2019/1/8/788b1ef1-331a-45ac-b225-f205f35063901546937930482-HRX-Active-by-Hrithik-Roshan-Men-Black-Solid-Rapid-dry-Runni-3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7610386/2019/1/8/06e2a088-e851-4ede-a16b-bedb83203b611546937930451-HRX-Active-by-Hrithik-Roshan-Men-Black-Solid-Rapid-dry-Runni-4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7610386/2019/1/8/cc68f4be-49d6-434c-b468-d47772ae4aa11546937930409-HRX-Active-by-Hrithik-Roshan-Men-Black-Solid-Rapid-dry-Runni-6.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7610386/2019/1/8/39fcb069-2ba6-4cc0-b47b-21ab1f4fcbe91546937930496-HRX-Active-by-Hrithik-Roshan-Men-Black-Solid-Rapid-dry-Runni-2.jpg',
    },
    ratings: 3.8,
    count: 275,
  },
  {
    id: 114,
    title: 'Unisex Grey & Black Solid Training Duffel Bag',
    price: 959,
    gender: 'women',
    description: 'Black solid gym duffel bag One shoulder strap One main compartment One zip pocket on the front',
    category: 'Unisex Accessories',
    brand: 'HRX',
    color: 'black',
    discount: 52,
    off_price: 1999,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2453352/2018/3/20/11521547263298-HRX-by-Hrithik-Roshan-Unisex-Duffel-Bag-8481521547263184-3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2453352/2018/3/20/11521547263272-HRX-by-Hrithik-Roshan-Unisex-Duffel-Bag-8481521547263184-4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2453352/2018/3/20/11521547263245-HRX-by-Hrithik-Roshan-Unisex-Duffel-Bag-8481521547263184-5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2453352/2018/3/27/11522140592058-HRX-by-Hrithik-Roshan-Black-Duffel-Bag-1791522140592020-6.jpg',
    },
    ratings: 4.3,
    count: 325,
  },
  {
    id: 115,
    title: 'Men Teal Blue Printed T-shirt',
    price: 419,
    gender: 'men',
    description: "This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual T-shirt can be worn on its own or layered under a jacket or a hoodie.",
    category: "Men's Clothing",
    brand: 'HRX',
    color: 'blue',
    discount: 40,
    off_price: 180,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/5a6da9ac-d32e-4710-9b6d-569b454560931579692118120-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-2.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg',
    },
    ratings: 4.3,
    count: 425,
  },
  {
    id: 116,
    title: 'Men Grey Solid Hooded Bomber Jacket',
    price: 2199,
    gender: 'men',
    description: "The HRX Men's Active Jacket is just what you need to layer over a t-shirt for your morning run. It keeps you warm and protected from the winds so that the weather doesn't interfere with your run.",
    category: "Men's Clothing",
    brand: 'HRX',
    color: 'black',
    discount: 45,
    off_price: 1800,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846958/2020/8/6/267a39c1-c9f0-4f08-aeba-3d74547b6c051596693087479-HRX-by-Hrithik-Roshan-Men-Jackets-8291596693079279-3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846958/2020/8/6/9f58a150-a21b-4142-a31b-a48420f8b62f1596693085956-HRX-by-Hrithik-Roshan-Men-Jackets-8291596693079279-4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846958/2020/8/6/46897093-2fd2-4377-8e24-728c6df033ea1596693084361-HRX-by-Hrithik-Roshan-Men-Jackets-8291596693079279-5.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11846958/2020/8/6/d956e5e4-6090-4bc2-927c-7ab397c3f26f1596693082577-HRX-by-Hrithik-Roshan-Men-Jackets-8291596693079279-6.jpg',
    },
    ratings: 4.0,
    count: 925,
  },
  {
    id: 117,
    title: 'Women Medieval Blue Solid Rapid-Dry Antimicrobial Training Jacket',
    price: 959,
    gender: 'women',
    description: '',
    category: "Women's Clothing",
    brand: 'HRX',
    color: 'blue',
    discount: 60,
    off_price: 1440,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11953088/2020/10/16/bb133566-c42b-4511-a4f6-04e01493a1751602847375259-HRX-by-Hrithik-Roshan-Women-Jackets-5591602847372658-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11953088/2020/10/16/e41542ed-e7fe-4bfc-931d-2d8983666cb31602847375204-HRX-by-Hrithik-Roshan-Women-Jackets-5591602847372658-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11953088/2020/10/16/c3e08ab9-eb19-47bf-9fae-261a039d188d1602847375146-HRX-by-Hrithik-Roshan-Women-Jackets-5591602847372658-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11953088/2020/10/16/b96e6f2b-3d30-4823-9b60-a2574792c0b11602847375073-HRX-by-Hrithik-Roshan-Women-Jackets-5591602847372658-4.jpg',
    },
    ratings: 4.3,
    count: 285,
  },
  {
    id: 118,
    title: 'Men Green Solid Sporty Jacket',
    price: 1099,
    gender: 'women',
    description: "A classic wind cheater gets a trendy makeover. The HRX Women's Running Jacket protects you from the wind as you run and its ergonomic seams give a wide range of motion. After your run, the wind cheater helps regulate body temperature so that you don't catch a chill.",
    category: "Men's Clothing",
    brand: 'HRX',
    color: 'green',
    discount: 50,
    off_price: 1100,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4923958/2018/10/11/49a9e67d-b467-4cb4-8ee8-236e8b0724d61539257221823-HRX-by-Hrithik-Roshan-Women-Blue-Solid-Sporty-Jacket-8731539257221540-1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4923958/2018/10/11/6ec032ea-3f72-44de-bd48-443b3a2210b71539257221805-HRX-by-Hrithik-Roshan-Women-Blue-Solid-Sporty-Jacket-8731539257221540-2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4923958/2018/10/11/286348fc-cc29-4bac-8adc-b83f8fb965741539257221784-HRX-by-Hrithik-Roshan-Women-Blue-Solid-Sporty-Jacket-8731539257221540-3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4923958/2018/10/11/2c525dda-c6aa-48ed-94cd-7637aba19d101539257221769-HRX-by-Hrithik-Roshan-Women-Blue-Solid-Sporty-Jacket-8731539257221540-4.jpg',
    },
    ratings: 4.2,
    count: 205,
  },

  {
    id: 101,
    title: 'Men Blue Relaxed Fit Hoodie',
    price: 1499,
    gender: 'male',
    description: 'Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.',
    category: "Men's Clothing",
    brand: 'H&M',
    color: 'blue',
    discount: '10',
    off_price: 1500,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/a621b7fd-babb-4bb3-940e-b16afb7947d31633609833495HMMenBlueRelaxedFitHoodie1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/b019b315-fb56-481a-9de4-97f588b636551633609832286HMMenBlueRelaxedFitHoodie2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/daca690f-f36d-4b61-b5f3-c9e9acf7a1f61633609832145HMMenBlueRelaxedFitHoodie3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15746172/2021/10/7/dbe47737-1d80-4cab-9f03-ee8cb32540cb1633609833304HMMenBlueRelaxedFitHoodie4.jpg',
    },
    ratings: 4.5,
    count: 110,
  },
  {
    id: 102,
    title: 'Women Black Solid Chunky Combat Boots',
    price: 2699,
    gender: 'women',
    description: 'Combat boots with chunky, patterned soles, lacing at the front, a zip in one side and a loop at the back.',
    category: "Women's Footwear",
    brand: 'H&M',
    color: 'black',
    discount: '20',
    off_price: 2899,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15674090/2021/9/30/afaff65c-4bb5-4f76-a15e-fad7ac12dcf61632997313239Chunkycombatboots3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15674090/2021/9/30/3027a850-cbd1-45f0-9246-7ddd20463da01632997313348Chunkycombatboots4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15674090/2021/9/30/1bda9625-d20a-4105-84d7-0a50cf6ddadd1632997313456Chunkycombatboots5.jpg',
    },
    ratings: 4.6,
    count: 135,
  },
  {
    id: 103,
    title: 'Women White & Black Acrylic Jumper',
    price: 799,
    gender: 'women',
    description: 'Jumper in a soft knit with low dropped shoulders, extra-long sleeves and ribbing around the neckline, cuffs and hem.',
    category: "Women's Clothing",
    brand: 'H&M',
    color: 'white',
    discount: 35,
    off_price: 1199,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15809062/2021/10/13/4f6d1445-f481-4d06-b0b9-6d6de7da9d261634063934609Jumper1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15809062/2021/10/13/cc2a731a-4289-4118-a4d2-0e068e9754261634063934421Jumper2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15809062/2021/10/13/b8de7c0c-b981-444d-9cb9-b1ce649e0cd81634063934566Jumper3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15809062/2021/10/13/6668306f-2dd3-4b95-867a-ce1d6b1d9f211634063934575Jumper4.jpg',
    },
    ratings: 4.7,
    count: 246,
  },
  {
    id: 104,
    title: 'Men Grey Relaxed Fit Sweatshirt',
    price: 799,
    gender: 'men',
    description: 'Grey solid sweatshirt has a round neck, long sleeves, closure, straight hem',
    category: "Men's Clothing",
    brand: 'H&M',
    color: 'black',
    discount: 40,
    off_price: 1299,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15611412/2021/9/29/9b684f64-c8a6-4808-952e-604516fa5a001632884361405HMMenGreyRelaxedFitSweatshirt1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15611412/2021/9/29/df8910b9-bf54-454d-94e4-abab395291f01632884361459HMMenGreyRelaxedFitSweatshirt2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15611412/2021/9/29/b30b1a59-fcb4-4738-9829-15211df1f9601632884361471HMMenGreyRelaxedFitSweatshirt3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15611412/2021/9/29/6b76621f-ad2d-41a7-ae2f-393b22e5776f1632884361483HMMenGreyRelaxedFitSweatshirt4.jpg',
    },
    ratings: 4.5,
    count: 290,
  },
  {
    id: 105,
    title: 'Men White Trainers',
    price: 1999,
    gender: 'men',
    description: 'Trainers in imitation leather with a contrasting colour heel cap. Padded top edge and a tongue and lacing at the front. Linings and insoles in piqu and rubber soles that are patterned underneath.',
    category: "Men's Footwear",
    brand: 'H&M',
    color: 'white',
    discount: 10,
    off_price: 2199,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15630218/2021/9/29/bda9fe48-193c-4a64-8e2a-a8e60bd6e2d61632884288144Trainers1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15630218/2021/9/29/e234c6a7-57cb-4f85-85c8-f3cb5b726bd81632884288312Trainers2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15630218/2021/9/29/bb2c09e7-ebfa-435b-a4d5-2b412469b5a21632884288482Trainers3.jpg',
    },
    ratings: 4.5,
    count: 40,
  },

  {
    id: 106,
    title: 'Men Pink Regular Fit Hoodie',
    price: 2299,
    gender: 'men',
    description: 'Long-sleeved hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered drawstring hood with a wrapover front, and ribbing at the cuffs and hem.',
    category: "Men's Clothing",
    brand: 'H&M',
    color: 'pink',
    discount: 10,
    off_price: 1399,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15193766/2021/8/19/9cb8134c-f8b1-4f5e-94b4-9e95aafd9f041629354060319RegularFitHoodie1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15193766/2021/8/19/ba611bd7-cfc6-4ff5-8151-a70c5e2816cb1629354060211RegularFitHoodie2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15193766/2021/8/19/448d5056-3930-491d-9381-7b1cd73e91681629354059992RegularFitHoodie3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15193766/2021/8/19/6164e6d3-07c2-4d60-98f2-7edba0357e191629354060078RegularFitHoodie4.jpg',
    },
    ratings: 4.6,
    count: 57,
  },
  {
    id: 107,
    title: 'Women Off-White Solid Short Cardigan',
    price: 1299,
    gender: 'women',
    description: 'Short cardigan in a soft knit with a V-neck and buttons down the front. Gently dropped shoulders, long sleeves and ribbing around the opening, cuffs and hem.',
    category: "Women's Clothing",
    brand: 'H&M',
    color: 'Off-White',
    discount: 30,
    off_price: 1599,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/97359bce-6e02-4744-ba62-946bc858c6de1610689986574-3.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/d490b66a-08b5-4c1d-aaa3-e3c039acf54e1610689986592-4.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/1/15/aa71abbb-d333-4e57-b0f3-48d0eaa781631610689986608-5.jpg',
    },
    ratings: 4.4,
    count: 66,
  },
  {
    id: 108,
    title: 'Women Pink Solid Cropped Sweatshirt',
    price: 799,
    gender: 'women',
    description: 'Cropped top in soft sweatshirt fabric with a small embroidered detail at the top. Round neckline, dropped shoulders and long sleeves. Ribbing around the neckline, cuffs and hem.',
    category: "Women's Clothing",
    brand: 'H&M',
    color: 'pink',
    discount: 10,
    off_price: 809,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15295806/2021/8/30/6b2b9a47-459c-4e3b-87a8-d55f6aacfd711630295993682Croppedsweatshirt1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15295806/2021/8/30/3219d5fe-c7f8-4a34-b09c-dcd67875e31e1630295993445Croppedsweatshirt2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15295806/2021/8/30/06d6e6e3-dae8-4be7-bdc2-b3c15ca5f2601630295993097Croppedsweatshirt3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15295806/2021/8/30/c45e8396-ac4e-4171-8d83-b13f736893441630295993288Croppedsweatshirt4.jpg',
    },
    ratings: 4.5,
    count: 110,
  },
  {
    id: 109,
    title: 'Men Blue Cotton Fine-knit Jumper',
    price: 1499,
    gender: 'men',
    description: 'Jumper in a soft, fine cotton knit with a round neck, long sleeves and ribbing at the cuffs and hem.',
    category: "Men's Clothing",
    brand: 'H&M',
    color: 'blue',
    discount: 40,
    off_price: 1799,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/bf790580-9d52-423a-8083-38f1ca7f47511632723350062Fine-knitjumper1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/2cc4b764-c362-462a-a776-52102f5c9ec11632723350071Fine-knitjumper2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/83b555e8-d9e7-4b6e-99dd-1b768d33e3c31632723350081Fine-knitjumper3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/89440af7-6ba1-42a2-a299-af466939affd1632723350237Fine-knitjumper4.jpg',
    },
    ratings: 4.6,
    count: 22,
  },
  {
    id: 110,
    title: 'Women Blue Oversized Zip-Through Hoodie',
    price: 2299,
    gender: 'women',
    description: 'Oversized zip-through hoodie in sweatshirt fabric made from a cotton blend with a lined, drawstring hood, zip down the front and front pockets. Dropped shoulders, long sleeves and ribbing at the cuffs and hem. Soft brushed inside.',
    category: "Women's Clothing",
    brand: 'H&M',
    color: 'blue',
    discount: 10,
    off_price: 2399,
    images: {
      image1: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15630064/2021/9/29/d500ab0e-bdc3-4ff6-a0ca-9dd3cf1a9db51632884597096HMWomenBlueOversizedZip-ThroughHoodie1.jpg',
      image2: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15630064/2021/9/29/a6dca512-5899-438f-939e-f7663fca48051632884597106HMWomenBlueOversizedZip-ThroughHoodie2.jpg',
      image3: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15630064/2021/9/29/e346968f-3b37-47c6-996e-b921e12400b51632884597117HMWomenBlueOversizedZip-ThroughHoodie3.jpg',
      image4: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15630064/2021/9/29/d7538cfb-e00c-4a10-9edf-d0ecd3eac83f1632884597128HMWomenBlueOversizedZip-ThroughHoodie4.jpg',
    },
    ratings: 4.8,
    count: 25,
  },

  // >>>>>>> b4bd3b42963ec943f3b61c491c9ecd57d58710db
];

var products_cont = document.getElementById ('products_cont');

function show_products (products) {
  products_cont.innerHTML = null;

  products.forEach (function (product) {
    let outer_div = document.createElement ('div');

    outer_div.onmouseleave = function () {};

    let image_div = document.createElement ('div');
    image_div.className = 'img_div';
    // image_div.style.background = 'red';

    let img = document.createElement ('img');
    img.setAttribute ('id', 'proImg');
    img.src = product.images.image1;

    let wishbtn = document.createElement ('button');
    wishbtn.className = 'wishbtn';

    let wishicon = document.createElement ('span');
    wishicon.className = 'material-icons';
    wishicon.innerHTML = 'favorite_border';

    let wishname = document.createElement ('span');
    wishname.innerHTML = 'WISHLIST';

    wishbtn.append (wishicon, wishname);

    outer_div.onmousemove = function () {
      wishbtn.style.visibility = 'visible';
      wishbtn.style.border = '2px solid grey';
    };

    outer_div.onmouseout = function () {
      wishbtn.style.visibility = 'hidden';
    };

    wishbtn.onclick = function () {
      wishicon.style.background = 'red';
      wishname.innerHTML = 'WISHLISTED';
      wishbtn.style.background = '#565759';
      wishname.style.background = '#565759';

      addtoWishlist (product);
    };

    image_div.append (img, wishbtn);

    let text_div = document.createElement ('div');
    text_div.style.padding = '10px';

    let brand = document.createElement ('p');
    brand.innerText = product.brand;

    brand.style.fontWeight = 'bold';
    let title = document.createElement ('p');
    title.style.fontSize = '14px';

    title.innerText = product.title;

    let price = document.createElement ('span');
    price.innerText = 'Rs.' + product.price + ' ';
    price.style.fontWeight = 'bold';

    let off_price = document.createElement ('span');
    off_price.innerText = 'Rs' + product.off_price + ' ';
    off_price.style.color = 'gray';
    off_price.style.textDecoration = 'line-through';

    let discount = document.createElement ('span');
    discount.innerText = '(' + product.discount + '%OFF)';
    discount.style.color = 'red';

    text_div.append (brand, title, price, off_price, discount);
    outer_div.append (image_div, text_div);

    img.onclick = function () {
      addtoDescription (product);
      window.location.href = '../description.html';
    };
    text_div.onclick = function () {
      addtoDescription (product);
      window.location.href = '../description.html';
    };
    products_cont.append (outer_div);
  });
}

let whatsnew = document.getElementById ('whatsnew');
whatsnew.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.id - a.id;
  });
  show_products (arr);
};

let popularity = document.getElementById ('popularity');
popularity.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.rating - a.rating;
  });

  console.log (arr);
  show_products (arr);
};

let betterDiscount = document.getElementById ('betterDiscount');
betterDiscount.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.discount - a.discount;
  });
  show_products (arr);
};

let sortHightoLow = document.getElementById ('sortHightoLow');
sortHightoLow.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.price - a.price;
  });

  console.log (arr);
  show_products (arr);
};

let sortLowtoHigh = document.getElementById ('sortLowtoHigh');
sortLowtoHigh.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return a.price - b.price;
  });

  console.log (arr);
  show_products (arr);
};

let costomerRating = document.getElementById ('costomerRating');
costomerRating.onclick = function () {
  let arr = productData.sort ((a, b) => {
    return b.rating - a.rating;
  });

  console.log (arr);
  show_products (arr);
};

let menArr = [];
let womenArr = [];

productData.forEach (para => {
  let menBox = document.getElementById ('men');
  menBox.addEventListener ('change', menCheck);

  function menCheck () {
    console.log (menBox.value);
    if (menBox.value == para.gender && menBox.value == 'men') {
      menArr.push (para);
      show_products (menArr);
    }
  }
});

productData.forEach (para => {
  let womenBox = document.getElementById ('women');
  womenBox.addEventListener ('change', womenCheck);

  function womenCheck () {
    console.log (womenBox.value);
    if (womenBox.value == para.gender && womenBox.value == 'women') {
      womenArr.push (para);
      show_products (womenArr);
    }
  }
});
productData.forEach (para => {
  let boysBox = document.getElementById ('boys');
  boysBox.addEventListener ('change', boysCheck);

  function boysCheck () {
    if (boysBox.value == para.gender && boysBox.value == 'men') {
      menArr.push (para);
      show_products (menArr);
    }
  }
});
productData.forEach (para => {
  let girlsBox = document.getElementById ('girls');
  girlsBox.addEventListener ('change', girlsCheck);

  function girlsCheck () {
    if (girlsBox.value == para.gender && girlsBox.value == 'women') {
      womenArr.push (para);
      show_products (womenArr);
    }
  }
});

// checkboxe sorting for categories
let shirtArr = [];
let tshirtArr = [];
let topsArr = [];
let kurtaArr = [];
let beautycareArr = [];
let dressesArr = [];
let shoesArr = [];
let shortArr = [];

productData.forEach (para => {
  let tshirtBox = document.getElementById ('tshirt');
  tshirtBox.addEventListener ('change', tshirtCheck);
  function tshirtCheck () {
    if (tshirtBox.value == 'tshirt' && tshirtBox.value == para.categories) {
      tshirtArr.push (para);
      show_products (tshirtArr);
    }
  }
});

productData.forEach (para => {
  let topsBox = document.getElementById ('tops');
  topsBox.addEventListener ('change', topsCheck);
  function topsCheck () {
    if (topsBox.value == 'tops' && topsBox.value == para.categories) {
      topsArr.push (para);
      show_products (topsArr);
    }
  }
});

productData.forEach (para => {
  let kurtaBox = document.getElementById ('kurta');
  kurtaBox.addEventListener ('change', kurtaCheck);
  function kurtaCheck () {
    if (kurtaBox.value == 'kurta' && kurtaBox.value == para.categories) {
      kurtaArr.push (para);
      show_products (kurtaArr);
    }
  }
});

productData.forEach (para => {
  let beautycareBox = document.getElementById ('beautycare');
  beautycareBox.addEventListener ('change', beautycareCheck);
  function beautycareCheck () {
    if (
      beautycareBox.value == 'beautycare' &&
      beautycareBox.value == para.categories
    ) {
      beautycareArr.push (para);
      show_products (beautycareArr);
    }
  }
});

productData.forEach (para => {
  let shirtBox = document.getElementById ('shirt');
  shirtBox.addEventListener ('change', shirtCheck);
  function shirtCheck () {
    if (shirtBox.value == 'shirt' && shirtBox.value == para.categories) {
      shirtArr.push (para);
      show_products (shirtArr);
    }
  }
});

productData.forEach (para => {
  let dressesBox = document.getElementById ('dresses');
  dressesBox.addEventListener ('change', dressesCheck);
  function dressesCheck () {
    if (dressesBox.value == 'dresses' && dressesBox.value == para.categories) {
      dressesArr.push (para);
      show_products (dressesArr);
    }
  }
});

productData.forEach (para => {
  let shoesBox = document.getElementById ('shoes');
  shoesBox.addEventListener ('change', shoesCheck);
  function shoesCheck () {
    if (shoesBox.value == 'shoes' && shoesBox.value == para.categories) {
      shoesArr.push (para);
      show_products (shoesArr);
    }
  }
});

productData.forEach (para => {
  let shortBox = document.getElementById ('short');
  shortBox.addEventListener ('change', shortCheck);
  function shortCheck () {
    if (shortBox.value == 'short' && shortBox.value == para.categories) {
      shortArr.push (para);
      show_products (shortArr);
    }
  }
});

// Checkbox sorting by Brands

let roadsterArr = [];
let dressberryArr = [];
let cloviaArr = [];
let harbourArr = [];
let celfieArr = [];
let kaliniArr = [];
let herenowArr = [];

productData.forEach (para => {
  let roadsterBox = document.getElementById ('roadster');
  roadsterBox.addEventListener ('change', roadsterCheck);
  function roadsterCheck () {
    if (roadsterBox.value == 'Roadster' && roadsterBox.value == para.brand) {
      roadsterArr.push (para);
      show_products (roadsterArr);
    }
  }
});

productData.forEach (para => {
  let dressberryBox = document.getElementById ('dressberry');
  dressberryBox.addEventListener ('change', dressberryCheck);
  function dressberryCheck () {
    if (
      dressberryBox.value == 'Dressberry' &&
      dressberryBox.value == para.brand
    ) {
      dressberryArr.push (para);
      show_products (dressberryArr);
    }
  }
});
productData.forEach (para => {
  let cloviaBox = document.getElementById ('clovia');
  cloviaBox.addEventListener ('change', cloviaCheck);
  function cloviaCheck () {
    if (cloviaBox.value == 'Clovia' && cloviaBox.value == para.brand) {
      cloviaArr.push (para);
      show_products (cloviaArr);
    }
  }
});
productData.forEach (para => {
  let herenowBox = document.getElementById ('here&now');
  herenowBox.addEventListener ('change', herenowCheck);
  function herenowCheck () {
    if (herenowBox.value == 'HERE&NOW' && herenowBox.value == para.brand) {
      herenowArr.push (para);
      show_products (herenowArr);
    }
  }
});

productData.forEach (para => {
  let harbourBox = document.getElementById ('harbour');
  harbourBox.addEventListener ('change', harbourCheck);
  function harbourCheck () {
    if (
      harbourBox.value == 'Mast & Harbour' &&
      harbourBox.value == para.brand
    ) {
      harbourArr.push (para);
      show_products (harbourArr);
    }
  }
});

productData.forEach (para => {
  let celfieBox = document.getElementById ('celfie');
  celfieBox.addEventListener ('change', celfieCheck);
  function celfieCheck () {
    if (celfieBox.value == 'Celfie Design' && celfieBox.value == para.brand) {
      celfieArr.push (para);
      show_products (celfieArr);
    }
  }
});

productData.forEach (para => {
  let kaliniBox = document.getElementById ('kalini');
  kaliniBox.addEventListener ('change', kaliniCheck);
  function kaliniCheck () {
    if (kaliniBox.value == 'KALINI' && kaliniBox.value == para.brand) {
      kaliniArr.push (para);
      show_products (kaliniArr);
    }
  }
});

// Color filters
let blackArr = [];
let blueArr = [];
let whiteArr = [];
let pinkArr = [];
let navyBlueArr = [];
let redArr = [];
let greenArr = [];

productData.forEach (para => {
  let blackBox = document.getElementById ('black');
  blackBox.addEventListener ('change', blackCheck);
  function blackCheck () {
    if (blackBox.value == 'black' && blackBox.value == para.color) {
      blackArr.push (para);
      show_products (blackArr);
    }
  }
});

productData.forEach (para => {
  let blueBox = document.getElementById ('blue');
  blueBox.addEventListener ('change', blueCheck);
  function blueCheck () {
    if (blueBox.value == 'blue' && blueBox.value == para.color) {
      blueArr.push (para);
      show_products (blueArr);
    }
  }
});

productData.forEach (para => {
  let whiteBox = document.getElementById ('white');
  whiteBox.addEventListener ('change', whiteCheck);
  function whiteCheck () {
    if (whiteBox.value == 'white' && whiteBox.value == para.color) {
      whiteArr.push (para);
      show_products (whiteArr);
    }
  }
});
productData.forEach (para => {
  let pinkBox = document.getElementById ('pink');
  pinkBox.addEventListener ('change', pinkCheck);
  function pinkCheck () {
    if (pinkBox.value == 'pink' && pinkBox.value == para.color) {
      pinkArr.push (para);
      show_products (pinkArr);
    }
  }
});

productData.forEach (para => {
  let navyBlueBox = document.getElementById ('navyBlue');
  navyBlueBox.addEventListener ('change', navyBlueCheck);
  function navyBlueCheck () {
    if (navyBlueBox.value == 'navyBlue' && navyBlueBox.value == para.color) {
      navyBlueArr.push (para);
      show_products (navyBlueArr);
    }
  }
});

productData.forEach (para => {
  let redBox = document.getElementById ('red');
  redBox.addEventListener ('change', redCheck);
  function redCheck () {
    if (redBox.value == 'red' && redBox.value == para.color) {
      redArr.push (para);
      show_products (redArr);
    }
  }
});

productData.forEach (para => {
  let greenBox = document.getElementById ('green');
  greenBox.addEventListener ('change', greenCheck);
  function greenCheck () {
    if (greenBox.value == 'green' && greenBox.value == para.color) {
      greenArr.push (para);
      show_products (greenArr);
    }
  }
});

//filter by discouont

let tenArr = [];
let twentyArr = [];
let thirtyArr = [];
let fourtyArr = [];
let fiftyArr = [];
let sixtyArr = [];
let seventyArr = [];
let eightyArr = [];
let ninetyArr = [];

productData.forEach (para => {
  let tenBox = document.getElementById ('ten');
  tenBox.addEventListener ('change', tenCheck);
  function tenCheck () {
    if (tenBox.value <= 90 && tenBox.value <= para.discount) {
      tenArr.push (para);
      show_products (tenArr);
    }
  }
});

productData.forEach (para => {
  let twentyBox = document.getElementById ('twenty');
  twentyBox.addEventListener ('change', twentyCheck);
  function twentyCheck () {
    if (twentyBox.value <= 90 && twentyBox.value <= para.discount) {
      twentyArr.push (para);
      show_products (twentyArr);
    }
  }
});

productData.forEach (para => {
  let thirtyBox = document.getElementById ('thirty');
  thirtyBox.addEventListener ('change', thirtyCheck);
  function thirtyCheck () {
    if (thirtyBox.value <= 90 && thirtyBox.value <= para.discount) {
      thirtyArr.push (para);
      show_products (thirtyArr);
    }
  }
});

productData.forEach (para => {
  let fourtyBox = document.getElementById ('fourty');
  fourtyBox.addEventListener ('change', fourtyCheck);
  function fourtyCheck () {
    if (fourtyBox.value <= 90 && fourtyBox.value <= para.discount) {
      fourtyArr.push (para);
      show_products (fourtyArr);
    }
  }
});
productData.forEach (para => {
  let fiftyBox = document.getElementById ('fifty');
  fiftyBox.addEventListener ('change', fiftyCheck);
  function fiftyCheck () {
    if (fiftyBox.value <= 90 && fiftyBox.value <= para.discount) {
      fiftyArr.push (para);
      show_products (fiftyArr);
    }
  }
});
productData.forEach (para => {
  let sixtyBox = document.getElementById ('sixty');
  sixtyBox.addEventListener ('change', sixtyCheck);
  function sixtyCheck () {
    if (sixtyBox.value <= 90 && sixtyBox.value <= para.discount) {
      sixtyArr.push (para);
      show_products (sixtyArr);
    }
  }
});
productData.forEach (para => {
  let seventyBox = document.getElementById ('seventy');
  seventyBox.addEventListener ('change', seventyCheck);
  function seventyCheck () {
    if (seventyBox.value <= 90 && seventyBox.value <= para.discount) {
      seventyArr.push (para);
      show_products (seventyArr);
    }
  }
});
productData.forEach (para => {
  let eightyBox = document.getElementById ('eighty');
  eightyBox.addEventListener ('change', eightyCheck);
  function eightyCheck () {
    if (eightyBox.value <= 90 && eightyBox.value <= para.discount) {
      eightyArr.push (para);
      show_products (eightyArr);
    }
  }
});
productData.forEach (para => {
  let ninetyBox = document.getElementById ('ninety');
  ninetyBox.addEventListener ('change', ninetyCheck);
  function ninetyCheck () {
    if (ninetyBox.value <= 90 && ninetyBox.value <= para.discount) {
      ninetyArr.push (para);
      show_products (ninetyArr);
    }
  }
});

//filter by price

let firstArr = [];
let secondArr = [];
let thirdArr = [];
let fourthArr = [];
let fifthArr = [];

productData.forEach (para => {
  let firstBox = document.getElementById ('first');
  firstBox.addEventListener ('change', firstCheck);
  function firstCheck () {
    if (
      firstBox.value >= 20 &&
      firstBox.value <= 265 &&
      para.price >= 20 &&
      para.price <= 265
    ) {
      console.log (firstBox.value);
      firstArr.push (para);
      show_products (firstArr);
    }
  }
});

productData.forEach (para => {
  let secondBox = document.getElementById ('second');
  secondBox.addEventListener ('change', secondCheck);
  function secondCheck () {
    if (
      secondBox.value >= 265 &&
      secondBox.value <= 510 &&
      para.price >= 265 &&
      para.price <= 510
    ) {
      secondArr.push (para);
      show_products (secondArr);
    }
  }
});

productData.forEach (para => {
  let thirdBox = document.getElementById ('third');
  thirdBox.addEventListener ('change', thirdCheck);
  function thirdCheck () {
    if (
      thirdBox.value >= 510 &&
      thirdBox.value <= 755 &&
      para.price >= 510 &&
      para.price <= 755
    ) {
      thirdArr.push (para);
      show_products (thirdArr);
    }
  }
});

productData.forEach (para => {
  let fourthBox = document.getElementById ('fourth');
  fourthBox.addEventListener ('change', fourthCheck);
  function fourthCheck () {
    if (
      fourthBox.value >= 755 &&
      fourthBox.value <= 1000 &&
      para.price >= 755 &&
      para.price <= 1000
    ) {
      fourthArr.push (para);
      show_products (fourthArr);
    }
  }
});

productData.forEach (para => {
  let fifthBox = document.getElementById ('fifth');
  fifthBox.addEventListener ('change', fifthCheck);
  function fifthCheck () {
    if (
      fifthBox.value >= 1000 &&
      fifthBox.value <= 10000 &&
      para.price >= 1000 &&
      para.price <= 10000
    ) {
      fifthArr.push (para);
      show_products (fifthArr);
    }
  }
});

function addtoDescription (data) {
  if (localStorage.getItem ('describe') == null) {
    localStorage.setItem ('describe', JSON.stringify ([]));
  }
  let describe = JSON.parse (localStorage.getItem ('describe'));
  describe = [];
  describe.push (data);
  localStorage.setItem ('describe', JSON.stringify (describe));
}

function addtoWishlist (data) {
  if (localStorage.getItem ('wishlist') == null) {
    localStorage.setItem ('wishlist', JSON.stringify ([]));
  }
  let prodcuts_wish = JSON.parse (localStorage.getItem ('wishlist'));
  prodcuts_wish.push (data);
  localStorage.setItem ('wishlist', JSON.stringify (prodcuts_wish));
  console.log ('products_wish:', prodcuts_wish);
}

show_products (productData);
