import React from "react";
import { Link } from "react-router-dom";


function Home() {

    return (
        <div className="homePage">
           <nav>
             <h1>Welcome to Wangui Pizzaria!! </h1>
             <img src="https://i.redd.it/gbaa61y9nxn21.jpg" />
             <img src="https://godrunning.com/wp-content/uploads/2016/03/burnt-pizza-by-isriya-paireepairit-cc.jpg" />

             <Link to="/pizza"><p><button id="order-pizza">Order Pizza!</button></p></Link>

           </nav>

       </div>
       
          );
       
       }
       
       export default Home;