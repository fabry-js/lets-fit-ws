export interface IngredientNamePayload {
  name: string;
}

export interface SubtotalPayload {
  totale: number;
}

export interface RestaurantNameUpdatePayload {
  restaurantName: string;
}

export interface ShortenedIngredientModelPayload {
  name: string;
  price: number;
  quantity: number;
}
