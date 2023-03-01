import { MarkerF as Marker, InfoWindowF as InfoWindow } from '@react-google-maps/api';

type Props = {
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    showInfoWindow: boolean;
    markerOnClick?: () => void;
    infoWindowContent: React.ReactNode;
    markerIcon?: google.maps.Icon | google.maps.Symbol | string;
    onInfoWindowClose?: () => void;
};

const MapMarker = ({
    position,
    showInfoWindow,
    markerOnClick,
    infoWindowContent,
    markerIcon,
    onInfoWindowClose
}: Props) => {
    const handleMarkerSelect = () => {
        markerOnClick && markerOnClick();
    };
    const handleInfoWindowClose = () => {
        onInfoWindowClose && onInfoWindowClose();
    };
    return (
        <Marker icon={markerIcon} onClick={handleMarkerSelect} position={position}>
            {showInfoWindow && (
                <InfoWindow options={{}} position={position} onCloseClick={handleInfoWindowClose}>
                    {infoWindowContent}
                </InfoWindow>
            )}
        </Marker>
    );
};

export default MapMarker;
