import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { BidCardItem } from '../BidCardItem';
import './styles.css'

export const BidsCarousel = () => {
    const handleOnDragStart = e => e.preventDefault()
    
    const responsive = {
        0: { items: 1 },
        1024: { items: 4 },
    }

    return (
            <AliceCarousel 
                mouseDragEnabled={true}
                className='bidCarousel'
                responsive={responsive}
                mouseDragEnabled >
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
                <BidCardItem onDragStart={handleOnDragStart} />
            </AliceCarousel>
    )
}