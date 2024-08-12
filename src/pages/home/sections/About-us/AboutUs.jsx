import React from "react";
import { AboutUsBg , AboutUsChair } from "../../../../assets/images";

export function AboutUs() {
    return (
        <section className="about-us p-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img src={AboutUsBg} alt="Chair" />
                    </div>
                    <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
                        <h2 className="fz-40 ff-roboto color-black fw-500">About Us</h2>
                        <p className="fz-22 ff-roboto color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu semper risus magna ac quam. Sed rutrum ligula sit amet sagittis condimentum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et.</p>
                        <p className="fz-22 ff-roboto color-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris auctor lorem, eu semper risus magna ac quam. Sed rutrum ligula sit amet sagittis condimentum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et.</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}