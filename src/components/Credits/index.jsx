import { Container, Title } from "./styles";
import { getImages } from "../../components/../util/get_Images";

function Credits({ info }) {
  return (
    <>
      <Title>Creditos</Title>
      {info && (
        <Container>
          {info.slice(0, 6).map((credit) => (
            
              <div key={credit.id}>
                <img src={getImages(credit.profile_path)} alt={credit.name} />
                <p>{credit.name}</p>
              </div>
          ))}
          <div></div>
        </Container>
      )}
    </>
  );
}

export default Credits;
