import S from './style'
import PDF from '@/icons/IconsCard/PDF.svg'

const CardAnexo = () => {
    return (
        <S.ContainerAnexo>
              <p>02 Anexos</p>
              <S.ContainerPDF>
                <img src={PDF} alt="" />
                <span>nomedoarquivo.pdf (430 KB)</span>
              </S.ContainerPDF>
              <S.ContainerPDF>
                <img src={PDF} alt="" />
                <span>nomedoarquivo.pdf (430 KB)</span>
              </S.ContainerPDF>
            </S.ContainerAnexo>
    )
}

export default CardAnexo