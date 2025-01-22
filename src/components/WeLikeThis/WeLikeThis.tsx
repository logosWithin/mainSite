import Slider from "react-slick"
import voddie from "./Assets/VoddieWhyIBelieve.jpg"

export default function () {
    const resources = [
        {
            title: "Why You Can Believe the Bible",
            author: "Voddie Baucham",
            link: "https://www.youtube.com/watch?v=G1XJ7DeR5fc",
            thumbnail: voddie
        },
        {
            title: "Other recommendation",
            author: "Voddie Baucham",
            link: "https://www.youtube.com/watch?v=G1XJ7DeR5fc",
            thumbnail: voddie
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }



    return (
        <section>
            <h2>Christian content that's actually good</h2>
            <Slider {...settings}>
                {resources.map((resource) => (
                    <div key={resource.title}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            <img src={resource.thumbnail} alt={resource.title} />
                        </a>
                    </div>
                ))}
            </Slider>
        </section>
    )
}