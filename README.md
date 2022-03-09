# Github Issue Tracker

Github 저장소를 등록하고, 등록한 저장소의 이슈를 모아 보여주는 서비스입니다.

## 사용한 기술 스택

- React Native, React-Native-CLI, SWR

## 프로젝트 실행 방법

- 배포 사이트 : 구글 플레이스토어에 배포 진행 중입니다.

- 로컬

  1.  의존성 패키지를 설치합니다.

      ```sh
      $ npm install
      ```

  2.  [Metro 번들러](https://facebook.github.io/metro/docs/concepts/)를 실행합니다.

      ```sh
      $ npm run start
      ```

  3.  터미널을 하나 더 열고 [Android Emulator](https://developer.android.com/studio/run/managing-avds.html)를 실행합니다.

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

| 이름                                       | 직책 | 역할                                                   |
| ------------------------------------------ | ---- | ------------------------------------------------------ |
| [⚡️박진용](https://github.com/jinyongp)   | 팀장 | 개발 환경 구축 및 전체 UI 구현 및 배포                 |
| [✨김정훈](https://github.com/jeonghun10)  | 팀원 | 페이지 네이션 구현                                     |
| [🎨문선경](https://github.com/dev-seomoon) | 팀원 | 검색 및 출력 기능 구현 및 SWR 적용                     |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 등록된 저장소 삭제 기능 구현                           |
| [✏️예효은](https://github.com/ye-yo)       | 팀원 | 저장소 등록 기능 구현                                  |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀원 | 저장소 issue 출력 및 github 상세 페이지 이동 기능 구현 |

---

## 구현한 기능 목록

- <img src="https://img.shields.io/badge/React%20Native-000.svg?&style=for-the-badge&logo=React&logoColor=rgb(97,%20218,%20251)" alt="React Native"/> <img src="https://img.shields.io/badge/SWR-e4e4e4.svg?&style=for-the-badge&logo=SWR" alt="swr"/> 로 앱 개발
- 저장소 검색 및 출력
- Async Storage 활용한 저장소 등록/삭제
- issue 모아보기 및 github 상세 페이지 이동
- 페이지네이션

---

## 박진용

#### 구현한 방법

- React Native CLI를 이용해 프로젝트를 생성 및 초기화했습니다.

  - ESLint와 Prettier를 설정하고, `lint-staged`를 통해 커밋 과정에서 컨벤션에 맞게 고치도록 자동화했습니다.
  - RN에서 `jsx` 확장자를 읽을 수 있도록 설정하기 위해 babel과 metro의 설정을 변경했습니다.
  - react-navigation을 이용해 bottom tabs를 구성했습니다.

- UI 개발을 위해 [NativeBase](https://nativebase.io/)를 활용했습니다.

  - 다양한 Layout과 컴포넌트를 지원하여 이를 활용하여 빠르게 개발했습니다.
  - prop로 스타일을 지정하여 [Utility First](https://docs.nativebase.io/utility-first) 방식으로 개발할 수 있다는 점이 편리했습니다.
  - Skeleton 컴포넌트를 이용해 데이터가 로딩 중일 때 사용자가 이를 알 수 있도록 했습니다.

- `Animated`를 이용해 검색 완료 시 Header가 수축될 수 있도록 하여 동적인 UI를 작성했습니다.
- 팀원이 [데이터 fetch 과정에서 비동기 이슈](#3-비동기-처리---promise-all)로 문제를 겪고 있을 때, 원인을 발견하고 해결 방법을 제시했습니다.
- Google Play Store에 배포했습니다.

#### 어려웠던 점 (에러 핸들링)

- React Native 프로젝트를 할 때 여태까지 Expo나 [CRNA](https://github.com/expo/create-react-native-app)를 이용해왔었는데 React Native CLI로 프로젝트를 생성하려니 부딪히는 문제도 많고 패키지를 하나 설치하려고 해도 제대로 실행되지 않아 어려움을 많이 겪었습니다. NativeBase에서도 icon 라이브러리를 지원해서 이를 이용하려고 했지만, 제대로 동작하지 않아 [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) 라이브러리를 사용했습니다.

## 김정훈

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)

## 문선경

- 검색 기능 구현
- 이슈 모아보기 기능 데이터 연동
- SWR 사용해 커스텀 훅 작성

#### 구현한 방법

##### 1. SWR 사용

- swr을 사용해서 gihub issue api, github search api 호출로 가져온 원격 데이터를  
  로컬 상태와 동기화할 수 있게 커스텀 훅을 구현했습니다.
- swr을 사용한 이유 :
  - swr : 데이터 가져오기를 위한 리액트 훅 라이브러리.
    ```jsx
    import useSWR from 'swr';

    function Profile() {
      const { data, error } = useSWR('/api/user', fetcher);

      if (error) return <div>failed to load</div>;
      if (!data) return <div>loading...</div>;
      return <div>hello {data.name}!</div>;
    }
    ```
  - 원격 상태와 로컬 상태를 동기화 시켜주고, **여러 컴포넌트에서 동일한 원격 상태를 공유**할 수 있습니다.
  - 원격 상태에 변경이 있으면, 거의 실시간에 가깝게 변경사항을 로컬 상태에 반영해줍니다.
    swr 내부적으로 다음과 같은 방식으로 실시간과 같은 원격-로컬 상태 동기화가 이루어집니다.
    - 인터벌 폴링 - 주기적으로 원격 상태 데이터를 가져와서  
      내부캐싱된 데이터와 비교해 변경사항이 있는지 확인하고, 변경사항이 있다면 반영해줌.
    - 포커스/네트워크 회복 시 재검증 -  
      다른 탭을 클릭했다가 돌아왔을 때, 네트워크 연결이 끊어졌다가 다시 연결되었을 때  
      원격 상태가 변경되었는지 확인해서 자동으로 반영해줌.
    예를 들어 사용자가 follow하고 있는 레포지토리에 새로운 이슈가 생성되었다면,  
     새로고침을 하지 않아도 새로운 이슈가 화면에 곧 나타납니다.
    ⇒ api 호출이 더 빈번하게 일어날 수 있지만,  
     한번 fetch한 원격 상태 데이터는 내부적으로 캐시해두고, 요청 시 유니크한 키값을 확인해서 중복 요청을 제거함으로써  
     api 호출 횟수를 최소화하면서도 사용성을 증대시킬 수 있습니다.  

  - 여러 컴포넌트가 동일한 원격 상태를 공유한다는 점을 이용해서 **로컬 상태 관리 목적**으로도 사용할 수 있습니다.
    로컬 상태를 window, AsyncStorage, local/session storage 등에 저장해두고 원격 상태처럼 접근해서 사용하면  
     전역으로 상태 관리를 할 수 있습니다.
    이번 프로젝트에서는 swr의 이러한 특징을 이용해서,  
     MyRepo page, Issue page에서 공통으로 접근하고 조작하는  
     `MyRepoList` 데이터를 AsyncStorage에 저장하고 전역으로 상태 관리를 했습니다.
    ⇒ 상태 관리를 위한 라이브러리가 아니다보니, 스토어가 없어서  
     상태를 window 전역 객체나 로컬 스토리지 등에 저장해서 원격 상태처럼 관리해야한다는 점은 단점이지만,  
     프로젝트에서 API 호출 시 swr을 사용하고 있기 때문에,  
     추가로 상태 관리 라이브러리를 설치하지 않고 swr만으로 간단한 상태 관리까지 해줄 수 있는 점이 장점이라고 느꼈습니다.  
     특히 코드가 정말 직관적이고 간결해서, 관리할 상태수가 적을 때 가독성이나 유지보수 측면에서 장점이 있는 것 같습니다.  

- 참고 :
  - [https://swr.vercel.app/ko](https://swr.vercel.app/ko)
  - [https://min9nim.vercel.app/2020-10-05-swr-intro2/](https://min9nim.vercel.app/2020-10-05-swr-intro2/)

##### 2. 배열 메소드 사용

배열 메서드들은 `map()`을 제외하고는 알고는 있어도 사용해본 적이 거의 없는 메서드들이 많은데,  
이번에 api 호출로 받아온 데이터들을 가공하는 과정에서 다양한 배열 메소드를 사용해봤습니다.

- [`Array.prototype.flat()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`Array.prototype.sort()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- `Array.prototype.slice()`

#### 어려웠던 점 (에러 핸들링)

##### 1. 리액트 네이티브 개발환경설정

리액트 네이티브 공식문서의 환경설정 부분이 인텔 맥 기준으로 되어 있는데,  
저는 m1 맥을 사용하고 있어서 공식문서만 보고 개발환경 설정이 어려웠습니다.  
그래서 비슷한 이슈를 먼저 겪고 해결 방법을 정리해 둔 글들을 참고해서 환경설정을 했습니다.

- 참고 : https://qnrjs42.blog/react-native/m1-arm64-setting

##### 2. 코드 외적으로 발생하는 에러 핸들링

웹 어플리케이션 개발과 다르게  
작성한 코드 상에 문제(신택스 에러, 컴파일 에러)가 없는데도 에러가 발생하는 경우가 많았습니다.  
일단 초기화/리셋(앱 리로드, 삭제 후 재설치, 애뮬레이터 재시작, 캐시 지우기, 프로세스 kill, ..)을 하면  
대부분 해결이 되어서 진행을 하긴 했는데,  
나중에 시간 여유를 가지고 정확한 에러의 원인을 좀 더 알아보고 싶습니다.

- 에러 핸들링 로그: `RNCSafeAreaView was not found in the UIManager`
  ```
   1. rm -rf node_modules
   2. cd android && ./gradlew clean
   3. grep react-native & kill pid
   4. npm install
   5. npm run start —reset-cache
   6. npm run android
  ```

##### 3. 비동기 처리 - Promise all

- 각 레포지토리에 github issue api로 요청해 받아온 Issue들을 하나의 배열로 합쳐야 했습니다.  
   `(이슈배열 1: [...], 이슈배열 2: [...] 를 ⇒ 하나의 배열 [...])`.  
   그러려면 Array의 각 요소에 대해 loop를 돌면서 순차적으로/병렬로 비동기 처리를 해야했는데,  
   처음에는 forEach 구문을 사용해서 구현했습니다.

- 처음에 작성했던 코드 요약 버전:

  ```jsx
  const getReposIssues = async (repos) => {
    const res = repos.forEach(async (repo) => await fetcher);
    return res.data;
  };

  // 빈 배열!
  const issues = getRepoIssues(repos);

  // 비동기 데이터 fetching이 끝나기 전에 실행되어 버림.
  issues.sort(/*...*/);
  ```

  이렇게 하니까 issues 배열에 데이터를 담는 작업이 비동기로 이루어져,  
   getRepoIssues()를 호출한 후에 issues 배열에 접근해 추가적인 작업을 할 때 문제가 발생했습니다.

- 해결 :
  검색을 통해 `for...of` 구문을 사용하거나, `Promise.all`을 사용해서 해결할 수 있다는 걸 알게 됐는데,  
   Promise.all을 사용하면 코드가 훨씬 간략해질 것 같아서 Promise.all을 사용해 코드를 수정했습니다.

  1.  먼저 `map` 을 통해 프로미스 배열 `promises`을 가져오고,
  2.  `Promise.all(promises)` 로 프로미스들을 한 번에 처리하면 됩니다.

  이전에도 자바스크립트로 프로젝트를 하면서 비동기 개념을 제대로 이해하지 못해서  
   이슈가 발생한 적이 몇 번 있었는데,  
   자바스크립트 개념을 정확히 알고 사용해야 이런 부분에서 삽질하지 않고  
   프로젝트할 때 시간을 단축할 수 있을 것 같아서  
   개념 공부를 더 열심히 해야겠다는 생각이 들었습니다.

- 참고 :
  - [https://medium.com/@trustyoo86/async-await를-이용한-비동기-loop-병렬로-순차-처리하기-315f31b72ccc](https://medium.com/@trustyoo86/async-await%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-loop-%EB%B3%91%EB%A0%AC%EB%A1%9C-%EC%88%9C%EC%B0%A8-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-315f31b72ccc)
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## 심채윤

- 등록된 저장소 삭제 기능 구현
- Alert를 사용하여 confirm창 구현

#### 구현한 방법

My Repos 페이지에서 RepoCard 클릭시 onPress 콜백이 실행되고 Alert창이 보이게 되며 클릭한 RepoCard를 삭제합니다.

#### 어려웠던 점 (에러 핸들링)

삭제 기능을 구현하면서 삭제 `Alert`창을 `MyRepos`의 `RepoCard`에서 할 수 있게 하려고 하였는데, `MyRepos`, `Search Repository`의 `RepoCard`가 삭제되는 일이 발생 하였습니다. 이를 해결하기 위해 `MyRepo` 컴포넌트에 삭제 기능을 넣어, `MyRepo` 페이지에서만 삭제 기능이 가능 하도록 구현하였습니다.

## 예효은

#### 구현한 방법

asyncStorage를 이용해 저장소 정보를 등록하는 기능을 구현했습니다. asyncstorage를 사용하는 함수들은 최종적으로 custom hook으로 만들었고 개수 제한이나 중복 처리 등도 내부에서 처리하여 알림을 띄우도록 처리했습니다.

#### 어려웠던 점 (에러 핸들링)

asyncStorage는 처음에 일반 함수로 모듈화하여 구현했는데, 팀원분께서 훅으로 작성하는 것이 좋지 않겠냐는 의견을 주셨습니다. custom hook으로 구현해야하는 필요성을 알아보았더니 일반 함수 내에서는 useState, useEffect 등의 리액트 훅을 사용할 수 없기때문에 확장성을 고려해였을 때 custom hook으로 만드는 것이 좋다는 말이 가장 와닿았고 custom hook으로 다시 구현하게 되었습니다. 훅은 처음에 asyncStorage를 저장소 처리 외의 부분에서도 다룰 가능성을 고려하여 useAsyncStorage, 그리고 이 훅을 사용하는 useRepositoryStorage 훅 2가지로 구현했었는데 asyncStorage에 저장하는 것은 저장소 밖에 없기 때문에 다른 팀원분께서 이를 하나로 통합해주셨습니다.

디버깅 과정에서 `Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening GithubIssueTracker.xcworkspace.` 오류가 발생했었는데 build 관련 파일의 내용이 엉킨 것으로 판단되어 `xcode`를 통해 `pods Resources`를 제거하고 새로 빌드하여 해결하였습니다.

## 이예지

#### 구현한 방법

사용자가 등록한 레파지토리를 기준으로 이슈 데이터를 최신 순으로 나열하는 과정을 맡았었습니다. 사용자가 등록한 레파지토리의 정보를 얻어오기 위해 `Async Storage`를 이용해서 데이터를 가져왔었습니다. 그 부분은 팀원분께서 만든 로직을 이용하여 쉽게 가져올 수 있었습니다. 그 후에 있는 데이터인 `full_name`를 활용하여, api를 가져올 수 있었습니다. 데이터를 합치고 최신 순으로 나열해야하기 때문에 모든 데이터가 있는 후에 필터링을 해야했었습니다. 하지만 무의식적으로 데이터 호출 시에 비동기처리로 작성하였고, 비동기로 해서 필터링이 먼저되었기에 문제가 발생했다는 것을 팀원분들의 도움으로 알 수 있었습니다. 최신 순으로 작성하는 부분은 sort()를 이용하여 type을 Date로 변경해주었고, 내림차순으로 정렬하여 구현할 수 있었습니다.

#### 어려웠던 점 (에러 핸들링)

테스트하는 부분과 설치과정에서 굉장히 애를 많이 먹었습니다. 우선 안드로이드 설치 과정에서 JAVA_HOME_PATH 설정을 어디로 해야하는지에 대해 알 수가 없었습니다. 블로그마다 위치가 달라서 여러 방법으로 환경변수를 바꾸어주었습니다. 결국에 jre랑 jdk를 다운 받아서 spring으로 개발을 했었을 때 환경설정했던 기억을 더듬어서 설정을 해주었더니 해결하였습니다. 하지만 앱 빌드 과정에서 너무 많은 시간을 소비해서 정작 개발시간에 쏟지 못하였습니다. 또한 테스트를 하려고 했지만, 갑자기 기기 연결이 끊기는 등 불안정하였습니다. 테스트를 해보기 위해서 Web IDE툴을 이용하여 개발을 하려고 노력하였고, 그 부분에서 거의 데이터가 있다고 가정하면서 개발했기에 어려움이 있었습니다.
