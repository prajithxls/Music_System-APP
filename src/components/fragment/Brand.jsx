import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/logonew.jpg"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        <img src={Logo} width={"50px"} alt=""/>
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;