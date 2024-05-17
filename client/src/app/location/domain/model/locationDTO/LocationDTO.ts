export default interface LocationDTO {
    locations: Location[];
}

interface Location {
    idLocation?: string;
    city: string;
    name: string;
    address: string;
}