import { Card } from "react-bootstrap";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

function Product({ id, title, price, imageUrl }: ProductProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
    </Card>
  );
}

export default Product;
