// ==========================================
// 1. GENERATE 2D MODELS
// ==========================================
function generateVehicleTexture(type) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (type === 'car') {
        // Dimensiones amplias y seguras basadas en tu script original
        canvas.width = 400; canvas.height = 400;
        const cx = 200, cy = 200;
        
        ctx.save();
        ctx.translate(cx, cy);
        // Rotamos para alinear el frente del dibujo con la dirección de avance del motor
        ctx.rotate(-Math.PI / 2); 

        // Sombra suave proyectada (Con elipse nativa estándar)
        ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
        ctx.beginPath(); ctx.ellipse(0, 0, 95, 43, 0, 0, Math.PI * 2); ctx.fill();

        // Carrocería Principal (Roja)
        ctx.fillStyle = "#e11d48"; ctx.strokeStyle = "#1e293b"; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-90, -36);
        ctx.quadraticCurveTo(-60, -40, 0, -40); 
        ctx.quadraticCurveTo(60, -38, 85, -30); 
        ctx.quadraticCurveTo(95, 0, 85, 30);     
        ctx.quadraticCurveTo(60, 38, 0, 40);     
        ctx.quadraticCurveTo(-60, 40, -90, 36); 
        ctx.quadraticCurveTo(-95, 0, -90, -36);     
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // Espejos retrovisores laterales
        ctx.fillStyle = "#1e293b";
        ctx.beginPath(); ctx.ellipse(30, -43, 6, 12, Math.PI/4, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(30, +43, 6, 12, -Math.PI/4, 0, Math.PI*2); ctx.fill();

        // Parabrisas Frontal (Oscuro)
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(25, -30); ctx.lineTo(45, -26);
        ctx.quadraticCurveTo(55, 0, 45, 26);
        ctx.lineTo(25, 20); ctx.quadraticCurveTo(32, 0, 25, -30);
        ctx.closePath(); ctx.fill();

        // Techo (Polígono plano sólido súper-compatible)
        ctx.fillStyle = "#b91c1c";
        ctx.fillRect(-35, -28, 65, 56);

        // Luneta Trasera
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(-45, -26); ctx.lineTo(-65, -24);
        ctx.quadraticCurveTo(-70, 0, -65, 24);
        ctx.lineTo(-45, 24); ctx.quadraticCurveTo(-40, 0, -45, -26);
        ctx.closePath(); ctx.fill();

        // Cristales Laterales
        ctx.fillRect(-30, -34, 25, 4); ctx.fillRect(2, -34, 20, 4);
        ctx.fillRect(-30, 30, 25, 4); ctx.fillRect(2, 30, 20, 4);

        // Luces Delanteras (Blancas/Amarillentas)
        ctx.fillStyle = "#fffbeb";
        ctx.beginPath(); ctx.ellipse(80, -28, 8, 4, Math.PI/6, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(80, 28, 8, 4, -Math.PI/6, 0, Math.PI*2); ctx.fill();
        
        ctx.restore();
    } 
    else if (type === 'bus') {
        // Dimensiones cuadradas balanceadas para evitar desbordes al rotar el chasis largo
        canvas.width = 600; canvas.height = 600;
        const cx = 300, cy = 300;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 2); 

        // Sombra
        ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
        ctx.fillRect(-245, -44, 490, 88);

        // Carrocería Principal (Azul brillante - Bordes curvos vía curvas de arco manuales)
        ctx.fillStyle = "#2563eb"; ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-230, -40);
        ctx.lineTo(230, -40);
        ctx.arcTo(240, -40, 240, 0, 12);
        ctx.arcTo(240, 40, 230, 40, 12);
        ctx.lineTo(-230, 40);
        ctx.arcTo(-240, 40, -240, 0, 12);
        ctx.arcTo(-240, -40, -230, -40, 12);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // Techo - Líneas de estructura longitudinales
        ctx.strokeStyle = "#1d4ed8"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(-160, -24); ctx.lineTo(180, -24); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-160, 24); ctx.lineTo(180, 24); ctx.stroke();

        // Escotilla central de techo
        ctx.strokeStyle = "#1d4ed8"; ctx.strokeRect(-15, -15, 45, 30);

        // Parabrisas Frontal Delantero Curvado
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(215, -36);
        ctx.quadraticCurveTo(235, 0, 215, 36);
        ctx.lineTo(232, 34);
        ctx.quadraticCurveTo(240, 0, 232, -34);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // Espejos retrovisores prominentes hacia adelante
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(225, -47, 8, 8); ctx.fillRect(225, 39, 8, 8);

        // Rejillas de ventilación circulares traseras (4 cápsulas negras alineadas)
        ctx.fillStyle = "#0f172a";
        for (let i = 0; i < 4; i++) {
            ctx.beginPath(); ctx.arc(-100 - (i * 18), 0, 5, 0, Math.PI * 2); ctx.fill();
        }

        // Cristales o molduras laterales superiores
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(-200, -40, 380, 2);
        ctx.fillRect(-200, 38, 380, 2);
        
        ctx.restore();
    } 
    else if (type === 'plane') {
        canvas.width = 600; canvas.height = 600;
        const cx = 300, cy = 300;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 2); 

        // Sombra proyectada desenfocada (Simula altura)
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        ctx.save(); ctx.translate(15, 15);
        ctx.beginPath(); ctx.ellipse(20, 0, 180, 18, 0, 0, Math.PI * 2); 
        ctx.moveTo(-30, 0); ctx.lineTo(-130, -140); ctx.lineTo(-70, -140); 
        ctx.moveTo(-30, 0); ctx.lineTo(-130, 140); ctx.lineTo(-70, 140); 
        ctx.fill(); ctx.restore();

        // 1. ALAS PRINCIPALES EN FLECHA (Gris claro con bordes limpios)
        ctx.fillStyle = "#e2e8f0"; ctx.strokeStyle = "#475569"; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(40, -16);
        ctx.lineTo(-110, -190); 
        ctx.lineTo(-70, -190);  
        ctx.lineTo(-50, -20);   
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(40, 16);
        ctx.lineTo(-110, 190); 
        ctx.lineTo(-70, 190);  
        ctx.lineTo(-50, 20);   
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // Winglets Azules en las puntas de las alas
        ctx.fillStyle = "#2563eb";
        ctx.beginPath(); ctx.moveTo(-110, -190); ctx.lineTo(-95, -195); ctx.lineTo(-70, -190); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-110, 190); ctx.lineTo(-95, 195); ctx.lineTo(-70, 190); ctx.closePath(); ctx.fill();

        // 2. MOTORES BAJO LAS ALAS (Cilíndricos, Azul y Blanco)
        const drawEngine = (ex, ey) => {
            ctx.fillStyle = "#2563eb"; ctx.fillRect(ex - 25, ey - 12, 50, 24); 
            ctx.fillStyle = "#1e293b"; ctx.beginPath(); ctx.ellipse(ex + 25, ey, 4, 12, 0, 0, Math.PI*2); ctx.fill(); 
            ctx.strokeStyle = "#475569"; ctx.strokeRect(ex - 25, ey - 12, 50, 24);
        };
        drawEngine(-5, -75);
        drawEngine(-5, 75);

        // 3. ESTABILIZADORES TRASEROS (Cola)
        ctx.fillStyle = "#e2e8f0";
        ctx.beginPath(); ctx.moveTo(-150, -12); ctx.lineTo(-210, -70); ctx.lineTo(-190, -70); ctx.lineTo(-170, -12); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-150, 12); ctx.lineTo(-210, 70); ctx.lineTo(-190, 70); ctx.lineTo(-170, 12); ctx.closePath(); ctx.fill(); ctx.stroke();

        // Bordes azules en estabilizadores traseros
        ctx.fillStyle = "#2563eb";
        ctx.beginPath(); ctx.moveTo(-210, -70); ctx.lineTo(-190, -70); ctx.lineTo(-175, -40); ctx.closePath(); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-210, 70); ctx.lineTo(-190, 70); ctx.lineTo(-175, 40); ctx.closePath(); ctx.fill();

        // 4. FUSELAJE CENTRAL (Cuerpo cilíndrico estilizado blanco/gris limpio)
        ctx.fillStyle = "#f8fafc";
        ctx.beginPath();
        ctx.moveTo(-210, -14);
        ctx.lineTo(120, -18);
        ctx.quadraticCurveTo(210, 0, 120, 18); 
        ctx.lineTo(-210, 14);
        ctx.quadraticCurveTo(-230, 0, -210, -14); 
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // Parabrisas de la cabina (Ventanas oscuras de pilotos)
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(135, -12); ctx.quadraticCurveTo(155, 0, 135, 12); ctx.lineTo(125, 10); ctx.quadraticCurveTo(142, 0, 125, -10);
        ctx.closePath(); ctx.fill();

        // Detalle de cresta dorsal estabilizadora central (Línea azul trasera)
        ctx.fillStyle = "#2563eb";
        ctx.beginPath(); ctx.ellipse(-160, 0, 25, 4, 0, 0, Math.PI*2); ctx.fill();
        
        ctx.restore();
    }
    return canvas.toDataURL("image/png");
}

