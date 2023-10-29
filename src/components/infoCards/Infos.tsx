"use client"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Loading from "../loading";

interface InfoCardsProps {
    value: string;
}
export default function InfoCards(props: InfoCardsProps) {

    const [value, setValue] = useState(props.value);

    const fetchData = async (value: string) => {
        try {
            const response = await fetch(`https://api.waqi.info/feed/${value}/?token=0968a8b802ad4e480d9f6199a570a3392c46c62b`);
            if (!response.ok) {
                throw new Error('Error no response.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const { isLoading, error, data } = useQuery(["qualityData", value], () => fetchData(value), {
        onSuccess: (data: any) => {
        },
        onError: (error: any) => {

        }
    })

    if (isLoading) return <Loading />

    if (error) return 'Ocorreu um erro: ' + (error as Error).message;

    return (
        <div className="w-[90%] mx-auto z-30">
            {error ? (
                <div>
                    Erro
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row lg:gap-0 gap-2 justify-between mt-5 lg:mt-0">
                        <div className="cardRegion p-2 w-52">
                            <div className="flex flex-row gap-2">
                                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 19.0002V5.70058C3 5.28007 3.26307 4.90449 3.65826 4.76079L13.3291 1.24411C13.5886 1.14974 13.8755 1.28361 13.9699 1.54313C13.9898 1.5979 14 1.65573 14 1.714V6.66682L20.3162 8.77223C20.7246 8.90834 21 9.29048 21 9.72091V19.0002H23V21.0002H1V19.0002H3ZM5 19.0002H12V3.85555L5 6.40101V19.0002ZM19 19.0002V10.4417L14 8.77501V19.0002H19Z" fill="rgba(248,244,244,1)"></path></svg>
                                <h1 className="flex flex-col gap-2 tituloPagina font-[Quantify] text-base">Região</h1>
                            </div>
                            {data && !error && (
                                <span className="text-sm font-[Quantify]">{data.data.city.name}</span>
                            )}
                        </div>
                        <div className="cardRegion p-2 w-52">
                            <div className="flex flex-row gap-2">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="rgba(246,245,245,1)"></path></svg>
                                <h1 className="flex flex-col gap-2 tituloPagina font-[Quantify] text-base">Time</h1>
                            </div>
                            {data && data != 'Unknown station' && (
                                <div className="flex flex-col">
                                    <span className="text-sm font-[Quantify]">{data.data.time.s}</span>
                                    <span>Time Zone: {data.data.time.tz}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between flex-wrap gap-3">
                        <div className="flex flex-col gap-2 w-full lg:w-auto">
                            <h1 className="tituloPagina font-[Quantify]">Previsão de ozônio</h1>
                            <div className="flex flex-col lg:flex-row gap-2">
                                {data.data.forecast.daily.o3.map((element: any, key: any) => {
                                    return (
                                        <div key={key} className="cardRegion p-2">
                                            <div className="flex flex-row gap-2 items-center">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="rgba(253,245,245,1)"></path></svg>
                                                <h1 className="font-[Quantify] font-light">{element.day.split("-").reverse().join("/")}</h1>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-[Quantify] font-light">
                                                    Max: {element.max}
                                                </span>
                                                <span className="font-[Quantify] font-light">
                                                    Min: {element.min}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-auto">
                            <h1 className="tituloPagina font-[Quantify]">Previsão PM10 - Material Particulado Inalável</h1>
                            <div className="flex flex-col lg:flex-row gap-2">
                                {data.data.forecast.daily.pm10.map((element: any, key: any) => {
                                    return (
                                        <div key={key} className="cardRegion p-2">
                                            <div className="flex flex-row gap-2 items-center">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="rgba(253,245,245,1)"></path></svg>
                                                <h1 className="font-[Quantify] font-light">{element.day.split("-").reverse().join("/")}</h1>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-[Quantify] font-light">
                                                    Max: {element.max}
                                                </span>
                                                <span className="font-[Quantify] font-light">
                                                    Min: {element.min}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-auto">
                            <h1 className="tituloPagina font-[Quantify]">Previsão PM25 - Material Particulado</h1>
                            <div className="flex flex-col lg:flex-row gap-2">
                                {data.data.forecast.daily.pm25.map((element: any, key: any) => {
                                    return (
                                        <div key={key} className="cardRegion p-2">
                                            <div className="flex flex-row gap-2 items-center">
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="rgba(253,245,245,1)"></path></svg>
                                                <h1 className="font-[Quantify] font-light">{element.day.split("-").reverse().join("/")}</h1>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="font-[Quantify] font-light">
                                                    Max: {element.max}
                                                </span>
                                                <span className="font-[Quantify] font-light">
                                                    Min: {element.min}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        {data.data.forecast.daily.uvi && (
                            <div className="flex flex-col gap-2 mb-10">
                                <h1 className="tituloPagina font-[Quantify]">Previsão UVI</h1>
                                <div className="flex flex-row gap-2">
                                    {data.data.forecast.daily.pm25.map((element: any, key: any) => {
                                        return (
                                            <div key={key} className="cardRegion p-2">
                                                <div className="flex flex-row gap-2 items-center">
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="rgba(253,245,245,1)"></path></svg>
                                                    <h1 className="font-[Quantify] font-light">{element.day.split("-").reverse().join("/")}</h1>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-[Quantify] font-light">
                                                        Max: {element.max}
                                                    </span>
                                                    <span className="font-[Quantify] font-light">
                                                        Min: {element.min}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}