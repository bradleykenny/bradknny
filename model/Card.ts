import { StaticImageData } from "next/image";

export interface ICard {
    title: string;
    description: string;
    image?: StaticImageData;
    colSpan: number;
}
