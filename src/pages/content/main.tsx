import { Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { BackArrowIcon } from "../../assets/icons";
import { Container } from "../../components/Container";
import { ContainerTitle, Description } from "../../styles.d";

export const Main = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "Llegada",
      description:
        "el campamento recibe sus documentos para iniciar su proceso. \n Luego se le entrega una tarjeta amarilla provisional, que cambiará una vez haga su registro.",
      url: "/",
    },
    {
      title: "Registro",
      description:
        "El registro se hace en la casa 8. Solamente funciona de 8:00 a 10:00 de la mañana. Ahí se le entregará una tarjeta amarilla con su foto y diez celdas. Cada una de ellas son los pasos de su proceso. Esta tarjeta será su documento más importante dentro del campamento.",
      url: "/register",
    },
  ];

  return (
    <>
        <div onClick={()=> navigate(-1)} style={{width:'24px', marginTop:'20px'}}>
        <BackArrowIcon/>
        </div>
      {data?.map((element, index) => (
        <Container key={index}>
          <div>{index + 1}.</div>
          <div>
            <ContainerTitle>{element.title}</ContainerTitle>
            <Description>
                {element.description}
            </Description>
          </div>
        </Container>
      ))}
    </>
  );
};
