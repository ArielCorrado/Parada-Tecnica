import "./gallery2.css";
import { useEffect, useState, useRef } from "react";   

function Gallery2 () {

    const direcionNext = useRef (false);
    const enter = useRef (true);    
    const [centerIndex, setCenterIndex] = useState <number> (0);
    let intervalId = useRef <NodeJS.Timer> ();

    const [images, setImages] = useState <JSX.Element[]> ([]);
    const [thumbnails, setThumbnails] = useState <JSX.Element[]> ([]);
    const [bullets, setBullets] = useState <JSX.Element[]> ([]);

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
        if (enter.current) {
            enter.current = false;
            if (next) {
                direcionNext.current = true;
                centerIndex + 1 >= imagesArr.length ? setCenterIndex(0) : setCenterIndex((index) => index + 1);
            } else {
                direcionNext.current = false;
                centerIndex - 1 < 0 ? setCenterIndex(imagesArr.length - 1) : setCenterIndex((index) => index - 1);
            }
        }
    }

    const handleCenterIndexFromImage = (actualCenter: number, nextCenter: number) => {
        if (nextCenter > actualCenter) {
            direcionNext.current = true;
            setCenterIndex(nextCenter)
        } else {
            direcionNext.current = false;
            setCenterIndex(nextCenter)
        }
    }

    const maximizeGallery = (centerIndex: number, nextIndex: number) => {
        document.body.style.overflow = "hidden";

        const gallerySliderMainCont = document.querySelector(".gallerySliderMainCont");
        gallerySliderMainCont?.classList.add("gallerySliderMainContMaximixed");

        const galleryBulletsCont = document.querySelector(".galleryBulletsCont");
        galleryBulletsCont?.classList.add("displayBulletsFlex")

        const galleryImgs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".galleryImg");
        galleryImgs.forEach((img) => {
            img.classList.add("galleryImgMaximixed");
        })

        handleCenterIndexFromImage(centerIndex, nextIndex);             //Seleccionamos imagen central desde imagenes principales
    }

    const minimizeGallery = () => {
        document.body.style.overflow = "initial";
        
        const gallerySliderMainCont = document.querySelector(".gallerySliderMainCont");
        gallerySliderMainCont?.classList.remove("gallerySliderMainContMaximixed");

        const galleryBulletsCont = document.querySelector(".galleryBulletsCont");
        galleryBulletsCont?.classList.remove("displayBulletsFlex");
     
        const galleryImgs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".galleryImg");
        galleryImgs.forEach((img) => {
            img.classList.remove("galleryImgMaximixed");
        })
    }
    
    useEffect(() => {
        
        const arrayIdexs = selectIndexOfImges(centerIndex, 5);
        const imagesJSX = arrayIdexs.map((ind, index) => <img src={imagesArr[ind].original} alt="Gallery" key={index} className="galleryImg" onClick={() => maximizeGallery(centerIndex, ind)}/> );
        const thumbnailsJSX = imagesArr.map((img, index) => {
           return index === centerIndex ? 
           <img src={img.thumbnail} alt="Gallery" key={index} className="galleryThumbnailImg galleryThumbnailImgSelect" onClick={() => handleCenterIndexFromImage(centerIndex, index)}/> :
           <img src={img.thumbnail} alt="Gallery" key={index} className="galleryThumbnailImg" onClick={() => handleCenterIndexFromImage(centerIndex, index)}/>
        });
        const bulletsJSX = imagesArr.map((img, index) => {
            return index === centerIndex ?
            <div key={index} className="galleryBullet galleryBulletSelect" onClick={() => handleCenterIndexFromImage(centerIndex, index)}></div> :
            <div key={index} className="galleryBullet" onClick={() => handleCenterIndexFromImage(centerIndex, index)}></div>
        });
        setImages(imagesJSX);
        setThumbnails(thumbnailsJSX);
        setBullets(bulletsJSX);
        
    // eslint-disable-next-line
    }, [centerIndex])
    
    useEffect(() => {

        const directionSign = direcionNext.current ? 1 : -1;
        
        if (images.length) {
            const image: HTMLImageElement | null = document.querySelector(".galleryImg");
            const imageWidth = image?.offsetWidth as number;

            const slider = document.querySelector(".gallerySliderCont");
            const animation = slider?.animate([
                // keyframes
                { transform: `translateX(${directionSign * imageWidth}px)`, opacity: "1" },
                { transform: 'translateX(0)', opacity: "1" }
            ], {
                // timing options
                duration: 800,
                fill: "forwards",
                easing: "ease-out"
            });

            animation?.addEventListener("finish", () => enter.current = true)                   //Cuando termina la amimacion habilitamos los botones de avanzar y retroceder
        }
             
    }, [images])

    useEffect(() => {
        const next = () => {
            handleIndex(true)
        }
        intervalId.current = setInterval(next, 4000);                                           //Autoplay

        const gallery = document.querySelector(".galleryCont");
        gallery?.addEventListener("click", () => clearInterval(intervalId.current));            //Al hacer click en cualquier lugar de la galeria paramos el autoplay
        
        /*********************************** Eventos touch ************************************/
  
        let startX: number;
        let startY: number;
        let endX: number;
        let endY: number;
        const gallerySliderMainCont: HTMLElement | null = document.querySelector(".gallerySliderMainCont");
        const buttonNext: HTMLButtonElement | null = document.querySelector(".galleryNextIcon");
        const buttonPrev: HTMLButtonElement | null = document.querySelector(".galleryPrevIcon");
        const start = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }

        const end = (e: TouchEvent) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            const Ax = endX - startX;
            const Ay = Math.abs(endY - startY);
            if (Ax > 50 && Ay < 100) {
                buttonPrev?.click();
            } else if (Ax < -50 && Ay < 100) {
                buttonNext?.click();
            }
        }

        gallerySliderMainCont?.addEventListener("touchstart", start);
        gallerySliderMainCont?.addEventListener("touchend", end);

        /***************************************************************************************/

        return () => clearInterval(intervalId.current)

    // eslint-disable-next-line
    }, [])

    return (
        <div className="galleryCont flex column">
            <div className="gallerySliderMainCont">
                <img src="/images/icons/close.png" alt="Next" className="galleryCloseIcon" onClick={minimizeGallery}/>
                <img src="/images/icons/next.png" alt="Next" className="galleryNextIcon" onClick={() => handleIndex(true)}/>
                <img src="/images/icons/next.png" alt="Prev" className="galleryPrevIcon" onClick={() => handleIndex(false)}/>
                <div className="gallerySliderCont flex">
                    {images}
                </div>
                <div className="galleryBulletsCont flex">{bullets}</div>
            </div>
            <div className="galleryThumbnailsCont">
                {thumbnails}
            </div>
        </div>
    )
}

export default Gallery2