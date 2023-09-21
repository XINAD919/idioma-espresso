import React, { ReactNode, FC, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
  transition: all 0.25s ease;
  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.linkBorder};
  }
  .header {
    border-bottom: 1px solid ${(props) => props.theme.border};
  }
`;

const lightTheme = {
  body: "#FAF6F2",
  backgroundColor: "#FAF6F2",
  color: "#BA8B64",
  icon: "#000",
  linkBorder: "#BA8B64",
  border: "#ffebd6"
};
const darkTheme = {
  body: "#1D0027",
  backgroundColor: "#1D0027",
  color: "#B155A8",
  icon: "#BBE1FA",
  linkBorder: "#3DD8FC",
  border:"#2E003E"
};

const PublicLayout: FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const activeTheme = theme === "Dark" ? darkTheme : lightTheme;

  return (
    <StyledApp theme={activeTheme}>
      <Header />
      <main className='w-4/5 mx-auto'>{children}</main>
      <Footer />
    </StyledApp>
  );
};

export default PublicLayout;
