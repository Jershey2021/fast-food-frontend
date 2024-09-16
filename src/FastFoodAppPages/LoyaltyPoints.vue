<template>
  <ion-page>
    <header-layout />
    <ion-menu menu-id="SideBar" content-id="LoyaltyPointsScreen" type="push">
      <ion-content><MenuSideBar /></ion-content>
    </ion-menu>
    <ion-content id="LoyaltyPointsScreen">
      <div>
        <div class="LoyaltyPointsPage">
          <ion-buttons class="SideBarMenuButton">
            <ion-menu-button
              ><img :src="Menu" alt="Menu Icon" class="loyaltyPointsMenu"
            /></ion-menu-button>
          </ion-buttons>
          <h1 class="loyaltyPointsLabel">Loyalty Points</h1>
        </div>
        <div class="loyaltyPointsBeginnerTierPage">
          <img :src="Crown" alt="Crown" class="loyaltyPointsCrownIcon" />
          <h1 class="loyaltyPointsBeginnerTierLabel">Beginner Tier</h1>
          <button class="loyaltyPointsViewAllButton">
            View All
            <ion-icon
              :icon="chevronForward"
              class="loyaltyPointsViewAllIcon"
            ></ion-icon>
          </button>
          <p class="loyaltyPointsDescription">
            Earn points by purchasing from our store. Vestibulum ante ipsum
            primis in faucibus orci luctus et.
          </p>
        </div>

        <div class="loyaltyPointsCircleCounterPage">
          <div class="loyaltyPointsFirstCircle">
            <div class="loyaltyPointsSecondCircle">
              <h1 class="loyaltyPointsCounter">0 / 160</h1>
            </div>
          </div>
        </div>

        <div class="loyaltyPointsRewardsPage">
          <h1 class="loyaltyPointsRewardLabel">Rewards</h1>
          <button class="loyaltyPointsHowItWorksButton">
            How it Works
            <ion-icon
              :icon="chevronForward"
              class="loyaltyPointsHowItWorksIcon"
            ></ion-icon>
          </button>
        </div>
        <div class="loyaltyPointsButtonCategoryPage">
          <button class="loyalPointsCategoryAllButton">All</button>
          <button class="loyalPointsCategoryBeginnerButton">Beginner</button>
          <button class="loyalPointsCategoryIntermediateButton">
            Intermediate
          </button>
          <button class="loyalPointsCategoryLoyalButton">Loyal</button>
        </div>

        <div class="loyaltyPointsRewardContentPage">
          <div class="loyaltyPointsRewardContentContainer">
            <img
              :src="SteakFriesVeggies"
              alt="Steak Fries Veggies"
              class="loyaltyPointsSteakFriesVeggies"
            />
            <h1 class="loyaltyPointsFoodLabel">Steak Fries Veggies</h1>
            <p class="loyaltyPointsFoodCategory">Meat</p>
            <img :src="Crown" alt="Crown" class="loyaltyPointsSmallCrown" />
            <p class="yourLoyaltyPoints">20 points</p>
          </div>
        </div>
        <div class="loyaltyPointsHomeIndicatorPage">
          <img
            :src="HomeIndicator"
            alt="Home Indicator"
            class="loyaltyPointsHomeIndicator"
          />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonButtons,
  IonMenu,
} from "@ionic/vue";
import { defineComponent } from "vue";
import "../FastFoodAppStyle/LoyaltyPoints.css";
import Menu from "../Images/Menu.png";
import HomeIndicator from "../Images/HomeIndicator.png";
import Crown from "../Images/crown.png";
import { chevronForward } from "ionicons/icons";
import SteakFriesVeggies from "../Images/SteakFriesVeggies.png";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    IonMenuButton,
    IonButtons,
    IonMenu,
  },
  setup() {
    return {
      HomeIndicator,
      Menu,
      Crown,
      chevronForward,
      SteakFriesVeggies,
    };
  },
});
</script>
