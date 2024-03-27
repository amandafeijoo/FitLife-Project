
import styled from 'styled-components';

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color:rgba(246, 169, 76, 0.691) ;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 320px) {
        grid-template-columns: repeat(1, 1fr);

    }
`;
    
const Card = styled.div`
    background-color:rgba(236, 158, 158, 0.691) ;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  /* Mueve la tarjeta hacia arriba cuando pasas el mouse por encima */
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
  color: #b36d84;
`;

const Text = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: #6f6a63;
`;

export default function Instructores() {
    return (
        <Grid>
            <Card>
                <div className="space-y-2">
                    <Image
                        alt="MARTHA"
                        className="w-full h-auto"
                        height="500"
                        src="/pilates.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>MARTHA</Title>
                    <Text>Pilates, Yoga</Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="JAVIER"
                        className="w-full h-auto"
                        height="500"
                        src="/boxeo.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>JAVIER</Title>
                    <Text> Boxeo </Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="ANDREA"
                        className="w-full h-auto"
                        height="500"
                        src="/cardio.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>ANDREA</Title>
                    <Text>Cardio </Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="NATALIA"
                        className="w-full h-auto"
                        height="500"
                        src="/Fuerza.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>NATALIA</Title>
                    <Text>Fuerza</Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="LAURA"
                        className="w-full h-auto"
                        height="500"
                        src="/yoga.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>LAURA</Title>
                    <Text>Yoga, Pilates</Text>
                </div>
            </Card>

            <Card>
                <div className="space-y-2">
                    <Image
                        alt="DIEGO"
                        className="w-full h-auto"
                        height="500"
                        src="/boxeo2.jpg"
                        style={{
                            aspectRatio: "333/500",
                            objectFit: "cover",
                        }}
                        width="333"
                    />
                    <Title>DIEGO</Title>
                    <Text>Boxeo</Text>
                </div>
            </Card>
        </Grid>
    );
}

