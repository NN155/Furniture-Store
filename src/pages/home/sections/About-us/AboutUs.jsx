import React from "react";
import { AboutUsBg , AboutUsChair } from "../../../../assets/images";
import { Button, SectionTitle } from "../../../../components";

export function AboutUs() {
    return (
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 d-flex aligth-items-center justify-content-center">
                        <img src={AboutUsBg}/>
                    </div>
                    <div className="ps-0 position-relative col-lg-4 col-sm-12 d-flex flex-column justify-content-center">
                        <SectionTitle>About Us</SectionTitle>
                        <p className="fz-76 fw-600 ff-roboto color-black text-uppercase">Furniture of art</p>
                        <p className="fz-22 ff-roboto color-gray">
                            Lorem Ipsum is simply dummy text of the printing
                            and Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.
                        </p>
                        <img className="about-us-chair" src={AboutUsChair} />
                        <div className="d-inline-block">
                            <Button isFilled className="fz-22 fw-bold ff-montserrat">Shop Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}