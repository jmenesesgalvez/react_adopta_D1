import Card from "react-bootstrap";
import Tags from "./Tags";

const Producto1 = (props) => {
  return (
     <div className="cards">
      <div className="card">
        <Card.img src={props.image} alt="" className="image-card" />
        <div className="card-body">
          <Card.name>{props.name}</Card.name>
          <Card.description>{props.description}</Card.description>
          <Card.span class="badge badge-pill badge-primary">{props.tag}</Card.span> 
        </div>
      </div>
    </div>
  );
};

export default Producto1;
