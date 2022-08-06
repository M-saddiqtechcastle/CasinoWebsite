<template>
  <div class="header_container scrolling header_containerdown" >
   <nav style="margin-top: 15px; padding: 0 25px 0;">
        <div class="row nav_header_main">

      
        <!-- <div class="nav_item"> -->
            <div class="partner col-4">
                <div>
                    <img :src="'../Game_Web/partner.png'" alt="">
                </div>
                <div class="brd_cent"></div>
                <div>
                    <img :src="'../Game_Web/partner2.png'" alt="">
                </div>
            </div>

            <div class="logo col-4">
                <img :src="'../Game_Web/logo.svg'" alt="">
            </div>
            <div class="account_btn col-4">
                    <button class="app_download"><img :src="'../Game_Web/download.svg'" alt=""></button>
                    <div class="App_Download_QRCode_Wrap">
                        <div class="QRCode_box">
                            <canvas height="184" width="184"  style="height:92px; width:92px"></canvas>
                        </div>
                        <p>Download App</p>
                    </div>
                    <button class="login_btn">Login</button>
                    <button class="signup_btn .btn--shockwave.is-active">Sign up</button>
            </div>
        <!-- </div> -->

    </div>
    </nav>
         
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from '../../layouts/Nav.vue'
export default {
components:{
    Nav
}
}
</script>

<style scoped>

.brd_cent{
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    height: 30px;
    position: relative;
    top: 5px;
    margin: 0 20px 0;
}
.nav_item{
    display: flex;
    justify-content: space-between;
}
.partner,.account_btn{
    display: flex;
}
.partner > div > img{
    height: 42px;
}
.logo{
    padding-top: 10px;
    text-align: center;
}
.logo img{
    height: 40px;
}
.account_btn{
    display: flex;
   justify-content: right;
}
.app_download
{
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    position: relative;
}
.app_download img
    {
        width: 24px;
    }
.login_btn
    {
    height: 32px;
    width: 106px;
    margin-right: 16px;
    border-radius: 16px;
    background: #ffffff;
    color: #25324b;
    position: relative;
    font-size: 16px;
    letter-spacing: 0;
    }


    .btn--shockwave.is-active {
        -webkit-animation: shockwaveJump 1s ease-out infinite; 
    animation: shockwaveJump 1s ease-out infinite;
}
    
    .btn--shockwave.is-active::before
    {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 16px;
    -webkit-animation: shockwave 1s 0.5s ease-out infinite;
    animation: shockwave 1s 0.5s ease-out infinite;
}
    
    .btn--shockwave.is-active::after{
     content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 16px;
    -webkit-animation: shockwave 1s 0.65s ease-out infinite;
    animation: shockwave 1s 0.65s ease-out infinite;
    }
.signup_btn
    {
        transform: scale(1.05);
        animation: shockwaveJump 1s ease-out infinite;
        width: 106px;
        height: 32px;
        color: #000;
        background: #FACA46;
        border-radius: 32px;
        text-align: center;
        font-size: 16px;
        border: none;
        padding: 0;
        position: relative;
        outline: none;
        animation:blinkButton 2s ease-out infinite;
    }
    @keyframes blinkButton{
        0%{opacity:0.1;}
        10%{opacity:0.05;
        box-shadow:1px 0px 30px #FACA46;}
    }
    .App_Download_QRCode_Wrap
    {
    position: absolute;
    bottom: -150px;
    left: -40px;
    width: 116px;
    height: 142px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(14px);
    backdrop-filter: blur(14px);
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
    .QRCode_box
    {
        border-radius: 4px;
        overflow: hidden;
        background: #ffffff;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .App_Download_QRCode_Wrap p {
        color: #ffffff;
        font-size: 12px;
        line-height: 18px;
        padding-top: 8px;
    }
   .account_btn > button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 0;
        outline: none;
        cursor: pointer;
        font-size: inherit;
        color: inherit;
        font-family: Montserrat, sans-serif;
    }
.header_container {
        /* padding: 0 25px 0; */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 99;
    width: 100%;
    transition: background-color 0.8s ease-in-out;
}
.header_container.scrolling::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
}
@media screen and (max-width:992px) {
    .partner{
        display: none;
    }
    .nav_header_main{
            justify-content: space-between;
    }
    .logo {
    padding-top: 0px;
}
.logo img{
    height: 22px;
}
.login_btn,.signup_btn  {
    height: 30px;
    width: 91px;
}
.app_download{
    display: none !important;
}
.account_btn {
    width: 192px;
}
}
@media screen and (max-width:576px) {
    .logo  img{
margin-right: -72px;
    }
        
}
</style>