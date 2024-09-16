<template>
  <ion-content>
    <div class="popoverPage">
      <div class="popoverMoonPage">
        <img :src="FullMoon" alt="Full Moon" class="popoverFullMoon" />
        <img :src="HalfMoon" alt="Half Moon" class="popoverHalfMoon" />
        <img :src="LongSleeve" alt="Long Sleeve" class="popoverLongSleeve" />
        <img :src="Sleeve" alt="Sleeve" class="popoverSleeve" />
        <img :src="LikeHand" alt="LikeHand" class="popoverLikeHand" />
      </div>
      <div class="popoverSuccessfullPage">
        <h1 class="popoverSuccessfullyAddedLabel">Successfully Added!</h1>
      </div>
      <div class="popoverQuestionPage">
        <h1 class="popoverQuestionLabel">What do you want to do now?</h1>
      </div>
      <div class="popoverProceedPage">
        <button class="popoverProceedButton" @click="proceedToCheckout">
          Proceed to Checkout
        </button>
      </div>
      <div class="popoverAddMorePage">
        <button class="popoverAddMoreButton" @click="addMore">Add More</button>
      </div>
    </div>
  </ion-content>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonPopover,
} from "@ionic/vue";
import { defineComponent } from "vue";
import Menu from "./Menu.vue";
import "../FastFoodAppStyle/Popover.css";
import FullMoon from "../Images/popoverFullMoon.png";
import HalfMoon from "../Images/popoverHalfMoon.png";
import LongSleeve from "../Images/popoverLongSleeve.png";
import Sleeve from "../Images/popoverSleeve.png";
import LikeHand from "../Images/popoverHands.png";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    IonPopover,
  },
  setup() {
    const addMore = async () => {
      window.location.href = "/home-screen/products/";
    };
    const proceedToCheckout = async () => {
      window.location.href =
        "/home-screen/products/your-order/popover/order-summary";
    };
    return {
      Menu,
      FullMoon,
      HalfMoon,
      LongSleeve,
      Sleeve,
      LikeHand,
      addMore,
      proceedToCheckout,
    };
  },
});
</script>
