//CREATING AN APPLICATION
/*import React from "react";
import ReactDom from "react-dom/client";
import Booklist from "./book";
const Greeting = () =>{
    return <h3>My first Component</h3>;
    /*<div> <h3>My first Component</h3>;</div>

}

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Booklist/>);

export default Greeting;*/

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>Great Womens forever</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={books.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);


