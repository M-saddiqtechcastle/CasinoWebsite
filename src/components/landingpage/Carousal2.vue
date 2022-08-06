<template>
<div class="coursal2_main">
    <div class="main2carousal">
    <div class="dividen2">
        <img :src="'../Game_Web/cat.png'" alt="">
    </div>
    <div style="position: relative;
    top: 4px;
    left: 14px; width: 100%;">
      <div class="dividen_items2">
        <h2>Hold J9BC enjoy dividends</h2>
      </div>
      <div class="prize2">
        <p>Current:$<span class="counter">341,256</span></p>
      </div>
      <div class="counter_card5">
        <p>Total $<span class="counter">4,048,355</span></p>
      </div>
      <p class="ary_pag2">APY：500%+</p>
      <div class="dividen_btn2">
        <button>Get dividend</button>
      </div>
     </div>
           
    </div>
    </div>
</template>

<script>
export default {
name:'CarouSaL'
}
</script>

<style>
.main2carousal{
   display: flex;
    align-items: center;
    height: 124px;
    border-radius: 16px;
    background: #FFFFFF07;
    -webkit-backdrop-filter: blur(21.15px);
    backdrop-filter: blur(21.15px);
    box-shadow: inset -12.59px 12.59px 12.59px 0px #ffffff07, inset 12.59px -12.59px 12.59px 0px #c2c2c207;
    padding: 12px;
    margin-bottom: 16px;
    position: relative;
}
.dividen2 {
       
}
.dividen2 img
{
     width: 88px;
    height: 88px;
}
.dividen_items2 h2 {
    color: #faca46;
    font-size: 12px;
    line-height: 22px;
}

.prize2 p {
    margin-top: 0px;
    color: #ffffff;
    font-size: 13px;
    line-height: 1.5;
    background-image: linear-gradient(180deg, #ffffff 0%, #6eb4fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Montserrat-ExtraBold", sans-serif;
}

.counter_card5  h2 {
  font-size: 54px;
  font-family: Montserrat, sans-serif;
  background-image: linear-gradient(180deg, #ffffff 0%, #6eb4fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
}

.counter_card5 p {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  color: #bddfff;
  font-size: 10px !important;
  line-height: 0;
}

.ary_pag2 {
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    line-height: 2;
    margin-top: 4px;
}
.dividen_btn2{

    position: absolute;
    right: -35px;
    top: 38px;
    transform: rotate(89deg);
}
.dividen_btn2 button {
 padding: 0 20px;
  border-radius: 8px;   
    font-size: 11px;
    color: #324466;
    line-height: 37px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    border:1px solid  rgba(255, 255, 255, 0.2);
    outline: none;

}
.coursal2_main{
    display: none;
}
@media screen and (max-width:992px) {
    .coursal2_main{
    display: initial;
}
}
</style>