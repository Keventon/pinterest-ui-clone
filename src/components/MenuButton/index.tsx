import { Text, TouchableOpacity, View } from "react-native";
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
      <View style={styles.iconContainer}>
        {iconAwesomeExist ? (
          <FontAwesome name={icon} size={32} color={theme.colors.white} />
        ) : (
          <Entypo name={iconEntypo} size={32} color={theme.colors.white} />
        )}
      </View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
