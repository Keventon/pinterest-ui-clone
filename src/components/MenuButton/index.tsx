import { Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import { MenuButtonProps } from "./menuButton";
import { styles } from "./styles";
import { theme } from "@/theme";

export function MenuButton({
  icon,
  iconEntypo,
  iconAwesomeExist,
  title,
}: MenuButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      {iconAwesomeExist ? (
        <FontAwesome
          name={icon}
          size={32}
          color={theme.colors.white}
          style={styles.icon}
        />
      ) : (
        <Entypo
          name={iconEntypo}
          size={32}
          color={theme.colors.white}
          style={styles.icon}
        />
      )}

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
