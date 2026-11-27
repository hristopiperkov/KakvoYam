import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function ClientCard({ client, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.avatar}><Text style={styles.avatarText}>{(client.full_name || 'C').slice(0, 1).toUpperCase()}</Text></View>
      <View style={styles.copy}>
        <Text style={styles.name}>{client.full_name || 'Client'}</Text>
        <Text style={styles.email}>{client.email}</Text>
      </View>
      <Ionicons name="chevron-forward" color={Colors.textMuted} size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', backgroundColor: Colors.surface, borderColor: Colors.border, borderRadius: Radius.lg, borderWidth: 1, flexDirection: 'row', gap: Spacing.md, padding: Spacing.lg },
  avatar: { alignItems: 'center', backgroundColor: Colors.primary, borderRadius: Radius.pill, height: 42, justifyContent: 'center', width: 42 },
  avatarText: { color: Colors.black, fontWeight: '900' },
  copy: { flex: 1, gap: 3 },
  name: { color: Colors.text, fontSize: 14, fontWeight: '800' },
  email: { color: Colors.textMuted, fontSize: 11 },
  pressed: { opacity: 0.8 },
});
