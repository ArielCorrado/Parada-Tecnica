import ImageGallery from "react-image-gallery";
import React from "react";
import "./gallery.css";

function Gallery () {
    const images = [
        {
            original: "/images/gallery/0.jpeg",
            thumbnail: "/images/gallery/0.jpeg",
        },
        {
            original: "/images/gallery/1.jpeg",
            thumbnail: "/images/gallery/1.jpeg",
        },
        {
            original: "/images/gallery/2.jpeg",
            thumbnail: "/images/gallery/2.jpeg",
        },
        {
            original: "/images/gallery/3.jpeg",
            thumbnail: "/images/gallery/3.jpeg",
        },
        {
            original: "/images/gallery/4.jpeg",
            thumbnail: "/images/gallery/4.jpeg",
        },
        {
            original: "/images/gallery/5.jpeg",
            thumbnail: "/images/gallery/5.jpeg",
        },
        {
            original: "/images/gallery/6.jpeg",
            thumbnail: "/images/gallery/6.jpeg",
        },
        {
            original: "/images/gallery/7.jpeg",
            thumbnail: "/images/gallery/7.jpeg",
        },
        {
            original: "/images/gallery/8.jpeg",
            thumbnail: "/images/gallery/8.jpeg",
        },
        {
            original: "/images/gallery/9.jpeg",
            thumbnail: "/images/gallery/9.jpeg",
        },
        {
            original: "/images/gallery/10.jpeg",
            thumbnail: "/images/gallery/10.jpeg",
        },
        {
            original: "/images/gallery/11.jpeg",
            thumbnail: "/images/gallery/11.jpeg",
        },
        {
            original: "/images/gallery/12.jpeg",
            thumbnail: "/images/gallery/12.jpeg",
        },
    ];

    class MyGallery extends React.Component {
        render() {
            return <ImageGallery items={images} showBullets={true} slideInterval={5000} slideDuration={800} infinite={true}/>;
        }
    }

    return (
        <MyGallery/>
    )
}

export default Gallery