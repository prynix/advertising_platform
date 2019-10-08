import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Grid, Card } from 'semantic-ui-react';
import { Logo } from '../../components/Logo';
import { BidCardItem } from '../BidCardItem';

export const Test = () => {
    const handleOnDragStart = e => e.preventDefault()
    
    const responsive = {
        0: { items: 1 },
        1024: { items: 4 },
    }

    return (
        <AliceCarousel 
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