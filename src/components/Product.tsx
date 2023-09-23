import { Card, Button } from "react-bootstrap";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

function Product({ id, title, price, imageUrl }: ProductProps) {
  const qty = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column bg-dark">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2 text-light">{title}</span>
          <span className="fs-2 text-light">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {qty === 0 ? (
            <Button className="w-100 btn-secondary">Add to cart</Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
