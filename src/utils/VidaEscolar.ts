type ItensVidaEscolarProps = {
  id: string
  title?: string
  textplaceholder?: string
  Answers?: string
  options?: string[]
}

const ItensVidaEscolar: ItensVidaEscolarProps[] = [
  {
    id: 'Escolaridade',
    title: '20 - Escolaridade:',
    options: [
      'Superior incompleto',
      'Superior completo',
      'Médio incompleto',
      'Médio completo',
      'Fundamental incompleto',
      'Fundamental completo',
      'Primário',
      'Alfabetizado'
    ]
  },
  { id: 'estudando', title: ' 21 - Está estudando?  ', textplaceholder: 'Parou há quanto tempo? ' },
  { id: 'mora', title: '22 - Ensino:', textplaceholder: 'Nota', options: ['Regular', 'Supletivo ', 'A distância '] }
]

export default ItensVidaEscolar
