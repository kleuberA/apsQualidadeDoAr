import { Loader2 } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

interface LoadingProps {

}
export default function Loading(props: LoadingProps) {
    return (

        <div className="w-[90%] mx-auto z-30">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row lg:gap-0 gap-2 justify-between mt-5 lg:mt-0">
                    <div className="cardRegion p-2 w-52">
                        <div className="flex flex-row space-x-4">
                            <Skeleton className="h-5 w-5 rounded-full mb-2" />
                            <Skeleton className="h-4 w-[55px]" />
                        </div>
                        <Skeleton className="h-4 w-[150px]" />
                    </div>
                    <div className="cardRegion p-2 w-52">
                        <div className="flex flex-row gap-2">
                            <Skeleton className="h-5 w-5 rounded-full mb-2" />
                            <Skeleton className="h-4 w-[55px]" />
                        </div>
                        <div className="flex flex-col">
                            <Skeleton className="h-4 w-[150px] mb-2" />
                            <Skeleton className="h-4 w-[150px]" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between flex-wrap gap-3">
                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <Skeleton className="h-4 w-[100px]" />
                        <div className="flex flex-col lg:flex-row gap-2">
                            <div className="cardRegion p-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <Skeleton className="h-5 w-5 rounded-full mb-2" />
                                    <Skeleton className="h-4 w-[55px]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Skeleton className="h-4 w-[150px] mb-2" />
                                    <Skeleton className="h-4 w-[150px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <Skeleton className="h-4 w-[250px]" />
                        <div className="flex flex-col lg:flex-row gap-2">
                            <div className="cardRegion p-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <Skeleton className="h-5 w-5 rounded-full mb-2" />
                                    <Skeleton className="h-4 w-[55px]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Skeleton className="h-4 w-[150px] mb-2" />
                                    <Skeleton className="h-4 w-[150px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                        <Skeleton className="h-4 w-[250px]" />
                        <div className="flex flex-col lg:flex-row gap-2">
                            <div className="cardRegion p-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <Skeleton className="h-5 w-5 rounded-full mb-2" />
                                    <Skeleton className="h-4 w-[55px]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Skeleton className="h-4 w-[150px] mb-2" />
                                    <Skeleton className="h-4 w-[150px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-2 mb-10">
                        <Skeleton className="h-4 w-[200px]" />
                        <div className="flex flex-row gap-2">
                            <div className="cardRegion p-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <Skeleton className="h-5 w-5 rounded-full mb-2" />
                                    <Skeleton className="h-4 w-[55px]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Skeleton className="h-4 w-[150px] mb-2" />
                                    <Skeleton className="h-4 w-[150px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}