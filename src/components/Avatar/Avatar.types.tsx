import { GeneralStylesProps } from "types/styles.typings";

export interface AvatarProps  extends GeneralStylesProps{
    image?: boolean,
    icon?: React.ReactNode,
    imageUrl?: string, 
    size?: number,
}
