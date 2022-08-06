<template>
<div style="position:relative; margin-top:22px;">

<h2 class="live">Slots</h2>
 <div class="s-carousal">
 <i class="fa-solid fa-caret-right"></i>
   <i class="fa-solid fa-caret-left"></i>
    <Carousel :value="product" :numVisible="8"  :numScroll="8" :responsiveOptions="responsiveOptions" :circular="true">
        <template #item="slotProps">
        <div class="casino ">
          <div class="CourselItem card1 justify-content-center d-flex mt-3">
            <div class="CourselItemImage ">
            <img class="bull_bull" :src="'../Game_Web/' + slotProps.data.img2" />

            <div>
            <img class="bull_img" :src="'../Game_Web/' + slotProps.data.img" />
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
            <img class="bull_bull" :src="'../Game_Web/' + slotProps.data.img4" />

            <div>
            <img class="bull_img" :src="'../Game_Web/' + slotProps.data.img3" />
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
      <!-- <LiveCasino2></LiveCasino2> -->
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
        { img: 'fishing.png',img2:'fishingimg.png', img3: 'dragon.png',img4:'dragonimg.png'},
        { img: 'fury.png',img2:'furyimg.png', img3: 'sicbo2.png',img4:'sicbo2img.png'},
       { img: 'hot.png',img2:'hotimg.png', img3: 'bull2.png',img4:'bull2img.png'},
       { img: 'dia.png',img2:'diaimg.png', img3: 'roul2.png',img4:'roul2img.png'},
       { img: 'buf.png',img2:'bufimg.png', img3: 'black2.png',img4:'black2img.png'},
       { img: 'don.png',img2:'donimg.png',  img3: 'roul3.png',img4:'roul3img.png'},
       { img: 'crew.png',img2:'crewimg.png', img3: 'dragon2.png',img4:'dragon2img.png'},
       { img: 'joker.png',img2:'jokerimg.png', img3: 'sicbo3.png',img4:'sicbo3img.png'},  
          { img: 'magic.png',img2:'magicimg.png', img3: 'tw.png',img4:'chimg.png'}, 
             { img: 'relase.png',img2:'relaseimg.png', img3: 'cod.png',img4:'codimg.png'}, 
                { img: 'lucky.png',img2:'luckyimg.png', img3: 'cv3.png',img4:'cv3img.png'}, 
                { img: 'street.png',img2:'streetimg.png', img3: 'sicbo3.png',img4:'sicbo3img.png'},
             
                { img: 'big.png',img2:'bigimg.png', img3: 'dragon2.png',img4:'dragon2img.png'},
                   { img: 'panda.png',img2:'pandaimg.png', img3: 'ben3.png',img4:'car3.png'},
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
.s-carousal .p-carousel-next, .s-carousal .p-carousel-prev {
    display: initial !important; 
     background-color: rgba(243, 231, 231, 0.098);
   width: 33px;
    height: 33px;
    font-size: 10px;
    color:#ffff;
   position: absolute !important;
    right: 42px;
    top: 12px;
}
.s-carousal .p-carousel-next
{
  border: none;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
}
.s-carousal .p-carousel-prev{
    top: 12px !important;
    right: 0px !important;
    width: 33px !important;
    height: 33px !important;
    border: none;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;

}
.casino{
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 91%;
    overflow: hidden;
}

.bull_bull
{
    border-radius: 15px;
    position: relative;
    width: 164px;
    height: 171px;
    background-size: cover;
   object-fit: cover;
    background-repeat: no-repeat;
    visibility: visible;
}
.bull_img{
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
    object-fit: cover;
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
  position: absolute;
  right: 0px;
  font-size: 20px;
 
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
   .bull_bull{
    width: 100%;
    height: auto;
  }
  .card1 {
    width: 161px;
    height: 201px;
  }
}
@media screen and (max-width:992px) {
  .bull_bull{
    width: 100%;
    height: auto;
  }
  .card1 {
    width: 217px;
    height: 271px;
  }
}
</style>
