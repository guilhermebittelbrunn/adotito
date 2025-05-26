'use client';

import { Card, Dropdown, Table } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { AnimalGenderEnum, AnimalSizeEnum, AnimalStatusEnum, IAnimal } from '@/types/animal';
import Badge from '@/components/ui/badge/Badge';
import {
    AnimalGenderUserFriendlyName,
    AnimalSizeUserFriendlyName,
    AnimalStatusColorBadge,
    AnimalStatusUserFriendlyName,
} from '@/types/utils/animal';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import { SearchInput } from '@/components/inputs/input';
import { Select } from '@/components/inputs';
import Button from '@/components/ui/button';

const mockData: AnimalsResponse = {
    data: [
        {
            id: '232f4592-8df2-403c-94b4-25410e0a85ef',
            name: 'bob',
            breed: 'pastor alemão',
            mainPicture: {
                url: 'https://acapra.s3.us-east-1.amazonaws.com/acapra/56060da3-17e2-473a-9bef-809a3bda2da5/1745365597343-filhote-de-cachorro-bichon-frise-fofo-posando-no-estudio_1303-27287.avif',
            },
            age: 1,
            weight: 4,
            specie: {
                id: '1',
                name: 'Cachorro',
                specieBaseId: '448f5914-76b6-4781-844a-abb9837875e8 ',
                sequence: 1,
                enabled: true,
                associationId: '61801745-716a-4207-a9ef-65c902984e4a',
            },
            status: AnimalStatusEnum.AVAILABLE,
            gender: AnimalGenderEnum.MALE,
            size: AnimalSizeEnum.BIG,
        },
        {
            id: 'f77bb42b-a2ea-4e83-8f6d-f0b9325dbfb7',
            name: 'bob',
            breed: 'pastor alemão',
            mainPicture: {
                url: 'https://acapra.s3.us-east-1.amazonaws.com/acapra/56060da3-17e2-473a-9bef-809a3bda2da5/1745365597343-filhote-de-cachorro-bichon-frise-fofo-posando-no-estudio_1303-27287.avif',
            },
            specie: {
                id: '1',
                name: 'Cachorro',
                specieBaseId: '448f5914-76b6-4781-844a-abb9837875e8 ',
                sequence: 1,
                enabled: true,
                associationId: '61801745-716a-4207-a9ef-65c902984e4a',
            },
            age: 1,
            weight: 4,
            status: AnimalStatusEnum.AVAILABLE,
            gender: AnimalGenderEnum.MALE,
            size: AnimalSizeEnum.BIG,
        },
        {
            id: '046fd308-ff68-4a68-a988-12d599634875',
            name: 'bob',
            breed: 'pastor alemão',
            mainPicture: {
                url: 'https://acapra.s3.us-east-1.amazonaws.com/acapra/56060da3-17e2-473a-9bef-809a3bda2da5/1745365597343-filhote-de-cachorro-bichon-frise-fofo-posando-no-estudio_1303-27287.avif',
            },
            specie: {
                id: '1',
                name: 'Cachorro',
                specieBaseId: '448f5914-76b6-4781-844a-abb9837875e8 ',
                sequence: 1,
                enabled: true,
                associationId: '61801745-716a-4207-a9ef-65c902984e4a',
            },
            age: 1,
            weight: 4,
            status: AnimalStatusEnum.AVAILABLE,
            gender: AnimalGenderEnum.MALE,
            size: AnimalSizeEnum.BIG,
        },
        {
            id: 'e2f75746-5c92-45eb-a06e-ebeaddeb40bc',
            name: 'bob',
            breed: 'pastor alemão',
            mainPicture: {
                url: 'https://acapra.s3.us-east-1.amazonaws.com/acapra/56060da3-17e2-473a-9bef-809a3bda2da5/1745365597343-filhote-de-cachorro-bichon-frise-fofo-posando-no-estudio_1303-27287.avif',
            },
            specie: {
                id: '1',
                name: 'Cachorro',
                specieBaseId: '448f5914-76b6-4781-844a-abb9837875e8 ',
                sequence: 1,
                enabled: true,
                associationId: '61801745-716a-4207-a9ef-65c902984e4a',
            },
            age: 1,
            weight: 4,
            status: AnimalStatusEnum.AVAILABLE,
            gender: AnimalGenderEnum.MALE,
            size: AnimalSizeEnum.BIG,
        },
        {
            id: '2b0a44c0-55cf-4266-a4be-4e45339ce8dd',
            name: 'bob',
            breed: 'pastor alemão',
            mainPicture: {
                url: 'https://acapra.s3.us-east-1.amazonaws.com/acapra/56060da3-17e2-473a-9bef-809a3bda2da5/1745365597343-filhote-de-cachorro-bichon-frise-fofo-posando-no-estudio_1303-27287.avif',
            },
            specie: {
                id: '1',
                name: 'Cachorro',
                specieBaseId: '448f5914-76b6-4781-844a-abb9837875e8 ',
                sequence: 1,
                enabled: true,
                associationId: '61801745-716a-4207-a9ef-65c902984e4a',
            },
            age: 1,
            weight: 4,
            status: AnimalStatusEnum.AVAILABLE,
            gender: AnimalGenderEnum.MALE,
            size: AnimalSizeEnum.BIG,
        },
    ],
    meta: {
        total: 27,
        page: 1,
        limit: 10,
        pages: 3,
        hasNextPage: true,
    },
};
interface AnimalsResponse {
    data: IAnimal[];
    meta: {
        total: number;
        page: number;
        limit: number;
        pages: number;
        hasNextPage: boolean;
    };
}

