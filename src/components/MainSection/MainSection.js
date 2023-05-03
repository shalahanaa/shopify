import "./MainSection.css";
import MainImg from "./main-img.png";
import {BsArrowUpRight} from "react-icons/bs";
import LogoImg from "./⁬img.png";

const MainSection = () => {
    return(
        <div className="main-container">
            <div className="main-left-side">
            <button className="main-btn">Shopify Editions | Winter'23: Explore 100+ product updates
            <BsArrowUpRight className="up-arrow"/>
            </button>
            <h1 className="title">Build any commerce experience</h1>
            <hr className="main-hr"></hr>
            <p className="main-p">
            Compose, customize, and extend every part of the commerce stack—from
            storefront to checkout to backend integrations—and create unique
            experiences for your brand or millions of merchants around the world.
            </p>
            <a href="a" className="main-a">Explore docs &rarr;</a>
            </div>
            <img src={MainImg} alt=""/>
            <div className="main-logos">
            <img  className="logoimg" src={LogoImg} alt=""/>
            </div>
        </div>
    )
}

export default MainSection;