import "./gallery2.css";
import { useEffect, useState, useRef } from "react";   

function Gallery2 () {

    const [index, setIndex] = useState <number> (0);

    const [images, setImages] = useState <JSX.Element[]> ();
    const [thumbnails, setThumbnails] = useState <JSX.Element[]> ();

    const imagesArr = [
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

    const movePointerInArray = (initialPosition: number, displacement: number, arrayLength: number) => {
        let indexPointer = initialPosition;
        if (displacement > 0) {
            for (let i = 1; i <= displacement; i++) { 
                indexPointer ++;
                if (indexPointer === arrayLength) {
                    indexPointer = 0;
                }
            }
        } else {
            for (let i = 1; i <= Math.abs(displacement); i++) { 
                indexPointer --;
                if (indexPointer === -1) {
                    indexPointer = arrayLength - 1;
                }
            }
        }
        return indexPointer;
    }
  
    const selectIndexOfImges = (centerImageIndex: number, numberOfImages: number) => {

        if (centerImageIndex < 0) centerImageIndex = imagesArr.length - 1;
        if (centerImageIndex >= imagesArr.length) centerImageIndex = 0;
        
        const pointer = centerImageIndex;
        const arrIndexs = new Array(numberOfImages);

        const arrCenterIndex = Math.floor(arrIndexs.length / 2);
        arrIndexs[arrCenterIndex] = pointer;

        for (let i = 1; i <= arrCenterIndex; i ++) {
            arrIndexs[arrCenterIndex + i] = movePointerInArray(pointer, i, imagesArr.length);
        }
        for (let i = 1; i <= arrCenterIndex; i ++) {
            arrIndexs[arrCenterIndex - i] = movePointerInArray(pointer, -i, imagesArr.length);
        }
        return arrIndexs;
    }

    const handleIndex = (next: boolean) => {
        if (next) {
            index + 1 >= imagesArr.length ? setIndex(0) : setIndex((index) => index + 1);
        } else {
            index - 1 < 0 ? setIndex(imagesArr.length - 1) : setIndex((index) => index - 1);
        }
    }

    useEffect(() => {
        
        const arrayIdexs = selectIndexOfImges(index, 5);
        const imagesJSX = arrayIdexs.map((ind, index) => <img src={imagesArr[ind].original} alt="Gallery" key={index} className="galleryImg"/> );
        const thumbnailsJSX = imagesArr.map((img, index) => <img src={img.thumbnail} alt="Gallery" key={index} className="galleryThumbnailImg"/>);
        setImages(imagesJSX);
        setThumbnails(thumbnailsJSX);

    }, [index])
    
   
    return (
        <div className="galleryCont flex column">
            <div className="gallerySliderCont flex">
                {images}
                <img src="/images/icons/next.png" alt="Next" className="galleryNextIcon" onClick={() => handleIndex(true)}/>
                <img src="/images/icons/next.png" alt="Prev" className="galleryPrevIcon" onClick={() => handleIndex(false)}/>
            </div>
            <div className="galleryThumbnailsCont">
                {thumbnails}
            </div>
        </div>
    )
}

export default Gallery2