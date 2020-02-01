import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const indexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index View</Text>
      <Button title="Add Post" onPress={addBlogPost}></Button>
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default indexScreen;
