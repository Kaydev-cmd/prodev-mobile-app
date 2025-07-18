export interface PropertyListingProps {
  propertyName: string;
  rate: number;
  currency: string;
  amount: number;
  location: PropertyLocationProps;
  favorite: boolean;
  image?: string;
}

export interface PropertyLocationProps {
  stret: string;
  city: string;
  country: string;
}

export interface PropertyListing {
  listings: PropertyListingProps[];
}
