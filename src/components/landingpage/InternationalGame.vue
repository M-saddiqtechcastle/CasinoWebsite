<template>
<Carousal2></Carousal2>
  <div class="row main_item">
    <div class="slider_item col-md-12 col-lg-6 col-xl-4">
      <div class="q-carousal">
        <Carousel :value="product" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
          :circular="true" :autoplayInterval="2000">
          <template #item="slotProps">
            <div class="CourselItem justify-content-center d-flex mt-3">
              <div class="CourselItemImage game_spot_img">
                <img :src="'../Game_Web/' + slotProps.data.img" />



              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="col-12 swap_card col-md-12 col-lg-3 col-xl-3 mt-3">
      <div class="row card_style">
        <div class="entry-wrapper_j9bc col-md-12 col-lg-6">
          <div class="home_card">
            <h2>Swap</h2>
            <p>Buy & Sell J9BC</p>
            <button class="style1 bubbly-button">Trade Now</button>
          </div>
          <div class="home_card2">
         
          <div class="swap_time">
            <h2>SWAP</h2>
            <P>265,934.526 </P>
          </div>

          <div class="entry_price">
            <p>Current: </p>
            <span>"$" "0.0160"</span>

          </div>
           </div>
        </div>

        <div class="col-12 col-md-12 col-lg-6 mt-3 p-0 entry_defender_2">
          <div class="entry-defender mt-2">
            <div class="home_card">
              <h2>Collect Lottery Ticket</h2>
              <p>Lucky number: 4720768</p>
              <button class="style1 bubbly-button">Detail</button>
            </div>
            
            <div class="home_card3">
            <div class="swap_time">
              <h2>Get Defender</h2>
              <P>Draw at 20:30, 25th Monthly</P>
            </div>
            <div class="rover-activity_num">
              <p>Lucky Number: </p>
              <span>4720768</span>
            </div>
               </div>
          </div>
        </div>
      </div>
    </div>



    <div class="dividen col-md-12 col-lg-6 col-xl-5">
      <div class="dividen_items">
        <h2>Hold J9BC enjoy dividends</h2>
      </div>
      <div class="prize">
        <p>Current prize pool</p>
      </div>
      <div class="counter_card">
        <h2>$<span class="counter">341,256</span></h2> <br>
        <p>Total dividends : $<span class="counter">4,048,355</span></p>
      </div>
      <p class="ary_pag">APY：500%+</p>
      <div class="dividen_btn">
        <button>Get dividend</button>
      </div>
    </div>


  </div>
</template>


<script>
import Carousal2 from '../../components/landingpage/Carousal2.vue'
import Carousel from 'primevue/carousel';
export default {
  components: {
    Carousel,
    Carousal2
  },

  data() {
    return {
      product: [
        { img: 'sliderimg1.png' },
        { img: 'sliderimg2.png' },
        { img: 'sliderimg3.png' },
        { img: 'sliderimg4.png' },
        { img: 'sliderimg5.png' },
      ],
      // responsiveOptions: [
      // 	{
      // 		breakpoint: '992px',
      // 		numVisible: 2,
      // 		numScroll: 2
      // 	},
      //         {
      // 		breakpoint: '772px',
      // 		numVisible: 1,
      // 		numScroll: 1
      // 	},
      // ]
    }
  },
};




</script>

<style>
.CourselItemImage {
  height: 316px;
}

.game_spot_img img {
  position: relative;
  height: 100%;
  transition: -webkit-transform 1000ms linear;
  transition: transform 1000ms linear;
  transition: transform 1000ms linear, -webkit-transform 1000ms linear;
  width: 100%;
}

.game_spot_img img:hover {
  transform: scale(1.05);
}

.slider_item {
  /* width: 544px;  */
}

.p-carousel-next,
.p-carousel-prev {
  display: none !important;
}

.CourselItem {
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
}

.q-carousal .p-link {
  position: relative;
  top: -39px;
  right: 41px;
  width: 64px;
  height: 8px;
  border-radius: 4px;
  border: none;
}

.q-carousal {
  position: relative;
}

.q-carousal .p-carousel-indicator {
  padding: 0 5px 0;
}

.card_style {
  width: 100%;
  display: block;
  margin: auto;
}

.entry-wrapper_j9bc,
.entry-defender {
  height: 150px;
  padding: 21px 16px;
  overflow: hidden;
  background: no-repeat right / contain url("../../../public/Game_Web/mask1img.png"), linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%);
  cursor: pointer;
  border-radius: 16px;
}

.entry-defender {
  background: no-repeat right / contain url("../../../public/Game_Web/defender.png"), linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%);
}

.home-top-entry_card-mask {
  background: linear-gradient(90deg, rgb(0, 54, 140) 0%, rgb(67, 100, 247) 100%);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  cursor: pointer;
  border-radius: 16px;
}

.entry-wrapper_j9bc>div {
  border-radius: 16px;
}
.entry-wrapper_j9bc:hover{
 background: linear-gradient(90deg, rgb(0, 54, 140) 0%, rgb(67, 100, 247) 100%);
}
.entry-wrapper_j9bc:hover .home_card2{
  display:none;
}
.entry-wrapper_j9bc:hover .home_card{
  display: initial;
}
.entry-defender:hover
{
  background: linear-gradient(90deg, rgb(0, 7, 70) 0%, rgb(13, 21, 99) 50%, rgb(47, 46, 124) 100%);
}
.entry-defender:hover .home_card3
{
  display:none;
}
.entry-defender:hover .home_card
{
  display:initial;
}


