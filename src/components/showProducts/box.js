import { Text } from "native-base";

export default ProdT = ({ item }) => {
  if (item.id) {
    return <Text>{item.title}</Text>;
  }
};
