import { useLocalSearchParams } from 'expo-router';
import DiaryDayDetailsScreen from '../../../screens/client/DiaryDayDetailsScreen';

export default function DiaryDayRoute() {
  const { dayId } = useLocalSearchParams();
  return <DiaryDayDetailsScreen dayId={Array.isArray(dayId) ? dayId[0] : dayId} />;
}
