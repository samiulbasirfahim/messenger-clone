import { Link, Stack, Tabs, usePathname } from 'expo-router';
import { Button } from '~/components/Button';

export default function AuthLayout() {
    const pathname = usePathname();
    const isLogin = pathname.split('/')[1] === 'login';
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: '',
                    headerRight(props) {
                        return (
                            <Link href={{ pathname: isLogin ? '/register' : '/login' }} replace asChild>
                                <Button title={isLogin ? 'Register' : 'Login'} className="py-2" />
                            </Link>
                        );
                    },
                }}
            />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        display: 'none',
                    },
                }}
            />
        </>
    );
}
