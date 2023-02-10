import { StyledButton } from './Button.styled';

export const Button = ({
  type = 'button',
  icon: Icon = null,
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};
