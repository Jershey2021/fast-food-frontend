<template>
  <ion-page>
    <header-layout />
    <ion-menu menu-id="SideBar" content-id="ProductScreen" type="push">
      <ion-content><MenuSideBar /></ion-content>
    </ion-menu>
    <ion-content id="ProductScreen">
      <div>
        <div class="productBar">
          <ion-buttons slot="start" class="productSideBarMenuButton">
            <ion-menu-button
              ><img :src="Menu" alt="Menu Icon" class="productTwoLineIcon"
            /></ion-menu-button>
          </ion-buttons>
          <div class="productCircleNotification"></div>
          <h1 class="productOurFoodLabel">Our Foods</h1>
          <img
            :src="AddToCart"
            alt="Add To Cart Icon"
            class="productAddToCartIcon"
          />
        </div>
        <div class="productSearchPage">
          <input
            type="search"
            class="productSearchBar"
            name="search"
            placeholder="try our new Beef Bibimbowl"
          />
          <ion-icon :icon="search" class="productSearchIcon"></ion-icon>
          <img :src="FilterIcon" alt="Filter Icon" class="productFilterIcon" />
        </div>

        <div class="productFilterButtonPage">
          <ion-button class="productAllFilter">All</ion-button>
          <ion-button class="productBreakfastFilter">Breakfast</ion-button>
          <ion-button class="productChickenFilter">Chiken</ion-button>
          <ion-button class="productSeafoodFilter">Seafood</ion-button>
          <ion-button class="productBeefFilter">Beef</ion-button>
        </div>

        <div class="foodProductPage">
          <div class="foodProductGrid">
            <button class="foodProductCategory" @click="goToYourOrder">
              <div class="foodProductBestSeller">
                <img
                  :src="SteakFriesVeggies"
                  alt="Steak Fries Veggies"
                  class="productSteakFriesVeggies"
                />
              </div>
              <p class="productFoodLabel">Steak Fries Veggies</p>
              <p class="productCategory">Meat</p>
              <p class="productPrice">P 175</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
            <button class="foodProductCategory">
              <div class="foodProductBestSeller">
                <img
                  :src="ChickenSalad"
                  alt="Chicken Salad"
                  class="productChickenSalad"
                />
              </div>
              <p class="productChickenLabel">Chicken Salad</p>
              <p class="productChickenCategory">Chicken</p>
              <p class="productPrice">P 172</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
            <button class="foodProductCategory">
              <div class="foodProductBestSeller">
                <img
                  :src="SorvetesPrimavera"
                  alt="Sorvetes Primavera"
                  class="productSorvetesPrimavera"
                />
              </div>
              <p class="productSorvetesPrimaveraLabel">Sorvetes Primavera..</p>
              <p class="productDessertCategory">Dessert</p>
              <p class="productPrice">P 185</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
            <button class="foodProductCategory">
              <div class="foodProductBestSeller">
                <img
                  :src="FriedChicken"
                  alt="Fried Chicken"
                  class="productFriedChicken"
                />
              </div>
              <p class="productFriedChickenLabel">Fried Chicken</p>
              <p class="productFriedChickenCategory">Chicken</p>
              <p class="productPrice">P 175</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
            <button class="foodProductCategory">
              <div class="foodProductBestSeller">
                <img
                  :src="SteakFriesVeggies"
                  alt="Steak Fries Veggies"
                  class="productSteakFriesVeggies"
                />
              </div>
              <p class="productFoodLabel">Steak Fries Veggies</p>
              <p class="productCategory">Meat</p>
              <p class="productPrice">P 175</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
            <button class="foodProductCategory">
              <div class="foodProductBestSeller">
                <img
                  :src="ChickenSalad"
                  alt="Chicken Salad"
                  class="productChickenSalad"
                />
              </div>
              <p class="productChickenLabel">Chicken Salad</p>
              <p class="productChickenCategory">Chicken</p>
              <p class="productPrice">P 172</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
            <button class="foodProductCategory">
              <div class="foodProductBestSeller">
                <img
                  :src="SorvetesPrimavera"
                  alt="Sorvetes Primavera"
                  class="productSorvetesPrimavera"
                />
              </div>
              <p class="productSorvetesPrimaveraLabel">Sorvetes Primavera..</p>
              <p class="productDessertCategory">Dessert</p>
              <p class="productPrice">P 185</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
            <button class="foodProductCategory">
              <div class="foodProductBestSeller">
                <img
                  :src="FriedChicken"
                  alt="Fried Chicken"
                  class="productFriedChicken"
                />
              </div>
              <p class="productFriedChickenLabel">Fried Chicken</p>
              <p class="productFriedChickenCategory">Chicken</p>
              <p class="productPrice">P 175</p>
              <ion-icon :icon="star" class="productStarOne"></ion-icon>
              <ion-icon :icon="star" class="productStarTwo"></ion-icon>
              <ion-icon :icon="star" class="productStarThree"></ion-icon>
              <ion-icon :icon="star" class="productStarFour"></ion-icon>
              <ion-icon :icon="starHalf" class="productHalfStar"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonMenu,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";
import { defineComponent } from "vue";
import "../FastFoodAppStyle/Products.css";
import Menu from "../Images/Menu.png";
import MenuSideBar from "./Menu.vue";
import { menuController } from "@ionic/vue";
import AddToCart from "../Images/productAddToCart.png";
import { search } from "ionicons/icons";
import FilterIcon from "../Images/productFilterIcon.png";
import SteakFriesVeggies from "../Images/SteakFriesVeggies.png";
import ChickenSalad from "../Images/ChickenSalad.png";
import SorvetesPrimavera from "../Images/SorvetesPrimavera.png";
import FriedChicken from "../Images/FriedChicken.png";
import { star, starHalf } from "ionicons/icons";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonMenu,
    IonButton,
    IonIcon,
    MenuSideBar,
    IonMenuButton,
    IonButtons,
  },
  setup() {
    const SideBarMenu = async () => {
      await menuController.open("SideBar");
    };
    const goToYourOrder = async () => {
      window.location.href = "/home-screen/products/your-order";
    };
    return {
      Menu,
      SideBarMenu,
      AddToCart,
      IonSearchbar,
      search,
      FilterIcon,
      SteakFriesVeggies,
      ChickenSalad,
      SorvetesPrimavera,
      FriedChicken,
      star,
      starHalf,
      goToYourOrder,
    };
  },
});
</script>
