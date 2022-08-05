import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import '../styles/components/Map.css';

// eslint-disable-next-line react/function-component-definition
const ChartMap = ({ data }) => {
    console.log(data, "data")
    const positionData = [data[0], data[1]]
    const position = [2.8894434, -73.783892]

    return (
        <MapContainer center={data.length !== 0 ? positionData : position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={data.length !== 0 ? positionData : position} >
                <Popup icon={Icon}>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    );
};

export default ChartMap;