import { StyleSheet, Text, View } from 'react-native';
import Screen, { screenStyles } from '../../components/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function ProfileScreen() {
  return (
    <Screen
      eyebrow="MY ACCOUNT"
      title="Your profile"
      subtitle="Your personal information will be kept here."
    >
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>KY</Text>
        </View>
        <Text style={styles.cardTitle}>Profile setup comes next</Text>
        <Text style={[screenStyles.muted, styles.centerText]}>
          In the next milestone, you will be able to add and update your personal information and dietary preferences.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.xl,
    borderWidth: 1,
    gap: Spacing.md,
    padding: Spacing.xl,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: Colors.surfaceMuted,
    borderRadius: 40,
    height: 72,
    justifyContent: 'center',
    width: 72,
  },
  avatarText: {
    color: Colors.primaryDark,
    fontSize: 22,
    fontWeight: '800',
  },
  cardTitle: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  centerText: {
    textAlign: 'center',
  },
});
