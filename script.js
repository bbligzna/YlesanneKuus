(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let a = "EL";

            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            if (h > 12) {
                h -= 12;
                a = "PL"
            }


            c.innerHTML = h + ":" + m + ":" + s + " " + a;
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();

        let linn = document.getElementById("linn");
        let kingitus = document.getElementById("v1");
        let kontakt = document.getElementById("v2");
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
            
        } else {

            if (linn.value === "tln") {
                if (kingitus.checked) {
                    if (kontakt.checked) {
                        e.innerHTML = "6.00&euro;";
                    }
                    else {
                        e.innerHTML = "5.00&euro;";
                    }
                }
                else if (kontakt.checked) {
                    if (kingitus.checked) {
                        e.innerHTML = "6.00&euro;";
                    }
                    else {
                        e.innerHTML = "1.00&euro;";
                    }
                }
                else {
                    e.innerHTML = "0.00&euro;";
                }
            }

            else if (linn.value === "trt") {
                if (kingitus.checked) {
                    if (kontakt.checked) {
                        e.innerHTML = "8.50&euro;";
                    }
                    else {
                        e.innerHTML = "7.50&euro;";
                    }
                }
                        
                else if (kontakt.checked) {
                    if (kingitus.checked) {
                        e.innerHTML = "8.50&euro;";
                    }
                    else {
                        e.innerHTML = "3.50&euro;";
                    }  
                }
                else {
                    e.innerHTML = "2.50 &euro;";
                }
            }
                

            else if (linn.value === "nrv") {
                if (kingitus.checked) {
                    if (kontakt.checked) {
                        e.innerHTML = "8.50&euro;";
                    }
                    else {
                        e.innerHTML = "7.50&euro;";
                    }
                }
                        
                else if (kontakt.checked) {
                    if (kingitus.checked) {
                        e.innerHTML = "8.50&euro;";
                    }
                    else {
                        e.innerHTML = "3.50&euro;";
                    }  
                }
                else {
                    e.innerHTML = "2.50 &euro;";
                }
            }

            else if (linn.value === "prn") {
                if (kingitus.checked) {
                    if (kontakt.checked) {
                        e.innerHTML = "9.00&euro;";
                    }
                    else {
                        e.innerHTML = "8.00&euro;";
                    }
                }
                        
                else if (kontakt.checked) {
                    if (kingitus.checked) {
                        e.innerHTML = "9.00&euro;";
                    }
                    else {
                        e.innerHTML = "4.00&euro;";
                    }  
                }
                else {
                    e.innerHTML = "3.00&euro;";
                }
            }
            
            // e.innerHTML = "x,xx &euro;";
            
        }
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AoFgOuyxOSMT4eacXHjBMvonn5GgP2mm8h_EwxLtRimA1UVodZGI-9ZXLwOr5eAD";

let map;

function GetMap() {
    
    "use strict";

    let kadrina= new Microsoft.Maps.Location(
            59.3399658,
            26.1393604
        );

    let centerPoint = new Microsoft.Maps.Location(
            59.03773,
            26.47156
    );

    let tartu = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 7,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true,
    });
    
    let pushpin1 = new Microsoft.Maps.Pushpin(tartu, {
            title: 'Tartu Ülikool',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });

    let pushpin2 = new Microsoft.Maps.Pushpin(kadrina, {
            title: 'Kadrina Keskkool',
            //subTitle: 'Väga tore koht',
            //text: 'Kadrina KK'
    });

    var infobox = new Microsoft.Maps.Infobox(pushpin1, { title: 'Tartu Ülikool', description: 'Hea Koht', visible: false });
    infobox.setMap(map);
    Microsoft.Maps.Events.addHandler(pushpin1, 'click', function () {
        infobox.setOptions({ visible: true });
    });

    var infobox2 = new Microsoft.Maps.Infobox(pushpin2, { title: 'Kadrina Keskool', description: 'Tore Koht', visible: false });
    infobox2.setMap(map);
    Microsoft.Maps.Events.addHandler(pushpin2, 'click', function () {
        infobox2.setOptions({ visible: true });
    });

    map.entities.push(pushpin1);
    map.entities.push(pushpin2);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

