<template>
  <ion-header class="bg-white box-shadow-0">
    <ion-toolbar>
      <p class="time text-black">12:12</p>
      <ion-icon :icon="navigateSharp" class="iosLocation"></ion-icon>
      <ion-icon :icon="cellular" class="signal"></ion-icon>
      <ion-icon :icon="wifi" class="wifi"></ion-icon>
      <ion-icon :icon="batteryFull" class="battery"></ion-icon>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonIcon } from "@ionic/vue";
import { navigateSharp } from "ionicons/icons";
import { cellular } from "ionicons/icons";
import { wifi } from "ionicons/icons";
import { batteryFull } from "ionicons/icons";
import "./Header.css";
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonIcon,
  },
  setup() {
    return {
      navigateSharp,
      cellular,
      wifi,
      batteryFull,
    };
  },
};
</script>