const textures = { car: generateVehicleTexture('car'), bus: generateVehicleTexture('bus'), plane: generateVehicleTexture('plane') };
// ==========================================
// 2. STATE & SETTINGS
// ==========================================
let state = {
    lat: -33.0425, lng: -71.3733, alt: 0,
    speed: 0, heading: 0, throttle: 0, pitch: 0, roll: 0,
    vehicle: 'car', speedUnit: 'KPH', headUp: false,
    destLat: null, destLng: null
};

const settings = {
    collision: false, debugCollision: false, renderMode: '3D', tilt: 0, 
    vehicleScale: 1.0, mapZoom: 18, steeringMode: 'arrows', cameraZoom: 1.0,
    steeringSensitivity: 1.0 // Sensibilidad de dirección por defecto
};

// Dimensiones reales de las hitboxes en metros (largo x ancho)
const VEHICLE_DIMS = {
    car: { length: 4.5, width: 2.0 },
    bus: { length: 12.0, width: 2.5 },
    plane: { length: 15.0, width: 12.0 } // Preventivo, aunque el avión no colisiona con calles
};

// Caché y control de streaming para la descarga de calles por cuadrícula (chunks)
const fetchedChunks = new Set();
let isFetchingRoads = false;

const keys = { w:false, a:false, s:false, d:false, q:false, e:false };
window.addEventListener('keydown', e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = true; });
window.addEventListener('keyup', e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = false; });