const columns: ColumnsType<IAnimal> = [
    {
        title: 'Foto',
        dataIndex: 'mainPicture',
        key: 'mainPicture',
        width: 100,
        fixed: 'left',
        render: (picture: IAnimal['mainPicture']) => (
            <div className="flex items-center gap-2">
                <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${picture?.url})` }}
                />
            </div>
        ),
    },
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Espécie',
        dataIndex: 'specie',
        key: 'specie',
        render: (specie: IAnimal['specie']) => specie?.name,
    },
    {
        title: 'Raça',
        dataIndex: 'breed',
        key: 'breed',
    },
    {
        title: 'Gênero',
        dataIndex: 'gender',
        key: 'gender',
        render: (gender: AnimalGenderEnum) => AnimalGenderUserFriendlyName[gender],
    },
    {
        title: 'Porte',
        dataIndex: 'size',
        key: 'size',
        render: (size: AnimalSizeEnum) => AnimalSizeUserFriendlyName[size],
    },
    {
        title: 'Idade',
        dataIndex: 'age',
        key: 'age',
        render: (age: number) => `${age} ano${age !== 1 ? 's' : ''}`,
    },
    {
        title: 'Peso',
        dataIndex: 'weight',
        key: 'weight',
        render: (weight: number) => `${weight} kg`,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: AnimalStatusEnum) => (
            <Badge color={AnimalStatusColorBadge[status]}>{AnimalStatusUserFriendlyName[status]}</Badge>
        ),
    },
    {
        title: 'Ações',
        key: 'actions',
        width: 100,
        align: 'center',
        render: (_: unknown, record: IAnimal) => (
            <Dropdown
                trigger={['click']}
                placement="bottomRight"
                menu={{
                    items: [
                        {
                            icon: <EditOutlined />,
                            key: 'edit',
                            label: 'Editar',
                            onClick: () => {
                                // TODO: Implement edit action
                                console.log('Edit', record);
                            },
                        },
                        {
                            icon: <DeleteOutlined />,
                            key: 'delete',
                            label: 'Excluir',
                            danger: true,
                            onClick: () => {
                                // TODO: Implement delete action
                                console.log('Delete', record);
                            },
                        },
                    ],
                }}
            >
                <Button size="large" type="text" icon={<MoreOutlined />} />
            </Dropdown>
        ),
    },
];

export default function AnimalsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [animals, setAnimals] = useState<AnimalsResponse | null>(null);

    const currentPage = Number(searchParams.get('page')) || 1;
    const currentStatus = searchParams.get('status') || undefined;
    const currentGender = searchParams.get('gender') || undefined;
    const currentSize = searchParams.get('size') || undefined;
    const currentSearch = searchParams.get('search') || undefined;

    const handleTableChange = (pagination: TablePaginationConfig) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', pagination.current?.toString() || '1');
        router.push(`?${params.toString()}`);
    };

    useEffect(() => {
        // TODO: Replace with actual API call

        setAnimals(mockData);
    }, [currentPage, currentStatus, currentGender, currentSize, currentSearch]);

    return (
        <>
            <PageBreadcrumb
                pageTitle="Animais"
                sideElement={
                    <div className="flex justify-end items-center">
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={() => {
                                // TODO: Implement create action
                                console.log('Create new animal');
                            }}
                        >
                            Novo Animal
                        </Button>
                    </div>
                }
            />
            <div className="space-y-6">
                <Card>
                    <div className="mb-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Select
                                mode="multiple"
                                name="status"
                                changeUrl
                                placeholder="Status"
                                value={currentStatus}
                                allowClear
                                options={Object.entries(AnimalStatusEnum).map(([value, label]) => ({
                                    value,
                                    label,
                                }))}
                            />
                            <Select
                                name="gender"
                                placeholder="Gênero"
                                changeUrl
                                value={currentGender}
                                allowClear
                                options={Object.entries(AnimalGenderEnum).map(([value, label]) => ({
                                    value,
                                    label,
                                }))}
                            />
                            <Select
                                name="size"
                                placeholder="Porte"
                                changeUrl
                                value={currentSize}
                                allowClear
                                options={Object.entries(AnimalSizeEnum).map(([value, label]) => ({
                                    value,
                                    label,
                                }))}
                            />
                            <SearchInput placeholder="Nome do animal" />
                        </div>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <Table
                            columns={columns}
                            dataSource={animals?.data}
                            rowKey="id"
                            loading={!animals}
                            pagination={{
                                current: currentPage,
                                pageSize: 10,
                                total: animals?.meta.total,
                                showSizeChanger: false,
                            }}
                            onChange={handleTableChange}
                        />
                    </div>
                </Card>
            </div>
        </>
    );
}
