<template>
<div class="row mt-4" >
<div class="blockchain_carousal col-md-12 col-lg-5">
<div style="position:relative">

<h2 class="live">Blockchain games</h2>
 <div class="s-carousal">
 <i class="fa-solid fa-caret-right"></i>
   <i class="fa-solid fa-caret-left"></i>
    <Carousel :value="product" :numVisible="4"  :numScroll="4   " :responsiveOptions="responsiveOptions" :circular="true">
        <template #item="slotProps">
        <div class="casino ">
          <div class="CourselItem card1 justify-content-center d-flex mt-3">
            <div class="CourselItemImage ">
            <img class="bull_bull_blockchain" :src="'../Game_Web/' + slotProps.data.img2" />

            <div>
            <img class="bull_img_blockchain" :src="'../Game_Web/' + slotProps.data.img" />
            </div>
              
              <div class="play_icon">
                <i class="fa-solid fa-circle-play"></i>
            </div>
             
            </div>
          </div>
          </div>


          <div class="casino ">
          <div class="CourselItem card1 justify-content-center d-flex mt-3">
            <div class="CourselItemImage ">
            <img class="bull_bull_blockchain" :src="'../Game_Web/' + slotProps.data.img4" />

            <div>
            <img class="bull_img_blockchain" :src="'../Game_Web/' + slotProps.data.img3" />
            </div>
              
              <div class="play_icon">
                <i class="fa-solid fa-circle-play"></i>
            </div>
              <div class="q-carousal">

              </div>
            </div>
          </div>
          </div>
        </template>
      </Carousel>
    
      </div>
      </div>
</div>

