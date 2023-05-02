import S from './style'
import Lixeira from '@/icons/lixeira.svg'

const CamposAtenção = [
  {
    title: 'Memória',
    inputs: [
      { label: 'Nome', type: 'text' },
      { label: 'Número de pontos', type: 'text' },
      { label: 'Percentil', type: 'text' },
      { label: 'Resultado', type: 'text' }
    ],
    obsLabel: 'Obs:',
    obsPlaceholder: 'Descrição da observação'
  }
]

const MemoriaAplicaçãoTeste = () => {
  return (
    <div>
      {CamposAtenção.map((item, index) => (
        <S.Card key={index}>
          <S.ContentTitle>
            <h3>{item.title}</h3>
            <img src={Lixeira} alt="" />
          </S.ContentTitle>
          <S.DivContent>
            {item.inputs.map((input, i) => (
              <S.ContentInput key={i}>
                <label htmlFor="">{input.label}</label>
                <input type={input.type} />
              </S.ContentInput>
            ))}
          </S.DivContent>
          <S.InputObs>
            <label htmlFor="">{item.obsLabel}</label>
            <input type="text" placeholder={item.obsPlaceholder} />
          </S.InputObs>
        </S.Card>
      ))}
    </div>
  )
}

export default MemoriaAplicaçãoTeste
