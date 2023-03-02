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
        position: {
            lat: 37.8199286,
            lng: -122.4782551
        }
    },
    {
        id: 2,
        name: 'Disneyland Park',
        url: Home2 as string,
        position: {
            lat: 33.8121,
            lng: -117.919
        }
    },
    {
        id: 3,
        name: 'Yosemite National Park',
        url: Home3 as string,
        position: {
            lat: 37.8651,
            lng: -119.5383
        }
    },
    {
        id: 4,
        name: 'Hollywood Walk of Fame',
        url: Home4 as string,
        position: {
            lat: 34.1014,
            lng: -118.3418
        }
    },
    {
        id: 5,
        name: 'Alcatraz Island',
        url: Home5 as string,
        position: {
            lat: 37.8267,
            lng: -122.4233
        }
    }
];
