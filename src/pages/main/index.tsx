import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container";
import { ContainerAll, Navbar, Title } from "../../styles.d";
import { useMatch } from "react-router-dom";
import { ReadMore } from "../../components/ReadMore";
import { Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { LanguageIcon } from "../../assets/icons";

export const App = () => {
  const match = useMatch("/");
  const navigate = useNavigate();

  const Index = () => (
    <ContainerAll>
      <Text h2>Hola</Text>
      <Container>
        <ReadMore
          text="Esta es una guía rápida para las personas que llegan al refugio. Inicialmente lo presentamos de dos maneras: en afiche, con información gráfica que permite una mayor comprensión de lo que queremos explicar según sea el caso, además de organizar en pasos el proceso para que las personas encuentren en su idioma una orientación rápida de cómo proceder sin mayores intermediarios; y en un código QR, el cual redirige a una web app que se traduce automáticamente al idioma que se necesite. En esta web app se cuenta con un mapa digital del campamento, marcando la ruta más rápida para los diferentes trámites, tiempos aproximados, requisitos, normas de comportamiento y convivencia en cada espacio del campamento."
          maxLength={200}
        />
      </Container>
      <div style={{ marginTop: "1.5em", display: "flex", width:"100%"}}>
        <Button size="md" onClick={()=> navigate("/content/")} shadow color="primary" >Ingresar</Button>
      </div>
    </ContainerAll>
  );
  return (
    <>
      <div>
        <Navbar>
          <div></div>
          <Title>BAMF</Title>
          <div style={{width:"22px", marginTop:'5px'}}>
            <LanguageIcon/>
          </div>
        </Navbar>
        {match && <Index />}
        <Outlet />
      </div>
    </>
  );
};
