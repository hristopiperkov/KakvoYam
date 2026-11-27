import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/common/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function ClientListScreen() {
  return (
    <Screen eyebrow="KAKVOYAM / ADMIN" title="Clients." subtitle="The registered client list will be loaded from Supabase after role-based access is connected.">
      <View style={styles.card}>
        <Text style={styles.label}>ADMIN AREA</Text>
        <Text style={styles.text}>This is a structural placeholder. Client data will only be displayed after administrator authentication and database permissions are implemented.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.surface, borderColor: Colors.border, borderRadius: Radius.lg, borderWidth: 1, gap: Spacing.sm, padding: Spacing.xl },
  label: { color: Colors.primary, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  text: { color: Colors.textMuted, fontSize: 14, lineHeight: 21 },
});
