import Image from "next/image";
import React from "react";
import styled from "styled-components";

const LinksContainer = styled.div`
  position: relative;
  background-image: url("/footer-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const Links = styled.div`
  p {
    color: #fff;
    display: block;
    width: fit-content;
    font-size: 0.867rem;
    cursor: pointer;
    &:hover {
      opacity: calc(0.6);
    }
  }
`;

const Footer = () => {
  return (
    <footer className='flex items-center justify-end self-end gap-4 mt-4'>
      <div className=' w-full h-full flex flex-col md:h-60 '>
        <LinksContainer className='w-full flex flex-col px-5 py-12 md:grid md:grid-cols-3 md:gap-4 md:px-12 md:items-center justify-center'>
          <Links>
            <p className='py-1'>Home Menu</p>
            <p className='py-1'>Activities</p>
            <p className='py-1'>Gift vouchers</p>
            <p className='py-1'>Locations</p>
          </Links>
          <Links>
            <p className='py-1'>Contact</p>
            <p className='py-1'>community</p>
            <p className='py-1'>Work with us</p>
            <p className='py-1'>Electronic Invoicing</p>
          </Links>
          <div className=''></div>
        </LinksContainer>

        <div className='w-full md:h-12 h-52 flex flex-col md:grid md:grid-cols-2 md:gap-6 md:md:text-[.694rem] text-[.833rem] md:px-12 md:p-0 md:justify-center md:items-center'>
          <div className='relative'>
            <div className='absolute'></div>
            <div className='w-full md:flex md:gap-4 mb-8 md:m-0 '>
              <p className='cursor-pointer py-2 md:p-0'>
                Términos y condiciones
              </p>
              <p className='cursor-pointer py-2 md:p-0'>
                politicas de privacidad
              </p>
            </div>
          </div>
          <p className='justify-self-end text-[.694rem]'>
            © Idioma Espresso 2023.
            <span className=' block md:inline'>
              Todos los derechos reservados.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
