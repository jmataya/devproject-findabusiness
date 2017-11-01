type PhotoResult = {
  getUrl: Function,
  height: number,
  width: number,
  html_attributes: Array<string>,
};

type PlaceResult = {
  id: string,
  name: string,
  formatted_address: string,
  photos: Array<PhotoResult>,
  price_level: number,
  rating: number,
  types: Array<string>,
};

type AddressComponent = {
  long_name: string,
  short_name: string,
  types: Array<string>,
};

type FullPlaceResult = PlaceResult & {
  address_components: Array<AddressComponent>,
  email: string,
  international_phone_number: string,
};
