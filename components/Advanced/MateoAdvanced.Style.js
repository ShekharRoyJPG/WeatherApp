import { StyleSheet, View } from "react-native";
import { Txt } from "../Txt/Txt";

export const AdvanceStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#0000005c",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
  },
});

export function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}

export function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}

export function StyledValue({ children }) {
  return <Txt style={{ alignItems: "center" }}>{children}</Txt>;
}
