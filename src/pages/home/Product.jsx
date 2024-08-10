import React from "react";
import { Card, SectionTitle} from "../../components";
import img from '../../assets/images/product/img.png';
import img2 from '../../assets/images/product/img2.png';
import img3 from '../../assets/images/product/img3.png';
import img4 from '../../assets/images/product/img4.png';
import img5 from '../../assets/images/product/img5.png';

function Product() {
    return (
        <div className="product">
            <SectionTitle>What product we sell</SectionTitle>
            <h3 className="fz-22 ff-roboto color-gray">Find our best products faster, better and qualitier  product’s choices from us.</h3>
                <div class="row" style={{gap: "4em"}}>
                    <Card className="col-lg-2 col-sm-12" rating={4.6} description={"Lorem Iipsum is simple and dumy text."} price={"$150"} title={"Couch Cartoon"} imgSrc={img} />
                    <Card className="col-lg-2 col-sm-12" rating={3} description={"Lorem Iipsum is simple and dumy text."} price={"$300"} title={"Cuero Chair"} imgSrc={img2} />
                    <Card className="col-lg-2 col-sm-12" rating={3.5} description={"Lorem Iipsum is simple and dumy text."} price={"$400"} title={"Bedroom Bed"} imgSrc={img3} />
                    <Card className="col-lg-2 col-sm-12" rating={4} description={"Lorem Iipsum is simple and dumy text."} price={"$320"} title={"Outdoor Table"} imgSrc={img4} />
                    <Card className="col-lg-2 col-sm-12" rating={2.6} description={"Lorem Iipsum is simple and dumy text."} price={"$290"} title={"Wooden Drawer"} imgSrc={img5} />
                </div>
        </div>
    )
}

export default Product;