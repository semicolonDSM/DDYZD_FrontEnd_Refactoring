import { FC, useState } from "react";
import { useRouter } from "next/router";
import club from "@/src/libs/api/club";
import { CreateRoomAndGetRoomId } from "@/src/libs/function/chat";
import { IClubInfo } from '@/src/libs/intefaces/Club';
import * as S from "./styles";

interface Props {
    data: IClubInfo
}

export const ClubUtil: FC<Props> = ({ data }) => {
    const router = useRouter();

    const [info] = useState<IClubInfo>(data);
    const [follow, setFollow] = useState<boolean>(data.follow);

    const onFollow = () => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인을 해주세요 !");
            return;
        } else if (!follow) {
            club.postFollow(info.clubid).then(() => setFollow(true));
        } else {
            club.deleteFollow(info.clubid).then(() => setFollow(false));
        }
    };
    const onSupport = async () => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인을 해주세요 !");
            return;
        }
        const chat_id = await CreateRoomAndGetRoomId(
            Number(router.query.clubid)
        );
        router.push("/chat/" + chat_id);
    };

    const member = `https://api.eungyeol.live/file/icon/member.png`;
    const support = `https://api.eungyeol.live/file/icon/recruitment.png`;

    return (
        <S.Wrapper>
            <S.UtilWrapper>
                <li>
                    <img style={{ width: "15px" }} src={member}></img>
                    <p>멤버</p>
                </li>
                <div>
                    <li>
                        <p onClick={onFollow}>
                            {follow ? "팔로우 취소" : "팔로우"}
                        </p>
                    </li>
                    <li>
                        <img style={{ width: "20px" }} src={support}></img>
                        <p onClick={onSupport}>지원하기</p>
                    </li>
                </div>
            </S.UtilWrapper>
        </S.Wrapper>
    );
}
