import { NativeBaseProvider } from 'native-base';
import SearchScreen from './screens/Search';

export default function App() {
  return (
    <NativeBaseProvider>
      <SearchScreen />
    </NativeBaseProvider>
  );
}
