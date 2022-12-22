import HeaderContainer from "./HeaderContainer";

interface HeaderContainerProps {
  title: string;
}

const Header: React.FC<HeaderContainerProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;
