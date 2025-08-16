import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';
import { dummyUsers } from '~/lib/constants';

export default function ChatPage() {
    const { username } = useLocalSearchParams();

    const selectedUser = dummyUsers.find((user) => user.username === username);

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: '',
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft(props) {
                        if (!props.canGoBack) return;
                        return (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 8,
                                }}>
                                <Link
                                    href={{
                                        pathname: '..',
                                    }}>
                                    <Ionicons name="arrow-back" size={22} color={'#1877F2'} />
                                </Link>

                                <Image
                                    source={{ uri: selectedUser?.avatar }}
                                    style={{
                                        width: 40,
                                        borderRadius: 40,
                                        aspectRatio: 1,
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
                                        {selectedUser?.name}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: '#808080',
                                        }}>
                                        {selectedUser?.status}
                                    </Text>
                                </View>
                            </View>
                        );
                    },
                    headerRight: (props) => {
                        return (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    gap: 16,
                                }}>
                                <Ionicons name="call" size={24} color={'#1877F2'} />
                                <Ionicons name="videocam" size={24} color={'#1877F2'} />
                                <Ionicons name="information-circle" size={24} color={'#1877F2'} />
                            </View>
                        );
                    },
                }}
            />
            <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View>{}</View>

                    <View>
                        <TextInput placeholder="Type here..." />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </>
    );
}
