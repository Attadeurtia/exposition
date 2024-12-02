<template>
  <div class="map-container">
    <div class="map-wrapper">
      <l-map
        ref="map"
        :zoom="zoom"
        :center="center"
        style="height: 100%; width: 100%"
      >
        <!-- Tile Layer -->
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>

        <!-- Markers -->
        <l-marker
          v-for="(point, index) in points"
          :key="index"
          :lat-lng="[point.lat, point.lng]"
          @click="onMarkerClick(point)"
        >
          <!-- Pop-up to show when marker is clicked -->
          <l-popup>
            <div>{{ point.name }}</div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapComponent",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      center: [47.41322, -1.219482],
      zoom: 10,
      // Array of points with coordinates, names, and routes
      points: [
        { name: "Anne de Bretagne", lat: 47.41322, lng: -1.219482, route: '/anne-de-bretagne' },
        { name: "Catherine de Médicis", lat: 47.4135, lng: -1.2190, route: '/catherine-de-medicis' },
        { name: "Jeanne de Flandre", lat: 47.4140, lng: -1.2185, route: '/jeanne-de-Flandre' },
      ],
    };
  },
  methods: {
    onMarkerClick(point) {
      this.$router.push(point.route); // Redirige vers la route de la duchesse
    },
  },
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.map-wrapper {
  height: 600px;
  width: 800px;
}
</style>
