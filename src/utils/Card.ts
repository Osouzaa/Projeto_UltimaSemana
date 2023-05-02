import Edit from '../icons/Edit.svg'

type CardProps  = {
  imagem: string,
  title: string,
  text: string,
  id: number,
  onClick?: () => void;
}

const Cards: CardProps[] = [
  {
    imagem: Edit,
    title: 'Demandas e objetivos',
    text: 'No dia 12 de fevereiro de 2015, a paciente Ana, 22 anos, solteira e residente na cidade de Manaus, procurou atendimento psicológico em virtude de estar apresentando...',
    id: 1
  },
  {
    imagem: Edit,
    title: 'Anotações pessoais',
    text: 'Na sessão de hoje consegui identificar alguns sintomas de ansiedade através da fala e comportamento da paciente. Tal como: inquietação e medos.',
    id: 2
  }
]

export default Cards
