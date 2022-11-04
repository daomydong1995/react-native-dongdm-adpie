import { NativeModules, Platform } from 'react-native';

export type VideoAdsProps = {};

const LINKING_ERROR =
  `The package 'react-native-dongdm-adpie' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const DongdmAdpie = NativeModules.DongdmAdpie
  ? NativeModules.DongdmAdpie
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return DongdmAdpie.multiply(a, b);
}

export function showAdPieVideoAds(props: VideoAdsProps): Promise<any> {
  console.log('123');
  return DongdmAdpie.showAdPieVideoAds(props);
}
