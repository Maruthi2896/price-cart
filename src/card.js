import React from "react";
import { useState } from "react";

function Card({ setCard, obj, card }) {
  const [button, setButton] = useState(false);
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            {obj.sale}
          </div>

          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{obj.title}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
              <span className="text-muted text-decoration-line-through">
                {obj.mark}
              </span>
              {obj.rate}
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {button ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  disabled
                  onClick={() => {
                    setCard(card + 1);
                    setButton(!button);
                  }}
                >
                  {obj.button}
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setCard(card + 1);
                    setButton(!button);
                  }}
                >
                  {obj.button}
                </button>
              )}
              <br /> <br />
              {!button ? (
                <div></div>
              ) : (
                <button
                  style={{ borderRadius: "8px" }}
                  onClick={() => {
                    setButton(!button);
                    setCard(card - 1);
                  }}
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
