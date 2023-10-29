import Image from "next/image";
import Logo from "../../../public/planet-earth-global-svgrepo-com.svg";
import { ModeToggle } from "../theme-mode";

export default function Menu() {
    return (
        <div className="w-full h-16">
            <div className="w-[90%] mx-auto flex flex-row justify-between items-center h-full z-20">
                <div className="flex flex-row gap-2 items-center w-10 h-10">
                    <Image src={Logo} alt={""} className="w-10 h-10 animate-spin transition-all duration-700 delay-1000" />
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}