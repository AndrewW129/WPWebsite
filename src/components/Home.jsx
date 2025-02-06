import React from "react";
import { Button } from "semantic-ui-react";
import "./Home.css";

function Home() {
  return (
    <>
      <img
        class="home-image"
        src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/462717375_1174110794319839_1066318651950831689_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NpYJIAemMnoQ7kNvgGgGr2Q&_nc_zt=23&_nc_ht=scontent-iad3-2.xx&_nc_gid=AMIdzCyxANQFMKDzrN7Jf5P&oh=00_AYCye1xY8XNTMhZbiBvXwIfALLbcQY3KcbbFRWpG9UVQRw&oe=67A99C84"
        alt="BG_img"
      />
      <div class="text-container">
        <h1 class="home-heading">
          Precision, Punctuality, and a Commitment to Excellence
        </h1>

        <div class="btn-container">
          <Button basic inverted huge>
            FAQs
          </Button>
          <div class="ui animated button basic blue huge" tabindex="0">
            <div class="visible content">Our Process</div>
            <div class="hidden content">
              <i class="right arrow icon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
