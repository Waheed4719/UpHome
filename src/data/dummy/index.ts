import { HomeType } from '../../types';
import Home1 from '../../assets/images/house1.jpg';
import Home2 from '../../assets/images/house2.jpg';
import Home3 from '../../assets/images/house3.jpg';
import Home4 from '../../assets/images/house4.jpg';
import Home5 from '../../assets/images/house5.jpg';

export const homes: HomeType[] = [
    {
        id: 1,
        name: 'Golden Gate Bridge',
        url: Home1 as string,
        features: ['Pool', 'Balcony', 'Fitness Center', 'AC & Heating'],
        type: 'Building',
        price: 1230,
        sqft: 800,
        style: 'A-Frame',
        bedrooms: 3,
        bathrooms: 3,
        position: {
            lat: 37.3254,
            lng: -121.9155
        }
    },
    {
        id: 2,
        name: 'Disneyland Park',
        url: Home2 as string,
        features: ['Dishwasher', 'Spa', 'Clubhouse', 'AC & Heating'],
        type: 'Apartment',
        price: 1340,
        sqft: 1100,
        style: 'A-Frame',
        bedrooms: 3,
        bathrooms: 2,
        position: {
            lat: 37.2865,
            lng: -121.8524
        }
    },
    {
        id: 3,
        name: 'Yosemite National Park',
        url: Home3 as string,
        features: ['Valet Parking', 'Balcony', 'Pool', 'AC & Heating'],
        type: 'Office',
        price: 1530,
        sqft: 1000,
        style: 'A-Frame',
        bedrooms: 2,
        bathrooms: 3,
        position: {
            lat: 37.3147,
            lng: -121.8863
        }
    },
    {
        id: 4,
        name: 'Hollywood Walk of Fame',
        url: Home4 as string,
        features: ['Pool', 'Balcony', 'Fitness Center', 'AC & Heating'],
        type: 'House',
        price: 1130,
        sqft: 900,
        style: 'A-Frame',
        bedrooms: 3,
        bathrooms: 2,
        position: {
            lat: 37.2817,
            lng: -121.8456
        }
    },
    {
        id: 5,
        name: 'Alcatraz Island',
        url: Home5 as string,
        features: ['Valet Parking', 'Balcony', 'Pool', 'AC & Heating'],
        type: 'Shop',
        price: 1230,
        sqft: 950,
        style: 'A-Frame',
        bedrooms: 2,
        bathrooms: 2,
        position: {
            lat: 37.3321,
            lng: -121.8907
        }
    },
    {
        id: 6,
        name: 'Modern Oasis',
        url: Home1 as string,
        features: ['Swimming Pool', 'Outdoor Kitchen', 'Home Theater'],
        type: 'House',
        price: 2000000,
        sqft: 3500,
        style: 'Cottage',
        bedrooms: 4,
        bathrooms: 3,
        position: {
            lat: 37.345415,
            lng: -121.903044
        }
    },

    {
        id: 7,
        name: 'Sunnyvale Estate',
        url: Home2 as string,
        features: ['Tennis Court', 'Sauna', 'Wine Cellar'],
        type: 'Apartment',
        price: 1500,
        sqft: 5500,
        style: 'A-Frame',
        bedrooms: 5,
        bathrooms: 4,
        position: {
            lat: 37.361372,
            lng: -122.025011
        }
    },

    {
        id: 8,
        name: 'Luxury Villa',
        url: Home3 as string,
        features: ['Infinity Pool', 'Home Gym', 'Billiards Room'],
        type: 'House',
        price: 5000000,
        sqft: 7500,
        style: 'Dome',
        bedrooms: 6,
        bathrooms: 7,
        position: {
            lat: 37.302212,
            lng: -121.919482
        }
    },

    {
        id: 9,
        name: 'Executive Mansion',
        url: Home4 as string,
        features: ['Indoor Pool', 'Gourmet Kitchen', 'Library'],
        type: 'House',
        price: 3200,
        sqft: 10000,
        style: 'Spanish',
        bedrooms: 8,
        bathrooms: 10,
        position: {
            lat: 37.330082,
            lng: -121.937433
        }
    },

    {
        id: 10,
        name: 'Contemporary Retreat',
        url: Home5 as string,
        features: ['Movie Theater', 'Hot Tub', 'Game Room'],
        type: 'House',
        price: 2000,
        sqft: 5000,
        style: 'Cottage',
        bedrooms: 4,
        bathrooms: 4,
        position: {
            lat: 37.352267,
            lng: -121.93752
        }
    },

    {
        id: 11,
        name: 'Charming Bungalow',
        url: Home1 as string,
        features: ['Fireplace', 'Covered Porch', 'Mature Garden'],
        type: 'House',
        price: 2200,
        sqft: 1500,
        style: 'Cottage',
        bedrooms: 2,
        bathrooms: 1,
        position: {
            lat: 37.306207,
            lng: -121.897873
        }
    }
];
