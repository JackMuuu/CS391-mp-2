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

// src/types.ts

export function isMonster(item: Item): item is Monster {
    return 'drops' in item && 'common_locations' in item && item.category === 'monsters';
}

export function isTreasure(item: Item): item is Treasure {
    return 'drops' in item && 'common_locations' in item && item.category === 'treasure';
}

export function isEquipment(item: Item): item is Equipment {
    return 'attack' in item && 'defense' in item;
}

export function isMaterialOrCreature(item: Item): item is Material | Creature {
    return 'cooking_effect' in item && 'hearts_recovered' in item;
}

export function isMaterial(item: Item): item is Material {
    return 'cooking_effect' in item && 'hearts_recovered' in item && item.category === 'materials';
}

export function isCreature(item: Item): item is Creature {
    return 'cooking_effect' in item && 'hearts_recovered' in item && item.category === 'creatures';
}