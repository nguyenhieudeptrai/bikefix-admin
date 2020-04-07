import React from "react";

import star from "../../../assets/utils/images/star.png";
import unstar from "../../../assets/utils/images/unstar.png";
 const style={
    verticalAlign: "middle",
     display: "inline-block"
 }
const Comment = ({ avatar, name, rate, comment }) => {
    const starImg = [];
    let isEnd = false;
    for (let i = 0; i < 5; i++) {
        if (i == rate) {
            isEnd = true;
        }
        if (isEnd) {
            starImg.push(<img key={i} width={20} src={unstar} />);
        } else {
            starImg.push(<img key={i} width={20} src={star} />);
        }
    }
    console.log(avatar);
    return (
        <div className="comment-item">
            <div className="avatar">
                <img width="40px" className="rounded-circle avatar-big" src={avatar} style={style}/>
                <div style={style}>{name}
                    <br />
                    <div className="rate">
                        {starImg}
                    </div>
                </div>
            </div>
            <div>{comment}</div>
        </div>
    );
}
export default Comment;