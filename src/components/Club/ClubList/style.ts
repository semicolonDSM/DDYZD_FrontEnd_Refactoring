import styled from "@emotion/styled"
import { color } from "@/src/styles";

export const ItemFontWrapper = styled.div`
  margin: 0 10px;
`;

export const ItemImg = styled.img`
  height: 100%;
  width: auto;
`;

export const ItemImgWrap = styled.div`
  width: 270px;
  height: 100px;
  margin: 10px;
  transition: 0.22s margin ease-out;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const ItemHeader = styled.h2`
  font-size: 16px;
  color: black;
  letter-spacing: 0;
  margin: 0 0 3px;
`;

export const ItemSubHeader = styled.h3`
  font-weight: 500;
  font-size: 14px;
  color: ${color.grey600};
  margin: 0 0 -5px;
  width: 268px;
  height: 40px;
  transition: 0.2s all linear;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemWrapper = styled.div<{ max: number; now: number }>`
  cursor: pointer;
  width: 290px;
  height: 200px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid ${color.grey300};
  border-radius: 5px;
  position: relative;
  background: white;
  transition: 0.4s width cubic-bezier(0.3, 0.3, 0, 1), 0.2s box-shadow linear,
    0.4s right cubic-bezier(0.3, 0.3, 0, 1);
  overflow: hidden;
  right: 0;
  &:hover {
    width: 620px;
  }
  &:nth-child(4n):hover {
    right: 330px;
  }
  ${(props) =>
    (props.now + 1) % 4 != 0 &&
    `
      &:hover + div {
        box-shadow: none !important;
      }
    `}
  &:hover > div > ${ItemImgWrap} {
    margin-left: 30px;
  }
  &:hover ${ItemSubHeader} {
    width: 320px;
  }
  z-index: ${(props) => props.max - props.now};
`;

export const ItemDesWrapper = styled.div`
  margin-right: -6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 290px;
`;

export const ItemDes = styled.span`
  font-size: 12px;
  color: ${color.grey600};
`;

export const PointButton = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  outline: none;
  border: none;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 290px);
  grid-gap: 40px;
  margin: 0 auto;
  min-width: 1280px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 1280px;
  padding: 30px 0 100px;
`;

export const PurpleBack = styled.div`
  position: absolute;
  background: ${color.purple400};
  width: 400px;
  height: 350px;
  bottom: 0;
  left: 330px;
  transform-origin: left bottom;
  transform: rotate(17deg);
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  left: 480px;
  bottom: 12px;
  display: flex;
`;

export const RadiusButton = styled.a<{ active?: boolean }>`
  padding: 5px 18px;
  color: white;
  border: none;
  border-radius: 25px;
  background: #350871;
  outline: none;
  font-size: 14px;
  white-space: nowrap;
  ${(props) =>
    props.active &&
    `
      padding: 5px 30px;
      cursor: pointer;
      &:hover {
        background: #2a084a;
      }
    `}
  &:last-child {
    margin-left: 10px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 339px;
  border-radius: 50%;
  width: 66px;
  height: 66px;
  border: 2.5px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to bottom, #f8df7d 10%, #6618ab 55%, #7c36ee 150%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const IntroWrapper = styled.div`
  position: absolute;
  left: 435px;
  top: 30px;
  width: 160px;
  font-size: 12px;
  color: white;
  padding: 10px 5px;
  border-bottom: 2px solid white;
  & p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 60px;
  }
`;
// 아이콘 추가
export const IntroIcon = styled.div`
  position: relative;
`;

export const FieldIconWrapper = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  & svg {
    margin-left: 5px;
  }
`;
