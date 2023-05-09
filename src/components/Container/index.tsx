import React from "react";
import { ContainerStyles } from "../../styles.d";

interface Props {
    children?:  React.ReactNode;
}

export const Container = ({children}:Props) => {
  return (
    <ContainerStyles>
        {children}
    </ContainerStyles>
  )
}
