import styled from 'styled-components';
import backgroundImage from '../../assets/Background.jpg';

export const MainAfterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  padding-top: 50px; /* 상단바 높이만큼 패딩을 추가 */
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center center/cover;
  z-index: -2;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const UserInfo = styled.div`
  margin: 20px;
  font-size: 24px;
  color: white;
  z-index: 1;
  font-weight: 900;
`;

export const PointRectangle = styled.div`
  margin: 20px;
  width: 240px;
  height: 280px;
  border-radius: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  font-weight: bold;
  -webkit-text-stroke: 2px white;
  text-shadow: -2px 2px 4px white;
  z-index: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 70px; /* NavBar 아래에 위치 */
  left: 20px;
  z-index: 1;
`;

export const IconText = styled.div`
  margin: 5px 0;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
`;

export const TreeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const EarthIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: white;
`;
