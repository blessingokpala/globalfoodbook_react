import React from 'react';
import styles from "../Components/MainCss/Kids_Card.css";
import kids_recipe1 from "../../src/images/cherry-puree.jpg";
import kids_recipe2 from "../../src/images/cherry-puree.jpg";
import kids_recipe3 from "../../src/images/cherry-puree.jpg";


function Kids_Card() {
  return (
    <div id="recipes_card" className="container">
      <h3>Kid's Corner</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam reiciendis accusantium corporis labore similique sapiente quibusdam at illo amet impedit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet, doloremque quasi minus ducimus itaque debitis delectus earum esse quisquam nobis perferendis maiores ea error nostrum, et voluptatum libero harum.</p>
      
      <div className="container">
        <div className="card-deck">
          <div className="card">
          <a className="card-img-top" to="/"><img src={kids_recipe1} alt="kids_recipe1" width="100%"/></a>
            <div className="card-body">
              <h5 className="card-title">Cherry puree</h5>
              <div className="recipe-read-more">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum aut fugit est ullam neque, sequi, ratione molestiae labore quis ducimus dolores. Laboriosam consequatur amet excepturi vel sunt, veniam sequi. hhhhhhhggggggg hhhhh hhhh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, error.</p>
              <a id="reusable-button" className="btn btn-primary" href="#" role="button">Read more</a>
              </div>
            </div>
          </div>

          <div className="card">
          <a className="card-img-top" to="/"><img src={kids_recipe2} alt="kids_recipe2" width="100%"/></a>
            <div className="card-body">
              <h5 className="card-title">Papaya puree</h5>
              <div className="recipe-read-more">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum aut fugit est ullam neque, sequi, ratione molestiae labore quis ducimus dolores. Laboriosam consequatur amet excepturi vel sunt, veniam sequi. hhhhhhhggggggg hhhhh hhhh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, error.</p>
              <a id="reusable-button" className="btn btn-primary" href="#" role="button">Read more</a>
              </div>
            </div>
          </div>
          <div className="card">
          <a className="card-img-top" to="/"><img src={kids_recipe3} alt="kids_recipe3" width="100%"/></a>
            <div className="card-body">
              <h5 className="card-title">strawberry puree</h5>
              <div className="recipe-read-more">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorum aut fugit est ullam neque, sequi, ratione molestiae labore quis ducimus dolores. Laboriosam consequatur amet excepturi vel sunt, veniam sequi. hhhhhhhggggggg hhhhh hhhh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, error.</p>
              <a id="reusable-button" className="btn btn-primary" href="#" role="button">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kids_Card