const dom = {
    speedVal: document.getElementById('speed-val'), coordInfo: document.getElementById('coord-info'),
    altInfo: document.getElementById('alt-info'), gpsDist: document.getElementById('gps-dist'),
    gpsArrow: document.getElementById('gps-arrow'), mapRotator: document.getElementById('map-rotator'),
    mapSubpixel: document.getElementById('map-subpixel'), graphic: document.getElementById('vehicle-graphic'),
    cameraPerspective: document.getElementById('camera-perspective')
};

// ==========================================
// 3. MAP INIT & GPS SYSTEM
// ==========================================
const map = L.map('map', {
    zoomControl: false, dragging: false, scrollWheelZoom: false, touchZoom: false,
    doubleClickZoom: false, keyboard: false, zoomSnap: 0, zoomAnimation: false
}).setView([state.lat, state.lng], settings.mapZoom);

const satLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 22 }).addTo(map);
const labelsLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', { maxZoom: 22 });
document.getElementById('map-layer-select').addEventListener('change', e => e.target.value === 'hybrid' ? labelsLayer.addTo(map) : map.removeLayer(labelsLayer));

// Navigation Elements
let planeRouteLine = L.polyline([], {color: '#22c55e', weight: 6, opacity: 0.9}).addTo(map);
let routingControl = null;

let baseLat = state.lat, baseLng = state.lng;
let camHeading = 0;

// ==========================================
// 4. OVERPASS COLLISION & DEBUG LAYER (Turf.js corridors)
// ==========================================

// Anchos de vía en metros según clasificación de OpenStreetMap
const ROAD_WIDTHS = {
    'motorway': 20,
    'trunk': 18,
    'primary': 14,
    'secondary': 10,
    'tertiary': 8,
    'residential': 6,
    'service': 4,
    'unclassified': 6,
    'default': 6
};

let drivableZonePolygon = null; // Polígono fusionado de todas las vías transitables
let debugCollisionLayer = null;

const yieldToMain = () => new Promise(resolve => setTimeout(resolve, 0));

