<template>
  <ion-page>
    <header-layout />
    <ion-menu menu-id="SideBar" content-id="HomeScreen" type="push">
      <ion-content><MenuSideBar /></ion-content>
    </ion-menu>
    <ion-content id="HomeScreen">
      <div>
        <div class="menuBar">
          <!-- <ion-button @click="SideBarMenu()" class="SideBarMenuButton">
            <img :src="Menu" alt="Menu Icon" class="twoLineIcon" />
          </ion-button> -->

          <ion-buttons class="SideBarMenuButton">
            <ion-menu-button
              ><img :src="Menu" alt="Menu Icon" class="twoLineIcon"
            /></ion-menu-button>
          </ion-buttons>

          <div class="circleNotification"></div>
          <img :src="Crown" alt="Crown" class="crownIcon" />
          <p class="points">0 Points</p>
          <ion-icon :icon="chevronForward" class="forward"></ion-icon>
          <img :src="userIcon" alt="Profile" class="userIcon" />
        </div>
        <div class="logoPage">
          <img :src="Logo" alt="Fast Food Logo" class="logo" />
          <p class="anneoyong">Anneoyong, Chou!</p>
          <h1 class="question">What do you want to eat?</h1>
        </div>
        <div class="searchBar">
          <input
            type="search"
            class="search"
            name="search"
            placeholder="try our new Steak Fries Veggies"
          />
          <i class="bi bi-search"></i>
        </div>
        <div class="specialOffersPage">
          <h1 class="specialOffers">Special Offers!</h1>
          <div class="viewAllPage">
            <button class="viewAllButton">
              <p class="viewAll">View All</p>
              <ion-icon :icon="chevronForward" class="viewAllIcon"></ion-icon>
            </button>
            <div class="specialDeal">
              <div class="specialDealOne overflow-hidden">
                <img
                  :src="SpecialOfferOne"
                  alt="Deal One"
                  class="specialOfferOne"
                />
                <div class="logoPosition">
                  <img
                    :src="logoInsideInDeal"
                    alt="Fast Food Logo"
                    class="logoForDeal"
                  />
                </div>
              </div>
              <div class="specialDealTwo">
                <img
                  :src="SpecialOfferTwo"
                  alt="Deal Two"
                  class="specialOfferTwo"
                />
              </div>
              <div class="firstHalfCircle"></div>
              <div class="secondHalfCircle"></div>
              <div class="thirdHalfCircle"></div>
            </div>
          </div>
        </div>
        <div class="foodCategory">
          <h1 class="category">Category</h1>
          <img :src="Chicken" alt="Chickens" class="chickenCategory" />
          <h3 class="chickenLabel">Chicken</h3>
          <p class="chickenRecipes">9 Recipes</p>
          <img :src="SeaFoods" alt="Seafoods" class="seaFoodsCategory" />
          <p class="seaFoodsLabel">Seafoods</p>
          <p class="seafoodsRecipes">6 Recipes</p>
        </div>
        <div class="whatNew">
          <h1 class="whatsNewLabel">What's New?</h1>
          <img :src="WhatsNew" alt="Food Menu" class="foodMenu" />
          <img :src="Logo" alt="" class="foodMenuLogo" />
          <div class="foodMenuBlackCircle"></div>
        </div>
        <div class="mostPopularPage">
          <h1 class="mostPopularLabel">Most Popular</h1>
          <div class="mostPopularGrid">
            <div class="mostPopularFood">
              <div class="bestSeller">
                <img
                  :src="SteakFriesVeggies"
                  alt="SteakFriesVeggies"
                  class="SteakFriesVeggies"
                />
              </div>
              <p class="mostPopularFoodLabel">Steak Fries Veggies</p>
              <p class="mostPopularCategory">Meat</p>
              <p class="mostPopularPrice">P 175</p>
              <ion-icon :icon="star" class="starOne"></ion-icon>
              <ion-icon :icon="star" class="starTwo"></ion-icon>
              <ion-icon :icon="star" class="starThree"></ion-icon>
              <ion-icon :icon="star" class="starFour"></ion-icon>
              <ion-icon :icon="starHalf" class="halfStar"></ion-icon>
            </div>
            <div class="mostPopularFood">
              <div class="bestSeller">
                <img
                  :src="ChickenSalad"
                  alt="ChickenSalad"
                  class="ChickenSalad"
                />
              </div>
              <p class="mostPopularFoodLabel">Chicken Salad</p>
              <p class="mostPopularCategory">Chicken</p>
              <p class="mostPopularPrice">P 172</p>
              <ion-icon :icon="star" class="starOne"></ion-icon>
              <ion-icon :icon="star" class="starTwo"></ion-icon>
              <ion-icon :icon="star" class="starThree"></ion-icon>
              <ion-icon :icon="star" class="starFour"></ion-icon>
              <ion-icon :icon="starHalf" class="halfStar"></ion-icon>
            </div>
            <div class="mostPopularFood">
              <div class="bestSeller">
                <img
                  :src="SorvetesPrimavera"
                  alt="SorvetesPrimavera"
                  class="SorvetesPrimavera"
                />
              </div>
              <p class="mostPopularFoodLabel">Sorvetes Primavera ..</p>
              <p class="mostPopularCategory">Dessert</p>
              <p class="mostPopularPrice">P 185</p>
              <ion-icon :icon="star" class="starOne"></ion-icon>
              <ion-icon :icon="star" class="starTwo"></ion-icon>
              <ion-icon :icon="star" class="starThree"></ion-icon>
              <ion-icon :icon="star" class="starFour"></ion-icon>
              <ion-icon :icon="starHalf" class="halfStar"></ion-icon>
            </div>
            <div class="mostPopularFood">
              <div class="bestSeller">
                <img
                  :src="FriedChicken"
                  alt="FriedChicken"
                  class="FriedChicken"
                />
              </div>
              <p class="mostPopularFoodLabel">Fried Chicken</p>
              <p class="mostPopularCategory">Chicken</p>
              <p class="mostPopularPrice">P 175</p>
              <ion-icon :icon="star" class="starOne"></ion-icon>
              <ion-icon :icon="star" class="starTwo"></ion-icon>
              <ion-icon :icon="star" class="starThree"></ion-icon>
              <ion-icon :icon="star" class="starFour"></ion-icon>
              <ion-icon :icon="starHalf" class="halfStar"></ion-icon>
            </div>
          </div>
        </div>
        <div class="buttonOrder">
          <button class="orderNow" @click="goOrderNow">Order Now!</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonIcon,
  IonMenu,
  IonRouterOutlet,
  IonButton,
} from "@ionic/vue";
import Menu from "../Images/Menu.png";
import { reorderTwo } from "ionicons/icons";
import Crown from "../Images/crown.png";
import { chevronForward } from "ionicons/icons";
import userIcon from "../Images/userIcon.jpeg";
import Logo from "../Images/Logo.png";
import SpecialOfferOne from "../Images/specialOfferOne.png";
import SpecialOfferTwo from "../Images/specialOfferTwo.jpg";
import logoInsideInDeal from "../Images/logoInsideInDeal.png";
import Chicken from "../Images/chicken.png";
import SeaFoods from "../Images/seaFoods.png";
import WhatsNew from "../Images/whatsNew.png";
import SteakFriesVeggies from "../Images/SteakFriesVeggies.png";
import ChickenSalad from "../Images/ChickenSalad.png";
import SorvetesPrimavera from "../Images/SorvetesPrimavera.png";
import FriedChicken from "../Images/FriedChicken.png";
import { star } from "ionicons/icons";
import { starHalf } from "ionicons/icons";
import { defineComponent } from "vue";
import "../FastFoodAppStyle/HomeScreen.css";
import MenuSideBar from "./Menu.vue";
import { menuController } from "@ionic/vue";
import { IonMenuButton } from "@ionic/vue";
import { IonButtons } from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonIcon,
    IonMenu,
    IonRouterOutlet,
    MenuSideBar,
    IonButton,
    menuController,
    IonMenuButton,
    IonButtons,
  },
  setup() {
    const SideBarMenu = async () => {
      await menuController.open("SideBar");
    };
    const goOrderNow = async () => {
      window.location.href = "/home-screen/products";
    };
    return {
      goOrderNow,
      SideBarMenu,
      Menu,
      reorderTwo,
      Crown,
      chevronForward,
      userIcon,
      Logo,
      SpecialOfferOne,
      SpecialOfferTwo,
      logoInsideInDeal,
      Chicken,
      SeaFoods,
      WhatsNew,
      SteakFriesVeggies,
      ChickenSalad,
      SorvetesPrimavera,
      FriedChicken,
      star,
      starHalf,
    };
  },
});
</script>
