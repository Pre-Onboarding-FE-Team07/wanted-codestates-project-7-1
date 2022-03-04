# Github Issue Tracker

Github 저장소를 등록하고, 등록한 저장소의 이슈를 모아 보여주는 서비스입니다.

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
   > `npm run android`에서 `INSTALL_FAILED_INSUFFICIENT_STORAGE` 오류가 발생하는 경우<br>
   > 에뮬레이터에서 앱 삭제 후 다시 빌드합니다. [참고](https://rateye.tistory.com/1414)
   
   
## 프로젝트 구조

```
--📁 src
  ---📁 components ➡ 컴포넌트 폴더
  ---📁 constants ➡ 전역 상수 폴더
  ---📁 hooks - 커스텀 훅을 모아둔 폴더
  ---📁 screens ➡ 화면 컴포넌트
  ---📁 utils ➡ 모듈화된 함수를 모아둔 폴더
```

## 팀 멤버

| 이름                                       | 직책 | 역할                                             |
| ------------------------------------------ | ---- | ------------------------------------------------ |
| [⚡️박진용](https://github.com/jinyongp)   | 팀장 | 개발 환경 구축 및 전체 UI 구현                                |
| [✨김정훈](https://github.com/jeonghun10)  | 팀원 | 페이지 네이션 구현 |
| [🎨문선경](https://github.com/dev-seomoon) | 팀장 | 검색 및 출력 기능 구현 및 SWR 적용            |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 등록된 저장소 삭제 기능 구현               |
| [✏️예효은](https://github.com/ye-yo)       | 팀원 | 저장소 등록 기능 구현                |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | 저장소 issue 출력 및 github 상세 페이지 이동 기능 구현 |


---

## 구현한 기능 목록

- <img src="https://img.shields.io/badge/React%20Native-000.svg?&style=for-the-badge&logo=React&logoColor=rgb(97,%20218,%20251)" alt="React Native"/>  <img src="https://img.shields.io/badge/SWR-e4e4e4.svg?&style=for-the-badge&logo=SWR" alt="swr"/> 로 앱 개발
- 저장소 검색 및 출력
- Async Storage 활용한 저장소 등록/삭제
- issue 모아보기 및 github 상세 페이지 이동
- 페이지네이션

---

## 박진용

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 김정훈

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 문선경

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 심채윤

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 예효은

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 이예지

#### 구현한 방법
사용자가 등록한 레파지토리를 기준으로 이슈 데이터를 최신 순으로 나열하는 과정을 맡았었습니다. 사용자가 등록한 레파지토리의 정보를 얻어오기 위해 `Async Storage`를 이용해서 데이터를 가져왔었습니다. 그 부분은 팀원분께서 만든 로직을 이용하여 쉽게 가져올 수 있었습니다. 그 후에 있는 데이터인 `full_name`를 활용하여, api를 가져올 수 있었습니다. 데이터를 합치고 최신 순으로 나열해야하기 때문에 모든 데이터가 있는 후에 필터링을 해야했었습니다. 하지만 무의식적으로 데이터 호출 시에 비동기처리로 작성하였고, 비동기로 해서 필터링이 먼저되었기에 문제가 발생했다는 것을 팀원분들의 도움으로 알 수 있었습니다. 최신 순으로 작성하는 부분은 sort()를 이용하여 type을 Date로 변경해주었고, 내림차순으로 정렬하여 구현할 수 있었습니다. 

#### 어려웠던 점 (에러 핸들링)
테스트하는 부분과 설치과정에서 굉장히 애를 많이 먹었습니다. 우선 안드로이드 설치 과정에서 JAVA_HOME_PATH 설정을 어디로 해야하는지에 대해 알 수가 없었습니다. 블로그마다 위치가 달라서 여러 방법으로 환경변수를 바꾸어주었습니다. 결국에 jre랑 jdk를 다운 받아서 spring으로 개발을 했었을 때 환경설정했던 기억을 더듬어서 설정을 해주었더니 해결하였습니다. 하지만 앱 빌드 과정에서 너무 많은 시간을 소비해서 정작 개발시간에 쏟지 못하였습니다. 또한 테스트를 하려고 했지만, 갑자기 기기 연결이 끊기는 등 불안정하였습니다. 테스트를 해보기 위해서 Web IDE툴을 이용하여 개발을 하려고 노력하였고, 그 부분에서 거의 데이터가 있다고 가정하면서 개발했기에 어려움이 있었습니다.
