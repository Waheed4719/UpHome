import { MarkerF as Marker, InfoWindowF as InfoWindow } from '@react-google-maps/api';
import InfoWindowComponent from './InfoWindow';

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
                // <InfoWindow position={position} onCloseClick={handleInfoWindowClose}>
                //     <div className='animated-infowindow relative'>
                //         {' '}
                //         <button
                //             className='text-gray-600 text-2xl rounded-full shadow-md flex items-center justify-center absolute top-[15px] bg-white p-2 h-6 w-6 right-[20px] font-semibold'
                //             type='button'
                //             onClick={handleInfoWindowClose}
                //         >
                //             &times;
                //         </button>
                //         {infoWindowContent}
                //     </div>
                // </InfoWindow>
                <InfoWindow position={position}>
                    <InfoWindowComponent onClose={handleInfoWindowClose}>
                        {infoWindowContent}
                    </InfoWindowComponent>
                </InfoWindow>
            )}
        </Marker>
    );
};

export default MapMarker;
