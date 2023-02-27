import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import TokenUtenti from "./TokenUtenti";

const Aside = () => {
  const [utenti, setUtenti] = useState();

  const AsideFetch = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjY0OGYxOTNlNjAwMTM4MDdmNGYiLCJpYXQiOjE2Nzc0ODU3MTIsImV4cCI6MTY3ODY5NTMxMn0.K-x1r1f3GI44gbmbavOGWzuo0OEpPf5qkw5L1mJaNLI";
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUtenti(data);
      } else {
        console.log("errore nel else di aside");
      }
    } catch (err) {
      console.log("errore nel catch di aside", err);
    }
  };
  useEffect(() => {
    AsideFetch();
  }, []);

  console.log(utenti);
  return (
    <>
      {/* primo div */}
      <div style={{ border: "1px solid gray" }}>
        <div>
          Modifica il tuo profilo e l'URL
          <span className="ps-2">
            <AiFillQuestionCircle style={{ color: "gray" }} />
          </span>
        </div>
        <br />
        <div>
          Aggiungi il tuo profilo in un'altra lingua
          <span className="ps-2">
            <AiFillQuestionCircle style={{ color: "gray" }} />
          </span>
        </div>
      </div>
      {/* secondo div */}
      <div className="p-3" style={{ border: "1px solid gray" }}>
        <Row>
          Annuncio
          <p>
            <BsThreeDots />
          </p>
        </Row>
        <Row>Visita la pagina di E.Distribuzione</Row>
        <Row>
          <Col sx={6}>immagine profilo</Col>
          <Col sx={6}>e-d logo</Col>
        </Row>
        <Row>Diamo molto più valore all'energia</Row>
        <Row>
          <Button>Segui</Button>
        </Row>
      </div>
      {/* terzo div */}
      <div style={{ border: "1px solid gray" }}>
        <div>Altre aziende consultate</div>
        {utenti && utenti.map((e) => <TokenUtenti profile={e} />)}
      </div>
      <div>
        <div>Persone che potresti conoscere</div>
        <Row>
          <Col xs={2}>img</Col>
          <Col xs={10}>
            <Row>
              <p>nome e cognome</p>
              <p>2°</p>
            </Row>
            <Row>
              <p>Lavoro</p>
            </Row>
            <Row>
              <Button>Segui</Button>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Aside;
