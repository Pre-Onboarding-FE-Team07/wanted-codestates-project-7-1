# Github Issue Tracker

Github 저장소를 등록하고, 등록한 저장소의 이슈를 모아 보여줍니다.

## 실행 방법

1. 의존성 패키지를 설치합니다.

   ```sh
   $ npm install
   ```

2. [Metro 번들러](https://facebook.github.io/metro/docs/concepts/)를 실행합니다.

   ```sh
   $ npm run start
   ```

3. 터미널을 하나 더 열고 [Android Emulator](https://developer.android.com/studio/run/managing-avds.html)를 실행합니다.

   ```sh
   $ npm run android
   ```

## 문제 해결 방법

### `npm run android` `INSTALL_FAILED_INSUFFICIENT_STORAGE` 오류 발생할 때

에뮬레이터에서 앱 삭제 후 다시 빌드합니다. [참고](https://rateye.tistory.com/1414)
