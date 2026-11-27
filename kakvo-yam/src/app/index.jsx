import { Redirect } from 'expo-router';

// Temporary entry route. Authentication-based redirects will replace this next.
export default function IndexRoute() {
  return <Redirect href="/client" />;
}
