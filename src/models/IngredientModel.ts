interface MacronutModel {
  calorie: number;
  carboidrati: number;
  grassi: number;
  proteine: number;
}

export interface IngredientModel {
  macronut: MacronutModel;
  name: string;
  phase: string;
  price: number;
  vegan: boolean;
  vegetarian: boolean;
  imageURI: string;
  [key: string]: any;
}
