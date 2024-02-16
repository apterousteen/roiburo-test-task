export const initMap = async () => {
  const initialCoords = [37.614227, 55.767011];

  await ymaps3.ready;

  const { YMap, YMapMarker, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    ymaps3;

  const map = new YMap(document.getElementById('map'), {
    location: {
      center: initialCoords,
      zoom: 12,
    },
  });

  const markerEl = document.getElementById('map-marker');
  const marker = new YMapMarker(
    {
      coordinates: initialCoords,
    },
    markerEl
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
  map.addChild(marker);
};
