export type LanguageCode =
  | 'ko'
  | 'en'
  | 'ja'
  | 'zh'
  | 'es'
  | 'fr'
  | 'de'
  | 'it'
  | 'nl'
  | 'sv';

export interface G10Language {
  code: LanguageCode;
  shortCode: string;
  name: string;
  region: string;
}

export const G10_LANGUAGES: G10Language[] = [
  { code: 'ko', shortCode: 'KR', name: '한국어', region: '대한민국' },
  { code: 'en', shortCode: 'US', name: 'English', region: 'United States / UK' },
  { code: 'ja', shortCode: 'JP', name: '日本語', region: '日本' },
  { code: 'zh', shortCode: 'CN', name: '中文 (简体)', region: '中国' },
  { code: 'es', shortCode: 'ES', name: 'Español', region: 'España / México' },
  { code: 'fr', shortCode: 'FR', name: 'Français', region: 'France' },
  { code: 'de', shortCode: 'DE', name: 'Deutsch', region: 'Deutschland' },
  { code: 'it', shortCode: 'IT', name: 'Italiano', region: 'Italia' },
  { code: 'nl', shortCode: 'NL', name: 'Nederlands', region: 'Nederland' },
  { code: 'sv', shortCode: 'SE', name: 'Svenska', region: 'Sverige' },
];

export const CONTACT_EMAIL = 'nimomusicceo@gmail.com';
export const KAKAO_OPEN_CHAT_URL = 'https://open.kakao.com/o/ggTf7cci';
export const KAKAO_CHANNEL_CHAT_URL = 'https://pf.kakao.com/_fxhzxeX/chat';

