import styled from 'styled-components';
import ShareLinks from '~/components/shared/ShareLinks';

export const Tags = styled.div`
  font-size: 13px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  margin: -2px;
  a {
    display: block;
    margin: 2px;
    background: ${props => `${props.theme.colors.cardbgcolor}`};
    padding: 4px 11px;
    color: inherit;
    border-radius: 1.5px;
    transition: background 0.12s;
    ${Tags} {
      padding: 2px 8px;
    }
    &:hover {
      color: inherit;
      background: ${props => `${props.theme.colors.tagBgHoverColor}`};
    }
    &:active {
      transition-duration: 0s;
      background: ${props => `${props.theme.colors.tagBgActiveColor}`};
    }
  }
`;

export const ProductShareLinks = styled(ShareLinks)`
  margin-top: 18px;
`;