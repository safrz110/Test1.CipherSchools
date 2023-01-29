export const Card = (props) => {
    return (
      <>
        <div className="container">
          <div className="card">
            <img
              src="https://www.filmibeat.com/fanimg/artist/86/shahrukh-khan-photos-images-58028.jpg"
              alt=""
            />
            <div className="top_left_discount">{props.curElem.discount}</div>
  
            <div className="description">
              <h2>Shah Rukh Khan</h2>
              <div className="sub_description">
                <span className="discount_price">$5.99</span>
                <span className="actual_price">$9.99</span>
              </div>
            </div>
            <div className="size_div">
              <div className="left_rings_div">
                <div className="rings_div rings_div1"></div>
                <div className="rings_div  rings_div2"></div>
                <div className="rings_div  rings_div3"></div>
              </div>
  
              <div className="right_rings_div">
                <div className="rings_div  rings_div4">S</div>
                <div className="rings_div  rings_div5">M</div>
                <div className="rings_div  rings_div6">L</div>
              </div>
            </div>
  
            <div className="ratings_div">
              <span className="rating">4.4</span>
              <span className="buy">BUY +</span>
            </div>
          </div>
        </div>
        <div className="secondary_card">
          <div className="left_part">
            <span className="tag_line">Monday Happy</span>
            <span className="hash_tag">#MONHPY</span>
          </div>
          <div className="right_part">
            <span className="off">20%</span>
            <span className="off">Off</span>
          </div>
        </div>
      </>
    );
  };
  
