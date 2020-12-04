import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Electronic from "../component/Electronic";
import Jewelery from "../component/Jewelery";
import MenCloting from "../component/MenClothing";
import WomenCloting from "../component/WomenClothing";


const routes = [
  {
    path: "/men",
    exact: "true",
    componet: () => <MenCloting />,
  },
  {
    path: "/jewelery",
    exact: "",
    componet: () => <Jewelery/>
  },
  {
    path: "/electronic",
    exact: "",
    componet: () => <Electronic/>
  },
  {
    path: "/women-clothing",
    exact: "",
    componet: () => <WomenCloting/>
  },
];

export default function MenuCategory() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0",
          }}
        >
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Nav.Link href="/men">Men Clothing</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/jewelery">Jewelery</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="/electronic">Electronics</Nav.Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Nav.Link href="women-clothing">Women Clothing</Nav.Link>
            </ListGroup.Item>
          </ListGroup>
          {/* <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.componet />}
              />
            ))}
          </Switch> */}
        </div>
        <div style={{ flex: 2, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.componet />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