async function fetchRoads() {
    if(!settings.collision || isFetchingRoads) return;

    // Sistema de cuadrícula para caché (chunks de aprox. 500-600m)
    const chunkSize = 0.005;
    const chunkX = Math.round(state.lng / chunkSize);
    const chunkY = Math.round(state.lat / chunkSize);
    const chunkId = `${chunkX},${chunkY}`;

    if(fetchedChunks.has(chunkId)) return; // Chunk ya descargado

    isFetchingRoads = true;
    fetchedChunks.add(chunkId);

    const overpassQuery = `
        [out:json];
        way(around:600, ${state.lat}, ${state.lng})["highway"~"motorway|trunk|primary|secondary|tertiary|unclassified|residential|service"];
        out geom;
    `;

    try {
        const res = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`);
        const data = await res.json();

        let newPolygons = [];

        // 1. Procesar geometrías sin bloquear el hilo principal (yielding)
        for (let i = 0; i < data.elements.length; i++) {
            let element = data.elements[i];
            if (element.type === 'way' && element.geometry) {
                let coords = element.geometry.map(g => [g.lon, g.lat]);
                if (coords.length > 1) {
                    try {
                        let line = turf.lineString(coords);
                        let roadType = (element.tags && element.tags.highway) || 'default';
                        let widthInMeters = ROAD_WIDTHS[roadType] || ROAD_WIDTHS['default'];
                        let radiusInKm = (widthInMeters / 2) / 1000;

                        let buffered = turf.buffer(line, radiusInKm, {units: 'kilometers'});
                        if (buffered) newPolygons.push(buffered);
                    } catch (err) { /* Geometría inválida, se omite esta vía */ }
                }
            }
            // Evitar congelamientos al crear buffers
            if (i % 50 === 0) await yieldToMain();
        }

        // 2. Unir los nuevos polígonos del chunk actual de forma progresiva
        if (newPolygons.length > 0) {
            let combinedNewChunk = newPolygons[0];
            for (let i = 1; i < newPolygons.length; i++) {
                try {
                    let result = turf.union(combinedNewChunk, newPolygons[i]);
                    if (result) combinedNewChunk = result;
                } catch (err) { /* Si la unión falla en esta pieza, se conserva lo ya fusionado */ }
                // Operación pesada: ceder hilo cada 20 uniones
                if (i % 20 === 0) await yieldToMain();
            }

            // 3. Fusionar el nuevo chunk con el mapa global
            if (drivableZonePolygon) {
                try {
                    let result = turf.union(drivableZonePolygon, combinedNewChunk);
                    if (result) drivableZonePolygon = result;
                } catch (err) { /* Mantener el polígono global previo si la unión falla */ }
            } else {
                drivableZonePolygon = combinedNewChunk;
            }

            drawDebugCollisions();
        }
    } catch(e) {
        console.warn("Error fetching roads en streaming.", e);
        fetchedChunks.delete(chunkId); // Permitir reintento si falla
    }

    isFetchingRoads = false;
}

function drawDebugCollisions() {
    if (debugCollisionLayer) map.removeLayer(debugCollisionLayer);
    if (settings.debugCollision && settings.collision && drivableZonePolygon) {
        debugCollisionLayer = L.geoJSON(drivableZonePolygon, {
            style: { color: '#ff0000', weight: 1, fillColor: '#ff0000', fillOpacity: 0.0 }
        }).addTo(map);
    }
}

function checkCollision() {
    if (!settings.collision || state.vehicle === 'plane' || !drivableZonePolygon) return false;

    try {
        // 1. Obtener dimensiones dinámicas considerando el slider 'Vehicle Size'
        const dims = VEHICLE_DIMS[state.vehicle] || VEHICLE_DIMS['car'];
        const length = dims.length * settings.vehicleScale;
        const width = dims.width * settings.vehicleScale;

        // 2. Distancia desde el centro hasta cualquier esquina (hipotenusa) en km para Turf
        const diagDistKm = Math.hypot(length / 2, width / 2) / 1000;

        // 3. Ángulo interior desde el centro hacia la esquina delantera derecha
        const angleRad = Math.atan2(width, length);
        const angleDeg = angleRad * (180 / Math.PI);

        // 4. Rumbos (bearings) de las 4 esquinas según la rotación actual del vehículo
        const h = state.heading;
        const cornerAngles = [
            h + angleDeg,         // Delantera Derecha
            h - angleDeg,         // Delantera Izquierda
            h + 180 - angleDeg,   // Trasera Derecha
            h + 180 + angleDeg    // Trasera Izquierda
        ];

        const centerPoint = turf.point([state.lng, state.lat]);
        const pointsToCheck = [centerPoint];

        cornerAngles.forEach(ang => {
            pointsToCheck.push(turf.destination(centerPoint, diagDistKm, ang));
        });

        // 5. Si ALGÚN punto (centro o esquinas) está fuera de la carretera, hay colisión
        for (let pt of pointsToCheck) {
            if (!turf.booleanPointInPolygon(pt, drivableZonePolygon)) {
                return true;
            }
        }
        return false;
    } catch (err) {
        return false;
    }
}

// ==========================================
// 5. UI CONTROLS & GPS LOGIC
// ==========================================
function toggleUiTop() {
    const panel = document.getElementById('ui-top');
    const btn = document.getElementById('btn-minimize');
    panel.classList.toggle('collapsed');
    if (panel.classList.contains('collapsed')) {
        btn.innerText = '➕';
        btn.setAttribute('aria-label', 'Expandir panel');
        btn.style.background = 'var(--accent)';
    } else {
        btn.innerText = '➖';
        btn.setAttribute('aria-label', 'Minimizar panel');
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
    }
}

function toggleSettings() { let m = document.getElementById('settings-modal'); m.style.display = m.style.display === 'none' ? 'flex' : 'none'; }
function toggleCollision(val) { settings.collision = val; if(val) fetchRoads(); else { drivableZonePolygon = null; fetchedChunks.clear(); drawDebugCollisions(); } }
function toggleDebugCollision(val) { settings.debugCollision = val; drawDebugCollisions(); }

function setRenderMode(mode) {
    settings.renderMode = mode;
    document.getElementById('btn-mode-3d').classList.toggle('active', mode === '3D');
    document.getElementById('btn-mode-2d').classList.toggle('active', mode === '2D');
    let tiltSlider = document.getElementById('set-cam-tilt');
    if (mode === '2D') {
        document.body.classList.remove('is-3d');
        tiltSlider.disabled = true;
        document.getElementById('camera-tilt').style.transform = `rotateX(0deg)`;
    } else {
        document.body.classList.add('is-3d');
        tiltSlider.disabled = false;
        document.getElementById('camera-tilt').style.transform = `rotateX(${settings.tilt}deg)`;
    }
}

function updateCameraTilt(val) {
    settings.tilt = val; document.getElementById('val-cam-tilt').innerText = val;
    if(settings.renderMode === '3D') document.getElementById('camera-tilt').style.transform = `rotateX(${val}deg)`;
}

function updateVehicleScale(val) { settings.vehicleScale = val; document.getElementById('val-veh-size').innerText = val; }
function updateMapZoom(val) { settings.mapZoom = val; document.getElementById('val-map-zoom').innerText = val; map.setZoom(settings.mapZoom); }
function updateCameraZoom(val) { settings.cameraZoom = parseFloat(val); document.getElementById('val-cam-zoom').innerText = val; }

function updateVehicleVisuals() {
    let imgW = state.vehicle === 'car' ? 100 : state.vehicle === 'bus' ? 140 : 180;
    dom.graphic.innerHTML = `<img src="${textures[state.vehicle]}" style="width: ${imgW}px; height: auto; display: block;">`;
    
    if (state.vehicle === 'plane') {
        document.getElementById('mobile-controls-ground').style.display = 'none';
        document.getElementById('mobile-controls-plane').style.display = 'block';
        dom.altInfo.style.display = 'block';
        if(state.destLat) drawNavigationRoute();
    } else {
        document.getElementById('mobile-controls-plane').style.display = 'none';
        document.getElementById('mobile-controls-ground').style.display = 'block';
        dom.altInfo.style.display = 'none';
        if(state.destLat) drawNavigationRoute();
    }
}
document.getElementById('vehicle-select').addEventListener('change', e => {
    state.vehicle = e.target.value; state.speed = 0; state.throttle = 0; state.alt = 0;
    updateVehicleVisuals();
});
updateVehicleVisuals();

function updateSteeringMode(mode) {
    settings.steeringMode = mode;
    document.getElementById('d-pad-container').style.display = mode === 'arrows' ? 'flex' : 'none';
    document.getElementById('joystick-container').style.display = mode === 'joystick' ? 'block' : 'none';
}

function updateSteeringSensitivity(val) {
    settings.steeringSensitivity = parseFloat(val);
    document.getElementById('val-steering-sens').innerText = parseFloat(val).toFixed(1);
}

function toggleOrientation() {
    state.headUp = !state.headUp;
    const btn = document.getElementById('btn-orientation');
    btn.innerText = state.headUp ? '🧭 Auto Up' : '🧭 North Up';
    btn.classList.toggle('active', state.headUp);
}

function toggleGPS() { let g = document.getElementById('gps-window'); g.style.display = g.style.display === 'none' || g.style.display === '' ? 'flex' : 'none'; }
function setSpeedUnit(u) { state.speedUnit = u; document.getElementById('speed-unit-text').innerText = u; document.querySelectorAll('.unit-btn').forEach(b => b.classList.toggle('active', b.innerText === u)); }

async function searchLocation() {
    const q = document.getElementById('gps-search').value; if(!q) return;
    try {
        let res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`);
        let data = await res.json();
        if(data && data.length>0) setDestination(parseFloat(data[0].lat), parseFloat(data[0].lon));
    } catch (e) {}
}

