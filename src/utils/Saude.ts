type ItensSaudeProps = {
  id: string
  title?: string
  textplaceholder?: string
  Answers?: string
  options?: string[]
}

const ItensSaude: ItensSaudeProps[] = [
  {
    id: 'civil',
    title: '23 - Tem ou já teve problema de saúde com necessidade de acompanhamento médico/psicológico?',
    textplaceholder: 'Qual?'
  },
  { id: 'medicamentos', title: '24 - Faz uso de medicamentos?  ', textplaceholder: 'Qual (is)?' },
  {
    id: 'deficiência',
    title: '25 -Possui deficiência? ',
    textplaceholder: 'Qual?',
    Answers: 'No',
    options: ['Visual', 'Fala', 'Auditiva', 'Física', 'Não']
  },
  {
    id: 'desmaios',
    title: '26 - Sente desmaios, tontura, mal estar, dores de cabeça constantes, crises convulsivas? '
  },
  { id: 'acidente', title: '27 - Já sofreu algum acidente, tombo, fratura, pancada na cabeça?  ' },
  {
    id: 'atividade',
    title: ' 28 - Pratica alguma atividade física? ',
    textplaceholder: 'Quais?'
  }
]

export default ItensSaude
