<template>
<div class="footerMain mt-5">
<div class="footer_items">
<div class="features_list">
<h2>FEATURES</h2>
<ul class="future1_item">
<li><a href="#">J9 Brand</a></li>
<li><a href="#">J9 Cashback</a></li>
<li><a href="#">Refer-A-Friend</a></li>
</ul>
</div>

<div class="features_list features_list2">
<h2>J9BC</h2>
<ul class="future_item future_item2">
<li><a href="#">About J9BC</a></li>
<li><a href="#">J9BC Dividends</a></li>
<li><a href="#">Staking J9BC</a></li>
</ul>
</div>

<div class="features_list ">
<h2>LEGAL</h2>
<ul class="future_item future_item3">
<li><a href="#">About Us</a></li>
<li><a href="#">General terms</a></li>
</ul>
</div>

<div class="features_list">
<h2>HELP</h2>
<ul class="future_item future_item4">
<li><a href="#">Live Support</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">App Download</a></li>
</ul>
</div>

 <div class="token_list">
<h2>TOKEN SUPPORT</h2>
<ul class="token_item_list d-flex">
<li><p><img :src="'../Game_Web/icon1.svg'" alt=""></p></li>
<li><p><img :src="'../Game_Web/icon2.svg'" alt=""></p></li>
<li><p><img :src="'../Game_Web/icon3.svg'" alt=""></p></li>
<li><p><img :src="'../Game_Web/icon4.svg'" alt=""></p></li>
<li><p><img :src="'../Game_Web/icon5.svg'" alt=""></p></li>
</ul> 
<div class="social_media">
<h2>SOCIAL MEDIA</h2>
<div class="social-list">
<ul class="social-list_item d-flex">
<li><a href=""><img :src="'../Game_Web/socila1.svg'" alt=""></a></li>
<li><a href=""><img :src="'../Game_Web/socila2.svg'" alt=""></a></li>
<li><a href=""><img :src="'../Game_Web/socila3.svg'" alt=""></a></li>
<li><a href=""><img :src="'../Game_Web/socila4.svg'" alt=""></a></li>
<li><a href=""><img :src="'../Game_Web/socila5.svg'" alt=""></a></li>
<li><a href=""><img :src="'../Game_Web/socila6.svg'" alt=""></a></li>
</ul>
</div>
</div>
</div>
</div>



<div class="partner_section">

<div class="partner">
<h2>PARTNERS</h2>
<div class="partner_logo">
<a href=""><img :src="'../Game_Web/fibabrand.png'" alt=""></a>
<a href=""><img :src="'../Game_Web/logobrand.png'" alt=""></a>
</div>
</div>


<div class="partner">
<h2>LICENSES</h2>
<div class="partner_logo">
<a href=""><img :src="'../Game_Web/licnes.png'" alt=""></a>
<a href=""><img :src="'../Game_Web/licnes2.png'" alt=""></a>
</div>
</div>

<div class="pict_list mb-3">
<h2>BUSINESS SUPPORT</h2>
       <marquee width="100%" behavior="" direction="left" class="smooth_slider">
        <div class="pics-list-wraped d-flex">
          <div>
                <img :src="'../Game_Web/sp1.svg'" alt=""> 
          </div>
            <div>
             <img :src="'../Game_Web/sp2.svg'" alt="">
            </div>
             <div>
                  <img :src="'../Game_Web/sp3.svg'" alt="">
             </div>
                <div>
                   <img :src="'../Game_Web/sp4.svg'" alt="">
                </div>
                 <div>
                    <img :src="'../Game_Web/sp5.svg'" alt="">
                 </div>
                    
          </div>
          </marquee>

      </div>



<!-- <div class="pict_list mb-3">
<h2>BUSINESS SUPPORT</h2>
<div class="pics-list-wraped">
<ul class="rowanimation">
<li><img :src="'../Game_Web/sp1.svg'" alt=""></li>
<li><img :src="'../Game_Web/sp2.svg'" alt=""></li>
<li><img :src="'../Game_Web/sp3.svg'" alt=""></li>
<li><img :src="'../Game_Web/sp4.svg'" alt=""></li>
<li><img :src="'../Game_Web/sp5.svg'" alt=""></li>
<li><img :src="'../Game_Web/sp6.svg'" alt=""></li>
<li><img :src="'../Game_Web/sp7.svg'" alt=""></li>
</ul>
</div>
</div> -->


</div>

<p class="web_para">This website is operated by Westward Way Tech N.V. (registration No. 158203), with address at Abraham de Veerstraat 9, Curacao. This website is operated under licence number: 365/JAZ issued by Gaming Service Provider, Authorised and Regulated by the Government of Curacao. Apollo MKT Limited, Reg No. HE 418946, having its registered office at Strovolou 47, Kyros Tower, 5th floor, Strovolos 2018, Nicosia, Cyprus, which provides management, payment and support services related to the operation of the website. Gambling can be addictive. Play responsibly.</p>


<div class="bottom_text">
<div class="all-rights-reserved">
<p>COPYRIGHT © 2021 J9 Group All Rights Reserved.</p>
</div>
<div class="languages">
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle-lan lang" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
  <ul class="active dropdown-menu drop_menu_list lang_item_items" aria-labelledby="dropdownMenuButton" style="width:100%;">
    <li><a class="dropdown-item" href="#">简体中文</a></li>
    <li><a class="dropdown-item" href="#">English</a></li>
  </ul>
</div>
<!-- <ul class="lang_list">
<li>
<div>
<button class="lang">English</button>
</div>
<ul class="lang_item">
<li>English</li>
<li>中文</li>
</ul>
</li>
</ul> -->
</div>
</div>
</div>



  
</template>

