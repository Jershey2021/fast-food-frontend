<template>
  <ion-page>
    <header-layout />
    <ion-content>
      <div>
        <div class="orderSummaryPage">
          <button class="orderSummaryBackButton" @click="goBackToYourOrder">
            <img
              :src="BackButton"
              alt="Back Button"
              class="orderSummaryBackButtonIcon"
            />
          </button>
          <h1 class="orderSummaryLabel">Order Summary</h1>
        </div>
        <div class="orderSummaryAddressPage">
          <ion-item-sliding
            ><ion-item class="personalInformation">
              <div class="orderSummaryContainer">
                <h1 class="orderSummaryName">Chou Tzuyu</h1>
                <p class="orderSummaryPhoneNumber">+63 912 345 6789</p>
                <p class="orderSummaryEmail">chou.tzu-yu@email.com</p>
              </div>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option class="editOption"
                ><img
                  :src="EditIcon"
                  alt="Edit Icon"
                  class="orderSummaryEditIcon"
                />
              </ion-item-option>
              <ion-item-option class="deleteOption">
                <img
                  :src="DeleteIcon"
                  alt="Edit Icon"
                  class="orderSummaryEditIcon"
                />
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
          <ion-item-sliding
            ><ion-item class="personalInformation">
              <div class="orderSummaryContainer">
                <h1 class="orderSummaryName">My Home Address</h1>
                <p class="orderSummaryPhoneNumber">
                  No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234
                  Philippines
                </p>
                <label class="radio-button">
                  <input type="radio" name="address" value="option1" />
                  <span class="radio"></span>
                </label>
              </div>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option class="editOption"
                ><img
                  :src="EditIcon"
                  alt="Edit Icon"
                  class="orderSummaryEditIcon"
                />
              </ion-item-option>
              <ion-item-option class="deleteOption">
                <img
                  :src="DeleteIcon"
                  alt="Edit Icon"
                  class="orderSummaryEditIcon"
                />
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
          <ion-item-sliding
            ><ion-item class="personalInformation">
              <div class="orderSummaryContainer">
                <h1 class="orderSummaryName">Work/Office</h1>
                <p class="orderSummaryPhoneNumber">
                  3rd flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines
                </p>
                <label class="radio-button">
                  <input type="radio" name="address" value="option2" />
                  <span class="radio"></span>
                </label>
              </div>
            </ion-item>

            <ion-item-options side="end">
              <ion-item-option class="editOption"
                ><img
                  :src="EditIcon"
                  alt="Edit Icon"
                  class="orderSummaryEditIcon"
                />
              </ion-item-option>
              <ion-item-option class="deleteOption">
                <img
                  :src="DeleteIcon"
                  alt="Edit Icon"
                  class="orderSummaryEditIcon"
                />
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </div>
        <div class="orderSummaryThreeDotSetting">
          <img :src="ThreeDot" alt="One Dot" class="orderSummaryOneDot" />
          <img :src="ThreeDot" alt="Two Dot" class="orderSummaryTwoDot" />
          <img :src="ThreeDot" alt="Three Dot" class="orderSummaryThreeDot" />
        </div>
        <div class="orderSummaryThreeDotSettingTwo">
          <img :src="ThreeDot" alt="One Dot" class="orderSummaryOneDot" />
          <img :src="ThreeDot" alt="Two Dot" class="orderSummaryTwoDot" />
          <img :src="ThreeDot" alt="Three Dot" class="orderSummaryThreeDot" />
        </div>
        <div class="orderSummaryThreeDotSettingThree">
          <img :src="ThreeDot" alt="One Dot" class="orderSummaryOneDot" />
          <img :src="ThreeDot" alt="Two Dot" class="orderSummaryTwoDot" />
          <img :src="ThreeDot" alt="Three Dot" class="orderSummaryThreeDot" />
        </div>

        <div class="orderSummaryFinalOrder">
          <h1 class="orderSummaryOrderLabel">Orders</h1>
          <div class="orderSummaryFinalOrderContainer">
            <img
              :src="SteakFriesVeggies"
              alt="Steak Fries Veggies"
              class="orderSummarySteakFriesVeggies"
            />
            <h1 class="orderSummaryFoodLabel">Steak Fries Veggies</h1>
            <p class="orderSummarySauceQty">1x Tomato Sauce</p>
            <p class="orderSummaryBeveragesQty">1x Regular Coke</p>
            <p class="orderSummaryFoodQty">1x Fried Chicken</p>
          </div>
          <div class="orderSummaryThreeDotSettingFour">
            <img
              :src="ThreeDot"
              alt="One Dot"
              class="orderSummaryOneDotFinalOrder"
            />
            <img
              :src="ThreeDot"
              alt="Two Dot"
              class="orderSummaryTwoDotFinalOrder"
            />
            <img
              :src="ThreeDot"
              alt="Three Dot"
              class="orderSummaryThreeDotFinalOrder"
            />
            <hr />
            <div class="orderSummaryEstimatedPriceQtyPage">
              <h1 class="orderSummaryEstimatedPrice">P 185</h1>

              <button class="orderSummaryRemoveButton"></button>
              <ion-icon
                :icon="removeOutline"
                class="orderSummaryRemoveIcon"
              ></ion-icon>
              <p class="orderSummaryQty">1</p>
              <button class="orderSummaryAddButton"></button>
              <ion-icon :icon="add" class="orderSummaryAddIcon"></ion-icon>
            </div>

            <div class="orderSummaryPaymentPage">
              <h1 class="orderSummaryPaymentOptionLabel">Payment Option</h1>
              <div class="orderSummaryPaymentOptionContainer">
                <h1 class="orderSummaryPaymentType">Cash on Delivery</h1>
                <p class="orderSummaryPaymentLabel">
                  Pay when you recieved the order
                </p>
                <label class="radio-button">
                  <input type="radio" name="payment" value="option1" />
                  <span class="radio cashOnDelivery"></span>
                </label>
              </div>
              <div class="orderSummaryPaymentOptionContainer">
                <h1 class="orderSummaryPaymentType">Loyalty Points</h1>
                <h2 class="orderSummaryLoyaltyPoints">(0 points)</h2>
                <p class="orderSummaryPaymentPointsLabel">
                  Pay using your earned loyalty points
                </p>
                <label class="radio-button">
                  <input type="radio" name="payment" value="option2" />
                  <span class="radio loyaltyButton"></span>
                </label>
              </div>
              <div class="orderSummaryPaymentOptionContainer">
                <img
                  :src="Paypal"
                  alt="Paypal"
                  class="orderSummaryPaypalOption"
                />
                <p class="orderSummaryPaypalLabel">
                  A new tab will open to access your account
                </p>
                <label class="radio-button">
                  <input type="radio" name="payment" value="option3" />
                  <span class="radio paypalButton"></span>
                </label>
              </div>
              <div class="orderSummaryPaymentOptionContainer">
                <img
                  :src="Paynamics"
                  alt="Paynamics"
                  class="orderSummaryPaynamicsOption"
                />
                <p class="orderSummaryPaynamicsLabel">
                  Choose paynamics services available for you
                </p>
                <label class="radio-button">
                  <input type="radio" name="payment" value="option4" />
                  <span class="radio paynamicsButton"></span>
                </label>
              </div>
            </div>
            <div class="orderSummarySubtotalPage">
              <h1 class="orderSummarySubtotalLabel">Subtotal</h1>
              <h2 class="orderSummaryDeliveryChargeLabel">Delivery Charge</h2>
              <p class="orderSummarySubtotalPrice">P 185</p>
              <p class="orderSummaryDeliveryChargePrice">P 59</p>

              <p class="orderSummaryChangeLabel">Change for</p>
              <input
                type="text"
                class="orderSummaryChangeInput"
                placeholder="e.g. 1,000"
              />
            </div>
            <div class="orderSummaryPlaceOrderPage">
              <div class="placeOrderFixed">
                <h1 class="orderSummaryGrandTotalLabel">Grand Total</h1>
                <p class="orderSummaryGrandTotalPrice">P 244</p>
                <button class="orderPlaceOrderButton" @click="goToPlaceOrder">
                  Place Order
                </button>
                <img
                  :src="HomeIndicator"
                  alt="Home Indicator"
                  class="orderSummaryHomeIndicator"
                />
              </div>
            </div>
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
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
} from "@ionic/vue";
import "../FastFoodAppStyle/OrderSummary.css";
import { defineComponent } from "vue";
import BackButton from "../Images/yourOrderBackButtonIcon.png";
import ThreeDot from "../Images/orderSummaryThreeDot.png";
import EditIcon from "../Images/orderSummaryEditIcon.png";
import DeleteIcon from "../Images/orderSummaryDeleteIcon.png";
import SteakFriesVeggies from "../Images/SteakFriesVeggies.png";
import { removeOutline } from "ionicons/icons";
import { add } from "ionicons/icons";
import Paypal from "../Images/orderSummaryPaypal.png";
import Paynamics from "../Images/orderSummaryPaynamics.png";
import HomeIndicator from "../Images/HomeIndicator.png";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonList,
  },
  setup() {
    const goBackToYourOrder = async () => {
      window.location.href = "/home-screen/products/your-order";
    };
    const goToPlaceOrder = async () => {
      window.location.href =
        "/home-screen/products/your-order/popover/order-summary/order-received";
    };
    return {
      BackButton,
      ThreeDot,
      EditIcon,
      DeleteIcon,
      SteakFriesVeggies,
      removeOutline,
      add,
      Paypal,
      Paynamics,
      HomeIndicator,
      goBackToYourOrder,
      goToPlaceOrder,
    };
  },
});
</script>
