import styled, { css, keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .override-line-height {
    line-height: normal;
  }
`;

export const BookStyle = styled.div`
  margin-top: 15px;
  position: relative;
  z-index: 1;
`;

export const BoldText = styled.span`
  font-size: small;
  font-weight: 500;
  position: relative;
`;

export const BoxIcon = styled.div`
  position: relative;
  float: right;
  right: 18px;
`;

const HilightedTextStyles = `
  background-color: #9aede6;
  padding: 3px 8px;
  border-radius: 4px;
`;

export const BoxText = styled.div`
  font-size: 18px;
  position: relative;
  float: left;
  color: #717171;
  left: 18px;
  div {
    ${props => (props.dropdown === 'guest') ? css`${HilightedTextStyles}` : ''}
  };
`;

export const BoxWrapper = styled.div`
  height: 42px;
  width: 324px;
  border: 1px solid #ebebeb;
  border-radius: 2px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const ButtonAddGuest = styled(Button)`
  font-size: 30px;
  color: ${(props) => {
    return (props.disabled) ? '#b4dadb' : '#12858a';
  }};
  cursor: ${(props) => {
    return (props.disabled) ? 'default' : 'pointer';
  }};

`;

export const ButtonQuest = styled(Button)`
  font-size: 15px;
  margin-left: 5px;
  &:hover {
    color: rgb(0, 132, 137);
  };
`;

export const ButtonSubmit = styled(Button)`
  width: 322px;
  height: 3em;
  background-color: #fd5a5f;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 4px;
  margin-top: 26px;
  margin-left: 1px;
`;

export const ButtonUnderline = styled(Button)`
  font-size: 14px;
  color: #616161;
  &:hover {
    text-decoration: underline;
  };
`;

export const ButtonClose = styled(ButtonUnderline)`
  font-size: 16px;
  color: #108489;
`;

export const ButtonWrapper = styled.div`
  button:focus {
    color: #e7e7e7;
  }
`;

export const FlagWidget = styled.div`
  text-align: center;
  margin: 15px;
`;

export const CenterText = styled(FlagWidget)`
  margin: 10px;
  font-weight: 500;
  font-size: 12px;
`;

export const CalSelect = styled.input`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 148px;
  height: 100%;
  font-size: medium;
  padding-left: 18px;
  border: none;
`;

export const Divider = styled.hr`
  background-color: transparent;
  border: 0.5px solid #ebebeb;
`;

export const PriceSummDivider = styled(Divider)`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
`;

export const GuestsStyle = styled.div`
  margin-top: 12px;
`;

export const GuestDropdownStyle = styled.div`
  height: 308px;
  width: 100%;
  border: 0.5px solid #dedede;
  border-top: 2px solid #0e787c;
  box-shadow: -0.5px 0.5px 4px #dedede;
  border-radius: 4px;
  position: relative;
  top: -2px;
  z-index: 3;
  background-color: white;
`;

export const GuestRowStyle = styled.div`
  height: 72px;
  width: 294px;
`;

export const GuestMenuBtn = styled(Button)`
  width: 100%;
  height: 100%;
  text-align: unset;
`;

export const Module = styled.div`
  box-sizing: border-box;
  min-height: 365px;
  border: 1px solid #ebebeb;
  margin-top: 25px;
  padding: 18px 26px 15px 26px;
`;

export const MainWrapper = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 0 0 51px;
  color: #484848;
  width: 377px;
`;

export const Price = styled.span`
  font-size: x-large;
  font-weight: bold;
`;

export const PriceSummaryStyle = styled.div`
  box-sizing: border-box;
  height: 131px;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 2px;
`;

export const PriceSummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  height: 21px;
  font-size: 14px;
  font-weight: 400;
  padding-top: 3px;
  box-sizing: border-box;
`;

const slide = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }
  25% {
    max-height: 150px;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    max-height: 150px;
    transform: translateY(0);
  }
`;

export const SlideDown = styled.div`
  animation: 2s ${slide};
  animation-delay: 2s;
  animation-fill-mode: forwards;
  overflow-y: hidden;
  max-height: 0;
  position: static;
`;

export const StarStyle = styled.span`
  color: #108489;
  position: relative;
  bottom: 2.5px;
  font-size: xx-small;
`;

export const Text = styled.div`
  font-size: 14.75px;
  padding: 4px 0;
  line-height: normal;
`;

export const TextSelect = styled.div`
  input:focus {
    background-color: #9aede6;
  };
`;

export const TimeAgoStyle = styled.div`
  margin-left: 25px;
  padding-bottom: 20px;
  font-size: small;
`;
