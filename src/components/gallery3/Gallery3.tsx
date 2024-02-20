import "./gallery3.css";
import { useEffect, useState, useRef } from "react";   

function Gallery3 (props: {numberOfImagesInLandsCape?: 1 | 3 | 5, autoPlay?: boolean, autoPlayInterval?: number, autoPlayChangeTime?: number}) {

    const {numberOfImagesInLandsCape = 1, autoPlay = true, autoPlayInterval = 5000, autoPlayChangeTime = 600} = props         //Valores por defecto de las props
  
    const centerIndex = useRef <number> (0);
    const enter = useRef <boolean> (true);
    const [bullets, setBullets] = useState <JSX.Element[]> ([]);
    const [thumbnails, setThumbnails] = useState <JSX.Element[]> ([]);
    const setNumberOfImagesInScreen = useRef <number> (0);
    const isGalleryMaximized = useRef <boolean> (false);
  
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
  
    const selectIndexsOfInitialImges = (centerImageIndex: number, numberOfImages: number) => {

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

    const setInitialThumbnailsAndBullets = (indexOfCenter: number) => {
        const bulletsJSX = imagesArr.map((bullet, index) => {
            return index === indexOfCenter ?
            <div key={index} className="galleryBullet galleryBulletSelect" tabIndex={index} onClick={(e) => selectImagefromThumbnailOrBullet(e)}></div> :
            <div key={index} className="galleryBullet" tabIndex={index} onClick={(e) => selectImagefromThumbnailOrBullet(e)}></div>
        });
        setBullets(bulletsJSX);
  
        const thumbnailsJSX = imagesArr.map((img, index) => {
            return index === indexOfCenter ?
            <img src={img.thumbnail} alt="Gallery" key={index} tabIndex={index} className="galleryThumbnailImg galleryThumbnailImgSelect" onClick={(e) => selectImagefromThumbnailOrBullet(e)}/> :
            <img src={img.thumbnail} alt="Gallery" key={index} tabIndex={index} className="galleryThumbnailImg" onClick={(e) => selectImagefromThumbnailOrBullet(e)} />
        });
        setThumbnails(thumbnailsJSX);
    }

    const maximizedGallery = (e: any) => {
        isGalleryMaximized.current = true;
        const indexOfCenterImage = e.target.tabIndex;

        const contMenu = document.querySelector(".contMenu") as HTMLDivElement;
        contMenu.style.display = "none";
        
        document.body.style.overflow = "hidden";
        const gallerySliderMainCont = document.querySelector(".gallerySliderMainCont");

        gallerySliderMainCont?.classList.add("gallerySliderMainContMaximixed");
        const galleryImgs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".galleryImg");

        galleryImgs.forEach((img) => {
            img.classList.add("galleryImgMaximixed");
        })

        setNumberOfImagesInScreen.current = 1;
        setImagesInSlider(indexOfCenterImage);
    }

    const minimizeGallery = () => {
        if (isGalleryMaximized.current) {
            document.body.style.overflow = "initial";

            const contMenu = document.querySelector(".contMenu") as HTMLDivElement;
            contMenu.style.display = "flex";

            const gallerySliderMainCont = document.querySelector(".gallerySliderMainCont");
            gallerySliderMainCont?.classList.remove("gallerySliderMainContMaximixed");
 
            const galleryImgs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".galleryImg");
            galleryImgs.forEach((img) => {
                img.classList.remove("galleryImgMaximixed");
            })

            isGalleryMaximized.current = false;
            setGallery();
        }
    }

    const setImagesInSlider = (indexOfCenter: number) => {

        const images = document.querySelectorAll(".galleryImg") as NodeListOf<HTMLImageElement>;
        if (images.length) {
            images.forEach((img) => {
                img.remove();
            });
        };

        const bullets = document.querySelectorAll(".galleryBullet");
        if (bullets.length) {
            bullets.forEach((bullet) => {
                bullet.classList.remove("galleryBulletSelect");
            });
            bullets[indexOfCenter].classList.add("galleryBulletSelect");
        };

        const thumbnails = document.querySelectorAll(".galleryThumbnailImg");
        if (thumbnails.length) {
            thumbnails.forEach((thumbnail) => {
                thumbnail.classList.remove("galleryThumbnailImgSelect");
            });
            thumbnails[indexOfCenter].classList.add("galleryThumbnailImgSelect");
        };
         
        const arrayIdexs = selectIndexsOfInitialImges(indexOfCenter, setNumberOfImagesInScreen.current);
        const imagesHTMLArr = arrayIdexs.map((ind, index) => createImage(ind));
        const gallerySliderCont = document.querySelector(".gallerySliderCont") as HTMLDivElement;
        imagesHTMLArr.forEach((img) => {
            img.addEventListener("click", maximizedGallery);    
            img.style.width = `${(1/setNumberOfImagesInScreen.current) * 100}%`;
            img.style.minWidth = `${(1/setNumberOfImagesInScreen.current) * 100}%`;
            img.classList.remove("galleryImgContain");

            if (window.innerWidth > window.innerHeight && setNumberOfImagesInScreen.current === 1 && !isGalleryMaximized.current) {
                img.style.width = "100%";
                img.style.minWidth = "100%";
                img.classList.add("galleryImgContain");
            }

            gallerySliderCont.appendChild(img);
        });
                                       
        centerIndex.current = indexOfCenter;
    }

    const adjustThumbnailsCont = () => {            //Si el ancho de todos los thumbnails excede el ancho de la pantalla ponemos su contenedor en "flex-start" para que no queden tapados los que estan a la izquierda
        const thumbnails = document.querySelectorAll(".galleryThumbnailImg") as NodeListOf<HTMLImageElement>;
        if (thumbnails.length) {
            const galleryThumbnailsCont = document.querySelector(".galleryThumbnailsCont") as HTMLDivElement;
            galleryThumbnailsCont.style.justifyContent = thumbnails[thumbnails.length - 1].getBoundingClientRect().right >= window.innerWidth ? "flex-start" : "center";           
        }
    }

    const setGallery = () => {
        if (window.innerWidth < window.innerHeight) {
            setNumberOfImagesInScreen.current = 1;
            setImagesInSlider(centerIndex.current);
        } else {
            setNumberOfImagesInScreen.current = isGalleryMaximized.current ? 1 : numberOfImagesInLandsCape;
            setImagesInSlider(centerIndex.current);
        }
        adjustThumbnailsCont();
    }

    const hanldeMoveImages = (next: boolean) => {
        if (!enter.current) return;
        enter.current = false;
        const nextImageSteep = Math.ceil(setNumberOfImagesInScreen.current / 2);

        const gallerySliderCont = document.querySelector(".gallerySliderCont") as HTMLDivElement;
        next ? gallerySliderCont.style.justifyContent = "flex-start" : gallerySliderCont.style.justifyContent = "flex-end";
        const newImageIndex = next ? movePointerInArray(centerIndex.current, nextImageSteep) : movePointerInArray(centerIndex.current, -nextImageSteep);
        const newImage = createImage(newImageIndex);
        newImage.addEventListener("click", maximizedGallery); 
        newImage.style.width = `${(1/setNumberOfImagesInScreen.current) * 100}%`; 
        newImage.style.minWidth = `${(1/setNumberOfImagesInScreen.current) * 100}%`; 
        newImage.classList.remove("galleryImgContain");

        if (window.innerWidth > window.innerHeight && setNumberOfImagesInScreen.current === 1 && !isGalleryMaximized.current) {
            newImage.style.width = "100%";
            newImage.style.minWidth = "100%";
            newImage.classList.add("galleryImgContain");
        }

        next ? gallerySliderCont.appendChild(newImage) : gallerySliderCont.insertBefore(newImage, gallerySliderCont.firstChild);
        const img = gallerySliderCont.querySelector(".galleryImg") as HTMLImageElement;
        const imagesWidth = img.offsetWidth;
       
        const animation = gallerySliderCont?.animate([
            // keyframes
            { transform: `translateX(0)`},
            { transform: `translateX(${(next ? -1 : 1) * imagesWidth}px)`}
        ], {
            // timing options
            duration: autoPlayChangeTime,
            fill: "forwards",
            easing: "ease-out"
        });

        centerIndex.current = next ? movePointerInArray(centerIndex.current, 1) : centerIndex.current = movePointerInArray(centerIndex.current, -1);

        const removeElement = () => {
            if (next) {
                gallerySliderCont.childNodes[0].remove();
                animation.cancel();
            } else {
                gallerySliderCont.childNodes[gallerySliderCont.childNodes.length - 1].remove();
                animation.cancel();
            }
            enter.current = true;
        }

        animation?.addEventListener("finish", removeElement)         

        /****** Se coloca un borde de color al thumbnail que corresponda a la imagen actual ******/

        const thumbnails = document.querySelectorAll(".galleryThumbnailImg") as NodeListOf<HTMLImageElement>;
        thumbnails.forEach((thumbnail) => thumbnail.classList.remove("galleryThumbnailImgSelect"));
        thumbnails[centerIndex.current].classList.add("galleryThumbnailImgSelect");        

        /****** Se rellena la "bolita" que corresponda a la imagena ctual ******/

        const bullets = document.querySelectorAll(".galleryBullet") as NodeListOf<HTMLDivElement>;
        bullets.forEach((bullet) => bullet.classList.remove("galleryBulletSelect"));
        bullets[centerIndex.current].classList.add("galleryBulletSelect");        

    }

    useEffect(() => {
        if (thumbnails.length) adjustThumbnailsCont();      //Despues de que se hace un render de los thumbnails se ajusta el contenedor
    }, [ thumbnails])
    
        
    useEffect(() => {
        setGallery();
        setInitialThumbnailsAndBullets(0);
        
        /******************************************************************/

        window.addEventListener("orientationchange", setGallery);
        window.addEventListener("resize", setGallery);
           
        /*********************** Eventos touch ***************************/
  
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

        let intervalId: NodeJS.Timer;
        if (autoPlay) {
            intervalId = setInterval(() => {
                hanldeMoveImages(true);    
            }, autoPlayInterval);
        }

        const gallery = document.querySelector(".galleryCont");
        gallery?.addEventListener("click", () => clearInterval(intervalId));

        /***************************************************************************************/
        
        return () => {
            window.removeEventListener("orientationchange", setGallery);
            window.removeEventListener("resize", setGallery);
            gallerySliderMainCont?.removeEventListener("touchstart", start);
            gallerySliderMainCont?.removeEventListener("touchend", end);
            clearInterval(intervalId);
        }

        // eslint-disable-next-line
    }, [])

    const createImage = (newImageIndex: number) => {
        const newImageSrc = imagesArr[newImageIndex].original;
        // const newImageThumbnail = imagesArr[newImageIndex].thumbnail;
        const newImage = document.createElement("img");
        newImage.src = newImageSrc;
        newImage.alt = "Gallery";
        newImage.classList.add("galleryImg");
        newImage.tabIndex= newImageIndex;

        if (isGalleryMaximized.current) newImage.classList.add("galleryImgMaximixed");

        return newImage;
    }
        
    const selectImagefromThumbnailOrBullet = (e: React.BaseSyntheticEvent) => {
        setImagesInSlider(e.target.tabIndex);
    }
    
    return (
        <div className="galleryCont flex column OoS" id="espacio">
            <div className="gallerySliderMainCont">
                <img src="/images/icons/close.png" alt="Next" className="galleryCloseIcon" onClick={minimizeGallery}/>
                <img src="/images/icons/next.png" alt="Next" className="galleryNextIcon" onClick={() => hanldeMoveImages(true)}/>
                <img src="/images/icons/next.png" alt="Prev" className="galleryPrevIcon" onClick={() => hanldeMoveImages(false)}/>
                <div className="gallerySliderCont flex">
                  
                </div>
                <div className="galleryBulletsCont flex">
                    {bullets}
                </div>
            </div>
            <div className="galleryThumbnailsCont flex">
                {thumbnails}
            </div>
        </div>
    )
}

export default Gallery3