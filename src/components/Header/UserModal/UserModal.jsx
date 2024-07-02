import React from "react";
import { NavLink } from "react-router-dom";


import { ProfieleModalContainer } from "./UserModal.styled";
export const UserModal = () => {
  return (
    <ProfieleModalContainer>
      <NavLink to="/czyInstruktor">Zarejestruj</NavLink>
      <NavLink to="/zaloguj">Zaloguj</NavLink>
    </ProfieleModalContainer>
  );
};
