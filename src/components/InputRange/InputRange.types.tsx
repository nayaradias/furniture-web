import { GeneralStylesProps } from "types/styles.typings";

export type InputRangeVariationType =  'none' | 'price'| 'number';

export interface InputRangeProps  extends GeneralStylesProps{
    variation: InputRangeVariationType,
    min?: number,
    max?: number,
    value?: string,
    code?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}
