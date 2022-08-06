<template>
  <div class="navbar">
    <div class="nav_items">
        <ul class="Navigation">
            <li>
                <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button active" >Home</button>
                </div>
            </li>
            <li>
                <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button" >Live Casino</button>
                </div>
            </li>
            <li>
                <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button" >Sots</button>
                </div>
            </li>
            <li>
                <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button" >Blockchain games</button>
                </div>
            </li>
            <li class="sports_items_list">
                 <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button" >Sports</button>
                </div>
                <ul class="sports_list_show">
                <li><div>
                <Sports></Sports>
                </div>
                </li>
                </ul>
            </li>
            <li>
                 <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button" >J9BC</button>
                </div>
            </li>
            <li>
                <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button" >J9 Brand</button>
                </div>
            </li>
            <li>
                <div class="nav-list-buttonbox homebtnactive">
                    <button class="nav-button" >Promo</button>
                </div>
              
            </li>
        </ul>
    </div>
  </div>
<div>
<i class="fas fa-bars" @click="visibleLeft = true"></i>
<div class="slide-toggle">
  <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000" class="p-sidebar-sm">
 
<div class="sliderlogo mb-3">
    <img :src="'../Game_Web/sliderlogo.png'" alt="">
</div>
<div class="toggle_main">
<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-btn " data-bs-toggle="dropdown" aria-expanded="false">
    Security
  </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-btn " data-bs-toggle="dropdown" aria-expanded="false">
    History
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-btn " data-bs-toggle="dropdown" aria-expanded="false">
    Notification
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-btn " data-bs-toggle="dropdown" aria-expanded="false">
    About J9BC
  </button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-btn " data-bs-toggle="dropdown" aria-expanded="false">
    J9 Brand
  </button>
</div>
</div>

 <div class="toggle_main mt-2">
<div class="btn-group ">
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-btn tooglt-btn-2" data-bs-toggle="dropdown" aria-expanded="false">
    Promotion
  </button>
</div>
 </div>


<div class="main_card_slider mt-2">
<div class="row cardslider_slid">
   <div class="cardslider col-12">
    <img :src="'../../Game_Web/swapslider.png'" alt="">
  </div>
</div>
<div class="row cardslider_slid mt-2">
   <div class="cardslider col-6">
    <img :src="'../Game_Web/fomoslidebar.png'" alt="">
  </div>
  <div class="cardslider col-6">
    <img :src="'../Game_Web/cashsidebar.png'" alt="">
  </div>
</div>
<div class="row cardslider_slid mt-2">
   <div class="cardslider col-6">
    <img :src="'../Game_Web/winsidebar.png'" alt="">
  </div>
  <div class="cardslider col-6">
    <img :src="'../Game_Web/rewardsidebar.png'" alt="">
  </div>
</div>

 </div>

  <div class="toggle_main mt-2">
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-btn tooglt-btn-2" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
  <ul class="dropdown-menu drop_menu_list" aria-labelledby="dropdownMenuButton" style="width:100%;">
    <li><a class="dropdown-item" href="#">简体中文</a></li>
    <li><a class="dropdown-item" href="#">English</a></li>
  </ul>
</div>
 </div>

  </Sidebar>
  </div>
</div>

</template>

<script>
import Sidebar from 'primevue/sidebar';
import { ref } from 'vue';
import Sports  from '../components/landingpage/Sports.vue'

export default {
name:'NAV',
components:{
Sports, 
Sidebar,
},
 setup() {
        const visibleLeft = ref(false);
		return { visibleLeft}
    }
// data() {
//     return {
//       ShowNav: false,
//     }
//   },
//   methods: {
//     toggleNavBar() {
//       this.ShowNav = !this.ShowNav
//     }
//   }
}
// data(){
//     return{
//       show_list.value= false
//     }
// };

// const showNav = ()=>{
//      show_list.value = !show_list.value
// }
</script>

