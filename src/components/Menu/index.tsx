import { forwardRef } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { MenuButton } from "../MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            style={styles.iconClose}
            name="close"
            size={24}
            onPress={onClose}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" iconEntypo="pin" iconAwesomeExist={false} />
          <MenuButton title="Colagem" icon="copy" iconAwesomeExist={true} />
          <MenuButton title="Pasta" icon="folder" iconAwesomeExist={true} />
        </View>
      </View>
    </BottomSheet>
  );
});
