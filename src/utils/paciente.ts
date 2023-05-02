import Person from '../icons/Person.svg'
import SuitCase from '../icons/Suitcase.svg'
import Work from '../icons/Work.svg'
import School from '../icons/School.svg'

type Props = {
  imagem: string,
  text: string,
  title: string
}

const Patient: Props[] = [
  {
    imagem: Person,
    text: 'Ana Luiza',
    title: 'Paciente'
  },
  {
    imagem: SuitCase,
    text: '10/09/2000',
    title: 'Nascimento'
  },
  {
    imagem: Work,
    text: '10/09/2000',
    title: 'Profissão'
  },
  {
    imagem: School,
    text: 'Superior incompleto',
    title: 'Escolaridade'
  }
]

export default Patient
