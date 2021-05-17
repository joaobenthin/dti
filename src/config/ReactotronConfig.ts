import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

let reactotron: typeof Reactotron;

function installReactotron() {
  if (__DEV__) {
    reactotron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
      .configure()
      .use(reactotronRedux())
      .useReactNative()
      .connect();
  }
  return reactotron;
}
export default installReactotron;
