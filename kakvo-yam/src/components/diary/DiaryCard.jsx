import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function DiaryCard({ day, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.numberBox}>
        <Text style={styles.number}>{day.number}</Text>
      </View>
      <View style={styles.copy}>
        <Text style={styles.title}>{day.title}</Text>
        <Text style={styles.subtitle}>{day.subtitle}</Text>
        <Text style={styles.status}>PENDING</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  numberBox: {
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderColor: '#48502E',
    borderRadius: Radius.md,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  number: { color: Colors.primary, fontSize: 13, fontWeight: '900' },
  copy: { flex: 1, gap: 4 },
  title: { color: Colors.text, fontSize: 15, fontWeight: '800' },
  subtitle: { color: Colors.textMuted, fontSize: 10, lineHeight: 15 },
  status: { color: Colors.textMuted, fontSize: 9, fontWeight: '900', letterSpacing: 0.7 },
  pressed: { opacity: 0.78 },
});
