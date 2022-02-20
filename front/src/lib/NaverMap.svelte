<script lang="ts">
  import { onMount } from 'svelte';
  import Card from '@smui/card';

  export let style: string = '';

  let map: naver.maps.Map;

  function initMap() {
    const { naver } = window;
    const mapOptions = {
      center: new naver.maps.LatLng(37.5642135, 127.0016985),
      zoom: 12,
    };
    map = new naver.maps.Map('map', mapOptions);
  }

  onMount(() => {
    initMap();
  });
</script>

<svelte:head>
  <script
    lang="javascript"
    src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4frzvj451g&submodules=geocoder"></script>
</svelte:head>

<Card {style}>
  <div id="map" style="width:100%;height:100%;" />
</Card>
