import { GeneralStylesProps } from "shared/styles";

export interface AvatarProps  extends GeneralStylesProps{
    image?: boolean,
    icon?: React.ReactNode,
    imageUrl?: string, 
    size?: number,
}
