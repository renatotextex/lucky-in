import './../globals.css'
import {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {Badge} from "@/components/ui/badge";
import {Slides} from "@/components/carousel/carousel";
import {Card} from "@/components/ui/card";


export function Feed() {
    return (
        <div className="flex min-h-screen bg-slate-900 items-center justify-center shadow-xl">
            <div className="w-[700px] h-full grid grid-rows-[min-content_1fr_min-content] p-4">
                <Card>
                    <div className="h-full grid grid-rows-[min-content_1fr_min-content] p-5">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex inline-flex items-center justify-center gap-2">
                                <Avatar width="4rem" height="4rem">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-start">
                                    <p>User</p>
                                    <p>user@user.com</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col justify-end">
                                    <Badge variant={"free"}>Grátis</Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-10">
                            <p>Destaques da semana</p>
                            <Slides></Slides>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
)

}
export default Feed;