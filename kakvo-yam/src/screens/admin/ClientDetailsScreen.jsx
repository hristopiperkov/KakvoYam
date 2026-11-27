import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/common/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function ClientDetailsScreen({ clientId }) {
  return (
    <Screen eyebrow="KAKVOYAM / ADMIN" title="Client details." subtitle="Review a client's profile and submitted food diaries.">
      <View style={styles.card}>
        <Text style={styles.label}>CLIENT REFERENCE</Text>
        <Text style={styles.id}>{clientId || 'Not selected'}</Text>
        <Text style={styles.text}>Client information will be retrieved from Supabase when administrator access is implemented.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.surface, borderColor: Colors.border, borderRadius: Radius.lg, borderWidth: 1, gap: Spacing.sm, padding: Spacing.xl },
  label: { color: Colors.primary, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  id: { color: Colors.text, fontSize: 16, fontWeight: '800' },
  text: { color: Colors.textMuted, fontSize: 14, lineHeight: 21 },
});
