<template>
  <GameHeader></GameHeader>
  <div class="container-fluid  main_adjust">
  <internationalGame></internationalGame>
  <GlobalGaming></GlobalGaming>
  <LiveCasino></LiveCasino>
  <SlotsGame></SlotsGame>
  <Sports></Sports>
  <BlockChain></BlockChain>
  </div>
  <GameFooter></GameFooter>
</template>

<script>
import GameHeader from '../components/landingpage/GameHeader.vue'
import internationalGame from '../components/landingpage/InternationalGame.vue'
import GlobalGaming from '../components/landingpage/GlobalGaming.vue'
import LiveCasino from '../components/landingpage/LiveCasino.vue'
import SlotsGame from '../components/landingpage/SlotsGame.vue'
import Sports from '../components/landingpage/Sports.vue'
import BlockChain from '../components/landingpage/BlockChain.vue'
import GameFooter from '../components/landingpage/GameFooter.vue'

export default {
  name:'MaiN',
  components:{
    GameHeader,
    internationalGame,
    GlobalGaming,
    LiveCasino,
    SlotsGame,
    Sports,
    BlockChain,
    GameFooter
 
  }
}
</script>

<style>
.row{
  overflow: hidden;
}
.container-fluid {
  overflow: hidden;
}
.main_adjust{
  width: 77%;
  margin: auto;
  overflow: hidden;
}
@media screen and (max-width:1400px) {
  .main_adjust{
  width: 100%;
}
}
</style>