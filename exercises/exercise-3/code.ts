import { AssertAssignable } from "../util";
import { priceItem } from "../../solutions/ex-3";

type Foo = Protein | EntreeType;

/* Monster Foodies Food Truck Menu
Taco....................$5
  Protein
    Chicken
    BBQ jackfruit
    Carnitas (+$2)
    Salsa (+$0.50)
  Add a second taco for +$3 (+$4 for Carnitas)
Sushi ..................$8
  Protein    
    Tuna
    King Salmon (+$2)
  Rice
    White Rice
    Brown Rice (+$1) 
Sandwich................$4
  Protein
    Chicken
    BBQ Jackfruit
    Portabello Cap (+$2)
  Optional 1 topping, extra toppings +$0.50
    Cheese
    Lettuce
    Tomato
Add AwesomeSauce to anything for $1!
*/

export type Protein = 
  |"chicken" // 🐓
  |"jackfruit" // 🍈
  |"tuna" // 🐟

  // Pricey Proteins
  |"carnitas" // 🐖
  |"kingSalmon" // 🐟
  |"portabelloCap" // 🍄


export type EntreeType =
  | "taco" // 🌮
  | "sushi" // 🍣
  | "sandwich"; // 🍞

export type Topping =
  | "cheese" // 🧀
  | "lettuce" // 🥗
  | "tomato"; // 🍅

export type RiceType =
  | "brownRice" // 🍘
  | "whiteRice"; // 🍙

/*
 * ======================================================
 * TODO: Update LineItem to represent an order from the
 * Monster Foodies Truck.
 * ======================================================*/

export interface Order {
  lineItems: LineItem[];
}

type Extras = {
  protein: Protein,
  awesomeSauce: boolean,
}

type Taco = {
  type: 'taco',
  protein: "chicken" | "jackfruit" | "carnitas",
  salsa: boolean,
  extraTaco: boolean,
} & Extras

type Sushi = {
  type: "sushi",
  protein: "tuna" | "kingSalmon",
  riceType: RiceType,
} & Extras

type Sandwich = {
  type: "sandwich",
  protein: "chicken" | "jackfruit" | "portabelloCap",
  toppings: Topping[],
} & Extras

export type LineItem = | Taco | Sushi | Sandwich


/*
 * ======================================================
 * TODO: Implement priceOrder.
 * ======================================================*/
export function priceOrder(order: Order): number {
  return order.lineItems.reduce((acc, item) => acc + priceItem(item), 0)
}

/* Monster's foodie truck takes orders on paper slips, 
   but sometimes people don't read the menu before they
   order. */
type PaperLineItem = {
  type: EntreeType;
  protein: Protein;
  awesomeSauce: boolean;
  extraTaco?: boolean;
  riceType?: RiceType;
  salsa?: boolean;
  toppings?: Topping[];
};

type _t1 = AssertAssignable<PaperLineItem, LineItem>;
