export interface StaticMapOptions {
    StaticMapSrc?: string;
    MapSize?: number;
    Zoom?: number;
    Scale?: number;
    MapProvider?: string;
    MapType?: string;
}

export type MapConfigType = {
    apiKey: string;
    libraries: ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[];
    staticMapOptions: StaticMapOptions;
};


export const GoogleMapConfig: MapConfigType = {
    apiKey: "AIzaSyBXgQHJWOp598QsYC0KZSDtJj0Uz3q9leY",
    libraries: ['visualization', 'drawing', 'places', 'geometry'],
    staticMapOptions: {
        Zoom: 20,
        Scale: 2,
        MapSize: 640,
        MapType: 'satellite'
    }
};
