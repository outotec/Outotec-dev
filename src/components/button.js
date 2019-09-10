import styled from 'styled-components';
import { colors } from '../styles/constants';

const StyledButton = styled.button`
  background: none;
  color: white;
  font-size: 1rem;
  font-family: 'DINWebPro-Medium W02 Regular';
  text-transform: uppercase;
  border: 4px solid ${colors.accent1};
  padding: 0.8rem 2.875rem 0.8rem 2.875rem;
`;

export default StyledButton;
