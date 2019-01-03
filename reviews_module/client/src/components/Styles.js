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
  width: 450px;
  font-size: 15px;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: auto;
`;

export const ReviewContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const HostResponseContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
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
  font-size: xx-small;
`;

export const TextButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  background-color: transparent;
  font-size: 12px;
  color: #008699;
`;
