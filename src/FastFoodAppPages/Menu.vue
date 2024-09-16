<template>
  <ion-page>
    <header-layout />
    <ion-content>
      <div class="menuPage bg-white">
        <div class="userMenu">
          <img :src="UserIcon" alt="User Profile" class="menuUserProfile" />
          <button class="menuToLoyaltyPointsScreen" @click="goToLoyaltyPoints">
            <img :src="Crown" alt="Menu Crown" class="menuCrown" />
          </button>
          <button
            class="menuPointsButton menuPoints"
            @click="goToLoyaltyPoints"
          >
            0 Points
          </button>
          <button class="menuIconForward" @click="goToLoyaltyPoints">
            <ion-icon
              :icon="chevronForwardOutline"
              class="menuForwardIcon"
            ></ion-icon>
          </button>
        </div>
        <div class="menuUserInfo">
          <h1 class="menuUserFullName">Chou Tzuyu</h1>
          <p class="menuUserNumber">+63 912 345 6789</p>
        </div>
        <div class="menuOrderButton">
          <div class="menuButtonGrid">
            <div class="menuButtons">
              <img :src="Logo" slot="start" alt="Home Logo" class="menuIcons" />
              <ion-button class="menuHomeButton menuRouterLink" @click="goHome">
                Home
              </ion-button>
            </div>
            <div class="menuButtons">
              <img
                :src="OrderNow"
                slot="start"
                alt="Order Now"
                class="menuIcons"
              />
              <ion-button
                class="menuHomeButton menuRouterLink"
                @click="goOrderNow"
                >Order Now!
              </ion-button>
            </div>
            <div class="menuButtons">
              <img
                :src="NotificationIcon"
                slot="start"
                alt="Notification Icon"
                class="menuIcons"
              />
              <ion-button class="menuHomeButton menuRouterLink"
                >Notifications
              </ion-button>
              <div class="menuNotificationCircle">
                <p class="menuNotificationNumber">4</p>
              </div>
            </div>
            <div class="menuButtons">
              <img
                :src="StoreLocationIcon"
                slot="start"
                alt="Store Location Icon"
                class="menuIcons"
              />
              <ion-button class="menuHomeButton menuRouterLink">
                Store Locator
              </ion-button>
            </div>
            <div class="menuButtons">
              <img
                :src="FAQIcon"
                slot="start"
                alt="FAQ's Icon"
                class="menuIcons"
              />
              <ion-button class="menuHomeButton menuRouterLink">
                FAQ's
              </ion-button>
            </div>
          </div>
        </div>

        <hr class="menuHrLine" />

        <div class="menuOrderInformation">
          <div class="menuYourOrder">
            <div class="menuYourOrderGrid">
              <div class="menuYourOrderButtons">
                <img
                  :src="MyOrderIcon"
                  slot="start"
                  alt="Home Logo"
                  class="menuYourIcons"
                />
                <ion-button class="menuYourOrderBtn menuRouterLink">
                  My Orders
                </ion-button>
                <div class="menuMyNotificationCircle">
                  <p class="menuMyNotificationNumber">2</p>
                </div>
              </div>
              <div class="menuYourOrderButtons">
                <ion-icon :icon="person" class="menuMyAccountIcons"></ion-icon>
                <ion-button class="menuYourOrderBtn menuRouterLink">
                  My Account
                </ion-button>
              </div>
              <div class="menuYourOrderButtons">
                <img
                  :src="HeartIcon"
                  slot="start"
                  alt="Home Logo"
                  class="menuYourIcons"
                />
                <ion-button class="menuYourOrderBtn menuRouterLink">
                  My Favorites
                </ion-button>
              </div>
              <div class="menuYourOrderButtons">
                <img
                  :src="TrackerIcon"
                  slot="start"
                  alt="Home Logo"
                  class="menuYourIcons"
                />
                <ion-button class="menuYourOrderBtn menuRouterLink">
                  Order Tracker
                </ion-button>
              </div>
              <div class="menuYourOrderButtons">
                <img
                  :src="HistoryIcon"
                  slot="start"
                  alt="Home Logo"
                  class="menuYourIcons"
                />
                <ion-button class="menuYourOrderBtn menuRouterLink">
                  Order History
                </ion-button>
              </div>
            </div>
          </div>
        </div>
        <div class="logoutPage">
          <ion-button class="logOut">Logout</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import "../FastFoodAppStyle/Menu.css";
import UserIcon from "../Images/userIcon.jpeg";
import Crown from "../Images/crown.png";
import { chevronForwardOutline } from "ionicons/icons";
import Logo from "../Images/Logo.png";
import OrderNow from "../Images/menuOrderNow.png";
import NotificationIcon from "../Images/menuNotificationIcon.png";
import StoreLocationIcon from "../Images/menuStoreIcon.png";
import FAQIcon from "../Images/menuFAQIcon.png";
import { person } from "ionicons/icons";
import MyOrderIcon from "../Images/menuMyOrderIcon.png";
import HeartIcon from "../Images/menuHeartIcon.png";
import TrackerIcon from "../Images/menuTrackerIcon.png";
import HistoryIcon from "../Images/menuHistoryIcon.png";

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

    const goOrderNow = async () => {
      window.location.href = "/home-screen/products";
    };

    const goToLoyaltyPoints = async () => {
      window.location.href = "/home-screen/loyalty-points";
    };
    return {
      goToLoyaltyPoints,
      goOrderNow,
      goHome,
      UserIcon,
      Crown,
      chevronForwardOutline,
      Logo,
      OrderNow,
      NotificationIcon,
      StoreLocationIcon,
      FAQIcon,
      person,
      MyOrderIcon,
      HeartIcon,
      TrackerIcon,
      HistoryIcon,
    };
  },
});
</script>
