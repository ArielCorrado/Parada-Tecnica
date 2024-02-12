import "./gallery3.css";
import { useEffect, useState, useRef } from "react";   

function Gallery3 () {

    const centerIndex = useRef <number> (0);
  
    const [images, setImages] = useState <JSX.Element[]> ([]);
  
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

    const movePointerInArray = (initialPosition: number, displacement: number) => {
        let indexPointer = initialPosition;
        if (displacement > 0) {
            for (let i = 1; i <= displacement; i++) { 
                indexPointer ++;
                if (indexPointer === imagesArr.length) {
                    indexPointer = 0;
                }
            }
        } else {
            for (let i = 1; i <= Math.abs(displacement); i++) { 
                indexPointer --;
                if (indexPointer === -1) {
                    indexPointer = imagesArr.length - 1;
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
            arrIndexs[arrCenterIndex + i] = movePointerInArray(pointer, i);
        }
        for (let i = 1; i <= arrCenterIndex; i ++) {
            arrIndexs[arrCenterIndex - i] = movePointerInArray(pointer, -i);
        }
        return arrIndexs;
    }
        
    useEffect(() => {
        
        const arrayIdexs = selectIndexOfImges(centerIndex.current, 3);
        const imagesJSX = arrayIdexs.map((ind, index) => <img src={imagesArr[ind].original} alt="Gallery" key={index} className="galleryImg"/>);
        setImages(imagesJSX);
      
    // eslint-disable-next-line
    }, [])
    
    const hanldeMoveImages = (next: boolean) => () => {
        const newImageIndex = next ? movePointerInArray(centerIndex.current, 2) : movePointerInArray(centerIndex.current, -2);
        const newImageSrc = imagesArr[newImageIndex].original;
        const newImageThumbnail = imagesArr[newImageIndex].thumbnail;
        const newImage = document.createElement("img");
        newImage.src = newImageSrc;
        newImage.alt = "Gallery";
        newImage.className = "galleryImg";
        const gallerySliderCont = document.querySelector(".gallerySliderCont") as HTMLDivElement;
        gallerySliderCont.appendChild(newImage);

        const img = gallerySliderCont.querySelector(".galleryImg") as HTMLImageElement;
        const imagesWidth = img.offsetWidth;
       
        const animation = gallerySliderCont?.animate([
            // keyframes
            { transform: `translateX(0)`},
            { transform: `translateX(${(next ? -1 : 1) * imagesWidth}px)`}
        ], {
            // timing options
            duration: 800,
            fill: "forwards",
            easing: "ease-out"
        });

        const removeElement = () => {
            if (next) {
                gallerySliderCont.childNodes[0].remove();
                animation.cancel();
                centerIndex.current = movePointerInArray(centerIndex.current, 1);
            }
        }

        animation?.addEventListener("finish", removeElement)         
    }
    
    return (
        <div className="galleryCont flex column">
            <div className="gallerySliderMainCont">
                <img src="/images/icons/close.png" alt="Next" className="galleryCloseIcon" />
                <img src="/images/icons/next.png" alt="Next" className="galleryNextIcon" onClick={hanldeMoveImages(true)}/>
                <img src="/images/icons/next.png" alt="Prev" className="galleryPrevIcon" onClick={hanldeMoveImages(false)}/>
                <div className="gallerySliderCont flex">
                    {images}
                </div>
            </div>
        </div>
    )
}

export default Gallery3