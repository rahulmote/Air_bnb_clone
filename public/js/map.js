  	mapboxgl.accessToken =mapToken ;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12',  //style URL
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
      const marker = new mapboxgl.Marker({color:"red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({offset:25}).setHTML(`<div style="height: 300px; width:auto;"><h4>${listing.title}<br> ${listing.location}</h4><p>Exact Location  will be provided after booking </p> <img src="${listing.image.url}" style="height: 60px; width:100px;"/> </div>`))
        .addTo(map);
