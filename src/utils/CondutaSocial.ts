type ItemCondutaSocialProps = {
  id: string
  title?: string
  textplaceholder?: string
  Answers?: string
}

const ItensCondutaSocial: ItemCondutaSocialProps[] = [
  {
    id: 'cigarros',
    title: '29 - Faz uso de cigarros?',
    textplaceholder: 'Quantos por dia?'
  },
  { id: 'fumante', title: '  30 - É ex-fumante?  ', textplaceholder: 'Há quanto tempo ' },
  { id: 'café', title: '31 - Faz ingestão de café? ', textplaceholder: 'Frequência:' },
  { id: 'problemaas', title: '32 - Faz uso de bebida alcoólica?', textplaceholder: 'Quantidade/frequência:	' },
  { id: 'problemass', title: ' 33 - Já usou ou usa algum tipo de droga? ', textplaceholder: 'Qual/frequência: ' },
  { id: 'probleemas', title: '34 - Faz/fez tratamento para deixar de usar? ', textplaceholder: 'Por quê?	' },
  { id: 'irmãos', textplaceholder: '35 - Quais são suas atividades de lazer, hobbies?', Answers: 'No' },
  { id: 'relacionamento', title: '36 - Pratica alguma religião? ', textplaceholder: 'Qual/frequência:' },
  {
    id: 'médicos',
    title: '37 - Houve alguma mudança na sua rotina nas últimas semanas?  ',
    textplaceholder: 'Nota'
  },
  {
    id: 'antecedente',
    title: '38 - Possui antecedente penal/criminal?   '
  },
  {
    id: 'passagem',
    title: '39 - Já teve passagem pela delegacia? ',
    textplaceholder: 'Nota'
  },
  {
    id: 'vida',
    textplaceholder: '40 - Qual a sua meta de vida?',
    Answers: 'No'
  },
  {
    id: 'ponto',
    textplaceholder: '41 - Fale sobre você: 1 ponto positivo e 1 ponto negativo: ',
    Answers: 'No'
  },
  {
    id: 'redução',
    textplaceholder: '42 - Sugestão para redução de acidentes no trânsito: ',
    Answers: 'No'
  }
]

export default ItensCondutaSocial