function setDestination(lat, lng) {
    state.destLat = lat; state.destLng = lng;
    document.getElementById('gps-nav-info').style.display = 'flex';
    drawNavigationRoute();
}

function drawNavigationRoute() {
    if (!state.destLat) return;
    if (routingControl) { map.removeControl(routingControl); routingControl = null; }
    planeRouteLine.setLatLngs([]);

    if (state.vehicle === 'plane') {
        planeRouteLine.setLatLngs([[state.lat, state.lng], [state.destLat, state.destLng]]);
    } else {
        routingControl = L.Routing.control({
            waypoints: [L.latLng(state.lat, state.lng), L.latLng(state.destLat, state.destLng)],
            router: L.Routing.osrmv1({ profile: 'driving' }),
            lineOptions: { styles: [{color: '#2563eb', weight: 8, opacity: 0.8}] },
            createMarker: function() { return null; },
            show: false, addWaypoints: false, routeWhileDragging: false
        }).addTo(map);
    }
}

function cancelNavigation() { 
    state.destLat = null; state.destLng = null; 
    planeRouteLine.setLatLngs([]); 
    if(routingControl) { map.removeControl(routingControl); routingControl = null; }
    document.getElementById('gps-nav-info').style.display = 'none'; 
}

function teleportToDest() { 
    if(state.destLat) { 
        state.lat = state.destLat; state.lng = state.destLng; 
        state.speed=0; state.alt=0; cancelNavigation(); 
        map.setView([state.lat, state.lng], settings.mapZoom); 
        baseLat=state.lat; baseLng=state.lng;
    } 
}

