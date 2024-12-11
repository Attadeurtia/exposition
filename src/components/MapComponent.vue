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
        >
          <!-- Pop-up to show when marker is clicked -->
          <l-popup>
            <div>
              {{ point.name }}<br />
              <a :href="point.route" class="popup-link">Voir plus</a>
            </div>
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
        { name: "Folio 28r tiré du Livre d’heures d’Isabelle Stuart", lat: 47.41322, lng: -1.219482, route: '/anne-de-bretagne' },
        { name: "Marguerite de Foix", lat: 47.4135, lng: -1.2190, route: '/Marguerite-de-Foix' },
        { name: "Marguerite De Bretagne", lat: 47.4140, lng: -1.2185, route: '/Marguerite-de-Bretagne' },
        { name: "Jeanne de Flandre", lat: 47.4200, lng: -1.3000, route: '/Jeanne-de-Flandree' },
        { name: "Jeanne-de-Penthievre", lat: 48.4140, lng: -1.3185, route: '/Jeanne-de-Penthievre' },
      ],
    };
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
  
  .popup-link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  