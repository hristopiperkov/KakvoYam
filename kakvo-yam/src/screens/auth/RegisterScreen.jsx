import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/common/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function RegisterScreen() {
  return (
    <Screen eyebrow="KAKVOYAM / ACCOUNT" title="Create your account." subtitle="Client registration and profile creation will be implemented next.">
      <View style={styles.card}>
        <Text style={styles.label}>COMING NEXT</Text>
        <Text style={styles.text}>This screen is part of the project structure. Its form and Supabase actions will be added in the authentication milestone.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.surface, borderColor: Colors.border, borderRadius: Radius.lg, borderWidth: 1, gap: Spacing.sm, padding: Spacing.xl },
  label: { color: Colors.primary, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  text: { color: Colors.textMuted, fontSize: 14, lineHeight: 21 },
});
