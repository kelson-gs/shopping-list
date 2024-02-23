import { useFonts, Jua_400Regular } from '@expo-google-fonts/jua';

export function FontLoader({ children }: any) {
  let [fontsLoaded] = useFonts({ Jua_400Regular });

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
}