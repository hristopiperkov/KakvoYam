import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Screen, { screenStyles } from '../../components/Screen';
import { Colors, Radius, Spacing } from '../../constants/theme';

export default function ProfileScreen() {
  return (
    <Screen
      eyebrow="YOUR ACCOUNT"
      title="Profile."
      subtitle="Your personal details and food preferences will live here."
    >
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>KY</Text>
        </View>
        <View style={styles.profileCopy}>
          <Text style={styles.profileName}>Your profile</Text>
          <Text style={styles.profileStatus}>PROFILE SETUP COMES NEXT</Text>
        </View>
        <Ionicons name="person-circle-outline" size={24} color={Colors.textMuted} />
      </View>

      <View style={styles.detailsCard}>
        <Text style={styles.cardEyebrow}>PERSONAL DETAILS</Text>
        <View style={styles.detailRow}>
          <View style={styles.detailIcon}>
            <Ionicons name="person-outline" size={18} color={Colors.primary} />
          </View>
          <View style={styles.detailCopy}>
            <Text style={styles.detailTitle}>Basic information</Text>
            <Text style={screenStyles.muted}>Name, age, height and weight</Text>
          </View>
          <Ionicons name="lock-closed-outline" size={16} color={Colors.textMuted} />
        </View>
        <View style={styles.separator} />
        <View style={styles.detailRow}>
          <View style={styles.detailIcon}>
            <Ionicons name="nutrition-outline" size={18} color={Colors.primary} />
          </View>
          <View style={styles.detailCopy}>
            <Text style={styles.detailTitle}>Food preferences</Text>
            <Text style={screenStyles.muted}>Dietary preferences and allergies</Text>
          </View>
          <Ionicons name="lock-closed-outline" size={16} color={Colors.textMuted} />
        </View>
      </View>

      <View style={styles.noteCard}>
        <Ionicons name="shield-checkmark-outline" size={20} color={Colors.primary} />
        <Text style={styles.noteText}>
          Your profile will help your nutritionist understand your background when reviewing your food diary.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    alignItems: 'center',
    backgroundColor: Colors.surfaceMuted,
    borderColor: Colors.border,
    borderRadius: Radius.xl,
    borderWidth: 1,
    flexDirection: 'row',
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Radius.pill,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  avatarText: {
    color: Colors.black,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  profileCopy: {
    flex: 1,
    gap: 5,
  },
  profileName: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '900',
  },
  profileStatus: {
    color: Colors.primary,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  detailsCard: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.xl,
    borderWidth: 1,
    gap: Spacing.lg,
    padding: Spacing.lg,
  },
  cardEyebrow: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  detailRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.md,
  },
  detailIcon: {
    alignItems: 'center',
    backgroundColor: Colors.accent,
    borderRadius: Radius.md,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  detailCopy: {
    flex: 1,
    gap: 2,
  },
  detailTitle: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  separator: {
    backgroundColor: Colors.border,
    height: 1,
  },
  noteCard: {
    alignItems: 'flex-start',
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  noteText: {
    color: Colors.textMuted,
    flex: 1,
    fontSize: 12,
    lineHeight: 19,
  },
});
