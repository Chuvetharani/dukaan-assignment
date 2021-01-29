import React from "react";
import "./List.css";
import white from '../images/ice-white.png'
import plus from '../images/plus.png'
import blackcurrant from '../images/blackcurrant.png'
import cup from '../images/cup.png'
import redice from '../images/red.png'
import minus from '../images/minus.png'
import arrow from '../images/arrow.png'

export default function List() {
    return (
        <>
        <div>
            <span className="Ice-Creams">Ice Creams</span><span className="number">10</span>
        </div>
        <div>
            <img src={white} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Ice Cream Bowl</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹209 <span className="txt">₹399</span><span className="addplus ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
            <div className="offer -OFF">30% OFF</div>
        </div>
        <div className="line"></div>
        <div>
            <img src={cup} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Baskin Robbin's Scoop cup</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹399 <span className="Out-of-stock">Out of stock</span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={redice} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Ice Cream Bowl</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹249 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={blackcurrant} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Kwality Walls Black Currant</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹175 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={white} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Ice Cream Bowl</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹209 <span className="txt">₹399</span><span className="addplus ADD"><img style={{ width:12, height:12 }} src={ minus }/> 3 <img style={{ width:12, height:12 }} src={ plus }/></span></div>
            <div className="offer -OFF">30% OFF</div>
        </div>
        <div className="line"></div>
        <div>
            <img src={cup} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Baskin Robbin's Scoop cup</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹399 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={redice} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Ice Cream Bowl</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹249 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={blackcurrant} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Kwality Walls Black Currant</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹175 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={blackcurrant} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Kwality Walls Black Currant</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹175 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={blackcurrant} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Kwality Walls Black Currant</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹175 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={blackcurrant} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Kwality Walls Black Currant</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹175 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div className="line"></div>
        <div>
            <img src={blackcurrant} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Kwality Walls Black Currant</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹175 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        <div style={{ marginTop:28, marginLeft: 91, marginBottom: 32 }}>
            <span className="seeproduct">SEE ALL PRODUCTS <img style={{ width:18, height:18 }} src={ arrow }/></span>
        </div>
        <div>
            <span className="Ice-Creams">Ice Creams</span><span className="number">1</span>
        </div>
        <div style= {{ marginBottom:20 }}>
            <img src={blackcurrant} style={{ marginTop: 5, marginRight: 12, marginLeft: 16 }} className="float-left" width="96" height="96" />
            <p style={{ fontSize: 14 }}>Kwality Walls Black Currant</p>
            <p style={{ fontSize: 12 }}> 1 Unit</p>
            <div>₹175 <span className="addprice ADD">Add <img style={{ width:12, height:12 }} src={ plus }/></span></div>
        </div>
        </>
    )
}