.home_card {
  display: none;
 
}
.home_card{
text-align:center
}
.home_card h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px ;
  line-height: 1.5;
  color:#fff;
  font-weight:bold;
}

.home_card p {
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.6;
   color: rgba(255, 255, 255, 0.8);
}

.home_card button {
  margin-top: 16px;
  padding: 0 24px;
  background: #fff;
  border-radius: 8px;
  font-size: 14px;
  line-height: 36px;
  color: #000;
  display:flex;
  justify-content:center;
  margin:auto;
  outline:none;
  border: none;
}
.dividen_btn button:hover, .home_card button:hover
{
    background-color: #FFB01B;
    color: #121E36FF;
    cursor: pointer;
      transition: box-shadow ease-in 0.25s, -webkit-transform ease-in 0.25s;
  transition: transform ease-in 0.25s, box-shadow ease-in 0.25s;
  transition: transform ease-in 0.25s, box-shadow ease-in 0.25s, -webkit-transform ease-in 0.25s;
}
/* .bubbly-button {
  -webkit-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  transition: box-shadow ease-in 0.25s, -webkit-transform ease-in 0.25s;
  transition: transform ease-in 0.25s, box-shadow ease-in 0.25s;
  transition: transform ease-in 0.25s, box-shadow ease-in 0.25s, -webkit-transform ease-in 0.25s;
} */
/* 
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: inherit;
  color: inherit;
} */
.swap_time h2 {
  line-height: 24px;
  font-size: 30px;
  font-family: Montserrat, sans-serif;
  font-weight: bolder;
  color: #ffffff;
}

.swap_time p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  line-height: 24px;
  margin-top: 8px;
}

.entry_price h2 {
  line-height: 24px;
  font-size: 30px;
  font-family: Montserrat-Black, sans-serif;
}

.entry_price p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  line-height: 24px;
  margin-top: 8px;
}

.entry_price {
  margin-top: -5px;
  display: inline-flex;
  align-items: center;
  color: #071e5e;
  position: relative;
  z-index: 1;
  padding: 0 12px;
  height: 36px;
}

.entry_price p {
  font-size: 12px;
  -webkit-transform: skewX(-8deg);
  transform: skewX(-8deg);
  white-space: pre-wrap;
  margin-right: 4px;
}

.entry_price span {
  font-family: Montserrat-Black, sans-serif;
  font-style: italic;
  font-size: 20px;
  line-height: 23px;
}

.entry_price::after {
  content: "";
  position: absolute;
  background: linear-gradient(180deg, #F9CD55 0%, #FFBA00 100%);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-transform: skewX(-8deg);
  transform: skewX(-8deg);
  border-radius: 4px;
  z-index: -1;
}

.rover-activity_num {
  margin-top: 8px;
  padding: 11px 8px 3px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  width: 115px;
}

.rover-activity_num p {
  font-size: 12px;
  line-height: 0px;
  color: rgba(255, 255, 255, 0.8);
}

.rover-activity_num span {
  display: inline-block;
  margin-top: 4px;
  color: #FACA46;
  font-size: 16px;
  line-height: 10px;
}

.dividen {
  /* width: 446px; */
  height: 316px;
  cursor: pointer;
  padding: 17px;
  background: no-repeat bottom right / 45% url('../../../public/Game_Web/cat.png');
}

.dividen_items h2 {
  font-size: 28px;
  line-height: 34px;
  font-weight: 600;
  color: #faca46;
}

.prize p {
  margin: 24px 0 8px 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
}

.counter_card h2 {
  font-size: 54px;
  font-family: Montserrat, sans-serif;
  background-image: linear-gradient(180deg, #ffffff 0%, #6eb4fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
}

.counter_card p {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  color: #bddfff;
  font-size: 20px !important;
  line-height: 1.5;
}

.ary_pag {
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.5;
}

.dividen_btn button {
  padding: 0 24px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 16px;
  color: #324466;
  line-height: 40px;
  margin-top: -6px;
}
.entry_defender_2,.entry-wrapper_j9bc{
width:100%;
  }
@media screen (max-width:1630px) and (min-width:1400px) {
  
}
@media screen and (max-width:1632px) {
  .swap_card {
    order: 2;
    justify-content: space-between;
    display: flex;
    width: 100%;
    margin-top: 4px !important;

  }
 .dividen {
        width: 48%;
  }
  .card_style{
    display: flex;
    justify-content: space-between;
  }
  .entry-wrapper_j9bc{
           
  
  }
  .entry_defender_2,.entry-defender{
margin-top: 0 !important;
  }
  .entry_defender_2,.entry-wrapper_j9bc{
width:49%;
  }
  .slider_item {
    width: 46% !important;
}
  
}

@media screen and (max-width:1200px) {

  .CourselItemImage {
    height: 316px;
  }
}
@media screen and (max-width:992px) {
  .dividen{
    display: none;
  } .CourselItemImage {
    height:fit-content;
    width: 100%;
  }
   .card_style{
    display: flex;
    justify-content: space-between;
  }
  .entry-wrapper_j9bc{
            margin-top: 0px;
  
  }
  .entry_defender_2{
margin-top: 10px !important;
  }
  .entry_defender_2,.entry-wrapper_j9bc{
width:100%;
  }
  .slider_item {
    width: 100% !important;
}
}
@media screen and (max-width:600px) {
  .cardLeft{
    margin-top: -33px;
  }
}
@media screen and (max-width:576px) {
  .q-carousal .p-link{  
    right: 16px;
    width:48px;
  }
}
</style>