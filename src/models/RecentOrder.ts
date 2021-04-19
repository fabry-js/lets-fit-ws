interface RecentOrderIngredient {
  name: string;
  price: number;
  quantity: number;
}

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface RecentOrder {
  allIngredients: RecentOrderIngredient[];
  createdAt: Timestamp;
  user: string;
  paymentMethod: string;
  restaurantName: string;
  totale: number;
}
