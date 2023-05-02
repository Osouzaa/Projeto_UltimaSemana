type ItensHistoricoProps = {
  id: string;
  title?: string;
  textplaceholder?: string;
  Answers?: string;
  options?:string[]
}

const ItensHistorico:ItensHistoricoProps[] = [
  {
    id: 'civil',
    title: '08 - Estado civil:',
    options: ['Divorciado', 'Viúvo', 'Solteiro', 'Casado', 'União estável']
  },
  { id: 'filhos', title: ' 09 - Possui filhos?  ', textplaceholder: 'Quantos e qual a idade?' },
  { id: 'mora', textplaceholder: '10 - Com quem você mora?', Answers: 'No' },
  { id: 'problemaass', title: '11 - Está enfrentando problemas familiares?', textplaceholder: 'Quais?' },
  { id: 'irmãos', title: '12 - Possui irmãos?', textplaceholder: 'Quantos?' },
  { id: 'relacionamento', textplaceholder: '13 - Como é seu relacionamento com sua família?', Answers: 'No' },
  {
    id: 'médicos',
    title: '14- Na família existe alguém que necessite de cuidados médicos ou psicológicos?  ',
    textplaceholder: 'Nota'
  }
]

export default ItensHistorico