<script>
// import LiveCasino2 from '../../components/LiveCasino2.vue'
// import Carousel from 'primevue/carousel';
export default {
  name:'footeR',
  components: {
    // Carousel,
    // LiveCasino2
  },
}

//   data() {
//     return {
//       product: [
//         { img: 'sp1.svg'},
//        { img: 'sp2.svg'},
//        { img: 'sp3.svg'},
//        { img: 'sp4.svg'},
//        { img: 'sp5.svg'},
//        { img: 'sp6.svg'},
//        { img: 'sp7.svg'},
 
//       ],
//       responsiveOptions: [
// 			{
// 				breakpoint: '1400px',
// 				numVisible: 6,
// 				numScroll: 2
// 			},
//       {
// 				breakpoint: '992px',
// 				numVisible: 4,
// 				numScroll: 2
// 			},
// 			{
// 				breakpoint: '762px',
// 				numVisible: 3,
// 				numScroll: 2
// 			},
//             {
// 				breakpoint: '576px',
// 				numVisible: 3,
// 				numScroll: 1
// 			},
// 		]
//     }
//   },
// }

// $(document).ready(function(){
//   $('.lang').click(function(){
//     $('.lang_item').show()
//   });
// }); 
</script>

<style scoped>
.lang{
  background: rgba(49, 49, 63, 0.3) !important;
}
.lang_item_items{
  width:100% !important;
  text-align: center;
}
.lang > .dropdown-toggle::after {
    position: relative;
    top: 0px;
}
.pick_list  .p-link{
  display: none !important;
}
.languages:hover .lang_item{
  display: initial;
}
.footer_items,.partner_section{
      display: flex;
    justify-content: space-between;
}
.footerMain{
    background: #262629;
    width: 100%;
    padding:25px 230px;
    box-sizing: border-box;
    overflow: hidden;
}
.features_list h2,.social_media h2,.token_list h2,.partner h2, .pict_list h2{
    font-family: Montserrat;
        color: #e0e0e0;
    font-size: 16px;
    line-height: 1.5;
    font-family: PingFang SC;
    font-weight: bold;
}
.features_list ul{
  display:block;
  padding: 0;
}
.features_list ul li{
    list-style: none;
}
.features_list ul li a{
    text-decoration: none;
    color: #888888;
    font-size: 14px;
    line-height: 20px;
    background-color: transparent;
    cursor: pointer;
}
.social-list_item,.token_item_list{
  display:flex;
  justify-content: space-between;
  padding: 0;
}
.partner_logo a img
{
  height: 42px;
}
.pict-list {
    overflow: hidden;
    width: 560px;
}
.pict_list  .p-link{
  display:none;
}
.pics-list-wraped{
  justify-content: space-between;
}
.pics-list-wraped .rowanimation {
  padding:0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    overflow: hidden;
    -webkit-animation: 15s rowup linear infinite normal;
    animation: 15s rowup linear infinite normal;
}
.pics-list-wraped .rowanimation li {
    margin-left: 32px;
}
.pics-list-wraped .rowanimation li img {
    height: 48px;
}
.pict_list{
  width:50%;
}
.pict_list::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #454559;
    opacity: 0.2;
}
.web_para{
      color: #888888;
    font-family: Montserrat;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 16px;
    margin-top: 16px;
        width: 97vw;
    margin: auto;
}
.bottom_text{
  margin-top:30px;
  display: flex;
  justify-content: space-between;
}
.all-rights-reserved p{
      color: #888888;
    font-family: Montserrat;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
}
.language{
  position:relative;
}
.lang_list{
  padding: 0;

}
.lang_item{
  display:none;
  width: 149px;
    color: #ff7400;
    background: rgba(49, 49, 63, 0.3);
   flex-direction: column;
}
.lang_item li{
      padding: 11px 0;
    position: relative;
  }
.lang_item li{
    border-radius: 8px;
    color: #ff7400;
    background: rgba(49, 49, 63, 0.3);
    font-size:17px;
    cursor: pointer;

}
.lang
{
      display: flex;
    align-items: center;
    justify-content: center;
    width: 152px;
    height: 48px;
    border-radius: 8px;
    color: #ff7400;
    background: rgba(49, 49, 63, 0.3);
}
@media screen and (max-width:1400px) {
  .footerMain{
    padding:25px 23px;
}
}
@media screen and (max-width:992px) {
   .footer_items,.partner_section{
    flex-direction: column;
}
.token_item_list,.social-list_item {
  width:37%;
}
.features_list ul,.future_item3 ul{
  display:none;
}
.features_list:hover .future1_item,.features_list3:hover .future1_item3{
  display:initial;
}
.footer_items{
  margin-top:45px;
}
.footerMain{
  position:relative;
}
.bottom_text,.languages{
  display:flex;
     justify-content: center;
}
.languages{
    position: absolute;
    top: 0;
    width: 100%;
    display: initial;
}
.lang{
      text-align: center;
    width: 100vw;
    overflow: hidden;
}
.pict_list{
    width: 86%;
}

 /*
.lang_item{
      display: flex;
    width: 100vw;
    text-align: center;
    position: relative;
    top: -1opx; 
    padding: 0;
}*/
}
@media screen and (max-width:767px) {
  .web_para{
    width: 91vw;
}
.pict_list{
    width: 100%;
}
.token_item_list,.social-list_item{
  width: 50%;
}
}
@media screen and (max-width:500px) {
  marquee{
    width: 160%;
    overflow: hidden;
}
.token_item_list,.social-list_item{
  width: 80%;
}
}
</style>