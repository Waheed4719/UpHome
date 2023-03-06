import { useState, useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import GoogleMapStyles from './styles/GoogleMapStyles.json';
import { GoogleMapConfig } from '../../data/configs/GoogleMapConfig';
import ListingCard from '../Listings/ListingCard';
import MapMarker from './components/MapMarker';
import HouseMarkerIcon from './icons/HouseMarker.svg';
import { homes } from '../../data/dummy';

type MapMarkerType = {
    id: number;
    position: google.maps.LatLng | google.maps.LatLngLiteral;
};
const markers = homes.map((home) => ({
    ...home,
    id: home.id,
    name: home.name,
    position: home.position,
    url: home.url
}));
const NewMap = () => {
    const mapRef = useRef<google.maps.Map>();
    const [selectedVenue, setSelectedVenue] = useState<MapMarkerType | null>(null);
    const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral>({ lat: 44, lng: -80 });
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GoogleMapConfig.apiKey,
        libraries: GoogleMapConfig.libraries
    });

    const calculateMapBounds = () => {
        const bounds = new google.maps.LatLngBounds();
        markers?.forEach((marker) => {
            bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
        });

        return bounds;
    };

    useEffect(() => {
        if (mapRef.current) {
            const newBounds = calculateMapBounds();
            mapRef.current.setCenter(newBounds.getCenter());
        }
    }, [markers]);

    const handleDragEnd = () => {
        if (!mapRef.current) {
            return;
        }
        const newPos = mapRef?.current?.getCenter();
        setMapCenter({ lat: newPos?.lat() ?? 0, lng: newPos?.lng() ?? 0 });
    };

    if (loadError) {
        console.log(loadError);
    }
    if (!isLoaded) {
        return null;
    }
    return (
        <div className='flex flex-1 h-[calc(100vh-65px)]' style={{ width: '100%' }}>
            <GoogleMap
                options={{
                    styles: GoogleMapStyles,
                    streetViewControl: false,
                    mapTypeId: 'roadmap',
                    mapTypeControl: false,
                    fullscreenControl: false
                }}
                onLoad={(map: google.maps.Map) => {
                    mapRef.current = map;
                    const newBounds = calculateMapBounds();
                    mapRef.current.fitBounds(newBounds);
                }}
                onDragEnd={handleDragEnd}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                mapContainerClassName='map-container'
                zoom={10}
                center={mapCenter}
            >
                <>
                    {markers.map((marker) => (
                        <MapMarker
                            markerIcon={{
                                url: HouseMarkerIcon as string
                            }}
                            key={marker.id}
                            position={marker.position}
                            markerOnClick={() => setSelectedVenue(marker)}
                            showInfoWindow={selectedVenue?.id === marker.id}
                            infoWindowContent={<ListingCard listing={marker} />}
                            onInfoWindowClose={() => setSelectedVenue(null)}
                        />
                    ))}
                </>
            </GoogleMap>
        </div>
    );
};

export default NewMap;
