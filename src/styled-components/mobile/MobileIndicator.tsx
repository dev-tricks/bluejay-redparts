import styled from 'styled-components';

export const MobileIndicator = styled.div`
  position: relative;
`;

export const MobileIndicatorButton = styled.a`
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  height: 50px;
  width: 44px;
  color: inherit;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  &:hover {
    color: inherit;
    background: rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }
`;

export const MobileIndicatorIcon = styled.span`
  display: block;
  position: relative;
  fill: ${(props) => `${props.theme.colors.white}`};

  svg {
    display: block;
  }
`;

export const MobileIndicatorCounter = styled.span`
  position: absolute;
  top: -7px;
  font-size: 10px;
  line-height: 1;
  padding: 2px 3px 1px;
  border-radius: 6.5px;
  text-align: center;
  z-index: 0;
  color: ${(props) => `${props.theme.colors.white}`};
  font-weight: ${(props) => `${props.theme.fontWeight.medium}`};
  right: -7px;
  background-color: ${(props) => `${props.theme.colors.dark}`};

  &:before {
    display: block;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 2.5px;
    background-color: ${(props) => `${props.theme.colors.dark}`};
    transform: skewX(-11deg);
  }
  @media (min-width: 1152px) {
    font-weight: ${(props) => `${props.theme.fontWeight.normal}`};
  }
`;
