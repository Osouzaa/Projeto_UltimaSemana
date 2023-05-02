import Patient from '@/utils/paciente'
import Demands from '../Demands'
import S from './style'

const IdentificaçãoPaciente = () => {
  return (
    <S.ContainerPacient>
      <div>
        <S.Title>Identificação do paciente</S.Title>

        {Patient.map((Patient, index) => (
          <div key={index}>
            <S.Content>
              <img src={Patient.imagem} alt="" />
              <p>{Patient.title}</p>
            </S.Content>
            <S.GlobalIcons>
              <p>{Patient.text}</p>
            </S.GlobalIcons>
          </div>
        ))}
      </div>
      <Demands />
    </S.ContainerPacient>
  )
}

export default IdentificaçãoPaciente
