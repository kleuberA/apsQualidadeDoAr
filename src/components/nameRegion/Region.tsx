"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

interface NameRegionProps {
    onRegionNameSubmit: any;
}

const formSchema = z.object({
    regionName:
        z.string().nonempty("É obrigatorio colocar uma região.")
            .min(3, { message: "A região deverá conter no mínimo 3 caracteres." })
            .max(30, { message: "A região deverá conter no maximo 30 caracteres." }),

});

type FormSchema = z.infer<typeof formSchema>

export default function NameRegion(props: NameRegionProps) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        clearErrors,
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });


    const [regionName, setRegionName] = useState('');

    const onSubmit: SubmitHandler<FormSchema> = async (data: any) => {
        props.onRegionNameSubmit(regionName);
        reset();
    }

    return (
        <div className="lg:w-full flex flex-col gap-1 items-center justify-center">
            <div className="">
                <form className="flex items-start flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <Label>Nome da Região</Label>
                    <div className="flex flex-row">
                        <div className="flex flex-col gap-1 justify-start">
                            <Input
                                {...register("regionName")}
                                placeholder="Insira o nome da região..."
                                className="rounded-tr-none rounded-br-none lg:w-80 h-12"
                                value={regionName}
                                onChange={(e) => setRegionName(e.target.value)}
                            />
                            {errors.regionName && (
                                <span className="text-red-500 block text-xs text-start">
                                    {errors.regionName?.message}
                                </span>
                            )}
                        </div>
                        <Button disabled={isSubmitting} className="rounded-tl-none rounded-bl-none h-12 w-32 flex flex-row gap-2" type="submit">
                            {isSubmitting ? (
                                <div className="flex flex-row gap-2">
                                    <Loader2 className="animate animate-spin w-5 h-5" /> {" "} Carregando...
                                </div>
                            ) : (
                                <div className="flex flex-row gap-2">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" fill="rgba(248,243,243,1)"></path></svg>
                                    Buscar
                                </div>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}