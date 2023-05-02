import Social from '../icons/Social.svg'
import Prancheta from '../icons/Prancheta.svg'
import Engrenagem from '../icons/Engrenagem.svg'
import Vector from '../icons/Vector.png'

type PropsItem = {
  imagem: string
  text: string
  ListItens?: string[],
  
}

const Array: PropsItem[] = [
  {
    imagem: Social,
    text: 'Meus Pacientes'
  },
  {
    imagem: Prancheta,
    text: 'Modelos',
    ListItens: ['Entrevistas', 'Roteiro de testes', ' Documentos']
  },
  {
    imagem: Vector,
    text: 'Cadastros',
    ListItens: ['Perguntas', 'Testes', 'Tipos de Avaliações']
  },
  {
    imagem: Engrenagem,
    text: 'Preferências'
  }
]

export default Array
