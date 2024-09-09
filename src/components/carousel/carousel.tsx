import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function Slides() {
    // URLs das imagens para teste
    const imageUrls = [
        "https://picsum.photos/300/300?random=1",
        "https://source.unsplash.com/random/300x300",
        "https://images.pexels.com/photos/1511200/pexels-photo-1511200.jpeg",
    ];

    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {imageUrls.map((url, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="rounded-lg">
                                <CardContent className="relative rounded-lg flex aspect-square bg-zinc-500 items-center justify-center p-0 overflow-hidden">
                                    <img
                                        src={url}
                                        alt={`Slide ${index + 1}`}
                                        className="inset-0 w-full h-full object-cover"
                                    />                 
                                    <div className="absolute bottom-0 left-0 right-0 bg-white p-2 text-center">
                                        <p className="text-gray-800">Descrição para o slide {index + 1}</p>
                                    </div>                   
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default Slides;
