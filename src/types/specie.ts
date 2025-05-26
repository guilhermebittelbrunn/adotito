export enum SpecieBaseTypeEnum {
    DOG = 'dog',
    CAT = 'cat',
    BIRD = 'bird',
    RODENT = 'rodent', // -- Roedor (ex: hamster, coelho)
    REPTILE = 'reptile',
    FISH = 'fish',
    FARM = 'farm', // -- Animal de fazenda (ex: cavalo, cabra)
    EXOTIC = 'exotic', // -- Animal exótico (ex: furão, cobra)
    OTHER = 'other',
}

export interface ISpecie {
    id: string;
    name: string;
    sequence: number | null;
    associationId: string;
    specieBaseId: string;
    enabled: boolean;
    specieBase?: ISpecieBase;
}

export interface ISpecieBase {
    id: string;
    name: string;
    type: SpecieBaseTypeEnum;
    enabled: boolean;
}