<div class="eject_rock col-md-12 cil-lg-7">
<div class="rocket_section">
<img class="rocket_eject" :src="'../Game_Web/rocket.gif'" alt="">
<div class="rocket_text_group">
<div class="rocket_info">
<h2>Blockchain Gaming</h2>
<p> The algorithm of blockchain gaming industry generates real randomness with transparent and verifiable ways, and can be examined by all players.</p>
<p> All the results of blockchain games cannot be set in advance, even the banker cannot modify betting status.</p>
</div>
<div class="game_name">
<h2>CRASH</h2>
<p>The most popular verifiable gambling game</p>
</div>
<div class="play_btn">
<button>PLAY</button>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
// import LiveCasino2 from '../../components/LiveCasino2.vue'
import Carousel from 'primevue/carousel';
export default {
  components: {
    Carousel,
    // LiveCasino2
  },

  data() {
    return {
      product: [
        { img: 'rock.png',img2:'rockimg.png', img3: 'maintance.png',img4:'maintanceimg.png'},
        { img: 'turbo.png',img2:'turboimg.png', img3: 'bounty.png',img4:'bountyimg.png'},
       { img: 'steal.png',img2:'stealimg.png', img3: 'shamimg.png',img4:'sham.png'},
       { img: 'moon.png',img2:'moonimg.png', img3: 'ball.png',img4:'ballimg.png'},
       { img: 'hunter.png',img2:'hunterimg.png', img3: 'maintance2.png',img4:'maintance2img.png'},
       { img: 'maintance.png',img2:'maintance3.png', img3: 'maintance.png',img4:'pooker.png'},
       { img: 'maintance.png',img2:'rockby.png', img3: 'maintance.png',img4:'standby.png'},
        // { img3: 'dragon.png',img4:'dragonimg.png'},
      //   { img3: 'sicbo2.png',img4:'sicbo2img.png'},
      //  { img3: 'bull2.png',img4:'bull2img.png'},
      //  { img3: 'roul2.png',img4:'roul2img.png'},
      //  { img3: 'black2.png',img4:'black2img.png'},
      //  { img3: 'roul3.png',img4:'roul3img.png'},
      //  { img3: 'dragon2.png',img4:'dragon2img.png'},
      //  { img3: 'sicbo3.png',img4:'sicbo3img.png'}, 
        
      ],
      responsiveOptions: [
			{
				breakpoint: '1400px',
				numVisible: 6,
				numScroll: 2
			},
      {
				breakpoint: '992px',
				numVisible: 4,
				numScroll: 2
			},
			{
				breakpoint: '762px',
				numVisible: 3,
				numScroll: 2
			},
            {
				breakpoint: '576px',
				numVisible: 2,
				numScroll: 2
			},
		]
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
}
</script>

<style>
.l-carousal .p-carousel-next, .l-carousal .p-carousel-prev {
    display: initial !important; 
     background-color: rgba(243, 231, 231, 0.098);
    width: 32px;
    height: 34px;
    font-size: 10px;
    color:#ffff;
   position: absolute !important;
    right: 42px;
    top: 12px;
}
.l-carousal .p-carousel-prev{
  top: 12px !important;
    right: 0px !important;
    width: 33px !important;
    height: 33px !important;

}
.casino{
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 91%;
    overflow: hidden;
}

.bull_bull_blockchain
{
    border-radius: 15px;
    position: relative;
    width: 137px;
    height: 171px;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    visibility: visible;
}
.bull_img_blockchain{
    border-radius: 15px;
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0;
    transition: -webkit-transform 200ms linear;
    transition: transform 200ms linear;
    transition: transform 200ms linear, -webkit-transform 200ms linear;
    z-index: 0;
    left: 0;
    display: block;
    border: 0;
}
.card1{
    position: relative;
    height: 172px;
}

    .play_icon{
        margin: auto;
        position: relative;
        top: 64px;
        text-align: center;
    }
    .fa-circle-play{
        font-size: 37px;
    }

.game_item_mask{
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
}
.game_item_mask
{
    height: 100%;
    place-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 200ms linear;
}
  .s-carousal .p-carousel-indicators{
     display:none;
}
 
 .p-carousel-prev-icon{
 
}
 .s-carousal .fa-caret-right{
      font-size: 20px;
    margin: auto;
    text-align: center;
    top: 20px !important;
    right: 0px;
}
 .s-carousal .fa-caret-left{
     position: absolute;
    font-size: 20px;
    color: #ffff;
    right: 51px;
    top: 21px;
}
.l-carousel-indicator {
  padding: 0 5px 0;
}
@media screen and (max-width:1400px) {
   .bull_bull_blockchain{
    width: 100%;
    height: auto;
  }
  .card1 {
    width: 161px;
    height: 201px;
  }
}
@media screen and (max-width:992px) {
  .bull_bull_blockchain{
    width: 100%;
    height: auto;
  }
  .card1 {
    width: 217px;
    height: 271px;
  }
}
.rocket_section{
    position: relative;
   
    margin-left: 16px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    background: no-repeat top / cover url('../../../public/Game_Web/rocketbc.png'), linear-gradient(180deg, #22073D00 0%, #8104A0 100%);
    cursor: pointer;
}
.rocket-eject {
    pointer-events: none;
    position: absolute;
    right: -23%;
    bottom: -10%;
    width: 100%;
}
.rocket_text_group{
    position:absolute;
        padding: 26.5px 32px;
}
.rocket_info h2
{
    color: #CACAFF;
    font-size: 18px;
    line-height: 2;
    margin-bottom: 8px;
}
.rocket_info p{
    margin-bottom: 8px;
    max-width: 386px;
    font-size: 14px;
    color: rgba(202, 202, 255, 0.6);
    line-height: 28px;
        letter-spacing: 0;
    max-width: 410px;
}
.game_name
{
    margin-top: 48px;
}
.game_name h2{
    font-size: 48px;
    line-height: 1.5;
    margin-bottom: 7px;
        color: #F1C44A;
}
.game_name p
{
        font-size: 16px;
    line-height: 24px;
    color: #F1C44A;
     font-family: 'Montserrat', sans-serif;
}
.play_btn button
{
        padding: 0 24px;
    line-height: 44px;
    background-color: #fff;
    color: #324466;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 5px;
     font-family: 'Montserrat', sans-serif;
}
.play_btn button:hover{
  background-color: #FFB01B;
    color: #121E36FF;
    cursor: pointer;
}
.rocket_eject{
        height: 481px;
}
.eject_rock{
    width:58%;
}

h2, p, button, span{
     font-family: 'Montserrat', sans-serif;
}
@media screen and (max-width:992px) {
    .blockchain_carousal {
        width:100%;
    }
    .rocket_section{
        margin-top:30px;
         width:97%;
    }
    .eject_rock {
        width:100%;
    }
}

@media screen and (max-width:460px) {

  .rocket_info p {
    margin-bottom: 0px;
    line-height: 24px;
}
.game_name {
    margin-top: 31px;
}
}
</style>
