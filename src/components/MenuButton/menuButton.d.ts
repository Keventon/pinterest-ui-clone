import { FontAwesome, Entypo } from "@expo/vector-icons";

export type MenuButtonProps = {
  title: string;
  icon?: keyof typeof FontAwesome.glyphMap;
  iconEntypo?: keyof typeof Entypo.glyphMap;
  iconAwesomeExist: boolean;
};
