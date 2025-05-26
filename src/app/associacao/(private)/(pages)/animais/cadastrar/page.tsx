"use client";

import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import ComponentCard from '@/components/common/ComponentCard';
import Form from '@/components/form/Form';
import Label from '@/components/form/Label';
import Input from '@/components/inputs/input';
import Select from '@/components/form/Select';
import MultiSelect from '@/components/form/MultiSelect';
import TextArea from '@/components/form/input/TextArea';
import DropzoneComponent from '@/components/form/form-elements/DropZone';
import Button from '@/components/ui/button';
import { useState } from 'react';

const especieOptions = [
  { value: 'cachorro', label: 'Cachorro' },
  { value: 'gato', label: 'Gato' },
  { value: 'outro', label: 'Outro' },
];
const porteOptions = [
  { value: 'pequeno', label: 'Pequeno' },
  { value: 'medio', label: 'Médio' },
  { value: 'grande', label: 'Grande' },
];
const statusOptions = [
  { value: 'disponivel', label: 'Disponível' },
  { value: 'adotado', label: 'Adotado' },
  { value: 'indisponivel', label: 'Indisponível' },
];
const tagsOptions = [
  { value: 'docil', text: 'Dócil', selected: false },
  { value: 'brincalhao', text: 'Brincalhão', selected: false },
  { value: 'carinhoso', text: 'Carinhoso', selected: false },
  { value: 'castrado', text: 'Castrado', selected: false },
  { value: 'vacinado', text: 'Vacinado', selected: false },
];

export default function CreateAnimalPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8">
      <PageBreadcrumb
        pageTitle="Cadastrar Novo Animal"
        breadcrumbItems={[
          { label: 'Animais', href: '/associacao/animais' },
        ]}
      />
      <ComponentCard
        title="Preencha os dados do animal para disponibilizá-lo para adoção"
        className="mt-2"
      >
        <Form onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna 1: Informações Básicas */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="nome">Nome do animal *</Label>
                <Input id="nome" placeholder="Ex: Rex, Luna, Thor..." />
              </div>
              <div>
                <Label htmlFor="especie">Espécie *</Label>
                <Select
                  options={especieOptions}
                  placeholder="Selecione uma espécie"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="raca">Raça</Label>
                <Input id="raca" placeholder="Ex: Labrador, Siamês, SRD..." />
              </div>
              <div>
                <Label htmlFor="porte">Porte *</Label>
                <Select
                  options={porteOptions}
                  placeholder="Selecione o porte"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="idade">Idade</Label>
                <Input id="idade" placeholder="Ex: 2 anos, 6 meses..." />
              </div>
              <div>
                <Label htmlFor="status">Status de Adoção *</Label>
                <Select
                  options={statusOptions}
                  placeholder="Selecione o status"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>
              <div>
                <Label>Tags de Personalidade</Label>
                <MultiSelect
                  label="Selecione as características"
                  options={tagsOptions}
                  defaultSelected={selectedTags}
                  onChange={setSelectedTags}
                />
              </div>
            </div>
            {/* Coluna 2: Descrição e Imagens */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="descricao">Descrição do animal</Label>
                <TextArea
                  placeholder="Descreva as características, personalidade e história do animal..."
                  rows={7}
                />
              </div>
              <div>
                <Label>Imagens *</Label>
                <DropzoneComponent />
              </div>
            </div>
          </div>
          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
            <Button type="button" className="bg-gray-100 text-gray-800 border border-gray-300">Cancelar</Button>
            <Button type="submit" className="bg-brand-500 text-white">Salvar animal</Button>
          </div>
        </Form>
      </ComponentCard>
    </div>
  );
}