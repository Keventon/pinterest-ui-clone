import { Image, ImageProps } from "react-native";

import { styles } from "./style";
import { AvatarProps } from "./avatar";

export function Avatar({ selected, ...rest }: AvatarProps & ImageProps) {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...rest} />
  );
}
