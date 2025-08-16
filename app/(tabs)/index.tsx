import { Link, Tabs, useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
    FlatList,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { dummyUsers } from '~/lib/constants';
import { ScrollView } from 'react-native';
import { useState } from 'react';

export default function Home() {
    const [showShadow, setShowShadow] = useState<boolean>(false);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const y = event.nativeEvent.contentOffset.y;
        setShowShadow(y > 25);
    };

    return (
        <>
            <Tabs.Screen
                options={{
                    title: 'messenger',
                    headerRightContainerStyle: {
                        gap: 12,
                        paddingRight: 12,
                    },

                    headerShadowVisible: showShadow,

                    headerRight({ tintColor }) {
                        return (
                            <>
                                <Feather name="edit" size={20} color={tintColor} />
                                <FontAwesome5 name="facebook" size={20} color={tintColor} />
                            </>
                        );
                    },
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="chatbubble" size={20} color={color} />;
                    },
                }}
            />
            <ScrollView
                nestedScrollEnabled={true}
                onScroll={handleScroll}
                contentContainerStyle={{
                    gap: 8,
                }}
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    gap: 200,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <View
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#E7E7E7',
                        borderRadius: 50,
                        paddingStart: 40,
                    }}>
                    <FontAwesome
                        name="search"
                        size={18}
                        color={'#B6B6B6'}
                        style={{
                            position: 'absolute',
                            left: 12,
                        }}
                    />
                    <TextInput placeholder="Search" style={{ width: '100%' }} />
                </View>
                <View
                    style={{
                        paddingHorizontal: 8,
                    }}>
                    <FlatList
                        data={dummyUsers}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={() => (
                            <View
                                style={{
                                    borderRadius: '100%',
                                    marginRight: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <View
                                    style={{
                                        position: 'relative',
                                        width: 70,
                                        height: 70,
                                        borderRadius: 45,
                                    }}>
                                    <Image
                                        source={{ uri: 'https://avatars.githubusercontent.com/u/137907119?s=96&v=4' }}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 45,
                                        }}
                                    />
                                    <Text style={{ fontSize: 10 }}>Leave a note...</Text>
                                </View>
                            </View>
                        )}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                        renderItem={({ item, index }) => (
                            <View
                                key={index}
                                style={{
                                    borderRadius: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <View
                                    style={{
                                        position: 'relative',
                                        width: 70,
                                        height: 70,
                                        borderRadius: 45,
                                    }}>
                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 45,
                                        }}
                                    />
                                    {item.status === 'online' && <Badge bg="#008000" />}
                                    {item.status === 'away' && <Badge bg="#FFFF00" />}
                                    {item.status === 'offline' && <Badge bg="#ff0000" />}
                                </View>
                                <Text>{item.name.split(' ')[0]}</Text>
                            </View>
                        )}
                    />
                </View>

                {dummyUsers.map((item, index) => (
                    <Link
                        key={index}
                        href={{
                            pathname: '/chat',
                            params: {
                                username: item.username,
                            },
                        }}
                        asChild>
                        <Pressable
                            android_ripple={{
                                color: 'rgba(50,50,50,0.3)',
                                borderless: false,
                            }}
                            style={{
                                paddingHorizontal: 14,
                                paddingVertical: 8,
                                borderRadius: 120,
                                alignItems: 'center',
                            }}>
                            <View
                                key={index}
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    gap: 8,
                                }}>
                                <Image
                                    source={{ uri: item.avatar }}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                    }}
                                />
                                <View
                                    style={{
                                        gap: 3,
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                        }}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: '#808080',
                                        }}>
                                        {item.lastMessage} . {item.messageTime}
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    </Link>
                ))}

                <Text style={{ textAlign: 'center' }}>Your chat history ends here</Text>
            </ScrollView>
        </>
    );
}

const Badge = ({ bg }: { bg: string }) => {
    return (
        <View
            style={{
                backgroundColor: bg,
                height: 15,
                width: 15,
                borderRadius: 10,
                bottom: 0,
                right: 7,
                position: 'absolute',
                borderWidth: 2,
                borderColor: '#fff',
            }}></View>
    );
};
