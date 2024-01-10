console.log("Document ready!");

var map = L.map('map').setView([41.05451722693905, 13.211056067302643], 2,5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 

var marker = L.marker([42.8141397454188, -76.80929332776664],
    {alt:"Mormoni, Fayette, Stati Uniti"}).addTo(map).bindPopup("<b>Mormoni</b><br>Fayette, New York, Stati Uniti");

var marker = L.marker([34.05212420088591, -118.25245573522596],
    {alt:"Scientology, Los Angeles, Stati Uniti"}).addTo(map).bindPopup("<b>Scientology</b><br>Los Angeles, California, Stati Uniti");

var marker = L.marker([37.77097037105978, -122.41975172507638],
    {alt: "Famiglia Manson, San Francisco, Stati Uniti"}).addTo(map).bindPopup("<b>Famiglia Manson</b><br>Contea di San Francisco, California, Stati Uniti");

var marker = L.marker([39.7653976985846, -86.15799489732552],
    {alt: "Tempio del Popolo, Indianapolis, Stati Uniti"}).addTo(map).bindPopup("<b>Tempio del Popolo</b><br>Indianapolis, Indiana, Stati Uniti");

var marker = L.marker([31.55497874545613, -97.14777185559285],
    {alt: "Davidiani, Waco, Stati Uniti"}).addTo(map).bindPopup("<b>Davidiani</b><br>Waco, Texas, Stati Uniti");

var marker = L.marker([46.202565282638815, 6.142694529187987],
    {alt: "Ordine del Tempio Solare, Ginevra, Svizzera"}).addTo(map).bindPopup("<b>Ordine del Tempio Solare</b><br>Ginevra, Svizzera");

var marker = L.marker([33.018202159046766, -117.20468097083015],
    {alt:"Heaven's Gate, Rancho Santa Fe, Stati Uniti"}).addTo(map).bindPopup("<b>Heaven's Gate</b><br>Rancho Santa Fe, California, Stati Uniti");

var marker = L.marker([35.68029662399281, 139.76482280723897],
    {alt:"Aum Shinrikyō, Tokyo, Giappone"}).addTo(map).bindPopup("<b>Aum Shinrikyō</b><br>Tokyo, Giappone");

var marker = L.marker([45.42883075886282, 7.753877351749354],
    {alt:"Damanhur, Vidracco, Italia"}).addTo(map).bindPopup("<b>Damanhur</b><br>Vidracco, Piemonte, Italia");

var marker = L.marker([42.64937131267898, -73.75232034710994],
    {alt:"NXIVM, Albany, Stati Uniti"}).addTo(map).bindPopup("<b>NXIVM</b><br>Albany, New York, Stati Uniti");

var marker = L.marker([33.65710818780953, -117.99893179641285],
    {alt:"I Bambini di Dio, Huntington Beach, Stati Uniti"}).addTo(map).bindPopup("<b>I Bambini di Dio</b><br>Huntington Beach, California, Stati Uniti");

var marker = L.marker([44.91104501928588, -120.72190390861083],
    {alt:"Movimento Rajneesh, Antilope, Stati Uniti"}).addTo(map).bindPopup("<b>Movimento Rajneesh</b><br>Antilope, Oregon, Stati Uniti");
