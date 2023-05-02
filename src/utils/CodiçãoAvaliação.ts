type ItensCodiçãoProps = {
  id: string
  title?: string
  textplaceholder?: string
}

const ItensCodição: ItensCodiçãoProps[] = [
  { id: 'descansado', title: '01 - Está descansado hoje?', textplaceholder: 'Por que?' },
  { id: 'preparado', title: '02 - Dormiu bem esta noite? ', textplaceholder: 'Quantas horas?' },
  { id: 'exemplo', title: '03 - Está alimentado?' },
  { id: 'alcoólica', title: '04 - Fez uso de bebida alcoólica nas últimas horas? ' },
  { id: 'remedio', title: ' 05 - Fez uso de alguma medicação ontem/hoje? ', textplaceholder: 'Qual (is)?' },
  { id: 'corretivas', title: '06 - Faz uso de lentes corretivas/óculos? ' },
  {
    id: 'medicação',
    title: ' 07 - Considera-se em boas condições para realização da avaliação psicológica?  ',
    textplaceholder: 'Por quê?'
  }
]

export default ItensCodição
