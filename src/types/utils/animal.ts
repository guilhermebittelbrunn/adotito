import { AnimalSizeEnum } from '../animal';

import { BadgeColor } from '@/components/ui/badge/Badge';
import { AnimalGenderEnum } from '../animal';

import { AnimalStatusEnum } from '../animal';

export const AnimalSizeUserFriendlyName = {
    [AnimalSizeEnum.SMALL]: 'Pequeno',
    [AnimalSizeEnum.MEDIUM]: 'Médio',
    [AnimalSizeEnum.BIG]: 'Grande',
};

export const AnimalStatusUserFriendlyName = {
    [AnimalStatusEnum.AVAILABLE]: 'Disponível',
    [AnimalStatusEnum.IN_ADOPTION]: 'Em processo de adoção',
    [AnimalStatusEnum.ADOPTED]: 'Adotado',
};

export const AnimalStatusColorBadge: Record<AnimalStatusEnum, BadgeColor> = {
    [AnimalStatusEnum.AVAILABLE]: 'light',
    [AnimalStatusEnum.IN_ADOPTION]: 'primary',
    [AnimalStatusEnum.ADOPTED]: 'success',
};

export const AnimalGenderUserFriendlyName = {
    [AnimalGenderEnum.MALE]: 'Macho',
    [AnimalGenderEnum.FEMALE]: 'Fêmea',
};
