<template>
  <div class="map-container">
    <div class="map-wrapper">
      <l-map
        ref="map"
        :zoom="zoom"
        :center="center"
        style="height: 100%; width: 100%"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapComponent",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      center: [47.41322, -1.219482],
      zoom: 10,
    };
  },
};
</script>

<style scoped>
/* Conteneur de la carte centré */
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Utilise la hauteur de la fenêtre */
  width: 100%;
}

/* Taille fixe de la carte */
.map-wrapper {
  height: 600px;
  width: 800px;
}
</style>
