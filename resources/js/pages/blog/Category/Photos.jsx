import React, { useState } from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-alice-carousel';
import { useHistory } from "react-router-dom";
function PhotoGallery({ winSize, photos }) {
    const history = useHistory();
    const [currentImage, setCurrentImage] = useState(0);

    const handleIndexChange = (value) => {
        console.log('value---***', value)
        // setCurrentImage(value.curIndex)
    }
    const handleDragStart = (e) => e.preventDefault();
    let galleryWidth;
    if (winSize === 1) galleryWidth = '100%';
    if (winSize === 2) galleryWidth = '50%';
    if (winSize > 2) galleryWidth = '30%';
    const items = [...photos, ...photos, ...photos].map(p => <div style={{ overflow: 'hidden' }}>
        <img
            src={p.src}
            onClick={() => history.push(`/photo/${p.id}`)}
            style={{ objectFit: 'contain', width: '100%', cursor: 'pointer' }}
            onDragStart={handleDragStart}
        />
    </div>);
    return (
        <div style={{ background: '#daad86', padding: 20 }}>
            <div style={{ position: 'relative', margin: 'auto', maxWidth: 600 }}>
                <p style={{ textAlign: 'center', color: 'rgb(236, 231, 226)', fontSize: '3em', fontFamily: 'Mulish', paddingTop: 30 }}>Photos</p>
                {/* <div>
                    <CameraInfo photo={photos[currentImage]} />
                </div> */}
                {/* <Carousel canAutoPlay isAutoPlaying onIndexChange={handleIndexChange} images={photos} /> */}
                <Carousel
                    disableDotsControls={items.length > 10 ? true : false}
                    // responsive={
                    //         {
                    //             0: {
                    //                 items: 1,
                    //             },
                    //             1024: {
                    //                 items: 3
                    //             }
                    //           }
                    // } 
                    canAutoPlay isAutoPlaying onSlideChanged={handleIndexChange} items={items} />
            </div>
        </div>
    );
}
export default PhotoGallery