# FOMI Android App - Jetpack Compose

이 폴더에는 FOMI 보안 앱의 Android Jetpack Compose 버전 소스 코드가 포함되어 있습니다.

## 프로젝트 구조

```
android-compose/
├── MainActivity.kt                 # 메인 액티비티
├── build.gradle.kts               # Gradle 빌드 설정
├── navigation/
│   └── FomiNavigation.kt          # 네비게이션 설정
├── ui/
│   ├── components/
│   │   ├── FomiButton.kt          # 커스텀 버튼 컴포넌트
│   │   ├── FomiCard.kt            # 카드 컴포넌트
│   │   └── FomiTopBar.kt          # 상단 바 컴포넌트
│   ├── screens/
│   │   ├── HomeScreen.kt          # 홈 화면
│   │   ├── MalwareEntryScreen.kt  # 악성앱 검사 진입
│   │   ├── MalwareScanningScreen.kt # 스캔 중 화면
│   │   ├── MalwareSafeScreen.kt   # 안전 결과 화면
│   │   ├── MalwareDangerScreen.kt # 위험 결과 화면
│   │   ├── PhishingDashboardScreen.kt # 스미싱 점검
│   │   ├── RiskWarningScreen.kt   # 위험 경고 화면
│   │   ├── DocumentHubScreen.kt   # 문서 허브
│   │   └── InfoScreen.kt          # 앱 정보
│   └── theme/
│       ├── Color.kt               # 색상 정의
│       ├── Theme.kt               # 테마 설정
│       └── Type.kt                # 타이포그래피
└── README.md
```

## Android Studio 설정 방법

1. **새 프로젝트 생성**
   - Android Studio에서 "New Project" 선택
   - "Empty Activity" (Compose) 템플릿 선택
   - Package name: `com.fomi.app`
   - Minimum SDK: API 26 (Android 8.0)

2. **파일 복사**
   - 이 폴더의 모든 `.kt` 파일을 해당 경로에 복사
   - `build.gradle.kts` 내용을 참고하여 의존성 추가

3. **폰트 설정**
   - `res/font/` 폴더에 Pretendard 폰트 파일 추가:
     - `pretendard_regular.ttf`
     - `pretendard_medium.ttf`
     - `pretendard_semibold.ttf`
     - `pretendard_bold.ttf`

4. **빌드 및 실행**
   - Gradle Sync 실행
   - 앱 빌드 및 실행

## 필요한 의존성

```kotlin
// Navigation
implementation("androidx.navigation:navigation-compose:2.7.6")

// Material Icons Extended
implementation("androidx.compose.material:material-icons-extended")
```

## 기능

- 악성앱 검사: 설치된 앱의 안전성 검사
- 스미싱 점검: 문자 메시지의 피싱 위험 분석
- 문서 허브: 보안 관련 문서 확인
- 위험 경고: 의심스러운 링크 차단

## 디자인 시스템

- **Primary Color**: Teal (#14B8A6)
- **Background**: Navy gradient (#0A1628 → #0F2744)
- **Font**: Pretendard (한글 지원)
- **Corner Radius**: 12-16dp
