import Card from "./card";
import "./App.css";
import { useState } from "react";

function App() {
  const array = [
    {
      title: "Fancy Product",
      rate: "$40.00-$80.00",
      button: "add to cart",
      rating: "",
      sale: true,
      mark: "$20",
    },
    {
      title: "Sale Item",
      rate: "$25.00",
      button: "add to cart",
      rating: "",
      sale: true,
      mark: "$50.00",
    },
    {
      title: "Popular-Item",
      rate: "$40.00",
      button: "Add to cart",
      rating: "⭐⭐⭐⭐⭐",
      sale: false,
      mark: "",
    },
    {
      title: "Sale Item",
      rate: "$25.00",
      button: "Add to cart",
      rating: "",
      sale: true,
      mark: "$50.00",
    },
    {
      title: "Fancy Product",
      rate: "$120.00-$280.00",
      button: "View Option",
      rating: "",
      sale: false,
      mark: "",
    },
    {
      title: "Special Item",
      rate: "$180.00",
      button: "Add to cart",
      rating: "",
      sale: true,
      mark: "$200.00",
    },
    {
      title: "Popular Item",
      rate: "$40.00",
      button: "Add to cart",
      rating: "⭐⭐⭐⭐⭐",
      sale: false,
      mark: "",
    },
    {
      title: "Popular Item",
      rate: "$40.00",
      button: "Add to cart",
      rating: "⭐⭐⭐⭐⭐",
      sale: false,
      mark: "",
    },
  ];
  const [card, setCard] = useState(0);
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {card}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {array.map((ele) => (
              <Card setCard={setCard} obj={ele} card={card} />
            ))}
          </div>
        </div>
      </section>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Guvi-Zen Website Tasks 2023 BY Maruthi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
