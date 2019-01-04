import styled from 'styled-components';

export const FlexContainer_Row = styled.div`
  display: flex;
  flex-direction: row;
  `;

export const FlexContainer_Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexContainer_Row_SpaceBetween = styled(FlexContainer_Row)`
  justify-content: space-between;
`;

export const AppContainer = styled(FlexContainer_Column)`
  width: 550px;
  font-size: 15px;
  font-family: Montserrat;
`;

export const TopBarStyleContainer = styled(FlexContainer_Row_SpaceBetween)`
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const BlendedStarsContainer = styled(FlexContainer_Column)`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const BlendedStarsSpan = styled.span`
  font-size: 20px;
  padding-right: 10px;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: auto;
`;

export const Byline = styled.div`
  padding-left: 10px;
`;

export const ReviewContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 15px;
`;

export const HostResponseContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 15px;
  padding-left: 10px;
`;

export const Divider = styled.hr`
  background-color: transparent;
  border: 0.5px solid #ebebeb;
`;

export const StarStyle = styled.span`
  color: #008699;
  position: relative;
  bottom: 2.5px;
  font-size: 12px;
`;

export const FlagStyle = styled.div`
  color: #C0C0C0;
  position: relative;
  bottom: 2.5px;
  font-size: 12px;
`;

export const BlendedStarStyle = styled(StarStyle)`
  font-size: 15px;
`;

export const FilterMessageText = styled.div`
  font-size: 15px;
`;

export const TextButton = styled.button`
  padding-right: 7.5px;
  padding-left: 7.5px
  border: none;
  font: inherit;
  background-color: transparent;
  font-size: 15px;
  color: #008699;
`;
