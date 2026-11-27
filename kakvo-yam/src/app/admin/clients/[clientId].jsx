import { useLocalSearchParams } from 'expo-router';
import ClientDetailsScreen from '../../../screens/admin/ClientDetailsScreen';

export default function ClientDetailsRoute() {
  const { clientId } = useLocalSearchParams();
  return <ClientDetailsScreen clientId={Array.isArray(clientId) ? clientId[0] : clientId} />;
}
