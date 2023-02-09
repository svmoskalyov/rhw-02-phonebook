import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  list-style: inside;
`;
