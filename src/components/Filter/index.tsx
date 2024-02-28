import { Text, TouchableOpacity } from "react-native";
import { FilterProps } from "./filter";
import { styles } from "./styles";
import { TouchableOpacityProps } from "react-native-gesture-handler";

export function Filter({
  filter,
  selected,
  ...rest
}: TouchableOpacityProps & FilterProps) {
  return (
    <TouchableOpacity
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...rest}
      activeOpacity={0.7}
    >
      <Text style={[styles.text]}>{filter}</Text>
    </TouchableOpacity>
  );
}
