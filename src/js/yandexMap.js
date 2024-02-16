export const initMap = async () => {
  await ymaps3.ready;

  const { YMap, YMapMarker, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    ymaps3;

  const map = new YMap(document.getElementById('map'), {
    location: {
      center: [37.559451, 55.76172],
      zoom: 12,
    },
  });

  const markerEl = document.getElementById('map-marker');
  const marker = new YMapMarker(
    {
      coordinates: [37.614227, 55.767011],
    },
    markerEl
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
  map.addChild(marker);
};