function getDistance(lat1, lon1, lat2, lon2) { const R=6371, dLat=(lat2-lat1)*Math.PI/180, dLon=(lon2-lon1)*Math.PI/180; const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2); return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); }
function getBearing(startLat, startLng, destLat, destLng) { startLat *= Math.PI/180; startLng *= Math.PI/180; destLat *= Math.PI/180; destLng *= Math.PI/180; const y = Math.sin(destLng - startLng) * Math.cos(destLat); const x = Math.cos(startLat)*Math.sin(destLat) - Math.sin(startLat)*Math.cos(destLat)*Math.cos(destLng - startLng); return ((Math.atan2(y, x)*180/Math.PI) + 360) % 360; }

// ==========================================
// 6. TOUCH CONTROLS (Joystick Fix)
// ==========================================
let groundJoyX = 0, planeJoyX = 0, planeJoyY = 0;

const bindTouch = (id, key) => {
    let el = document.getElementById(id); if(!el) return;
    el.addEventListener('touchstart', e => { e.preventDefault(); keys[key]=true; el.classList.add('active'); });
    el.addEventListener('touchend', e => { e.preventDefault(); keys[key]=false; el.classList.remove('active'); });
};
bindTouch('btn-left', 'a'); bindTouch('btn-right', 'd'); bindTouch('btn-gas', 'w'); bindTouch('btn-brake', 's');

