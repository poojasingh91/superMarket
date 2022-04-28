import { Link } from "react-router-dom";

// read props and render
const CartRow = (props: any) => {
  const prod = props.prod;
  return (
    <li className="minicart-item minicart-item-changed">
      <div className="minicart-details-name">
        <Link to={"/single/" + prod.prodId} className="minicart-name">
          {prod.name}
        </Link>
        <ul className="minicart-attributes">
          <li>Discount: Nrs. {(prod.mprice - prod.dprice).toFixed(2)}</li>
        </ul>
      </div>
      <div className="minicart-details-quantity">
        <input
          className="minicart-quantity"
          type="number"
          value={prod.quantity || 0}
          data-prodid={prod.prodId}
          onChange={props.handleChangeQuantity}
        />
      </div>
      <div className="minicart-details-action">
        <button
          onClick={() => {
            props.handleApply(prod.prodId, prod.cartProdId);
          }}
          type="button"
          className="minicart-inline-btn minicart-apply"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </button>
        {!props.newItem && (
          <button
            onClick={(e: any) => {
              e.target.closest("li").remove();
              props.handleRemove(prod.cartProdId);
            }}
            type="button"
            className="minicart-inline-btn minicart-remove"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        )}
      </div>

      <div className="minicart-details-price">
        <span className="minicart-price">
          NRs. {(prod.quantity * prod.dprice).toFixed(2)}
        </span>
      </div>
    </li>
  );
};

export default CartRow;
