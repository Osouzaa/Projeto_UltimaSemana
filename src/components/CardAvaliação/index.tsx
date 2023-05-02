import S from './style'
import Edit from '@/icons/Edit.svg'
import Olho from '@/icons/olho.svg'
import Section from '@/utils/Seções'

const CardAvaliação = () => {
  return (
    <>
      {Section.map((item, index) => (
        <div key={index}>
          <S.BordarGeral>
            {item.miniCard?.map((cardItem, cardIndex) => (
              <S.ContainerAvaliação key={cardIndex}>
                <S.ContentAvaliação>
                  <p>{cardItem}</p>
                  <S.ContainerIcons>
                    <S.TextSpan>Realizado</S.TextSpan>
                    <S.Image src={Edit} alt="" />
                    <S.Image src={Olho} alt="" />
                  </S.ContainerIcons>
                </S.ContentAvaliação>
              </S.ContainerAvaliação>
            ))}
          </S.BordarGeral>

          {item.buttons && (
            <>
            <S.TextP>Emitir</S.TextP>
              <S.ContainerButtons>
                {item.buttons.map((buttonText, buttonIndex) => (
                  <button key={buttonIndex}>{buttonText}</button>
                ))}
              </S.ContainerButtons>
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default CardAvaliação
