import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Hero() {
    const slides = [
        {
            type: "youtube",
            content: (
                <div>
                <h2>Check out the latest youtube video:</h2>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img />
                </a>
                </div>
            ),
        },
        {
            type: "reviews",
            content: (
            <div>
                <h2>Featured Review</h2>
                <p>Check out the latest in-depth review</p>
                <a href="" className="">Read Review</a>
            </div>
            ),
        },
        {
            type: "recommendations",
            content: (
                <div>
                <h2>Recommendations</h2>
                <p>Recommendations based off of genre or related movies</p>
                <a href="" className="">Head here if you are looking for something to watch</a>
            </div>
            ),
        },
        {
            type: "blog",
            content: (
                <div>
                <h2>Featured Blog Post</h2>
                <p>Is Jesus in Star Wars? Does Harry Potter steal the redemptive story?  Find all your answers to lifes deepest questions and more in the blog!</p>
                <a href="" className="">Read Blog Posts:</a>
            </div>
            ),
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <section>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.type}>{slide.content}</div>
                ))}
            </Slider>
        </section>
    )
}