import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import "./Productdetail.css";

function Productdetail() {
  const nevigate = useNavigate();
  const params = useParams(); //to fetch id from url
  console.log(params);
  console.log(params.id);
  const { products: prod } = useApi(
    `http://localhost:3000/product/${params.id}`
  );
  console.log(prod);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card product-detail-card" id="pdetail">
        <img
          className="card-img-top"
          src={prod.img1 || "https://via.placeholder.com/350x220?text=No+Image"}
          alt={prod.name}
        />
        <div className="card-body">
          <span className="product-id-badge">ID: {prod.id}</span>

          <h4 className="card-title product-name">{prod.name}</h4>

          <p className="card-text">
            <strong>Category:</strong> {prod.category}
          </p>
          <p className="card-text">
            <strong>Description:</strong> {prod.description}
          </p>
          <p className="card-text price-text">₹{prod.price}</p>
          <button
            onClick={() =>{
                setTimeout(()=>{
                    nevigate("/product")

                },3000)
            } }
            className="btn btn-outline-primary btn-add"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
