import IconSessao from '@/icons/IconsCard/SessaoIcons.svg'
import IconFatoRelevante from '@/icons/IconsCard/FatoRelevante.svg'
import DocumentosImportantes from '@/icons/IconsCard/DocumentosImportantes.svg'
import AvaliaçãoPsicologica from '@/icons/IconsCard/AvaliaçãoPsicologica.svg'

interface SectionItem {
  icon: string
  title: string
  description: string
  text: string
  identi: string
  id: number
  miniCard?: string[]
  buttons?: string[],
  isOpen: boolean
}

const Section: SectionItem[] = [
  {
    icon: IconSessao,
    title: 'Sessão 02',
    description: '22 de setembro de 2022',
    text: 'A paciente relatou que estava tendo dificuldades com sua família e amigos próximos, pois demostra ansiedade diante de fatos cotidianos, resultando em reações de raiva com as pessoas que estão próximas a ela. Além disso, relatou brigas recentes com seus pais e namorado e, após a briga, ficou mal diante...',
    identi: 'green',
    isOpen: false,
    id: 1
  },
  {
    icon: IconFatoRelevante,
    title: 'Fato relevante',
    description: '15 de setembro de 2022',
    text: 'Cliente não compareceu.',
    identi: 'blue',
    isOpen: false,
    id: 2
  },
  {
    icon: DocumentosImportantes,
    title: 'Documentos importantes',
    description: '10 de setembro de 2022',
    text: 'Anexo hoje alguns documentos importantes sobre as consultas recentes da paciente Ana Ester Resende. Documentos para serem consultados posteriormente, caso necessário.',
    identi: 'purple',
    isOpen: false,
    id: 3
  },
  {
    icon: AvaliaçãoPsicologica,
    title: 'Avaliação Psicológica',
    description: '01 de setembro de 2022',
    text: '',
    miniCard: ['Entrevista Psicológica', 'Aplicação de teste', 'Observação Comportamental'],
    buttons: ['Laudo', 'Atestado', 'Relatório', 'Declaração'],
    identi: 'pink',
    isOpen: false,
    id: 4
  },
  {
    icon: IconSessao,
    title: 'Sessão 02',
    description: '22 de setembro de 2022',
    text: 'A paciente relatou que estava tendo dificuldades com sua família e amigos próximos, pois demostra ansiedade diante de fatos cotidianos, resultando em reações de raiva com as pessoas que estão próximas a ela. Além disso, relatou brigas recentes com seus pais e namorado e, após a briga, ficou mal diante...',
    identi: 'green',
    isOpen: false,
    id: 5
  }
]

export default Section
