import HeaderPageTwo from '@/components/HeaderPageTwo'
import Global from '@/style/global'
import S from './style'
import BtnAdicionar from '@/icons/Btn_Adicionar.svg'
import Buttons from '@/components/Buttons'
import AtençãoConcentrada from '@/components/AtençãoConcentrada'
import MemoriaAplicaçãoTeste from '@/components/MemoriaAplicaçãoTeste'
import InteligenciaTeste from '@/components/InteligênciaTeste'
import { useState } from 'react'
import Personalidade from '@/components/Personalidade'
import Campos from '@/utils/Campos'

interface Valores {
  [key: string]: boolean
}

const AplicacaoTeste = () => {
  const [openAvaliacao, setOpenAvaliacao] = useState(false)
  const [valores, setValores] = useState<Valores>({})
  const [aplicado, setAplicado] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValores({
      ...valores,
      [event.target.name]: event.target.checked
    })
  }

  const handleClick = () => {
    setAplicado(true)
    setOpenAvaliacao(false)
  }

  return (
    <div>
      <Global />
      <S.Container>
        <HeaderPageTwo> Aplicação de Teste</HeaderPageTwo>
        <S.ContentP>{!aplicado && <S.AplicationTest> Por favor, adicione um teste </S.AplicationTest>}</S.ContentP>

        {openAvaliacao && (
          <div>
            <S.Content>
              {Campos.map((item, index) => (
                <S.ContentInputs key={index}>
                  <S.Inputs type={item.type} name={item.nome} onChange={handleChange} />
                  {item.label}
                </S.ContentInputs>
              ))}
              {Object.values(valores).includes(true) && <button onClick={handleClick}>Aplicar</button>}
            </S.Content>
          </div>
        )}
        {aplicado && valores.AtencaoConcentrada && <AtençãoConcentrada />}
        {aplicado && valores.Memoria && <MemoriaAplicaçãoTeste />}
        {aplicado && valores.Inteligencia && <InteligenciaTeste />}
        {aplicado && valores.Personalidade && <Personalidade />}
        {aplicado && <Buttons />}
        <S.Image
          src={BtnAdicionar}
          alt="Botão de adicionar"
          onClick={() => setOpenAvaliacao(true)}
          top={aplicado ? true : undefined}
        />
      </S.Container>
    </div>
  )
}

export default AplicacaoTeste