function setupJoystick(baseId, knobId, isPlane) {
    let base = document.getElementById(baseId), knob = document.getElementById(knobId);
    let active = false, maxDist = base.offsetWidth/2 - knob.offsetWidth/2;
    
    base.addEventListener('touchstart', e => { e.preventDefault(); active=true; move(e); });
    base.addEventListener('touchmove', e => { e.preventDefault(); if(active) move(e); });
    window.addEventListener('touchend', () => { 
        active=false; knob.style.transform='translate(0,0)'; 
        if(isPlane) { planeJoyX=0; planeJoyY=0; } else groundJoyX=0; 
    });
    
    function move(e) {
        let rect = base.getBoundingClientRect();
        let x = e.touches[0].clientX - (rect.left + rect.width/2);
        if(isPlane) {
            let y = e.touches[0].clientY - (rect.top + rect.height/2);
            let dist = Math.sqrt(x*x + y*y);
            if(dist > maxDist) { x *= maxDist/dist; y *= maxDist/dist; }
            knob.style.transform = `translate(${x}px, ${y}px)`;
            planeJoyX = x/maxDist; planeJoyY = y/maxDist;
        } else {
            x = Math.max(-maxDist, Math.min(x, maxDist));
            knob.style.transform = `translateX(${x}px)`;
            groundJoyX = x/maxDist;
        }
    }
}
setupJoystick('joystick-base', 'joystick-knob', false);
setupJoystick('plane-joystick-base', 'plane-joystick-knob', true);

let thrBase = document.getElementById('plane-throttle-base'), thrKnob = document.getElementById('plane-throttle-knob'), thrActive = false;
thrBase.addEventListener('touchstart', e => { e.preventDefault(); thrActive=true; setThr(e); });
thrBase.addEventListener('touchmove', e => { e.preventDefault(); if(thrActive) setThr(e); });
window.addEventListener('touchend', () => thrActive=false);
function setThr(e) {
    let rect = thrBase.getBoundingClientRect();
    let y = rect.bottom - e.touches[0].clientY; 
    y = Math.max(0, Math.min(y, rect.height - thrKnob.offsetHeight));
    thrKnob.style.bottom = `${y}px`;
    state.throttle = (y / (rect.height - thrKnob.offsetHeight)) * 100;
}

// ==========================================
// 7. PHYSICS & RENDERING LOOP
// ==========================================
let lastTime = performance.now();