export interface SiteTranslation {
  langSelectorTitle: string;
  nav: {
    brandSub: string;
    intro: string;
    benefits: string;
    factory: string;
    factoryBadge: string;
    studio: string;
    studioBadge: string;
    lyricsDownloader: string;
    lyricsDownloaderTitle: string;
    studioDownloadTitle: string;
    playground: string;
    playgroundTitle: string;
    freeBadge: string;
    wavToMp3: string;
    wavToMp3Title: string;
    contactBtn: string;
    contactBtnShort: string;
    buyBtn: string;
    menuLabel: string;
  };
  hero: {
    bannerBefore: string;
    bannerFactory: string;
    bannerMiddle: string;
    bannerStudio: string;
    bannerAfter: string;
    headline1: string;
    headline2: string;
    subtitlePart1: string;
    subtitleFactory: string;
    subtitlePart2: string;
    subtitleStudio: string;
    subtitlePart3: string;
    subtitleLine2: string;
    ctaButton: string;
    factoryCard: {
      programTag: string;
      engineTag: string;
      title: string;
      platform: string;
      quote: string;
      desc: string;
      timeLabel: string;
      videoBtn: string;
    };
    studioCard: {
      programTag: string;
      engineTag: string;
      title: string;
      platform: string;
      quote: string;
      desc: string;
      timeLabel: string;
      videoBtn: string;
    };
  };
  benefits: {
    kicker: string;
    title1: string;
    title2: string;
    subtitle: string;
    items: Array<{
      badge: string;
      title: string;
      highlight: string;
      description: string;
    }>;
  };
  factoryDemo: {
    programTag: string;
    engineTag: string;
    title: string;
    tagline: string;
    intro: string;
    steps: Array<{ title: string; desc: string }>;
    bottomCheck: string;
    videoBadge: string;
    videoWatchBadge: string;
    videoTitle: string;
    videoDesc: string;
    videoFooterLeft: string;
    videoFooterRight: string;
  };
  studioDemo: {
    programTag: string;
    engineTag: string;
    title: string;
    tagline: string;
    intro: string;
    screenshotCaption: string;
    screenshotBadge: string;
    steps: Array<{ title: string; desc: string }>;
    bottomCheck: string;
    videoHeaderTag: string;
    videoHeaderTitle: string;
    videoPlayBtn: string;
    videoOverlayTitle: string;
    videoOverlayDesc: string;
  };
  bottomCta: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    cardSub: string;
    cardTitle: string;
    note: string;
  };
  footer: {
    tagline: string;
    homepage: string;
    contactLink: string;
  };
  videoModal: {
    tag: string;
    factoryTitle: string;
    factoryDesc: string;
    studioTitle: string;
    studioDesc: string;
    preparingTitle: string;
    preparingDesc: string;
    watchOnYoutube: string;
    contactBtn: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, SiteTranslation> = {
  ko: {
    langSelectorTitle: 'G10 주요국 언어 선택',
    nav: {
      brandSub: '팩토리 & 스튜디오',
      intro: '소개',
      benefits: '핵심 혜택',
      factory: '팩토리',
      factoryBadge: 'AI 작곡',
      studio: '스튜디오',
      studioBadge: '영상 제작',
      lyricsDownloader: '가사 다운로더',
      lyricsDownloaderTitle: 'Suno 가사 다운로더 다운로드',
      studioDownloadTitle: 'PlyMaster Studio 설치 파일 다운로드',
      playground: '🎧 AI 음악 놀이터',
      playgroundTitle: '무료로 즐기는 AI음악 스트리밍 - AI음악 놀이터',
      freeBadge: '무료',
      wavToMp3: '✨ Wav to MP3',
      wavToMp3Title: '무료 Wav to MP3 변환기',
      contactBtn: '오픈 채팅방 입장',
      contactBtnShort: '오픈채팅',
      buyBtn: '구매하기',
      menuLabel: '전체 메뉴',
    },
    hero: {
      bannerBefore: '플리마스터는 ',
      bannerFactory: '팩토리(AI 작곡)',
      bannerMiddle: '와 ',
      bannerStudio: '스튜디오(영상 제작)',
      bannerAfter: ' 2가지로 구성되어 있습니다',
      headline1: '클릭 몇 번으로 내 채널에',
      headline2: '음악과 영상이 쏟아집니다',
      subtitlePart1: '검증된 알고리즘으로 일관성있는 ',
      subtitleFactory: 'Suno곡 제작(팩토리)',
      subtitlePart2: ', ',
      subtitleStudio: '플레이리스트 최적화 영상 제작 시스템(스튜디오)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: '카카오톡 1:1 상담 문의하기',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Suno AI 전용 작곡 엔진',
        title: '플리마스터 팩토리',
        platform: '(웹사이트)',
        quote: '"테마만 선택하면 Suno 작곡·작사부터 유튜브 업로드 정보까지 한번에 끝!"',
        desc: "제작자가 직접 검증한 테마별 황금 알고리즘이 내장되어 있어, 사용자가 테마를 선택하고 간단한 옵션만 설정하면 수노(Suno)에 최적화된 프롬프트와 가사를 제작하고 유튜브 업로드에 편리한 정보도 제작해 줍니다. 현재 테마팩에 없는 테마팩을 원하시면 위 '카카오톡 1:1 상담 문의하기 ->'를 클릭해 주세요.",
        timeLabel: '소요 시간: 1분',
        videoBtn: '팩토리 시연 영상 보기',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: '원클릭 영상 제작 엔진',
        title: '플리마스터 스튜디오',
        platform: '(윈도우즈용)',
        quote: '"복잡한 편집 없이 옵션 고르고 파일만 넣으면 영상 완성!"',
        desc: '프리미어나 애프터이펙트를 켤 필요가 없습니다. 정해진 순서대로 옵션을 선택하고 배경 이미지 또는 영상과 음원 파일만 넣어주면 바로 고화질 플레이리스트 영상을 즉시 렌더링합니다.',
        timeLabel: '소요 시간: 5분',
        videoBtn: '스튜디오 시연 영상 보기',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: '플리마스터를 사용했을 때',
      title2: '당신이 얻게 되는 확실한 즐거움과 이익',
      subtitle: '복잡한 기술 설명 대신, 당신의 크리에이터 라이프가 얼마나 쉽고 재미있어지는지 느껴보세요.',
      items: [
        {
          badge: 'JOY & FUN',
          title: '나도 오늘부터 인기 플레이리스트 유튜버',
          highlight: '음악·영상 지식 0%도 첫날 바로 영상 발행!',
          description:
            '작곡 툴도, 프리미어 프로도 필요 없습니다. 좋아하는 감성의 테마를 누르면 마법처럼 음악과 영상이 완성되는 짜릿한 즐거움을 경험하세요.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Suno 프롬프트 실패로 날리던 크레딧 0원',
          highlight: '제작자가 일일이 검증한 사운드 알고리즘',
          description:
            '어떤 영문 프롬프트를 넣어야 할지 몰라 버리던 비싼 Suno 크레딧은 이제 그만! 장르별 황금 비율로 실패 없이 고품질 곡만 뽑아냅니다. 마음에 들지 않는 부분은 제작자에게 AS요청가능!',
        },
        {
          badge: 'TIME FREEDOM',
          title: '지긋지긋한 영상 편집 스트레스 해방',
          highlight: '자막 싱크, 타임스탬프 계산 시간 0초',
          description:
            '곡마다 시작 시간 초단위로 적고 설명란에 복사하던 노가다는 끝입니다. 스튜디오가 비주얼라이저와 유튜브 설명란 타임코드를 한 번에 자동 추출합니다.',
        },
        {
          badge: 'FAST GROWTH',
          title: '주 1회에서 매일 1편 업로드로 알고리즘 장악',
          highlight: '제작 소요시간 220분 → 단 5분으로 단축!',
          description:
            '속도가 곧 채널의 경쟁력입니다. 퇴근 후 가벼운 마음으로 클릭 몇 번이면 매일 새로운 플레이리스트를 업로드해 보다 쉽게 경쟁력을 확보 할 수 있습니다.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: '플리마스터 팩토리 (Factory)',
      tagline: '테마 선택 한 번으로 작곡·작사부터 Suno 자동 입력까지 1초 컷',
      intro:
        'Suno AI 사이트를 열고 영어 프롬프트를 일일이 고민할 필요가 없습니다. 원하는 테마를 고르면 팩토리가 알아서 곡을 설계하고 수노에 직접 입력해 줍니다.',
      steps: [
        {
          title: '원하는 테마 선택',
          desc: '대중들이 열광하는 장르 알고리즘 중 원하는 테마를 선택합니다.',
        },
        {
          title: 'Suno 최적화 프롬프트·가사 자동 조립',
          desc: '수노가 가장 완성도 높게 작곡할 수 있는 악기 배치, BPM, 곡 구성(Verse, Chorus) 태그를 한 번에 빌드합니다.',
        },
        {
          title: '유튜브에 입력할 정보 자동 제작!',
          desc: '유튜브 영상에 넣을 제목, 영상설명, 태그를 만들어 줍니다. 썸네일용 프롬프트도 제작해 줍니다.',
        },
      ],
      bottomCheck: '영문 프롬프트 작성 불필요 · 실패 없는 음악 생성',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: '유튜브 바로보기',
      videoTitle: '플리마스터 팩토리 실제 구동 시연 영상',
      videoDesc: '클릭하여 테마 선택 및 Suno 자동 입력 과정을 1초 만에 확인하세요',
      videoFooterLeft: '알고리즘 기반 프롬프트 생성 시연',
      videoFooterRight: '영상 재생하기',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: '플리마스터 스튜디오 (Studio)',
      tagline: '복잡한 편집 없이 옵션 선택 + 파일만 넣으면 영상 렌더링 끝',
      intro:
        '프리미어 프로 같은 전문 영상 편집 툴을 전혀 다룰 줄 몰라도 괜찮습니다. 정해진 순서대로 누르고 배경과 음원을 넣으면 유튜브 송출용 영상이 즉시 완성됩니다.',
      screenshotCaption: '실제 프로그램: PlyMaster Studio (PRO 버전)',
      screenshotBadge: '심플하고 직관적인 전용 UI',
      steps: [
        {
          title: '정해진 순서대로 옵션 선택',
          desc: '화면 비율(16:9 유튜브 일반), 음향 이퀄라이저 설정, 트랙 순서 등의 옵션을 순서대로 체크합니다.',
        },
        {
          title: '배경 이미지/영상 & 음원 파일 넣기',
          desc: '원하는 분위기의 배경 파일과 팩토리에서 만든 곡 파일들을 폴더에 넣어주기만 하면 준비 완료!',
        },
        {
          title: '[영상 제작 시작] 파란 버튼 클릭!',
          desc: '클릭 즉시 고화질 영상 렌더링이 시작되며, 유튜브 설명란에 바로 붙여넣을 타임스탬프 텍스트까지 자동으로 복사할 수 있게 추출됩니다.',
        },
      ],
      bottomCheck: '영상 편집 지식 0% · 타임스탬프 100% 자동 추출',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: '플리마스터 스튜디오 실제 영상 제작 시연',
      videoPlayBtn: '스튜디오 시연 영상 재생',
      videoOverlayTitle: '플리마스터 스튜디오 실제 시연 영상 (유튜브 바로보기)',
      videoOverlayDesc: '옵션 선택부터 완성된 플레이리스트 영상 추출까지 1초 만에 확인하세요',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: '지금 바로 플리마스터와 함께',
      titleHighlight: '유튜브 플레이리스트 제작',
      title2: '을 시작하세요',
      subtitle: '프로그램 설치, 사용법, 라이선스 문의 등 궁금하신 점이 있으시다면 언제든 편하게 연락해 주세요.',
      cardSub: '실시간 1:1 상담',
      cardTitle: '카카오톡 1:1 상담 연결',
      note: '오픈채팅방 운영 시간: 연중무휴 · 실시간 빠른 답변 지원',
    },
    footer: {
      tagline: '플리마스터 팩토리(AI 작곡) & 스튜디오(영상 제작) 올인원 솔루션',
      homepage: '공식 홈페이지',
      contactLink: '카카오톡 1:1 상담',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: '플리마스터 팩토리 (Suno AI 작곡 자동화) 시연 영상',
      factoryDesc:
        '테마 선택 시 내장 알고리즘이 Suno 전용 프롬프트와 가사를 생성하고, Suno 웹 플랫폼에 직접 자동 입력까지 완료되는 실제 시연 영상입니다.',
      studioTitle: '플리마스터 스튜디오 (원클릭 플레이리스트 영상 제작) 시연 영상',
      studioDesc:
        '옵션을 정해진 순서대로 누르고 배경과 음원을 드롭한 뒤 [영상 제작 시작] 버튼을 누르면 완성된 영상과 타임스탬프가 생성되는 시연 영상입니다.',
      preparingTitle: '시연 영상 준비 중입니다',
      preparingDesc:
        '현재 팩토리 전용 시연 영상이 준비 중입니다. 궁금하신 점은 아래 카카오톡 상담을 통해 실시간으로 안내받으실 수 있습니다.',
      watchOnYoutube: '유튜브에서 보기',
      contactBtn: '카카오톡 문의',
    },
  },

  en: {
    langSelectorTitle: 'Select Language (G10)',
    nav: {
      brandSub: 'Factory & Studio',
      intro: 'Overview',
      benefits: 'Benefits',
      factory: 'Factory',
      factoryBadge: 'AI Music',
      studio: 'Studio',
      studioBadge: 'Video Maker',
      lyricsDownloader: 'Lyrics Downloader',
      lyricsDownloaderTitle: 'Download Suno Lyrics Downloader',
      studioDownloadTitle: 'Download PlyMaster Studio Installer',
      playground: '🎧 AI Music Hub',
      playgroundTitle: 'Free AI Music Streaming - AI Music Playground',
      freeBadge: 'FREE',
      wavToMp3: '✨ Wav to MP3',
      wavToMp3Title: 'Free Wav to MP3 Converter',
      contactBtn: 'Email Inquiry',
      contactBtnShort: 'Email',
      buyBtn: 'Buy Now',
      menuLabel: 'Menu',
    },
    hero: {
      bannerBefore: 'PlyMaster consists of two tools: ',
      bannerFactory: 'Factory (AI Music)',
      bannerMiddle: ' & ',
      bannerStudio: 'Studio (Video Maker)',
      bannerAfter: '',
      headline1: 'Fill your YouTube channel with',
      headline2: 'music & videos in just a few clicks',
      subtitlePart1: 'Consistent ',
      subtitleFactory: 'Suno track creation with verified algorithms (Factory)',
      subtitlePart2: ', and a ',
      subtitleStudio: 'playlist-optimized video production system (Studio)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'Contact via Email (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Suno AI Music Engine',
        title: 'PlyMaster Factory',
        platform: '(Website)',
        quote: '"Pick a theme to get Suno music, lyrics & YouTube upload info in one go!"',
        desc: 'Built with creator-verified golden algorithms for each theme. Choose a theme and configure simple options to generate Suno-optimized prompts, lyrics, and YouTube upload metadata. Want a custom theme pack? Click "Contact via Email (nimomusicceo@gmail.com)" above.',
        timeLabel: 'Time required: 1 min',
        videoBtn: 'Watch Factory Demo',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: '1-Click Video Engine',
        title: 'PlyMaster Studio',
        platform: '(Windows)',
        quote: '"No complex editing—pick options, drop files, and render your video!"',
        desc: 'No need to open Premiere Pro or After Effects. Follow the guided steps, add your background image or video along with your audio tracks, and render a crisp playlist video instantly.',
        timeLabel: 'Time required: 5 min',
        videoBtn: 'Watch Studio Demo',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'Real joy and tangible advantages',
      title2: 'you gain with PlyMaster',
      subtitle: 'Skip complex technical jargon—feel how effortless and fun running a playlist channel becomes.',
      items: [
        {
          badge: 'JOY & FUN',
          title: 'Launch your own playlist YouTube channel today',
          highlight: 'Publish on day one with zero music or editing experience!',
          description:
            'No DAWs or video editors required. Pick the mood you love and experience the thrill of watching music and video come together automatically.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Stop wasting Suno credits on failed prompts',
          highlight: 'Sound algorithms individually verified by the creator',
          description:
            'No more burning credits guessing English prompt tags! Generate consistently high-quality tracks with genre-tuned ratios. Need adjustments? Request direct creator support (AS)!',
        },
        {
          badge: 'TIME FREEDOM',
          title: 'Break free from exhausting video editing',
          highlight: 'Zero seconds spent syncing titles or timestamps',
          description:
            'Stop manually calculating track start times and typing descriptions. Studio automatically generates the audio visualizer and ready-to-paste YouTube timestamps.',
        },
        {
          badge: 'FAST GROWTH',
          title: 'Go from weekly uploads to daily playlists',
          highlight: 'Cut production time from 220 min down to 5 min!',
          description:
            'Speed is your competitive edge. With a few relaxed clicks after work, publish fresh playlists daily and build channel momentum effortlessly.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster Factory',
      tagline: 'One theme click builds Suno prompts, lyrics & YouTube info in seconds',
      intro:
        'Stop staring at a blank Suno prompt box. Pick your desired theme and Factory designs the track blueprint and upload metadata for you.',
      steps: [
        {
          title: 'Choose your theme',
          desc: 'Select a mood from our library of crowd-favorite genre algorithms.',
        },
        {
          title: 'Auto-build Suno prompts & lyrics',
          desc: 'Automatically assembles instrumentation, BPM, and Verse/Chorus tags tuned for top Suno audio quality.',
        },
        {
          title: 'Auto-generate YouTube upload info!',
          desc: 'Creates ready-to-use YouTube titles, descriptions, tags, and even thumbnail image prompts.',
        },
      ],
      bottomCheck: 'No prompt guesswork · Reliable music quality',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'Watch on YouTube',
      videoTitle: 'PlyMaster Factory Live Demo',
      videoDesc: 'Click to see theme selection and instant Suno prompt generation in action',
      videoFooterLeft: 'Algorithmic prompt & lyrics walkthrough',
      videoFooterRight: 'Play Video',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster Studio',
      tagline: 'No editing skills needed—choose options, drop files & render',
      intro:
        'You do not need to know Premiere Pro. Follow the numbered steps, drop in your background and audio files, and your YouTube-ready playlist video renders automatically.',
      screenshotCaption: 'Actual Software: PlyMaster Studio (PRO Edition)',
      screenshotBadge: 'Clean & Intuitive Dedicated UI',
      steps: [
        {
          title: 'Follow the step-by-step options',
          desc: 'Simply check your aspect ratio (16:9 YouTube), equalizer preset, and track order in sequence.',
        },
        {
          title: 'Drop background visuals & audio files',
          desc: 'Add your background image/video and the tracks generated from Factory into the folder—done!',
        },
        {
          title: 'Click the blue [Start Video Creation] button!',
          desc: 'High-quality rendering starts immediately, and YouTube description timestamps are extracted for 1-click copy.',
        },
      ],
      bottomCheck: '0% editing skills required · 100% auto-extracted timestamps',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'PlyMaster Studio Real Production Demo',
      videoPlayBtn: 'Play Studio Demo',
      videoOverlayTitle: 'PlyMaster Studio Live Demo (YouTube)',
      videoOverlayDesc: 'See how options and files turn into a complete playlist video in seconds',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: 'Start creating YouTube playlists',
      titleHighlight: 'with PlyMaster today',
      title2: '',
      subtitle: 'Have questions about installation, usage, or licensing? Send us an email anytime at nimomusicceo@gmail.com.',
      cardSub: 'Global Email Support',
      cardTitle: 'Email: nimomusicceo@gmail.com',
      note: 'Send inquiries to nimomusicceo@gmail.com · Fast response worldwide',
    },
    footer: {
      tagline: 'PlyMaster Factory (AI Music) & Studio (Video Maker) All-in-One Solution',
      homepage: 'Official Website',
      contactLink: 'Email: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'PlyMaster Factory (Suno AI Automation) Demo',
      factoryDesc:
        'Watch how selecting a theme generates Suno-optimized prompts, lyrics, and YouTube upload metadata automatically.',
      studioTitle: 'PlyMaster Studio (1-Click Playlist Video Maker) Demo',
      studioDesc:
        'Watch how selecting guided options, dropping assets, and clicking Start creates your finished playlist video and timestamps.',
      preparingTitle: 'Demo video is being prepared',
      preparingDesc:
        'For questions or inquiries, please reach out anytime via email at nimomusicceo@gmail.com.',
      watchOnYoutube: 'Watch on YouTube',
      contactBtn: 'Email Inquiry',
    },
  },

  ja: {
    langSelectorTitle: 'G10 主要言語を選択',
    nav: {
      brandSub: 'ファクトリー & スタジオ',
      intro: '紹介',
      benefits: 'メリット',
      factory: 'ファクトリー',
      factoryBadge: 'AI作曲',
      studio: 'スタジオ',
      studioBadge: '動画制作',
      lyricsDownloader: '歌詞ダウンローダー',
      lyricsDownloaderTitle: 'Suno歌詞ダウンローダーをダウンロード',
      studioDownloadTitle: 'PlyMaster Studio インストーラーをダウンロード',
      playground: '🎧 AI音楽広場',
      playgroundTitle: '無料で楽しめるAI音楽ストリーミング',
      freeBadge: '無料',
      wavToMp3: '✨ Wav to MP3',
      wavToMp3Title: '無料 Wav to MP3 変換ツール',
      contactBtn: 'メールでお問い合わせ',
      contactBtnShort: 'メール',
      buyBtn: '購入する',
      menuLabel: 'メニュー',
    },
    hero: {
      bannerBefore: 'PlyMasterは ',
      bannerFactory: 'ファクトリー(AI作曲)',
      bannerMiddle: ' と ',
      bannerStudio: 'スタジオ(動画制作)',
      bannerAfter: ' の2つで構成されています',
      headline1: '数クリックであなたのチャンネルに',
      headline2: '音楽と動画が次々と完成します',
      subtitlePart1: '検証済みアルゴリズムによる一貫した ',
      subtitleFactory: 'Suno楽曲制作 (ファクトリー)',
      subtitlePart2: '、',
      subtitleStudio: 'プレイリスト最適化動画制作システム (スタジオ)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'メールでお問い合わせ (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Suno AI専用 作曲エンジン',
        title: 'プリマスター・ファクトリー',
        platform: '(ウェブサイト)',
        quote: '「テーマを選ぶだけでSuno作曲・作詞からYouTube投稿情報まで一気に完了！」',
        desc: '制作者が直接検証したテーマ別の黄金アルゴリズムを内蔵。テーマを選んで簡単なオプションを設定するだけで、Sunoに最適化されたプロンプトや歌詞、YouTube投稿に便利な情報まで自動作成します。ご希望のテーマがない場合は上の「メールでお問い合わせ (nimomusicceo@gmail.com)」をクリックしてください。',
        timeLabel: '所要時間: 1分',
        videoBtn: 'ファクトリー実演動画を見る',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: 'ワンクリック動画制作エンジン',
        title: 'プリマスター・スタジオ',
        platform: '(Windows用)',
        quote: '「複雑な編集なし！オプションと素材を入れるだけで動画が完成！」',
        desc: 'PremiereやAfter Effectsを開く必要はありません。決められた順番にオプションを選び、背景画像・動画と音源ファイルを入れるだけで、高画質プレイリスト動画を即座にレンダリングします。',
        timeLabel: '所要時間: 5分',
        videoBtn: 'スタジオ実演動画を見る',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'PlyMasterを使うことで',
      title2: '得られる確かな楽しさとメリット',
      subtitle: '難しい技術説明は抜きにして、クリエイター生活がどれだけ楽で楽しくなるか実感してください。',
      items: [
        {
          badge: 'JOY & FUN',
          title: '今日からあなたも人気プレイリストYouTuber',
          highlight: '音楽・動画編集の知識0%でも初日から公開可能！',
          description:
            '作曲ソフトも動画編集ソフトも不要です。好きな雰囲気のテーマをクリックするだけで、魔法のように音楽と動画が完成する楽しさを体験できます。',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Sunoプロンプトの失敗で無駄にしていたクレジットを0に',
          highlight: '制作者が一つひとつ検証したサウンドアルゴリズム',
          description:
            '英語プロンプトに悩んでクレジットを浪費するのはもう終わり。ジャンル別の黄金比率で高品質な楽曲だけを安定生成。気になる点があれば制作者へAS依頼も可能！',
        },
        {
          badge: 'TIME FREEDOM',
          title: '面倒な動画編集ストレスからの完全解放',
          highlight: '字幕合わせ・タイムスタンプ計算時間 0秒',
          description:
            '曲ごとの開始時間を計算して概要欄に入力する作業はもう不要です。スタジオがビジュアライザーとYouTube概要欄用タイムコードを自動で抽出します。',
        },
        {
          badge: 'FAST GROWTH',
          title: '週1投稿から毎日1本投稿へ、チャンネル競争力を強化',
          highlight: '制作時間 220分 → たった5分に短縮！',
          description:
            'スピードこそチャンネルの競争力。仕事終わりに数クリックするだけで毎日新しいプレイリストを投稿でき、より簡単に競争力を確保できます。',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'プリマスター・ファクトリー (Factory)',
      tagline: 'テーマ選択ひとつでSunoプロンプト・歌詞・YouTube情報まで瞬時に作成',
      intro:
        'Suno AIを開いて英語プロンプトに悩む必要はありません。好きなテーマを選ぶだけで、ファクトリーが楽曲構成からアップロード情報まで自動設計します。',
      steps: [
        {
          title: '好みのテーマを選択',
          desc: 'リスナーに人気のジャンルアルゴリズムの中から好みのテーマを選びます。',
        },
        {
          title: 'Suno最適化プロンプト・歌詞を自動生成',
          desc: '楽器構成、BPM、Verse/Chorusなどの構造タグをSuno向けに最適化して一括生成します。',
        },
        {
          title: 'YouTube入力用情報を自動作成！',
          desc: 'YouTube動画のタイトル、説明文、タグ、さらにサムネイル生成用プロンプトまで自動で作成します。',
        },
      ],
      bottomCheck: '英語プロンプト作成不要 · 安定した楽曲生成',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'YouTubeで見る',
      videoTitle: 'プリマスター・ファクトリー 実演デモ動画',
      videoDesc: 'クリックしてテーマ選択からプロンプト生成までの流れをご確認ください',
      videoFooterLeft: 'アルゴリズムによるプロンプト生成デモ',
      videoFooterRight: '動画を再生',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'プリマスター・スタジオ (Studio)',
      tagline: '複雑な編集なしでオプション選択＋素材投入だけで動画レンダリング完了',
      intro:
        '専門の動画編集ソフトが使えなくても大丈夫。順番通りにオプションを選び、背景と音源を入れるだけでYouTube向け動画がすぐ完成します。',
      screenshotCaption: '実際の画面: PlyMaster Studio (PROバージョン)',
      screenshotBadge: 'シンプルで直感的な専用UI',
      steps: [
        {
          title: '順番通りにオプションを選択',
          desc: '画面比率(16:9)、イコライザー設定、トラック順などのオプションを上からチェックします。',
        },
        {
          title: '背景画像/動画 & 音源ファイルを投入',
          desc: '雰囲気に合う背景素材とファクトリーで作った音源ファイルを指定するだけで準備完了！',
        },
        {
          title: '青い「動画制作開始」ボタンをクリック！',
          desc: 'クリックと同時に高画質レンダリングが始まり、YouTube概要欄にそのまま貼れるタイムスタンプも自動抽出されます。',
        },
      ],
      bottomCheck: '編集知識 0% · タイムスタンプ 100% 自動抽出',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'プリマスター・スタジオ 動画制作デモ',
      videoPlayBtn: 'スタジオ実演動画を再生',
      videoOverlayTitle: 'プリマスター・スタジオ 実演動画 (YouTubeで見る)',
      videoOverlayDesc: 'オプション選択からプレイリスト動画出力まで一瞬で確認できます',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: '今すぐPlyMasterと一緒に',
      titleHighlight: 'YouTubeプレイリスト制作',
      title2: 'を始めましょう',
      subtitle: 'インストール方法、使い方、ライセンスなどご不明点があれば、下記のメールアドレスまでお気軽にお問い合わせください。',
      cardSub: 'メールでのお問い合わせ',
      cardTitle: 'nimomusicceo@gmail.com へメール送信',
      note: 'お問い合わせ先: nimomusicceo@gmail.com · 迅速に対応いたします',
    },
    footer: {
      tagline: 'PlyMaster ファクトリー(AI作曲) & スタジオ(動画制作) オールインワンソリューション',
      homepage: '公式ホームページ',
      contactLink: 'メール: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'プリマスター・ファクトリー (Suno AI自動化) 実演動画',
      factoryDesc:
        'テーマを選ぶだけで内蔵アルゴリズムがSuno用プロンプトと歌詞、YouTube投稿情報を自動生成するデモ動画です。',
      studioTitle: 'プリマスター・スタジオ (ワンクリック動画制作) 実演動画',
      studioDesc:
        '順番にオプションを選び、背景と音源を入れて「動画制作開始」をクリックするだけで動画とタイムスタンプが完成するデモ動画です。',
      preparingTitle: 'デモ動画を準備中です',
      preparingDesc: 'ご質問は nimomusicceo@gmail.com までメールでお問い合わせください。',
      watchOnYoutube: 'YouTubeで見る',
      contactBtn: 'メール問い合わせ',
    },
  },

  zh: {
    langSelectorTitle: '选择 G10 主要国家语言',
    nav: {
      brandSub: '工厂 & 工作室',
      intro: '简介',
      benefits: '核心优势',
      factory: '工厂',
      factoryBadge: 'AI作曲',
      studio: '工作室',
      studioBadge: '视频制作',
      lyricsDownloader: '歌词下载器',
      lyricsDownloaderTitle: '下载 Suno 歌词下载器',
      studioDownloadTitle: '下载 PlyMaster Studio 安装包',
      playground: '🎧 AI 音乐乐园',
      playgroundTitle: '免费畅听 AI 音乐流媒体',
      freeBadge: '免费',
      wavToMp3: '✨ Wav to MP3',
      wavToMp3Title: '免费 Wav 转 MP3 转换器',
      contactBtn: '邮件咨询',
      contactBtnShort: '咨询',
      buyBtn: '立即购买',
      menuLabel: '菜单',
    },
    hero: {
      bannerBefore: 'PlyMaster 由 ',
      bannerFactory: '工厂 (AI作曲)',
      bannerMiddle: ' 和 ',
      bannerStudio: '工作室 (视频制作)',
      bannerAfter: ' 两款程序组成',
      headline1: '只需点击几下，您的频道就能',
      headline2: '源源不断产出音乐与视频',
      subtitlePart1: '通过验证算法实现稳定一致的 ',
      subtitleFactory: 'Suno音乐制作 (工厂)',
      subtitlePart2: '，以及 ',
      subtitleStudio: '专为歌单优化的视频制作系统 (工作室)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: '发送邮件咨询 (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Suno AI 专用作曲引擎',
        title: 'PlyMaster 工厂',
        platform: '(网页版)',
        quote: '"只需选择主题，从 Suno 作曲作词到 YouTube 上传信息一次搞定！"',
        desc: '内置由创作者亲自验证的主题黄金算法，只需选择主题并设置简单选项，即可生成针对 Suno 优化的提示词与歌词，并同步生成便于 YouTube 上传的标题、标签等信息。如需定制新主题包，请点击上方的"发送邮件咨询 (nimomusicceo@gmail.com)"。',
        timeLabel: '耗时: 1分钟',
        videoBtn: '观看工厂演示视频',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: '一键视频制作引擎',
        title: 'PlyMaster 工作室',
        platform: '(Windows版)',
        quote: '"无需复杂剪辑，选择选项并放入素材即可生成高清视频！"',
        desc: '无需打开 Premiere 或 AE。只需按顺序选择选项，放入背景图片或视频以及音频文件，即可一键渲染出高清 YouTube 歌单视频。',
        timeLabel: '耗时: 5分钟',
        videoBtn: '观看工作室演示视频',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: '使用 PlyMaster 后',
      title2: '您将获得的实实在在的乐趣与收益',
      subtitle: '抛开复杂的专业术语，感受轻松愉快的歌单频道创作体验。',
      items: [
        {
          badge: 'JOY & FUN',
          title: '今天起我也是热门歌单 YouTuber',
          highlight: '零音乐与剪辑基础，第一天即可发布视频！',
          description:
            '不需要作曲软件，也不需要剪辑软件。选定喜欢的氛围主题，体验音乐与视频如魔法般自动生成的快乐。',
        },
        {
          badge: 'COST SAVINGS',
          title: '不再因 Suno 提示词失败而浪费点数',
          highlight: '创作者逐一验证的音频算法',
          description:
            '告别盲目尝试英文提示词浪费 Suno 点数的烦恼！采用流派黄金比例稳定产出高品质音乐。如有不满意之处，还可向制作者申请售后调整！',
        },
        {
          badge: 'TIME FREEDOM',
          title: '彻底摆脱繁琐的视频剪辑压力',
          highlight: '字幕对齐与时间戳计算耗时 0 秒',
          description:
            '无需再逐首计算播放时间点并手动输入简介。工作室会自动生成音频可视化效果以及可直接粘贴到 YouTube 简介的时间轴。',
        },
        {
          badge: 'FAST GROWTH',
          title: '从每周一更升级为每日一更，抢占流量先机',
          highlight: '制作时间从 220 分钟缩短至 5 分钟！',
          description:
            '速度就是频道的竞争力。下班后轻轻松松点几下，每天都能上传全新歌单，更轻松地建立频道竞争优势。',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster 工厂 (Factory)',
      tagline: '一键选择主题，秒速生成 Suno 提示词、歌词与上传文案',
      intro:
        '无需打开 Suno 网页冥思苦想英文提示词。选择心仪主题，工厂会自动完成曲风设计与上传文案准备。',
      steps: [
        {
          title: '选择想要的主题',
          desc: '从备受听众喜爱的流派算法库中选择心仪的主题。',
        },
        {
          title: '自动组合 Suno 优化提示词与歌词',
          desc: '一键生成适合 Suno 高品质出曲的乐器配置、BPM 与 Verse/Chorus 段落标签。',
        },
        {
          title: '自动生成 YouTube 所需上传信息！',
          desc: '自动生成适用于 YouTube 视频的标题、简介与标签，还会生成封面缩略图提示词。',
        },
      ],
      bottomCheck: '无需手写英文提示词 · 稳定产出高品质音乐',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: '前往 YouTube 观看',
      videoTitle: 'PlyMaster 工厂实际操作演示',
      videoDesc: '点击立即查看主题选择与提示词生成全过程',
      videoFooterLeft: '基于算法的提示词生成演示',
      videoFooterRight: '播放视频',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster 工作室 (Studio)',
      tagline: '无需剪辑，按顺序勾选选项 + 放入文件即可完成视频渲染',
      intro:
        '完全不会 Premiere 等专业剪辑软件也没关系。按步骤勾选选项，放入背景和音频，即可快速生成可发布的歌单视频。',
      screenshotCaption: '真实界面：PlyMaster Studio (PRO 版)',
      screenshotBadge: '简洁直观的专属界面',
      steps: [
        {
          title: '按既定顺序选择选项',
          desc: '依次勾选画面比例 (16:9 YouTube)、均衡器音效与曲目顺序等设置。',
        },
        {
          title: '放入背景图片/视频与音频文件',
          desc: '只需将营造氛围的背景素材与工厂生成的歌曲文件放入文件夹即可！',
        },
        {
          title: '点击蓝色的 [开始制作视频] 按钮！',
          desc: '点击即刻开始高清视频渲染，并自动提取可一键复制的 YouTube 时间戳文本。',
        },
      ],
      bottomCheck: '0% 剪辑门槛 · 100% 自动提取时间戳',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'PlyMaster 工作室视频制作实操演示',
      videoPlayBtn: '播放工作室演示视频',
      videoOverlayTitle: 'PlyMaster 工作室实操演示 (YouTube 观看)',
      videoOverlayDesc: '一键了解从参数设置到歌单视频导出的完整流程',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: '立即携手 PlyMaster',
      titleHighlight: '开启您的 YouTube 歌单频道创作',
      title2: '',
      subtitle: '关于软件安装、使用方法或授权咨询，欢迎随时通过电子邮件联系我们。',
      cardSub: '邮件一对一咨询',
      cardTitle: '发送邮件至 nimomusicceo@gmail.com',
      note: '联系邮箱: nimomusicceo@gmail.com · 全球快速响应支持',
    },
    footer: {
      tagline: 'PlyMaster 工厂 (AI作曲) & 工作室 (视频制作) 一站式解决方案',
      homepage: '官方网站',
      contactLink: '邮件咨询: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'PlyMaster 工厂 (Suno AI 自动化) 演示视频',
      factoryDesc:
        '展示选择主题后，内置算法如何自动生成 Suno 专属提示词、歌词及 YouTube 上传信息的实际演示。',
      studioTitle: 'PlyMaster 工作室 (一键歌单视频制作) 演示视频',
      studioDesc:
        '展示按顺序选择选项、拖入背景与音频并点击开始后，如何快速生成成品视频与时间戳的演示。',
      preparingTitle: '演示视频准备中',
      preparingDesc: '如有任何疑问，请随时发送邮件至 nimomusicceo@gmail.com 与我们联系。',
      watchOnYoutube: '在 YouTube 观看',
      contactBtn: '邮件咨询',
    },
  },

  es: {
    langSelectorTitle: 'Seleccionar idioma (G10)',
    nav: {
      brandSub: 'Factory & Studio',
      intro: 'Inicio',
      benefits: 'Beneficios',
      factory: 'Factory',
      factoryBadge: 'Música IA',
      studio: 'Studio',
      studioBadge: 'Videos',
      lyricsDownloader: 'Descargador de Letras',
      lyricsDownloaderTitle: 'Descargar Suno Lyrics Downloader',
      studioDownloadTitle: 'Descargar instalador de PlyMaster Studio',
      playground: '🎧 Música IA Gratis',
      playgroundTitle: 'Streaming gratuito de música IA',
      freeBadge: 'GRATIS',
      wavToMp3: '✨ Wav a MP3',
      wavToMp3Title: 'Convertidor gratuito de Wav a MP3',
      contactBtn: 'Consultar por Email',
      contactBtnShort: 'Email',
      buyBtn: 'Comprar',
      menuLabel: 'Menú',
    },
    hero: {
      bannerBefore: 'PlyMaster se compone de ',
      bannerFactory: 'Factory (Música IA)',
      bannerMiddle: ' y ',
      bannerStudio: 'Studio (Creador de Video)',
      bannerAfter: '',
      headline1: 'Llena tu canal de YouTube con',
      headline2: 'música y videos en pocos clics',
      subtitlePart1: 'Creación consistente en ',
      subtitleFactory: 'Suno con algoritmos verificados (Factory)',
      subtitlePart2: ', y un ',
      subtitleStudio: 'sistema de video optimizado para playlists (Studio)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'Consultar por Email (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Motor Musical Suno AI',
        title: 'PlyMaster Factory',
        platform: '(Sitio Web)',
        quote: '"¡Elige un tema y obtén música, letras e info de YouTube de una vez!"',
        desc: 'Con algoritmos probados por el creador para cada tema. Elige un estilo, ajusta opciones simples y genera prompts y letras optimizadas para Suno junto con datos listos para subir a YouTube. ¿Necesitas un tema nuevo? Haz clic en "Consultar por Email (nimomusicceo@gmail.com)" arriba.',
        timeLabel: 'Tiempo: 1 min',
        videoBtn: 'Ver demo de Factory',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: 'Creador de Video en 1 Clic',
        title: 'PlyMaster Studio',
        platform: '(Windows)',
        quote: '"Sin edición compleja: elige opciones, añade archivos y renderiza."',
        desc: 'Olvídate de Premiere o After Effects. Sigue los pasos guiados, añade tu fondo (imagen o video) y tus audios para renderizar videos de playlist al instante.',
        timeLabel: 'Tiempo: 5 min',
        videoBtn: 'Ver demo de Studio',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'Beneficios reales y diversión',
      title2: 'que obtienes con PlyMaster',
      subtitle: 'Sin tecnicismos complicados: descubre lo fácil y entretenido que es crear playlists.',
      items: [
        {
          badge: 'JOY & FUN',
          title: 'Conviértete hoy en creador de playlists en YouTube',
          highlight: 'Publica desde el primer día sin saber música ni edición',
          description:
            'No necesitas programas de audio ni editores de video. Elige tu ambiente favorito y disfruta viendo cómo la música y el video cobran vida solos.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Deja de desperdiciar créditos de Suno',
          highlight: 'Algoritmos de sonido verificados uno a uno por el creador',
          description:
            'No pierdas más créditos adivinando prompts en inglés. Genera canciones de alta calidad sin fallos. ¿Quieres ajustes? Solicita soporte directo (AS) al creador.',
        },
        {
          badge: 'TIME FREEDOM',
          title: 'Libérate del estrés de editar videos',
          highlight: '0 segundos calculando subtítulos o marcas de tiempo',
          description:
            'Se acabó calcular manualmente los minutos de cada pista. Studio genera el visualizador de audio y las marcas de tiempo listas para copiar en YouTube.',
        },
        {
          badge: 'FAST GROWTH',
          title: 'De 1 video semanal a publicar playlists cada día',
          highlight: 'Reduce el tiempo de 220 min a solo 5 min',
          description:
            'La velocidad es ventaja competitiva. Con unos pocos clics tras el trabajo, sube playlists nuevas a diario y haz crecer tu canal fácilmente.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster Factory',
      tagline: 'Un clic genera prompts de Suno, letras y metadatos para YouTube',
      intro:
        'No pierdas tiempo pensando prompts en Suno AI. Elige un tema y Factory diseña la canción y los datos de publicación por ti.',
      steps: [
        {
          title: 'Elige tu tema',
          desc: 'Selecciona el estilo que prefieras entre nuestros algoritmos de géneros populares.',
        },
        {
          title: 'Ensamblaje automático de prompts y letras',
          desc: 'Genera al instante instrumentos, BPM y etiquetas (Verse, Chorus) optimizadas para Suno.',
        },
        {
          title: '¡Creación automática de datos para YouTube!',
          desc: 'Genera títulos, descripciones, etiquetas para YouTube e incluso prompts para miniaturas.',
        },
      ],
      bottomCheck: 'Sin redactar prompts · Música de calidad garantizada',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'Ver en YouTube',
      videoTitle: 'Demo en vivo de PlyMaster Factory',
      videoDesc: 'Haz clic para ver cómo se selecciona el tema y se generan los prompts',
      videoFooterLeft: 'Demostración de generación algorítmica',
      videoFooterRight: 'Reproducir video',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster Studio',
      tagline: 'Sin edición: elige opciones, añade tus archivos y renderiza',
      intro:
        'No hace falta saber usar editores profesionales. Marca las opciones en orden, carga el fondo y los audios y obtén tu video listo para YouTube.',
      screenshotCaption: 'Programa real: PlyMaster Studio (Versión PRO)',
      screenshotBadge: 'Interfaz dedicada simple e intuitiva',
      steps: [
        {
          title: 'Elige las opciones en orden',
          desc: 'Marca la relación de aspecto (16:9 YouTube), ecualizador y orden de pistas paso a paso.',
        },
        {
          title: 'Añade imagen/video de fondo y audios',
          desc: 'Coloca tu fondo favorito y las canciones creadas en Factory dentro de la carpeta.',
        },
        {
          title: '¡Haz clic en el botón azul [Iniciar creación]!',
          desc: 'Comienza el renderizado en alta calidad y se extraen las marcas de tiempo listas para copiar.',
        },
      ],
      bottomCheck: '0% conocimientos de edición · 100% timestamps automáticos',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'Demo real de creación de video en PlyMaster Studio',
      videoPlayBtn: 'Reproducir demo de Studio',
      videoOverlayTitle: 'Demo de PlyMaster Studio (Ver en YouTube)',
      videoOverlayDesc: 'Mira en segundos cómo tus archivos se convierten en un video playlist completo',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: 'Empieza hoy mismo a crear',
      titleHighlight: 'playlists en YouTube',
      title2: ' con PlyMaster',
      subtitle: '¿Tienes dudas sobre instalación, uso o licencias? Escríbenos por correo en cualquier momento.',
      cardSub: 'Atención directa por Email',
      cardTitle: 'Enviar correo a nimomusicceo@gmail.com',
      note: 'Contacto: nimomusicceo@gmail.com · Respuesta rápida en todo el mundo',
    },
    footer: {
      tagline: 'PlyMaster Factory (Música IA) & Studio (Creador de Video)',
      homepage: 'Sitio oficial',
      contactLink: 'Email: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'Demo de PlyMaster Factory (Automatización Suno AI)',
      factoryDesc:
        'Observa cómo al elegir un tema se generan automáticamente los prompts, letras e información para YouTube.',
      studioTitle: 'Demo de PlyMaster Studio (Creador de Videos en 1 Clic)',
      studioDesc:
        'Observa cómo elegir las opciones, añadir tus archivos y pulsar Iniciar crea tu video y marcas de tiempo.',
      preparingTitle: 'Video demo en preparación',
      preparingDesc: 'Para cualquier consulta, escríbenos por correo a nimomusicceo@gmail.com.',
      watchOnYoutube: 'Ver en YouTube',
      contactBtn: 'Enviar Email',
    },
  },

  fr: {
    langSelectorTitle: 'Choisir la langue (G10)',
    nav: {
      brandSub: 'Factory & Studio',
      intro: 'Aperçu',
      benefits: 'Avantages',
      factory: 'Factory',
      factoryBadge: 'Musique IA',
      studio: 'Studio',
      studioBadge: 'Vidéo',
      lyricsDownloader: 'Téléchargeur Paroles',
      lyricsDownloaderTitle: 'Télécharger Suno Lyrics Downloader',
      studioDownloadTitle: 'Télécharger PlyMaster Studio',
      playground: '🎧 Musique IA',
      playgroundTitle: 'Streaming gratuit de musique IA',
      freeBadge: 'GRATUIT',
      wavToMp3: '✨ Wav en MP3',
      wavToMp3Title: 'Convertisseur gratuit Wav vers MP3',
      contactBtn: 'Contact par Email',
      contactBtnShort: 'Email',
      buyBtn: 'Acheter',
      menuLabel: 'Menu',
    },
    hero: {
      bannerBefore: 'PlyMaster réunit deux outils : ',
      bannerFactory: 'Factory (Musique IA)',
      bannerMiddle: ' et ',
      bannerStudio: 'Studio (Création Vidéo)',
      bannerAfter: '',
      headline1: 'Remplissez votre chaîne YouTube de',
      headline2: 'musiques et vidéos en quelques clics',
      subtitlePart1: 'Création musicale cohérente sur ',
      subtitleFactory: 'Suno grâce à des algorithmes éprouvés (Factory)',
      subtitlePart2: ', et un ',
      subtitleStudio: 'système vidéo optimisé pour les playlists (Studio)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'Contacter par Email (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Moteur Musical Suno AI',
        title: 'PlyMaster Factory',
        platform: '(Site Web)',
        quote: '"Choisissez un thème : musique, paroles Suno et infos YouTube en une fois !"',
        desc: 'Doté d’algorithmes éprouvés par le créateur pour chaque thème. Choisissez un style et réglez quelques options pour générer des prompts et paroles optimisés pour Suno ainsi que les infos de publication YouTube. Besoin d’un thème sur mesure ? Cliquez sur « Contacter par Email (nimomusicceo@gmail.com) » ci-dessus.',
        timeLabel: 'Durée : 1 min',
        videoBtn: 'Voir la démo Factory',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: 'Moteur Vidéo en 1 Clic',
        title: 'PlyMaster Studio',
        platform: '(Windows)',
        quote: '"Aucun montage complexe : choisissez, déposez vos fichiers et exportez !"',
        desc: 'Plus besoin de Premiere ou d’After Effects. Suivez l’ordre des options, ajoutez votre fond (image ou vidéo) et vos fichiers audio pour lancer le rendu vidéo immédiatement.',
        timeLabel: 'Durée : 5 min',
        videoBtn: 'Voir la démo Studio',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'Le plaisir et les avantages concrets',
      title2: 'que vous offre PlyMaster',
      subtitle: 'Sans jargon technique : découvrez à quel point créer une chaîne playlist devient simple.',
      items: [
        {
          badge: 'JOY & FUN',
          title: 'Devenez créateur de playlists YouTube dès aujourd’hui',
          highlight: 'Publiez dès le premier jour sans expérience musicale ni vidéo !',
          description:
            'Aucun logiciel de MAO ou de montage requis. Sélectionnez l’ambiance souhaitée et voyez votre musique et votre vidéo prendre vie automatiquement.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Ne gaspillez plus vos crédits Suno',
          highlight: 'Algorithmes sonores vérifiés un par un par le créateur',
          description:
            'Fini les essais aléatoires en anglais ! Obtenez des morceaux de qualité grâce à des ratios éprouvés. Besoin d’ajustements ? Assistance directe (AS) disponible.',
        },
        {
          badge: 'TIME FREEDOM',
          title: 'Libérez-vous de la corvée du montage vidéo',
          highlight: '0 seconde perdue pour les sous-titres et chapitres',
          description:
            'Ne calculez plus manuellement le minutage de chaque piste. Studio génère le visualiseur audio et les horodatages prêts à coller sur YouTube.',
        },
        {
          badge: 'FAST GROWTH',
          title: 'Passez d’une vidéo par semaine à une playlist par jour',
          highlight: 'Temps de création réduit de 220 min à 5 min !',
          description:
            'La régularité fait la force de votre chaîne. En quelques clics le soir, publiez chaque jour de nouvelles playlists et développez votre audience.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster Factory',
      tagline: 'Un choix de thème génère prompts Suno, paroles et infos YouTube',
      intro:
        'Plus besoin de chercher des prompts anglais pour Suno AI. Sélectionnez un thème et Factory prépare la structure musicale et les métadonnées.',
      steps: [
        {
          title: 'Choisir le thème souhaité',
          desc: 'Sélectionnez votre ambiance parmi nos algorithmes de genres populaires.',
        },
        {
          title: 'Assemblage automatique prompts & paroles',
          desc: 'Construit en un clic les instruments, le BPM et les balises (Verse, Chorus) optimisés pour Suno.',
        },
        {
          title: 'Génération auto des infos YouTube !',
          desc: 'Crée le titre, la description, les tags YouTube et même un prompt pour votre miniature.',
        },
      ],
      bottomCheck: 'Aucun prompt à rédiger · Qualité musicale constante',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'Voir sur YouTube',
      videoTitle: 'Démo en direct de PlyMaster Factory',
      videoDesc: 'Cliquez pour voir la sélection de thème et la génération instantanée',
      videoFooterLeft: 'Démonstration de génération algorithmique',
      videoFooterRight: 'Lire la vidéo',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster Studio',
      tagline: 'Sans montage : sélectionnez les options + déposez vos fichiers',
      intro:
        'Aucune maîtrise de Premiere Pro n’est requise. Suivez les étapes, ajoutez fond et pistes audio et exportez votre vidéo YouTube.',
      screenshotCaption: 'Logiciel réel : PlyMaster Studio (Version PRO)',
      screenshotBadge: 'Interface dédiée simple et intuitive',
      steps: [
        {
          title: 'Cocher les options dans l’ordre',
          desc: 'Sélectionnez le format (16:9 YouTube), l’égaliseur audio et l’ordre des pistes.',
        },
        {
          title: 'Déposer l’image/vidéo de fond et les audios',
          desc: 'Ajoutez votre visuel d’ambiance et les musiques créées dans Factory.',
        },
        {
          title: 'Cliquer sur le bouton bleu [Démarrer] !',
          desc: 'Le rendu haute qualité démarre aussitôt avec extraction automatique des chapitres YouTube.',
        },
      ],
      bottomCheck: '0 % de montage requis · 100 % horodatages automatiques',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'Démo de création vidéo PlyMaster Studio',
      videoPlayBtn: 'Lire la démo Studio',
      videoOverlayTitle: 'Démo PlyMaster Studio (YouTube)',
      videoOverlayDesc: 'Découvrez comment vos fichiers deviennent une vidéo playlist en quelques secondes',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: 'Commencez dès maintenant à créer',
      titleHighlight: 'vos playlists YouTube',
      title2: ' avec PlyMaster',
      subtitle: 'Des questions sur l’installation, l’utilisation ou les licences ? Contactez-nous par email.',
      cardSub: 'Support direct par Email',
      cardTitle: 'Écrire à nimomusicceo@gmail.com',
      note: 'Email : nimomusicceo@gmail.com · Réponse rapide partout dans le monde',
    },
    footer: {
      tagline: 'PlyMaster Factory (Musique IA) & Studio (Création Vidéo)',
      homepage: 'Site officiel',
      contactLink: 'Email : nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'Démo PlyMaster Factory (Automatisation Suno AI)',
      factoryDesc:
        'Découvrez comment la sélection d’un thème génère automatiquement prompts, paroles et infos YouTube.',
      studioTitle: 'Démo PlyMaster Studio (Création Vidéo en 1 Clic)',
      studioDesc:
        'Découvrez comment vos options et fichiers deviennent une vidéo playlist avec chapitres automatiques.',
      preparingTitle: 'Vidéo de démonstration en préparation',
      preparingDesc: 'Pour toute question, contactez-nous par email à nimomusicceo@gmail.com.',
      watchOnYoutube: 'Voir sur YouTube',
      contactBtn: 'Envoyer un Email',
    },
  },

  de: {
    langSelectorTitle: 'Sprache wählen (G10)',
    nav: {
      brandSub: 'Factory & Studio',
      intro: 'Übersicht',
      benefits: 'Vorteile',
      factory: 'Factory',
      factoryBadge: 'KI-Musik',
      studio: 'Studio',
      studioBadge: 'Video-Tool',
      lyricsDownloader: 'Lyrics-Downloader',
      lyricsDownloaderTitle: 'Suno Lyrics Downloader herunterladen',
      studioDownloadTitle: 'PlyMaster Studio Setup herunterladen',
      playground: '🎧 KI-Musikwelt',
      playgroundTitle: 'Kostenloses KI-Musik-Streaming',
      freeBadge: 'GRATIS',
      wavToMp3: '✨ Wav zu MP3',
      wavToMp3Title: 'Kostenloser Wav-zu-MP3-Konverter',
      contactBtn: 'E-Mail-Anfrage',
      contactBtnShort: 'E-Mail',
      buyBtn: 'Kaufen',
      menuLabel: 'Menü',
    },
    hero: {
      bannerBefore: 'PlyMaster besteht aus zwei Tools: ',
      bannerFactory: 'Factory (KI-Musik)',
      bannerMiddle: ' & ',
      bannerStudio: 'Studio (Video-Erstellung)',
      bannerAfter: '',
      headline1: 'Füllen Sie Ihren YouTube-Kanal mit',
      headline2: 'Musik & Videos in wenigen Klicks',
      subtitlePart1: 'Konsistente ',
      subtitleFactory: 'Suno-Musikproduktion mit geprüften Algorithmen (Factory)',
      subtitlePart2: ', und ein ',
      subtitleStudio: 'für Playlists optimiertes Videosystem (Studio)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'Per E-Mail anfragen (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Suno AI Musik-Engine',
        title: 'PlyMaster Factory',
        platform: '(Website)',
        quote: '„Thema wählen – von Suno-Musik & Texten bis zu YouTube-Daten alles auf einmal!“',
        desc: 'Mit vom Entwickler geprüften Algorithmen für jedes Thema. Wählen Sie ein Thema und einfache Optionen, um Suno-optimierte Prompts, Texte und YouTube-Upload-Daten zu erstellen. Fehlt ein Thema? Klicken Sie oben auf „Per E-Mail anfragen (nimomusicceo@gmail.com)“.',
        timeLabel: 'Dauer: 1 Min.',
        videoBtn: 'Factory-Demo ansehen',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: '1-Klick Video-Engine',
        title: 'PlyMaster Studio',
        platform: '(Windows)',
        quote: '„Kein Schnitt nötig – Optionen wählen, Dateien ablegen, fertig!“',
        desc: 'Kein Premiere Pro oder After Effects erforderlich. Optionen der Reihe nach wählen, Hintergrund und Audios hinzufügen und sofort ein hochwertiges Playlist-Video rendern.',
        timeLabel: 'Dauer: 5 Min.',
        videoBtn: 'Studio-Demo ansehen',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'Echter Spaß und klare Vorteile',
      title2: 'mit PlyMaster',
      subtitle: 'Ohne Fachchinesisch – erleben Sie, wie mühelos ein eigener Playlist-Kanal läuft.',
      items: [
        {
          badge: 'JOY & FUN',
          title: 'Starten Sie noch heute Ihren Playlist-Kanal',
          highlight: 'Am ersten Tag veröffentlichen – ohne Vorkenntnisse!',
          description:
            'Weder DAW noch Videoschnittprogramm nötig. Wählen Sie Ihre Wunschstimmung und erleben Sie, wie Musik und Video wie von Zauberhand entstehen.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Keine verschwendeten Suno-Credits mehr',
          highlight: 'Vom Entwickler einzeln geprüfte Sound-Algorithmen',
          description:
            'Schluss mit dem Rätselraten bei englischen Prompts. Erzeugen Sie zuverlässig starke Tracks – inkl. direktem Support (AS) bei Änderungswünschen.',
        },
        {
          badge: 'TIME FREEDOM',
          title: 'Frei von nervigem Videoschnitt-Stress',
          highlight: '0 Sekunden für Untertitel oder Zeitstempel rechnen',
          description:
            'Kein manuelles Abtippen von Trackzeiten mehr. Studio erstellt den Audio-Visualizer und kopierfertige YouTube-Timestamps automatisch.',
        },
        {
          badge: 'FAST GROWTH',
          title: 'Von wöchentlich auf tägliche Playlist-Uploads',
          highlight: 'Produktionszeit von 220 Min. auf 5 Min. verkürzt!',
          description:
            'Geschwindigkeit ist Ihr Wettbewerbsvorteil. Mit wenigen Klicks nach Feierabend täglich neue Playlists hochladen und den Kanal wachsen lassen.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster Factory',
      tagline: 'Ein Klick erstellt Suno-Prompts, Songtexte & YouTube-Daten',
      intro:
        'Kein Grübeln mehr vor leeren Suno-Eingabefeldern. Thema wählen und Factory erstellt Songstruktur und Upload-Infos für Sie.',
      steps: [
        {
          title: 'Wunschthema auswählen',
          desc: 'Wählen Sie aus beliebten Genre-Algorithmen Ihr passendes Thema.',
        },
        {
          title: 'Suno-Prompts & Texte automatisch bauen',
          desc: 'Erstellt Instrumentierung, BPM und Verse/Chorus-Tags optimal für Suno.',
        },
        {
          title: 'YouTube-Upload-Daten automatisch erstellen!',
          desc: 'Generiert Titel, Videobeschreibung, Tags und sogar Thumbnail-Prompts für YouTube.',
        },
      ],
      bottomCheck: 'Kein Prompt-Raten nötig · Zuverlässige Musikqualität',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'Auf YouTube ansehen',
      videoTitle: 'PlyMaster Factory Live-Demo',
      videoDesc: 'Klicken Sie hier, um Themenauswahl und Prompt-Generierung zu sehen',
      videoFooterLeft: 'Algorithmische Prompt-Erstellung',
      videoFooterRight: 'Video abspielen',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster Studio',
      tagline: 'Ohne Schnitt: Optionen wählen + Dateien ablegen = Video fertig',
      intro:
        'Keine Erfahrung mit Videoschnitt nötig. Schritt für Schritt Optionen wählen, Hintergrund und Audio laden und fertig ist das YouTube-Video.',
      screenshotCaption: 'Echte Software: PlyMaster Studio (PRO-Version)',
      screenshotBadge: 'Klare & intuitive Benutzeroberfläche',
      steps: [
        {
          title: 'Optionen der Reihe nach wählen',
          desc: 'Seitenverhältnis (16:9 YouTube), Equalizer und Track-Reihenfolge einfach anhaken.',
        },
        {
          title: 'Hintergrundbild/-video & Audios ablegen',
          desc: 'Wunsch-Hintergrund und die Songs aus Factory in den Ordner legen – fertig!',
        },
        {
          title: 'Blauen Button [Videoerstellung starten] klicken!',
          desc: 'Hochauflösendes Rendering startet sofort inkl. automatischer YouTube-Timestamps.',
        },
      ],
      bottomCheck: '0 % Schnittkenntnisse · 100 % automatische Timestamps',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'PlyMaster Studio Video-Praxisdemo',
      videoPlayBtn: 'Studio-Demo abspielen',
      videoOverlayTitle: 'PlyMaster Studio Demo (YouTube)',
      videoOverlayDesc: 'Sehen Sie in Sekunden, wie aus Dateien ein fertiges Playlist-Video wird',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: 'Starten Sie jetzt mit PlyMaster',
      titleHighlight: 'Ihre YouTube-Playlist-Produktion',
      title2: '',
      subtitle: 'Fragen zu Installation, Nutzung oder Lizenzen? Schreiben Sie uns jederzeit eine E-Mail.',
      cardSub: 'Direkter E-Mail-Support',
      cardTitle: 'E-Mail an nimomusicceo@gmail.com',
      note: 'Kontakt: nimomusicceo@gmail.com · Schnelle weltweite Antwort',
    },
    footer: {
      tagline: 'PlyMaster Factory (KI-Musik) & Studio (Video-Erstellung)',
      homepage: 'Offizielle Website',
      contactLink: 'E-Mail: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'PlyMaster Factory (Suno AI Automatisierung) Demo',
      factoryDesc:
        'Sehen Sie, wie aus einer Themenauswahl automatisch Suno-Prompts, Songtexte und YouTube-Daten entstehen.',
      studioTitle: 'PlyMaster Studio (1-Klick Playlist-Video) Demo',
      studioDesc:
        'Sehen Sie, wie Optionen, Dateien und ein Klick ein fertiges Video samt Timestamps erzeugen.',
      preparingTitle: 'Demo-Video wird vorbereitet',
      preparingDesc: 'Bei Fragen erreichen Sie uns jederzeit per E-Mail unter nimomusicceo@gmail.com.',
      watchOnYoutube: 'Auf YouTube ansehen',
      contactBtn: 'E-Mail senden',
    },
  },

  it: {
    langSelectorTitle: 'Seleziona lingua (G10)',
    nav: {
      brandSub: 'Factory & Studio',
      intro: 'Panoramica',
      benefits: 'Vantaggi',
      factory: 'Factory',
      factoryBadge: 'Musica IA',
      studio: 'Studio',
      studioBadge: 'Video',
      lyricsDownloader: 'Scarica Testi',
      lyricsDownloaderTitle: 'Scarica Suno Lyrics Downloader',
      studioDownloadTitle: 'Scarica installer PlyMaster Studio',
      playground: '🎧 Musica IA Gratis',
      playgroundTitle: 'Streaming gratuito di musica IA',
      freeBadge: 'GRATIS',
      wavToMp3: '✨ Wav in MP3',
      wavToMp3Title: 'Convertitore gratuito Wav in MP3',
      contactBtn: 'Contatto Email',
      contactBtnShort: 'Email',
      buyBtn: 'Acquista',
      menuLabel: 'Menu',
    },
    hero: {
      bannerBefore: 'PlyMaster include due programmi: ',
      bannerFactory: 'Factory (Musica IA)',
      bannerMiddle: ' e ',
      bannerStudio: 'Studio (Creazione Video)',
      bannerAfter: '',
      headline1: 'Riempi il tuo canale YouTube di',
      headline2: 'musica e video in pochi clic',
      subtitlePart1: 'Produzione musicale coerente su ',
      subtitleFactory: 'Suno con algoritmi verificati (Factory)',
      subtitlePart2: ', e un ',
      subtitleStudio: 'sistema video ottimizzato per playlist (Studio)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'Contatta via Email (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Motore Musicale Suno AI',
        title: 'PlyMaster Factory',
        platform: '(Sito Web)',
        quote: '"Scegli un tema: dalla musica e testi Suno ai dati YouTube tutto in una volta!"',
        desc: 'Dotato di algoritmi verificati dal creatore per ogni tema. Seleziona un tema e imposta semplici opzioni per generare prompt e testi ottimizzati per Suno e informazioni pronte per YouTube. Vuoi un tema personalizzato? Clicca su "Contatta via Email (nimomusicceo@gmail.com)" qui sopra.',
        timeLabel: 'Tempo: 1 min',
        videoBtn: 'Guarda demo Factory',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: 'Creatore Video in 1 Clic',
        title: 'PlyMaster Studio',
        platform: '(Windows)',
        quote: '"Nessun montaggio complesso: scegli le opzioni, inserisci i file ed esporta!"',
        desc: 'Non serve aprire Premiere o After Effects. Segui i passaggi guidati, inserisci sfondo e tracce audio e renderizza subito un video playlist ad alta definizione.',
        timeLabel: 'Tempo: 5 min',
        videoBtn: 'Guarda demo Studio',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'Il piacere e i vantaggi concreti',
      title2: 'che ottieni con PlyMaster',
      subtitle: 'Senza complicazioni tecniche: scopri quanto è facile e divertente gestire un canale playlist.',
      items: [
        {
          badge: 'JOY & FUN',
          title: 'Diventa oggi un creator di playlist su YouTube',
          highlight: 'Pubblica dal primo giorno senza esperienza musicale o video!',
          description:
            'Nessun software musicale o di montaggio richiesto. Scegli l’atmosfera che ami e guarda musica e video prendere forma da soli.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Basta sprecare crediti Suno con prompt sbagliati',
          highlight: 'Algoritmi sonori verificati uno per uno dal creatore',
          description:
            'Smetti di tirare a indovinare in inglese! Ottieni brani di qualità costante e richiedi supporto diretto (AS) al creatore per eventuali modifiche.',
        },
        {
          badge: 'TIME FREEDOM',
          title: 'Liberati dallo stress del montaggio video',
          highlight: '0 secondi persi tra sottotitoli e timestamp',
          description:
            'Basta calcolare manualmente i minutaggi. Studio crea il visualizzatore audio e i timestamp pronti da incollare nella descrizione YouTube.',
        },
        {
          badge: 'FAST GROWTH',
          title: 'Da un video a settimana a una playlist al giorno',
          highlight: 'Tempo ridotto da 220 min a soli 5 min!',
          description:
            'La velocità è il tuo punto di forza. Con pochi clic dopo il lavoro puoi pubblicare playlist ogni giorno e far crescere il canale.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster Factory',
      tagline: 'Un clic genera prompt Suno, testi e informazioni per YouTube',
      intro:
        'Non perdere tempo davanti a Suno AI. Scegli un tema e Factory progetta struttura musicale e testi di caricamento per te.',
      steps: [
        {
          title: 'Scegli il tema desiderato',
          desc: 'Seleziona il genere che preferisci tra i nostri algoritmi più apprezzati.',
        },
        {
          title: 'Creazione automatica di prompt e testi',
          desc: 'Genera strumenti, BPM e tag strutturali (Verse, Chorus) ottimizzati per Suno.',
        },
        {
          title: 'Dati per YouTube generati in automatico!',
          desc: 'Crea titoli, descrizioni, tag per YouTube e anche prompt per le miniature.',
        },
      ],
      bottomCheck: 'Nessun prompt da inventare · Musica di qualità costante',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'Guarda su YouTube',
      videoTitle: 'Demo dal vivo di PlyMaster Factory',
      videoDesc: 'Clicca per vedere la selezione del tema e la creazione istantanea dei prompt',
      videoFooterLeft: 'Dimostrazione generazione algoritmica',
      videoFooterRight: 'Riproduci video',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster Studio',
      tagline: 'Senza montaggio: seleziona opzioni + aggiungi file = video pronto',
      intro:
        'Non serve saper usare Premiere Pro. Segui i passaggi, inserisci sfondo e brani e ottieni subito il tuo video playlist per YouTube.',
      screenshotCaption: 'Software reale: PlyMaster Studio (Versione PRO)',
      screenshotBadge: 'Interfaccia dedicata semplice e intuitiva',
      steps: [
        {
          title: 'Seleziona le opzioni in ordine',
          desc: 'Imposta formato (16:9 YouTube), equalizzatore audio e ordine delle tracce.',
        },
        {
          title: 'Inserisci sfondo (immagine/video) e file audio',
          desc: 'Aggiungi lo sfondo scelto e i brani creati con Factory nella cartella.',
        },
        {
          title: 'Clicca il pulsante blu [Avvia creazione video]!',
          desc: 'Il rendering ad alta qualità parte subito ed estrae i timestamp pronti da copiare.',
        },
      ],
      bottomCheck: '0% esperienza di montaggio · 100% timestamp automatici',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'Demo reale di creazione video con PlyMaster Studio',
      videoPlayBtn: 'Riproduci demo Studio',
      videoOverlayTitle: 'Demo PlyMaster Studio (YouTube)',
      videoOverlayDesc: 'Scopri in pochi secondi come i tuoi file diventano un video playlist completo',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: 'Inizia subito a creare',
      titleHighlight: 'le tue playlist su YouTube',
      title2: ' con PlyMaster',
      subtitle: 'Domande su installazione, utilizzo o licenze? Scrivici via email in qualsiasi momento.',
      cardSub: 'Supporto diretto via Email',
      cardTitle: 'Scrivi a nimomusicceo@gmail.com',
      note: 'Email: nimomusicceo@gmail.com · Risposta rapida in tutto il mondo',
    },
    footer: {
      tagline: 'PlyMaster Factory (Musica IA) & Studio (Creazione Video)',
      homepage: 'Sito Ufficiale',
      contactLink: 'Email: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'Demo PlyMaster Factory (Automazione Suno AI)',
      factoryDesc:
        'Guarda come la scelta di un tema genera automaticamente prompt Suno, testi e dati per YouTube.',
      studioTitle: 'Demo PlyMaster Studio (Video Playlist in 1 Clic)',
      studioDesc:
        'Guarda come selezionare le opzioni, inserire i file e cliccare Avvia crea video e timestamp.',
      preparingTitle: 'Video demo in preparazione',
      preparingDesc: 'Per informazioni scrivici via email a nimomusicceo@gmail.com.',
      watchOnYoutube: 'Guarda su YouTube',
      contactBtn: 'Invia Email',
    },
  },

  nl: {
    langSelectorTitle: 'Kies taal (G10)',
    nav: {
      brandSub: 'Factory & Studio',
      intro: 'Overzicht',
      benefits: 'Voordelen',
      factory: 'Factory',
      factoryBadge: 'AI-Muziek',
      studio: 'Studio',
      studioBadge: 'Video',
      lyricsDownloader: 'Lyrics Downloader',
      lyricsDownloaderTitle: 'Suno Lyrics Downloader downloaden',
      studioDownloadTitle: 'PlyMaster Studio installatiebestand downloaden',
      playground: '🎧 AI Muziek',
      playgroundTitle: 'Gratis AI-muziek streamen',
      freeBadge: 'GRATIS',
      wavToMp3: '✨ Wav naar MP3',
      wavToMp3Title: 'Gratis Wav naar MP3 converter',
      contactBtn: 'E-mailcontact',
      contactBtnShort: 'E-mail',
      buyBtn: 'Kopen',
      menuLabel: 'Menu',
    },
    hero: {
      bannerBefore: 'PlyMaster bestaat uit ',
      bannerFactory: 'Factory (AI-muziek)',
      bannerMiddle: ' en ',
      bannerStudio: 'Studio (Videomaker)',
      bannerAfter: '',
      headline1: 'Vul je YouTube-kanaal met',
      headline2: 'muziek en video’s in een paar klikken',
      subtitlePart1: 'Consistente ',
      subtitleFactory: 'Suno-muziekcreatie met geteste algoritmen (Factory)',
      subtitlePart2: ', en een ',
      subtitleStudio: 'voor afspeellijsten geoptimaliseerd videosysteem (Studio)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'Mail ons voor vragen (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Suno AI Muziekengine',
        title: 'PlyMaster Factory',
        platform: '(Website)',
        quote: '"Kies een thema: van Suno-muziek & tekst tot YouTube-uploadinfo in één keer klaar!"',
        desc: 'Voorzien van door de maker geteste algoritmen per thema. Kies een thema, stel simpele opties in en genereer Suno-prompts, songteksten en handige YouTube-uploadinfo. Wil je een nieuw themapakket? Klik bovenaan op "Mail ons voor vragen (nimomusicceo@gmail.com)".',
        timeLabel: 'Duur: 1 min',
        videoBtn: 'Bekijk Factory-demo',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: '1-Klik Video-engine',
        title: 'PlyMaster Studio',
        platform: '(Windows)',
        quote: '"Geen ingewikkelde montage – kies opties, voeg bestanden toe en klaar!"',
        desc: 'Je hoeft Premiere of After Effects niet te openen. Volg de stappen, voeg achtergrondbeeld of -video en audiobestanden toe en render direct een HD-afspeellijstvideo.',
        timeLabel: 'Duur: 5 min',
        videoBtn: 'Bekijk Studio-demo',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'Het plezier en de duidelijke voordelen',
      title2: 'die je krijgt met PlyMaster',
      subtitle: 'Geen technisch vakjargon – ervaar hoe leuk en eenvoudig een afspeellijstkanaal wordt.',
      items: [
        {
          badge: 'JOY & FUN',
          title: 'Word vandaag nog een YouTube-playlistmaker',
          highlight: 'Publiceer op dag één zonder muziek- of videokennis!',
          description:
            'Geen DAW of videobewerker nodig. Kies de gewenste sfeer en zie hoe muziek en beeld als vanzelf samenkomen.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Verspil geen Suno-credits meer aan mislukte prompts',
          highlight: 'Geluidsalgoritmen stuk voor stuk door de maker getest',
          description:
            'Stop met gokken naar Engelse prompts. Genereer constant sterke tracks en vraag direct ondersteuning (AS) aan de maker bij aanpassingswensen.',
        },
        {
          badge: 'TIME FREEDOM',
          title: 'Bevrijd jezelf van tijdrovende videomontage',
          highlight: '0 seconden kwijt aan ondertitels en tijdstempels',
          description:
            'Geen handmatig rekenwerk meer per nummer. Studio genereert de audio-visualizer en kant-en-klare YouTube-timestamps automatisch.',
        },
        {
          badge: 'FAST GROWTH',
          title: 'Van één video per week naar elke dag een playlist',
          highlight: 'Productietijd verkort van 220 min naar 5 min!',
          description:
            'Snelheid is jouw concurrentievoordeel. Upload na werktijd met een paar klikken dagelijks nieuwe playlists en groei moeiteloos.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster Factory',
      tagline: 'Eén klik maakt Suno-prompts, teksten & YouTube-info in seconden',
      intro:
        'Geen gepuzzel meer met Engelse prompts op Suno AI. Kies een thema en Factory ontwerpt het nummer en de uploadgegevens voor je.',
      steps: [
        {
          title: 'Kies het gewenste thema',
          desc: 'Selecteer een thema uit onze bibliotheek met populaire genrealgoritmen.',
        },
        {
          title: 'Suno-prompts & teksten automatisch samenstellen',
          desc: 'Bouwt direct instrumentatie, BPM en Verse/Chorus-tags geoptimaliseerd voor Suno.',
        },
        {
          title: 'YouTube-uploadinfo automatisch maken!',
          desc: 'Maakt YouTube-titels, beschrijvingen, tags en zelfs prompts voor thumbnails.',
        },
      ],
      bottomCheck: 'Geen prompt-schrijfwerk · Betrouwbare muziekkwaliteit',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'Bekijk op YouTube',
      videoTitle: 'PlyMaster Factory Live-demo',
      videoDesc: 'Klik om themaselectie en directe promptgeneratie te bekijken',
      videoFooterLeft: 'Demo algoritmische promptgeneratie',
      videoFooterRight: 'Video afspelen',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster Studio',
      tagline: 'Geen montage: opties kiezen + bestanden toevoegen = video klaar',
      intro:
        'Je hebt geen ervaring met Premiere Pro nodig. Volg de stappen, voeg achtergrond en audio toe en je YouTube-video wordt direct gerenderd.',
      screenshotCaption: 'Echte software: PlyMaster Studio (PRO-versie)',
      screenshotBadge: 'Eenvoudige & intuïtieve interface',
      steps: [
        {
          title: 'Kies opties in vaste volgorde',
          desc: 'Vink achtereenvolgens beeldverhouding (16:9 YouTube), equalizer en trackvolgorde aan.',
        },
        {
          title: 'Voeg achtergrondbeeld/-video & audio toe',
          desc: 'Plaats je achtergrond en de nummers uit Factory in de map – klaar!',
        },
        {
          title: 'Klik op de blauwe knop [Video maken starten]!',
          desc: 'HD-rendering start direct en YouTube-tijdstempels worden automatisch gekopieerd.',
        },
      ],
      bottomCheck: '0% montagekennis · 100% automatische tijdstempels',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'PlyMaster Studio videoproductie-demo',
      videoPlayBtn: 'Studio-demo afspelen',
      videoOverlayTitle: 'PlyMaster Studio Demo (YouTube)',
      videoOverlayDesc: 'Zie in seconden hoe bestanden een complete playlistvideo worden',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: 'Begin vandaag nog met',
      titleHighlight: 'YouTube-afspeellijsten maken',
      title2: ' met PlyMaster',
      subtitle: 'Vragen over installatie, gebruik of licenties? Mail ons gerust op elk moment.',
      cardSub: 'Directe e-mailondersteuning',
      cardTitle: 'Mail naar nimomusicceo@gmail.com',
      note: 'Contact: nimomusicceo@gmail.com · Snelle reactie wereldwijd',
    },
    footer: {
      tagline: 'PlyMaster Factory (AI-muziek) & Studio (Videomaker)',
      homepage: 'Officiële website',
      contactLink: 'E-mail: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'PlyMaster Factory (Suno AI-automatisering) Demo',
      factoryDesc:
        'Bekijk hoe het kiezen van een thema automatisch Suno-prompts, teksten en YouTube-info genereert.',
      studioTitle: 'PlyMaster Studio (1-Klik Video Playlist Maker) Demo',
      studioDesc:
        'Bekijk hoe opties, bestanden en één klik direct een voltooide video met tijdstempels opleveren.',
      preparingTitle: 'Demovideo wordt voorbereid',
      preparingDesc: 'Neem voor vragen gerust contact op via nimomusicceo@gmail.com.',
      watchOnYoutube: 'Bekijk op YouTube',
      contactBtn: 'Stuur e-mail',
    },
  },

  sv: {
    langSelectorTitle: 'Välj språk (G10)',
    nav: {
      brandSub: 'Factory & Studio',
      intro: 'Översikt',
      benefits: 'Fördelar',
      factory: 'Factory',
      factoryBadge: 'AI-musik',
      studio: 'Studio',
      studioBadge: 'Video',
      lyricsDownloader: 'Textnedladdare',
      lyricsDownloaderTitle: 'Ladda ner Suno Lyrics Downloader',
      studioDownloadTitle: 'Ladda ner PlyMaster Studio',
      playground: '🎧 AI-musik',
      playgroundTitle: 'Gratis AI-musikstreaming',
      freeBadge: 'GRATIS',
      wavToMp3: '✨ Wav till MP3',
      wavToMp3Title: 'Gratis Wav till MP3-konverterare',
      contactBtn: 'E-postkontakt',
      contactBtnShort: 'E-post',
      buyBtn: 'Köp nu',
      menuLabel: 'Meny',
    },
    hero: {
      bannerBefore: 'PlyMaster består av två verktyg: ',
      bannerFactory: 'Factory (AI-musik)',
      bannerMiddle: ' & ',
      bannerStudio: 'Studio (Videoskapare)',
      bannerAfter: '',
      headline1: 'Fyll din YouTube-kanal med',
      headline2: 'musik och videor med några få klick',
      subtitlePart1: 'Konsekvent ',
      subtitleFactory: 'Suno-låtproduktion med verifierade algoritmer (Factory)',
      subtitlePart2: ', och ett ',
      subtitleStudio: 'spellisteoptimerat videoproduktionssystem (Studio)',
      subtitlePart3: '',
      subtitleLine2: '',
      ctaButton: 'Kontakta via e-post (nimomusicceo@gmail.com)',
      factoryCard: {
        programTag: 'PROGRAM 01',
        engineTag: 'Suno AI-musikmotor',
        title: 'PlyMaster Factory',
        platform: '(Webbplats)',
        quote: '"Välj ett tema: allt från Suno-musik & text till YouTube-uppladdningsinfo på en gång!"',
        desc: 'Inbyggda algoritmer verifierade av skaparen för varje tema. Välj tema och enkla inställningar för att skapa Suno-optimerade prompts, texter och praktisk YouTube-uppladdningsinfo. Vill du ha ett nytt temapaket? Klicka på "Kontakta via e-post (nimomusicceo@gmail.com)" ovan.',
        timeLabel: 'Tidsåtgång: 1 min',
        videoBtn: 'Se demo för Factory',
      },
      studioCard: {
        programTag: 'PROGRAM 02',
        engineTag: '1-Klicks Videomotor',
        title: 'PlyMaster Studio',
        platform: '(Windows)',
        quote: '"Ingen krånglig redigering – välj alternativ, lägg till filer och rendera!"',
        desc: 'Du behöver inte öppna Premiere eller After Effects. Följ stegen i ordning, lägg till bakgrundsbild eller video samt ljudfiler så renderas en skarp spellistevideo direkt.',
        timeLabel: 'Tidsåtgång: 5 min',
        videoBtn: 'Se demo för Studio',
      },
    },
    benefits: {
      kicker: 'WHY PLYMASTER',
      title1: 'Verklig glädje och tydliga fördelar',
      title2: 'du får med PlyMaster',
      subtitle: 'Inget krångligt tekniksnack – upplev hur roligt och enkelt det blir att driva en spellistekanal.',
      items: [
        {
          badge: 'JOY & FUN',
          title: 'Bli en populär spelliste-YouTuber redan idag',
          highlight: 'Publicera dag ett utan musik- eller redigeringskunskaper!',
          description:
            'Inget musik- eller videoredigeringsprogram behövs. Välj den stämning du gillar och se musik och video bli till automatiskt.',
        },
        {
          badge: 'COST SAVINGS',
          title: 'Sluta slösa Suno-krediter på misslyckade prompts',
          highlight: 'Ljudalgoritmer individuellt verifierade av skaparen',
          description:
            'Slipp gissa engelska prompts. Skapa låtar av jämn hög kvalitet och få direkt support (AS) från skaparen om du vill justera något.',
        },
        {
          badge: 'TIME FREEDOM',
          title: 'Slipp all tröttsam videoredigeringsstress',
          highlight: '0 sekunder på att räkna undertexter och tidsstämplar',
          description:
            'Slut med manuellt uträknade starttider. Studio skapar ljudvisualisering och färdiga YouTube-tidsstämplar automatiskt.',
        },
        {
          badge: 'FAST GROWTH',
          title: 'Gå från en video i veckan till dagliga spellistor',
          highlight: 'Produktionstiden minskar från 220 min till 5 min!',
          description:
            'Snabbhet är din konkurrensfördel. Med några klick efter jobbet kan du ladda upp nya spellistor varje dag och växa snabbare.',
        },
      ],
    },
    factoryDemo: {
      programTag: 'PROGRAM 01',
      engineTag: 'SUNO AI AUTOMATION',
      title: 'PlyMaster Factory',
      tagline: 'Ett temaval skapar Suno-prompts, text & YouTube-info på sekunder',
      intro:
        'Slipp fundera över engelska prompts till Suno AI. Välj tema så utformar Factory låtstruktur och uppladdningsinfo åt dig.',
      steps: [
        {
          title: 'Välj önskat tema',
          desc: 'Välj ett tema bland våra populära genrealgoritmer.',
        },
        {
          title: 'Automatisk Suno-prompt & låttext',
          desc: 'Bygger instrumentering, BPM och Verse/Chorus-taggar optimerade för Suno.',
        },
        {
          title: 'Skapa YouTube-info automatiskt!',
          desc: 'Skapar videotitel, beskrivning, taggar för YouTube samt prompts för miniatyrbilder.',
        },
      ],
      bottomCheck: 'Inget promptskrivande behövs · Pålitlig musikkvalitet',
      videoBadge: 'FACTORY DEMO VIDEO',
      videoWatchBadge: 'Se på YouTube',
      videoTitle: 'PlyMaster Factory Livedemo',
      videoDesc: 'Klicka för att se temaval och snabb promptgenerering',
      videoFooterLeft: 'Algoritmisk promptgenerering',
      videoFooterRight: 'Spela video',
    },
    studioDemo: {
      programTag: 'PROGRAM 02',
      engineTag: '1-CLICK VIDEO PLAYLIST MAKER',
      title: 'PlyMaster Studio',
      tagline: 'Ingen redigering: välj alternativ + lägg till filer = video klar',
      intro:
        'Du behöver inga kunskaper i Premiere Pro. Följ stegen, lägg in bakgrund och ljudfiler så skapas din YouTube-video direkt.',
      screenshotCaption: 'Verkligt program: PlyMaster Studio (PRO-version)',
      screenshotBadge: 'Enkelt och intuitivt gränssnitt',
      steps: [
        {
          title: 'Välj alternativ i tur och ordning',
          desc: 'Markera bildformat (16:9 YouTube), equalizer och spårordning steg för steg.',
        },
        {
          title: 'Lägg till bakgrundsbild/-video & ljudfiler',
          desc: 'Lägg bara din bakgrund och låtarna från Factory i mappen – klart!',
        },
        {
          title: 'Klicka på den blå knappen [Starta videoskapande]!',
          desc: 'Högkvalitativ rendering startar direkt och YouTube-tidsstämplar extraheras automatiskt.',
        },
      ],
      bottomCheck: '0% redigeringskunskap · 100% automatiska tidsstämplar',
      videoHeaderTag: 'STUDIO DEMO VIDEO',
      videoHeaderTitle: 'PlyMaster Studio Riktig Videodemo',
      videoPlayBtn: 'Spela Studiodemo',
      videoOverlayTitle: 'PlyMaster Studio Demo (YouTube)',
      videoOverlayDesc: 'Se på sekunder hur dina filer blir en färdig spellistevideo',
    },
    bottomCta: {
      badge: 'START YOUR PLAYLIST CHANNEL',
      title1: 'Börja skapa',
      titleHighlight: 'YouTube-spellistor',
      title2: ' med PlyMaster idag',
      subtitle: 'Frågor om installation, användning eller licenser? Maila oss när som helst.',
      cardSub: 'Direkt e-postsupport',
      cardTitle: 'Maila nimomusicceo@gmail.com',
      note: 'Kontakt: nimomusicceo@gmail.com · Snabbt svar världen över',
    },
    footer: {
      tagline: 'PlyMaster Factory (AI-musik) & Studio (Videoskapare)',
      homepage: 'Officiell webbplats',
      contactLink: 'E-post: nimomusicceo@gmail.com',
    },
    videoModal: {
      tag: 'DEMO VIDEO',
      factoryTitle: 'PlyMaster Factory (Suno AI-automatisering) Demo',
      factoryDesc:
        'Se hur ett temaval automatiskt skapar Suno-prompts, texter och YouTube-uppladdningsinfo.',
      studioTitle: 'PlyMaster Studio (1-Klicks Spellistevideo) Demo',
      studioDesc:
        'Se hur alternativ, filer och ett klick skapar en färdig video med tidsstämplar.',
      preparingTitle: 'Demovideo förbereds',
      preparingDesc: 'Kontakta oss gärna via e-post på nimomusicceo@gmail.com vid frågor.',
      watchOnYoutube: 'Se på YouTube',
      contactBtn: 'Skicka e-post',
    },
  },
};
