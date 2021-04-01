import React from 'react';
import styles from "../Components/MainCss/Latestrecipe_Author.css";
import latestrecipe from "../../src/images/okra-soup.jpeg";
import author from "../../src/images/blessing.png";


function Latestrecipe_Author() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Latest recipe</h1>
          <a className="latest-recipe" to="/"><img src={latestrecipe} alt="latest recipe" height="900" width="700"/></a>
          <div className="read-more">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam suscipit cumque architecto. Quidem aspernatur at necessitatibus vel vero quae ab incidunt unde laudantium quia? Dignissimos esse placeat sunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto consequuntur veritatis incidunt, rerum quos dolorem sunt perspiciatis corrupti neque sint saepe aliquam vel ex. Alias assumenda voluptatibus ut inventore aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem optio doloribus numquam eum sequi eos sunt aliquid officiis ducimus.</p>
            <a id="reusable-button" className="btn btn-primary" href="#" role="button">Read more</a>
          </div>
        </div>
        <div className="col-4">
          <h4>HI! LOVELY TO MEET YOU</h4>
          <a className="author" to="/"><img src={author} alt="Blessing Okpala" /></a>
          <div className="read-more">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam suscipit cumque architecto. Quidem aspernatur at necessitatibus vel vero quae ab incidunt unde laudantium quia? Dignissimos esse placeat sunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto consequuntur veritatis incidunt, rerum quos dolorem sunt perspiciatis corrupti neque sint saepe aliquam vel ex. Alias assumenda voluptatibus ut inventore aut.</p>
            <a id="reusable-button" className="btn btn-primary" href="#" role="button">Read more</a>
          </div>
          <div id="subscribe" className="read-more">
            <p>Subscribe to Global Food Book's email updates and get a FREE eBook on benefits of organic food.</p>
            <a id="reusable-button" className="btn btn-primary" href="#" role="button">SUBSCRIBE VIA EMAIL</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latestrecipe_Author
