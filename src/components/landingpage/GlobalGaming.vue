<template>
   <div class="cardHolder mt-5">
    <div class="row">
        <div class="col-md-12 col-lg-8">


        <div class="cardLeft">
            <p class="title">Global Baccarat Championship </p><p class="list"><b>. </b>VIP Baccarat 
                <b>. </b>Classic Baccarat
                <b>. </b>BID Baccarat</p>
            <h1 class="card-heading">AGQJ</h1>
            <input type="button" class="button" value="Play">
            <img class="photo" :src="'../Game_Web/photo.png'">
            
        </div>
          </div>

        <div class="col-md-12 col-lg-4">
        <div class="cardRight">
            <div class="again_item"></div>
            <div class="card_again">
                <h1 class="card1-h">AGIN</h1>
                <p class="card1-p1">Thousand of gamers
                    Interaction with beauties</p>
                    <p class="card1-p2">Limit 5～300,000USDT</p>
            </div>
            <div class="card2_evo">
                <h1 class="card1-h">EVO</h1>
                <p class="card1-p1">Multiple games on one screen</p>
                    <p class="card1-p2">Limit 1～50,000USDT</p>
            </div>
        </div>
    </div>

            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.again_item{
        width: 164px;
        border-radius: 16px;
        background: no-repeat center / 85% url('../../../public/Game_Web/again.png') rgba(255, 255, 255, 0.05);
}

body {
    padding: 0%;
    margin: 0%;
    background-image: url('../../../public/Game_Web/photobg.png');
}

.cardHolder {
    width: 100%;
    /* height: 300px; */
    border-radius: 20px;
    /* padding: 30px; */

}


.cardLeft {
    width: 100%;
    height: 328px;
    float: left;
    border-radius: 10px;
    background-image: url('../../../public/Game_Web/photocover.png'),linear-gradient(129.67deg, #4A00E0 0%, #6717A6 51%, #220959 100%);;
    cursor: pointer;
    
}

.cardRight {
   margin-top: 5px;
    margin-left: 20px;
     width: 100%;
    height: 100%;
    border-radius: 10px;
    float: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.photo {
    width: 50%;
    height: 107%;
    margin-left: 50%;
    margin-top: -260px;
    border-radius: 20px 10px 20px 10px;
    object-fit: cover;
    
}

.title {
    color: #FFB01B;
    float: left;
    padding: 50px 10px 50px 30px;
}

.list {
    color: white;
    padding: 50px 10px 50px 30px;
}

.card-heading {
    color: white;
    padding-left: 50px;
}

.button {
    margin-left: 40px;
    background-color: white;
    color: #121E36FF;
    font-size: 20px;
    width: 120px;
    text-align: center;
    height: 40px;
    border-radius: 10px;
    transition-duration: 0.2s;

}

.button:hover {
    background-color: #FFB01B;
    /* Green */
    color: #121E36FF;
    cursor: pointer;
}

.card_again {
    width: 100% !important;
    height: 47%;
    background-color: #121E36FF;
    border-radius: 15px;
    cursor: pointer;
    padding: 20px;


}

.card_again:hover {
    background-color: #6d3aac;
    color: #121E36FF;
    cursor: pointer;
}

.card2_evo {
    width: 100%;
    height: 47%;
    background-color: #121E36FF;
    margin-top: 5%;
    border-radius: 15px;
    cursor: pointer;
    padding: 20px;

}

.card2_evo:hover {
    background-color: #6d3aac;
    color: #121E36FF;
    cursor: pointer;
}

.card1-h {
    color: white;
    font-size: 20px;
}

.card1-p1 {
    color: white;
    font-size: 15px;
}

.card1-p2 {
    color: aliceblue;
    font-size: 10px;
    opacity: 0.5;
}
@media screen  and (max-width:1400px) {
    .cardHolder {
    width: 98%;
}
}
@media screen and (max-width:992px) {
    .cardRight{
        margin-left: 0 !important;
    }
    .card2_evo {
            margin-top: 1%;
    }
     .cardHolder {
    width: 100%;
}
}
@media only screen and (max-width: 600px) {
    .cardHolder {
        width: 100%;
        height: auto;
        margin-top: 0 !important;
        /* padding: 10px; */
    }

    .cardLeft {
        width: 100%;
        height: 250px;
        margin-top: 25px;
    }
/* 
    .cardRight {
        
        width: 80%;
        margin-top: 0px;
        height: 300px;
    } */
    .title {
        color: #FFB01B;
        padding: 0px 0px 0px 10px;
        float: none;

    }
    .list {
        color: white;
        padding: 0px 0px 0px 10px;
        font-size: 10px;
        float: none;

    }

    .card-heading {
        color: white;
        padding-left: 10px;
    }
    
    .button {
        margin-left: 10px;    
    }
    .photo {
    height:100%;
    margin-top: -157px;
 
}
}
</style>