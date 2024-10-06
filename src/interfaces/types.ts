export interface BaseItem {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
}

export interface Monster extends BaseItem {
    common_locations: string[] | null;
    drops: string[] | null;
}

export interface Creature extends BaseItem {
    common_locations: string[] | null;
    cooking_effect: string;
    hearts_recovered: number;
}

export interface Equipment extends BaseItem {
    attack: number;
    defense: number;
}

export interface Material extends BaseItem {
    common_locations: string[] | null;
    cooking_effect: string;
    hearts_recovered: number;
}

export interface Treasure extends BaseItem {
    common_locations: string[] | null;
    drops: string[] | null;
}

export type Item = Monster | Creature | Equipment | Material | Treasure;

export interface ApiResponse {
    data: Item[];
}
