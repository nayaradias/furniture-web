import { GeneralStylesProps } from "types/styles.typings";

export type VariationType =  'dark' | 'gray'| 'white';

export interface ChipsProps  extends GeneralStylesProps{
    title: string,
    imageUrl?: string,
    type: VariationType,
    hidden?:boolean,
    close?: () => void,
}
