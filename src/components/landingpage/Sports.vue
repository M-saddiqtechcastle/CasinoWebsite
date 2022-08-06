<template>
    <div class="row mt-5">
    <h2 class="sports">Sports</h2>
    <div class="im col-lg-4 col-md-12 mb-3">
        <div class="game_item">
            
                 <img class="player_img1" :src="'../Game_Web/footballimg1.png'" alt="">
            
            <!-- <img class="player_img1" src="./assets/footballimg1.png" alt=""> -->
            <div class="game_item_tit p-4">
                <h5>IM</h5>
                <p>Unique Betting Experience Various Playing Methods</p>
            </div>
        </div>
    </div>
    <div class="im col-lg-4 col-md-12 mb-3">
        <div class="game_item2">
            <img class="player_img1" :src="'../Game_Web/footballimg2.png'" alt="">
            <div class="game_item_tit p-4">
                <h5>SABA</h5>
                <p>Thousands of Diversified Sports Betting Events</p>
            </div>
        </div>
    </div>
    <div class="im col-lg-4 col-md-12 mb-3">
        <div class="game_item3">
            <img class="player_img1" :src="'../Game_Web/footballimg3.png'" alt="">
            <div class="game_item_tit p-4">
                <h5>FB</h5>
                <p>The Best Odds in the Global Sports Industry</p>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
export default {
name:'SportS'
}
</script>

<style>
.sports{
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 16px;
    color:#FFF;
}
.game_item,.game_item2,.game_item3{
    /* width: 392px; */
    height: 187px;
    border-radius: 15px;
    background: url('../../../public/Game_Web/footbatbc1.png') center center / cover no-repeat;
}
.game_item2{
    background: url('../../../public/Game_Web/footballbc2.png') center center / cover no-repeat;
}
.game_item2{
    background: url('../../../public/Game_Web/footballbc3.png') center center / cover no-repeat;
}
.game_item_tit h5
{
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    line-height: 1.2;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%);
    -webkit-background-clip: text;
    color: transparent;
}
.game_item_tit p
{
    font-family: Montserrat, sans-serif;
    max-width: 250px;
    margin-top: 8px;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
}
.im{
    position: relative;
    overflow: hidden;
}
.game_item >
.player_img1,.game_item2 >
.player_img1,.game_item3>
.player_img1
{
    position: absolute;
    right: 30px;
    bottom: 0;
    height: 100%;
    transition: -webkit-transform 200ms linear;
    transition: transform 200ms linear;
    transition: transform 200ms linear, -webkit-transform 200ms linear;
}
.game_item >
.player_img1:hover,.game_item2 >
.player_img1:hover,.game_item3>
.player_img1:hover{
    transform: scale(1.07)
    
}
</style>