import { GeneralStylesProps } from "types/styles.typings";

export type InputRangeVariationType =  'default';

export interface InputProps  extends GeneralStylesProps{
    variation: InputRangeVariationType,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    error?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}
