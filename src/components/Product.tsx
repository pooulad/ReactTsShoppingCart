import { Card, Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

function Product({ id, title, price, imageUrl }: ProductProps) {
  const { getItemQty, addItem, decreaseItem, removeItem } = useCartContext();
  const qty = getItemQty(id);
  console.log(qty);
  
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
            <Button
              className="w-100 btn-secondary"
              onClick={() => {
                addItem(id);
              }}
            >
              Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  className="btn-secondary"
                  onClick={() => {
                    addItem(id);
                  }}
                >
                  +
                </Button>
                <span className="text-light m-3">{qty}</span>
                <Button
                  className="btn-secondary"
                  onClick={() => {
                    decreaseItem(id);
                  }}
                >
                  -
                </Button>
              </div>
              <Button
                className="btn-dark"
                size="sm"
                onClick={() => {
                  removeItem(id);
                }}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
