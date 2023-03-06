export type NavLinkType = {
    text: string;
    link: string;
};

export type PlaceType = 'All' | 'Office' | 'Building' | 'Shop' | 'House' | 'Apartment';
export type HomeStyle = 'A-Frame' | 'Spanish' | 'Cottage' | 'Dome';
export type HomeType = {
    id: number;
    name: string;
    url: string;
    features: string[];
    type: PlaceType;
    price: number;
    sqft: number;
    style: HomeStyle;
    bedrooms: number;
    bathrooms: number;
    position: {
        lat: number;
        lng: number;
    };
};
