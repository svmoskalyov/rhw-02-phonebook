import { Form, Field } from 'formik';
import styled from 'styled-components';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  padding: 0 ${p => p.theme.space[3]}px;
  width: 90%;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
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
