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

- React Native로 앱 개발
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
        import useSWR from 'swr'
        
        function Profile() {
          const { data, error } = useSWR('/api/user', fetcher)
        
          if (error) return <div>failed to load</div>
          if (!data) return <div>loading...</div>
          return <div>hello {data.name}!</div>
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

   1. 먼저 `map` 을 통해 프로미스 배열 `promises`을 가져오고,  
   2. `Promise.all(promises)` 로 프로미스들을 한 번에 처리하면 됩니다.  

   이전에도 자바스크립트로 프로젝트를 하면서 비동기 개념을 제대로 이해하지 못해서  
   이슈가 발생한 적이 몇 번 있었는데,  
   자바스크립트 개념을 정확히 알고 사용해야 이런 부분에서 삽질하지 않고  
   프로젝트할 때 시간을 단축할 수 있을 것 같아서  
   개념 공부를 더 열심히 해야겠다는 생각이 들었습니다.  

- 참고 :
    - [https://medium.com/@trustyoo86/async-await를-이용한-비동기-loop-병렬로-순차-처리하기-315f31b72ccc](https://medium.com/@trustyoo86/async-await%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-loop-%EB%B3%91%EB%A0%AC%EB%A1%9C-%EC%88%9C%EC%B0%A8-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-315f31b72ccc)
    - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## 심채윤

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 예효은

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 이예지

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)
