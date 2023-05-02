type ItensVidaProfissionalProps = {
  id: string
  title?: string
  textplaceholder?: string
  Answers?: string
  options?: string[]
}

const ItensVidaProfissional: ItensVidaProfissionalProps[] = [
  {
    id: 'Atualmente',
    title: '15 - Atualmente: ',
    options: ['Aposentado', 'Desempregado', 'Nunca trabalhou', 'Está Trabalhando']
  },
  {
    id: 'desempenhada',
    title: ' 16 - Função desempenhada? Há quanto tempo?   ',
    textplaceholder: 'Quantos e qual a idade?',
    Answers: 'No'
  },
  { id: 'satisfeito', title: '17 - Está satisfeito com o que faz?', textplaceholder: 'Por quê?' },
  {
    id: 'problemaeas',
    title: '18 - Trabalha em que turno? ',
    textplaceholder: 'Nota',
    options: ['Diurno', 'Noturno', 'Rodízio de turnos Horário:']
  },
  { id: 'irmãos', title: '19 - Está afastado pelo INSS?', textplaceholder: 'Por qual motivo?' }
]

export default ItensVidaProfissional
