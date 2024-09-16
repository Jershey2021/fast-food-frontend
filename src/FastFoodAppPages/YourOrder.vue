<template>
  <ion-page>
    <header-layout />
    <ion-content id="YourOrderScreen">
      <div>
        <div class="yourOrderPage">
          <button class="yourOrderBackButton" @click="goBack">
            <img
              :src="BackButton"
              alt="Back Button"
              class="yourOrderBackButtonIcon"
            />
          </button>
          <h1 class="yourOrderNameCategory">Meat</h1>
          <img
            :src="AddToCart"
            alt="Add To Cart Icon"
            class="yourOrderAddToCartIcon"
          />
        </div>
        <div class="yourOrderImagePage">
          <div class="yourOrderImageBackground">
            <img
              :src="SteakFriesVeggies"
              alt="Steak Fries Veggies"
              class="yourOrderImage"
            />
          </div>
          <ion-button class="yourOrderLikeButton"
            ><img :src="HeartIcon" alt="Like Button" class="yourOrderHeartIcon"
          /></ion-button>
        </div>
        <div class="yourOrderInformationPage">
          <h1 class="yourOrderFoodName">Steak Fries Veggies</h1>
          <div class="yourOrderRatings">
            <ion-icon :icon="star" class="yourOrderStarOne"></ion-icon>
            <ion-icon :icon="star" class="yourOrderStarTwo"></ion-icon>
            <ion-icon :icon="star" class="yourOrderStarThree"></ion-icon>
            <ion-icon :icon="star" class="yourOrderStarFour"></ion-icon>
            <ion-icon :icon="starHalf" class="yourOrderHalfStar"></ion-icon>
          </div>
          <p class="yourOrderFoodDescription">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus.
            Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur
            ligula.
          </p>
        </div>
        <div class="yourOrderPriceQtyPage">
          <h1 class="yourOrderPrice">P 172</h1>
          <button class="yourOrderRemoveButton"></button>
          <ion-icon
            :icon="removeOutline"
            class="yourOrderRemoveIcon"
          ></ion-icon>
          <p class="yourOrderQty">1</p>
          <button class="yourOrderAddButton"></button>
          <ion-icon :icon="add" class="yourOrderAddIcon"></ion-icon>
        </div>
        <div class="yourOrderBeveragesPage">
          <h1 class="yourOrderBeveragesLabel">Beverages</h1>
          <p class="yourOrderPlaceholderBeverages">Choose Beverages</p>
          <select v-model="selectedBeverage" class="yourOrderBeveragesDropDown">
            <option disabled value="" class="dropdownTxt">Coke</option>
            <option>Mountain Dew</option>
            <option>Orange Juice</option>
          </select>
          <div class="yourOrderBeveragesSize">
            <ion-button class="yourOrderRegular">Regular</ion-button>
            <ion-button class="yourOrderLarge">Large</ion-button>
            <ion-button class="yourOrderExtraLarge">X-Large</ion-button>
          </div>
        </div>
        <div class="yourOrderAddOnsPage">
          <h1 class="yourOrderAddOnsLabel">Add-Ons</h1>
          <div class="yourOrderAddOnsBackground">
            <img
              :src="TomatoSauce"
              alt="Tomato Sauce"
              class="yourAddOnsTomatoSauce"
            />
            <h1 class="yourAddOnsLabel">Tomato Sauce</h1>
            <p class="yourAddOnsCategory">Sauce</p>
            <p class="yourAddOnsPrice">P 49</p>
            <div class="yourAddOnsQtyPage">
              <button class="AddOnsRemoveButton"></button>
              <ion-icon
                :icon="removeOutline"
                class="yourAddOnsRemoveIcon"
              ></ion-icon>
              <p class="yourAddOnsQty">1</p>
              <button class="yourAddOnsAddButton"></button>
              <ion-icon :icon="add" class="yourAddOnsAddIcon"></ion-icon>
              <!-- <button class="yourAddOnsCheckBox">
                <img
                  :src="CheckIcon"
                  alt="Check Icon"
                  class="yourAddOnsCheckIcon"
                />
              </button> -->

              <ion-checkbox class="yourAddOnsCheckBox" checked></ion-checkbox>
            </div>
          </div>
          <div class="yourOrderAddOnsBackgroundTwo">
            <img
              :src="WhiteRice"
              alt="White Rice"
              class="yourAddOnsWhiteRice"
            />
            <h1 class="yourAddOnsLabel">White Rice</h1>
            <p class="yourAddOnsCategory">Rice</p>
            <p class="yourAddOnsPrice">P 25</p>
            <div class="yourAddOnsQtyPage">
              <button class="AddOnsRemoveButton"></button>
              <ion-icon
                :icon="removeOutline"
                class="yourAddOnsRemoveIcon"
              ></ion-icon>
              <p class="yourAddOnsQty">1</p>
              <button class="yourAddOnsAddButton"></button>
              <ion-icon :icon="add" class="yourAddOnsAddIcon"></ion-icon>
              <ion-checkbox class="yourAddOnsCheckBox"></ion-checkbox>
            </div>
          </div>
        </div>
        <div class="AddToBagButton">
          <!-- <button
            id="present-popover"
            class="yourOrderAddToBag"
            @click="presentPopover"
          >
            Add To Bag
          </button>
        </div>
        <ion-popover
          :is-open="showPopover"
          @ionPopoverDidDismiss="showPopover = false"
        >
          <Popover />
        </ion-popover> -->

          <ion-content class="ion-padding">
            <ion-button @click="setOpen(true)" class="yourOrderAddToBag"
              >Add To Bag</ion-button
            >

            <ion-modal :is-open="isOpen">
              <ion-content class="ion-padding">
                <Popover />
              </ion-content>
            </ion-modal>
          </ion-content>
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
  IonMenu,
  IonModal,
} from "@ionic/vue";
import "../FastFoodAppStyle/YourOrder.css";
import { defineComponent } from "vue";
import BackButton from "../Images/yourOrderBackButtonIcon.png";
import AddToCart from "../Images/productAddToCart.png";
import SteakFriesVeggies from "../Images/SteakFriesVeggies.png";
import { star, starHalf } from "ionicons/icons";
import { removeOutline } from "ionicons/icons";
import { add } from "ionicons/icons";
import { ref } from "vue";
import HeartIcon from "../Images/yourOrderHeartIcon.png";
import TomatoSauce from "../Images/yourOrderAddOnsTomatoSauce.png";
import WhiteRice from "../Images/yourOrderAddOnsWhiteRice.png";
import CheckIcon from "../Images/yourAddOnsCheckIcon.png";
import { IonPopover } from "@ionic/vue";
import Popover from "./Popover.vue";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    IonPopover,
    Popover,
    IonMenu,
    IonModal,
  },
  setup() {
    const selectedBeverage = ref("");
    const goBack = async () => {
      window.location.href = "/home-screen/products";
    };
    const goToYourBag = async () => {
      window.location.href = "/home-screen/products/";
    };
    const isOpen = ref(false);

    const setOpen = (open) => {
      isOpen.value = open;
    };

    return {
      BackButton,
      AddToCart,
      SteakFriesVeggies,
      star,
      starHalf,
      removeOutline,
      add,
      selectedBeverage,
      HeartIcon,
      TomatoSauce,
      WhiteRice,
      CheckIcon,
      goBack,
      goToYourBag,
      isOpen,
      setOpen,
    };
  },
});
</script>