<style>
.p-sidebar-content{
        overflow-X: auto;
}
.sliderlogo{
    text-align: center;
}
.main_card_slider{
    width: 86%;
    margin: auto;
}
.cardslider_slid{
    text-align: center;
}
.cardslider_slid img{
    width: 100%;
}
/* .cardslider_slid{
    display: flex;
    flex-direction: ;
} */
.btn-check:active+.btn-secondary:focus, .btn-check:checked+.btn-secondary:focus, .btn-secondary.active:focus, .btn-secondary:active:focus, .show>.btn-secondary.dropdown-toggle:focus {
    box-shadow: none;
    background: none;
}
.btn-check:focus+.btn-secondary, .btn-secondary:focus {
    color: #fff;
    background-color: none;
    border-color: none;
    box-shadow: none;
}
.btn-secondary:hover {
    color: #fff;
    background-color: none !important;
    border-color: none;
}
.toggle_main
{
    width: 86%;
    margin: auto;
    background-color: #24314A;
    border-radius: 10px;
    color: #9DB1D8;
}
.dropdown-toggle-btn{
    display: flex;
    justify-content: space-between;
}
.dropend .dropdown-toggle::after{
    vertical-align: 0;
    position: relative;
    top: 6px;
}
.dropdown-toggle::after {
    position: relative;
    top: 10px;
}
.btn-secondary{
        height: 45px;
   color: #9DB1D8;
    border-color: none;
    border: none;
     border-radius: 10px;
     background: none !important;
}
.drop_menu_list{
    width: 100px !important;
    background-color: #24314A;
    border-radius: 10px;
    color: #9DB1D8;
}
.drop_menu_list li a{
     color: #9DB1D8;
}
.btn-group {
    display: flex;
    flex-direction: column;
    border: none;
}
.tooglt-btn-2{
    padding-top: 10px;
}
.logo{
    text-align: center;
}
.p-sidebar{
        background-color: #121E36FF !important;
    background-color: var(--app-background-color);
}
/* .slidbar_main{
    background-color: #121E36FF;
    background-color: var(--app-background-color);
} */
.sports_list_show  li{
    display: none;
}
.sports_list_show
{
    position: absolute;
    width: 100%;
    height: 100%;

}
.ports_list_show  li > div{
    position: relative;
    z-index: 1000;
    width: 100%;
    top: -151px;
    left: -608px;
}
.sports_items_list:hover .sports_list_show  li{
    /* display: inline; */
        position: absolute;
    top: -105px;
    /* width: 161%; */
    /* width: 113%; */
    z-index: 10000;
}
.fa-bars-sort{
    color: #ffffff;
    font-size: 30px;
}
.navbar{
      width: 100% !important;
    margin-top: 24px !important;
    display: flex !important;
    justify-content: center !important;
}
.nav-button {
    background: none;
    border: none;
    display: flex;
    margin: 0 17px;
    font-size: 16px;
    line-height: 40px;
    font-weight: 500;
    white-space: nowrap;
    border-bottom: 1px solid transparent;
    color: #ffffff;

}
.nav-button:hover {
    border-bottom: 1px solid #FFCC68 !important;
    color: #FFCC68;
}

.navbar-nav{
    width: fit-content !important;
    margin: auto !important;
}

ul{
    display: flex;

}
li{
    list-style: none;
}

.nav-list-buttonbox {
    padding-bottom: 7px;
}
.app-header-nav .nav-list:hover .nav-button {
    border-color: transparent;
}
.nav-button:hover {
    border-bottom: 1px solid #FFCC68 !important;
}
.navbar-light .navbar-toggler{
    color: white !important;
}
.navbar-light .navbar-toggler-icon {
    width: 20px;
    background: url('../../public/Game_Web/menubar.png') !important;
}
.fa-bars{
    display:none;
}

@media screen and (max-width:992px) {
    .navbar{
        display: none;
    }
    .navbar-nav{
    width: auto !important;

}
.nav_slid{
    position: relative;
    top: -68px;
}
.fa-bars{
    display:initial;
    color: white;
    font-size: 33px;
    position: absolute;
    top: 15px;
    left: 24px;
}
.navbar-light .navbar-toggler {
    color: black  !important;;
}
.nav_items
{
    display:none;
    width: 100%;
    height: 700px;
    position: relative;
}
.nav_items ul{
    display:block;
       position: absolute;
    left: 0px;
    top: 0;
    width: 350px;
    height: 700px;
    background: blue;
}
}
</style>