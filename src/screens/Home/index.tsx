import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { FlatList, View } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { Profile } from "../../components/Profile";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./style";
import { ButtonAdd } from "../../components/ButtonAdd";


export function Home(){
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null, 
        owner: true,
      },
      category: '1',
      date: '22/06 às 21:50h',
      description: 'É nada não'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null, 
        owner: true,
      },
      category: '1',
      date: '22/06 às 21:50h',
      description: 'É nada não'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
     
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item}/>
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
