import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Product({onItemClicked,item}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>onItemClicked(item.id)} style={{alignSelf:'flex-end', padding:8}} >
       <Ionicons name="trash-bin" size={24} color={'black'} />  
        </TouchableOpacity>
      <Image style={styles.img} source={{ uri: item.image }} />
      <Text style={styles.text}>{item.name}</Text>
      <Text style={[styles.text,styles.color]}>$ {item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 8,
    margin:8,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    elevation:4,
    backgroundColor:'#EAF0F1'
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 20,
    textAlign: "center",
  },
  img: {
    width: 150,
    height: 150,
    margin: 8,
    borderRadius: 8,
  },
  color:{
    color:'grey',
    marginTop:2
  }
});
