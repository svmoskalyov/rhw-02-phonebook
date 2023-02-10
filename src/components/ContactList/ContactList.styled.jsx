import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[5]}px;
  width: 60%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
