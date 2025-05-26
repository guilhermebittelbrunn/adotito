import { ISpecie } from './specie';

export interface IAnimal {
    id: string;
    name: string;
    breed: string;
    age: number;
    weight: number;
    status: AnimalStatusEnum;
    gender: AnimalGenderEnum;
    size: AnimalSizeEnum;
    specie: Omit<ISpecie, 'specieBase'>;
    mainPicture?: {
        url: string;
    };
}

export enum AnimalStatusEnum {
    AVAILABLE = 'available',
    IN_ADOPTION = 'in_adoption',
    ADOPTED = 'adopted',
}

export enum AnimalGenderEnum {
    MALE = 'male',
    FEMALE = 'female',
}

export enum AnimalSizeEnum {
    SMALL = 'small',
    MEDIUM = 'medium',
    BIG = 'big',
}
