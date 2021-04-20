import * as S from "./styles"
import { IClubInfo } from '@/src/libs/intefaces/Club';

export const ClubHeader = ({data} : {data : IClubInfo}) => {
    return(
        <S.Wrapper>
            <S.BannerWrapper>
                <img alt="back_image" src={`https://api.semicolon.live/file/${data?.backimage}`}></img>
            </S.BannerWrapper>
            <S.InfoWrapper>
                <S.Center>
                    <img  alt="club_image" src={`https://api.semicolon.live/file/${data?.clubimage}`}></img>
                    <p>{data?.clubname}
                        <br></br>
                        <S.Description> { data?.description } </S.Description>
                    </p>
                </S.Center>
            </S.InfoWrapper>
        </S.Wrapper>
    )
}
export default ClubHeader