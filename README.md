# 프로젝트 보고서

---

### 😁 아이템 선정 기준

- React를 잘 알고 있는 학생들은 많지만 Next.js 라는 프레임워크에 대해서는 문외한인 학생들이 많다.
- CSR과 SSR에 대한 개념을 모르는 학생들이 많으며 SSR(server side rendering)의 놀라운 장점에 대해 소개를 하고 싶었다.
- Next.js 에서 데이터 패칭, 파일 기반 라우팅, 성능을 최적화해주는 다양한 기능들을 소개함과 동시에 최신 웹 기술과의 호환성을 개념과 간단한 실습을 통하여 익힐 수 있기를 바라는 마음에 영상을 제작하였습니다.

---

### ⭐ 아이템의 핵심 내용

https://nextjs.org/

1. Next.js 란?

> Next.js는 풀스택 웹 어플리케이션을 구축하기 위한 React 프레임워크입니다. 프론트 단의 UI구성은 React로 하고, Next.js를 사용하여 추가 기능과 최적화를 수행합니다. 내부적으로 Next.js는 번들링, 컴파일 등과 같이 React에 필요한 도구를 추상화하고 자동으로 구성합니다. 이를 통해 구성에 시간을 낭비하는 대신 어플리케이션 구축에 집중할 수 있습니다. 개인 개발자든 대규모 팀의 일원이든 Next.js는 동적이며 빠른 React 어플리케이션을 구축하는 데 도움을 주는 효과를 가집니다.
>
> - Next.js 의 특징
>   - pre-rendering & SSR
>   - Hot Module Replacement
>   - Code Splitting
>   - 설정이 필요 없음
>   - TypeScript 내장
>   - Hybrid Rendering
>   - 파일기반 Routing 기능
>   - styled-jsx 지원
>   - Hydration

1. SSR(Server Side Rendering)이란?

> SSR은 Server Side Rendering 약자로 처음 클라이언트가 접속했을때 브라우저에서 자바스크립트 코드를 다운로드 받아 해석 할 때까지 기다리지 않고 **서버에서 보여질 HTML을 미리 준비해 클라이언트한테 응답해주는 방식**을 서버 사이드 랜더링이라고 합니다.
> 줄여서 SSR이라고 표현합니다.
>
> 사용자가 웹 페이지에 접속했을 때 서버에서는 사용자에게 랜더링될 HTML 파일을 응답하여 사용자에게 웹 페이지가 바로 랜더링 될 수 있게 해줍니다.
>
> 그 후 브라우저는 자바스크립트 파일을 다운로드 받아 해석하고 실행하는 절차를 가지게 됩니다.
>
> 이를 통해서 사용자는 브라우저가 자바스크립트 파일을 해석하고 보여질때까지 기다리지 않고 바로 랜더링을 하기 때문에 사용자에게는 좋은 경험을 줄 수 있습니다.

1. SSR의 장점
   - 랜더링 속도가 향상됨에 따라서 사용자가 웹 페이지에 접속했을 때 바로 확인 가능.
   - SEO 최적화가 쉽다.

---

### 🚀 개발하면서 발생했던 문제점

- 실습 과정 Git Code에서의 문제 발생

  1. `general-server` : error 발생

     ```bash
     TSError: ⨯ Unable to compile TypeScript:
     src/controllers/post.controller.ts:42:24 - error TS2339: Property 'params' does not exist on type 'Context'.

     42     const { id } = ctx.params;
     ```

     - `TS2339` error: `Context` 유형에 `params` 속성이 존재하지 않음을 나타냄
       - 해결 방법: 타입 확장 및 속성 추가(인터페이스 정의)

  2. `next-posts-app` : error 발생

     ```bash
     node:internal/crypto/hash:68
       this[kHandle] = new _Hash(algorithm, xofLen);

     Node.js v20.11.0
     error Command failed with exit code 1.
     info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
     ```

     - Error: Node.js 17 version 이상에서 발생되는 문제
     - OpenSSL 3가 기본으로 사용되면서, 이전 버전의 Webpack 및 관련 라이브러리와 호환되지 않는 문제점 발생

       - 해결 방법

         1. Node.js version downgrade
         2. **환경 변수 설정: `openssl-legacy-provider` 옵션을 사용하여 해결(NODE_OPTIONS)**

            ```bash
            set NODE_OPTIONS=--openssl-legacy-provider
            ```

            - `package.json`

            ```json
            "scripts": {
              "next": "set NODE_OPTIONS=--openssl-legacy-provider && next",
              "dev": "set NODE_OPTIONS=--openssl-legacy-provider && next dev",
              "build": "set NODE_OPTIONS=--openssl-legacy-provider && next build",
              "start": "set NODE_OPTIONS=--openssl-legacy-provider && next start"
            }
            ```

---

### ✏️ 감상

- 실습 과정에서 발생한 오류들이나 버전 최적화/호환성에 대해서 더 깊게 탐구해보는 시간이 되었습니다. 또한, 영상을 제작하면서 조금이라도 쉽게 설명을 하기 위해 노력하는 것이 가장 어려웠던 것 같습니다. 여러 번의 시행착오와 개발 및 실습을 진행하는 과정에서 다른 수많은 오픈소스들을 확인하여 영상제작에 정말 큰 도움이 되었습니다.
