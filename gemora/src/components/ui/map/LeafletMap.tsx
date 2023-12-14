import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './LeafletMap.css'

const LeafletMap: React.FC = () => {
    return (
        <div className="map-container">
            <MapContainer center={[52.2295, 21.0203]} zoom={15} style={{height: '100%', width: '100%'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[52.2295, 21.0203]}>
                    <Popup>Warsaw</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};
export default LeafletMap;