import { GeneralStylesProps } from "types/styles.typings";

export interface IndicatorStepsProps  extends GeneralStylesProps{
    steps: number;
    current: number;
    active?: boolean;
}
