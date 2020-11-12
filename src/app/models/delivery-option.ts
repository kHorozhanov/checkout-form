export interface DeliveryOptionProduct {
  id: number;
  price: number;
  stock: number;
}

export interface DeliveryOption {
  id: number;
  name: string;
  deliveryPrice: number;
  products: DeliveryOptionProduct[];
}
