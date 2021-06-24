import React from "react"
import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from "../../components/Guild"
import { ListDivider } from "../../components/ListDivider"
import { styles } from "./styles"

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelect}: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'null',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do Game',
            icon: 'null',
            owner: true
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                style={styles.guilds}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                renderItem={({ item }) => (
                    <Guild data={item} onPress={() => handleGuildSelect(item)}/>
                )}
            />
        </View>
    )
}