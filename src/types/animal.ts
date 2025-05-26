import { IPicture } from './shared';
import { ISpecie } from './specie';

export interface IAnimal {
    id: string;
    name: string;
    associationId: string;
    description: string | null;
    breed: string;
    specieId: string;
    isFavorite: boolean;
    age: number;
    weight: number;
    status: AnimalStatusEnum;
    gender: AnimalGenderEnum;
    size: AnimalSizeEnum;
    specie: Omit<ISpecie, 'specieBase'>;
    mainPicture?: {
        url: string;
    };
    createdAt: string;
    updatedAt: string;
    tags: ITag[];
    pictures: IPicture[];
}

export interface ITag {
  id: string;
  associationId: string;
  name: string;
  enabled: boolean;
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
