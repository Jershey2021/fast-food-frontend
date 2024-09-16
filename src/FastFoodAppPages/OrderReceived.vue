<template>
  <ion-page>
    <header-layout />
    <ion-content>
      <div class="OrderReceivedPage">
        <div class="orderReceivedMoonPage">
          <img :src="FullMoon" alt="Full Moon" class="orderReceivedFullMoon" />
          <img :src="HalfMoon" alt="Half Moon" class="orderReceivedHalfMoon" />
          <img
            :src="LongSleeve"
            alt="Long Sleeve"
            class="orderReceivedLongSleeve"
          />
          <img :src="Sleeve" alt="Sleeve" class="orderReceivedSleeve" />
          <img :src="LikeHand" alt="LikeHand" class="orderReceivedLikeHand" />
        </div>
        <div class="orderRecievedLabelPage">
          <h1 class="orderReceivedLabel">Order Received!</h1>
        </div>
        <div class="orderReceivedOrderNumberPage">
          <p class="orderReceivedOrderNo">
            Your order <span>No. 19049585</span> has successfully take and now
            being processed. Kindly wait for our notification regarding your
            order.
          </p>
        </div>
        <div class="orderReceivedTrackOrderPage">
          <button class="trackOrderButton">Track Order</button>
          <button class="backToHomeButton" @click="goHome">Back to Home</button>
          <div class="orderReceivedHomeIndicatorPage">
            <img :src="HomeIndicator" alt="Home Indicator" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import "../FastFoodAppStyle/OrderReceived.css";
import FullMoon from "../Images/popoverFullMoon.png";
import HalfMoon from "../Images/popoverHalfMoon.png";
import LongSleeve from "../Images/popoverLongSleeve.png";
import Sleeve from "../Images/popoverSleeve.png";
import LikeHand from "../Images/popoverHands.png";
import HomeIndicator from "../Images/HomeIndicator.png";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
  },
  setup() {
    const goHome = async () => {
      window.location.href = "/home-screen";
    };
    return {
      FullMoon,
      HalfMoon,
      LongSleeve,
      Sleeve,
      LikeHand,
      HomeIndicator,
      goHome,
    };
  },
});
</script>
