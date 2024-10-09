import React from "react";
import Name from "./Components/Name";
import Image from "./Components/Image";
import Description from "./Components/Description";
import Price from "./Components/Price";
import { Card } from "react-bootstrap";

const firstName = "Amaka";
const backgroundColor = "grey";

function App() {
  return (
    <div className="container mt-5">
      <Card
        style={{
          backgroundColor: backgroundColor,
          color: "white",
          borderRadius: " 10px",
          boxSizing: "border-box",
          width: "18rem",
        }}
      >
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-3">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src="/images/p1.jpg"
              alt="Your Avatar"
              style={{ width: "100px" }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
}

export default App;
