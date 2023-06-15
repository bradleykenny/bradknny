import { StaticImageData } from "next/image";

export interface ICard {
    title: string;
    description: string;
    images?: StaticImageData[];
    colSpan: number;
    link?: string;
}
