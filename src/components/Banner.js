import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Banner({ labels }) {
  return (
    <Card className="text-center w-50 m-auto my-4">
      <Card.Header>{labels.title}</Card.Header>
      <Card.Body>
        <Card.Title>
          {labels.desc} {labels.creator}
        </Card.Title>
        <Card.Text>
          <img className="mainLogo" src={labels.mainLogo} />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Banner;