function update() {
    let now = performance.now();
    let dt = Math.min((now - lastTime) / 1000, 0.05); 
    lastTime = now;

    if (state.vehicle !== 'plane') {
        const accel = 15, brake = 25, fric = 4, maxSpeed = state.vehicle === 'car' ? 130 : 80;
        
        if(keys.w) state.speed += accel * dt;
        else if(keys.s) state.speed -= brake * dt;
        else {
            if(Math.abs(state.speed) < fric * dt) state.speed = 0;
            else state.speed -= Math.sign(state.speed) * fric * dt;
        }
        state.speed = Math.max(-30, Math.min(state.speed, maxSpeed));

        let turnInput = (settings.steeringMode==='arrows') ? (keys.a ? -1 : keys.d ? 1 : 0) : groundJoyX;
        if(Math.abs(state.speed) > 0.5) {
            let baseTurnRate = state.vehicle === 'car' ? 120 : 60;
            state.heading += baseTurnRate * turnInput * settings.steeringSensitivity * dt * Math.sign(state.speed);
        }

        let oldLat = state.lat, oldLng = state.lng;
        let hdgRad = state.heading * Math.PI / 180;
        state.lat += (state.speed * Math.cos(hdgRad)) / 111320 * dt;
        state.lng += (state.speed * Math.sin(hdgRad)) / (111320 * Math.cos(state.lat * Math.PI / 180)) * dt;
        
        if(checkCollision()) {
            state.lat = oldLat; state.lng = oldLng; 
            state.speed = -state.speed * 0.4; 
        }
    } 
    else {
        if(keys.q) state.throttle = Math.max(0, state.throttle - 40*dt);
        if(keys.e) state.throttle = Math.min(100, state.throttle + 40*dt);
        
        let pitchInput = keys.s ? 1 : keys.w ? -1 : planeJoyY; 
        let rollInput = keys.d ? 1 : keys.a ? -1 : planeJoyX;
        
        let targetSpeed = state.throttle * 4; 
        state.speed += (targetSpeed - state.speed) * 0.2 * dt;

        let lift = (state.speed * state.speed) * 0.0005; 
        let gravity = 9.8;

        let surfaceControl = Math.min(1, Math.max(0, (state.speed - 20) / 60)); 
        state.pitch += (pitchInput * 40 - state.pitch) * 2 * dt * surfaceControl;
        state.roll += (rollInput * 60 - state.roll) * 2 * dt * surfaceControl;
        
        if(state.speed > 20) {
            state.heading += state.roll * 0.5 * dt * surfaceControl;
        } else {
            state.pitch *= 0.9; state.roll *= 0.9;
        }

        let verticalSpeed = 0;
        if(state.alt > 0 || (lift > gravity && state.pitch > 0)) {
            verticalSpeed = (state.pitch * state.speed * 0.01) + (lift - gravity)*0.1;
            state.alt += verticalSpeed * dt;
            if(state.alt < 0) { state.alt = 0; verticalSpeed = 0; }
        }

        state.speed -= verticalSpeed * 0.5 * dt; 
        state.speed = Math.max(0, state.speed);

        let hdgRad = state.heading * Math.PI / 180;
        state.lat += (state.speed * Math.cos(hdgRad)) / 111320 * dt;
        state.lng += (state.speed * Math.sin(hdgRad)) / (111320 * Math.cos(state.lat * Math.PI / 180)) * dt;
    }

    state.heading = (state.heading + 360) % 360;
    let diff = (state.heading - camHeading + 180) % 360 - 180;
    camHeading += diff * 5 * dt;

    let pBase = map.latLngToLayerPoint([baseLat, baseLng]);
    let pCam = map.latLngToLayerPoint([state.lat, state.lng]);
    let dx = pCam.x - pBase.x;
    let dy = pCam.y - pBase.y;

    if(Math.abs(dx) > 500 || Math.abs(dy) > 500) {
        baseLat = state.lat; baseLng = state.lng;
        map.setView([baseLat, baseLng], settings.mapZoom, {animate: false});
        dx = 0; dy = 0;
        if(settings.collision) fetchRoads();
    }

    let mapRot = state.headUp ? -camHeading : 0;
    dom.mapSubpixel.style.transform = `translate3d(${-dx}px, ${-dy}px, 0)`;
    dom.mapRotator.style.transform = `rotate(${mapRot}deg)`;

    dom.cameraPerspective.style.transform = `scale(${settings.cameraZoom})`;

    // Los assets nuevos están renderizados nativamente mirando a la derecha (0 grados trigonométricos)
    let vRot = state.headUp ? (state.heading - camHeading) : state.heading;
    let visualScale = settings.vehicleScale * (state.alt > 0 ? (1 + state.alt/1000) : 1);
    dom.graphic.style.transform = `translate(-50%, -50%) rotate(${vRot}deg) scale(${visualScale})`;

    let dSpeed = state.speedUnit === 'KPH' ? state.speed : state.speedUnit === 'MPH' ? state.speed * 0.6213 : state.speed * 0.5399;
    dom.speedVal.innerText = Math.round(Math.abs(dSpeed)).toString().padStart(3, '0');
    dom.coordInfo.innerText = `Lat: ${state.lat.toFixed(5)}\nLng: ${state.lng.toFixed(5)}`;
    if(state.vehicle === 'plane') dom.altInfo.innerText = `ALT: ${Math.round(state.alt)} m | PWR: ${Math.round(state.throttle)}%`;

    if (state.destLat !== null) {
        dom.gpsDist.innerText = getDistance(state.lat, state.lng, state.destLat, state.destLng).toFixed(2) + ' km';
        let arrowRot = state.headUp ? (getBearing(state.lat, state.lng, state.destLat, state.destLng) - camHeading) : getBearing(state.lat, state.lng, state.destLat, state.destLng);
        dom.gpsArrow.style.transform = `rotate(${arrowRot}deg)`;
        if(state.vehicle === 'plane') planeRouteLine.setLatLngs([[state.lat, state.lng], [state.destLat, state.destLng]]);
    }

    requestAnimationFrame(update);
}

requestAnimationFrame(update);