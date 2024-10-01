import { Screen } from "@/components/Screen";
import { ThemedText } from "@/components/ThemedText";

const User = () => {
  return (
    <Screen>
      <ThemedText>Hello User</ThemedText>
    </Screen>
  );
};
// const User = () => {
//   const [inputText, setInputText] = useState("");
//   const todos = useSelector(selectTodos);
//   const dispatch = useDispatch();

//   const handleAddTodo = () => {
//     if (inputText.trim()) {
//       dispatch(addTodo(inputText));
//       setInputText("");
//     }
//   };

//   const handleToggleTodo = (id: number) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleRemoveTodo = (id: number) => {
//     dispatch(removeTodo(id));
//   };

//   return (
//     <Screen className="p-4">
//       <TextInput
//         style={{
//           borderColor: "gray",
//           borderWidth: 1,
//           padding: 10,
//           marginBottom: 10,
//         }}
//         placeholder="Enter a new to-do"
//         value={inputText}
//         onChangeText={setInputText}
//       />
//       <Button title="Add Todo" onPress={handleAddTodo} />
//       <FlatList
//         data={todos}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: 10,
//               borderBottomColor: "gray",
//               borderBottomWidth: 1,
//             }}
//           >
//             <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
//               <Text
//                 style={{
//                   textDecorationLine: item.completed ? "line-through" : "none",
//                 }}
//               >
//                 {item.text}
//               </Text>
//             </TouchableOpacity>
//             <Button
//               title="Remove"
//               color="red"
//               onPress={() => handleRemoveTodo(item.id)}
//             />
//           </View>
//         )}
//       />
//     </Screen>
//   );
// };

export default User;
