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

#### 어려웠던 점 (에러 핸들링)
