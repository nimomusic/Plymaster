export interface ThemeItem {
  id: string;
  name: string;
  subtitle: string;
  genre: string;
  bpm: number;
  badge: string;
  factory: {
    algorithmName: string;
    targetSunoPrompt: string;
    lyricsStructure: string;
    instrumentTags: string[];
    autoInputStatus: string;
  };
  studio: {
    videoTitle: string;
    aspectRatio: string;
    visualStyle: string;
    totalTracks: number;
    duration: string;
    youtubeDescription: string;
    trackList: Array<{ title: string; time: string; artist: string }>;
  };
  audioChords: number[][]; // Frequencies for web audio synth chords
}

export const THEME_PRESETS: ThemeItem[] = [
  {
    id: 'rainy_cafe',
    name: '비 오는 날 성수동 카페',
    subtitle: '감성적인 빗소리와 따뜻한 로파이 피아노',
    genre: 'Lo-Fi Jazz / Rainy Ambient',
    bpm: 78,
    badge: '인기 테마 1위',
    factory: {
      algorithmName: 'Rainy Cafe Lo-Fi Algorithmic Matrix',
      targetSunoPrompt: 'Warm lo-fi jazz piano, vintage Rhodes chords, subtle vinyl crackle, gentle rain ambient texture, relaxed swung drums, cozy cafe atmosphere, 78 bpm, instrumental chillhop',
      lyricsStructure: `[Intro: Gentle Rain & Coffee Steam]
[Verse 1]
창밖을 타고 흐르는 투명한 빗방울
테이블 위 식어가는 커피의 잔향
[Chorus]
조용히 흐르는 이 박자 속에
복잡한 생각은 잠시 흩어지고
[Outro: Soft Piano Fade-out]`,
      instrumentTags: ['Vintage Rhodes', 'Brushed Snare', 'Upright Bass', 'Rain Soundscape'],
      autoInputStatus: 'Suno AI 프롬프트 필드 자동 주입 완료',
    },
    studio: {
      videoTitle: '🌧️ 비 오는 날 조용한 성수동 카페에서 듣는 감성 로파이 플레이리스트',
      aspectRatio: '16:9 4K UHD',
      visualStyle: '빗물 맺힌 창가 & 은은한 캔들 4K 시네마틱 루프',
      totalTracks: 8,
      duration: '1:12:45',
      youtubeDescription: `작업할 때, 책 읽을 때 편안하게 들을 수 있는 감성 로파이 음악입니다.

🎧 Tracklist
00:00 01. Rainy Window - Lo-Fi Beats
03:52 02. Warm Coffee - Acoustic Guitar
07:44 03. Evening Glow - Rhodes Solo
12:15 04. Soft Drizzle - Ambient Chill
16:30 05. Cozy Corner - Lo-Fi Jazz

모든 음원은 플리마스터 팩토리(Suno AI 연동)와 스튜디오로 제작되었습니다.`,
      trackList: [
        { title: 'Rainy Window', time: '03:52', artist: 'Lo-Fi Beats' },
        { title: 'Warm Coffee', time: '03:52', artist: 'Acoustic Guitar' },
        { title: 'Evening Glow', time: '04:31', artist: 'Rhodes Solo' },
        { title: 'Soft Drizzle', time: '04:15', artist: 'Ambient Chill' },
        { title: 'Cozy Corner', time: '03:48', artist: 'Lo-Fi Jazz' },
      ],
    },
    audioChords: [
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [220.0, 261.63, 329.63, 392.0],  // Am7
      [174.61, 220.0, 261.63, 329.63], // Fmaj7
      [196.0, 246.94, 293.66, 349.23], // G7
    ],
  },
  {
    id: 'midnight_drive',
    name: '심야 올림픽대로 드라이브',
    subtitle: '도시의 네온사인과 몽환적인 시티팝 신스',
    genre: 'City Pop / Synthwave 80s',
    bpm: 112,
    badge: '조회수 급상승',
    factory: {
      algorithmName: 'Neon City Midnight Groove Engine',
      targetSunoPrompt: '80s Japanese city pop synth bass, sparkling DX7 electric piano, nostalgic brass stabs, analog drum machine, neon highway night drive vibes, 112 bpm, groovy rhythm',
      lyricsStructure: `[Verse 1: Midnight Echoes]
끝없이 뻗은 네온 불빛 터널 속으로
차창을 열면 스치는 차가운 밤공기
[Chorus: Groovy High]
불 꺼지지 않는 도시는 잠들지 않고
음악을 타고 달리는 한밤의 드라이브
[Solo: Analog Synth Odyssey]`,
      instrumentTags: ['DX7 Electric Piano', 'Slap Synth Bass', 'Analog Drum 808', 'Gated Reverb Snare'],
      autoInputStatus: 'Suno AI 프롬프트 필드 자동 주입 완료',
    },
    studio: {
      videoTitle: '🌃 한밤의 네온 도심을 달리는 드라이브 시티팝 & 신스웨이브 BGM',
      aspectRatio: '16:9 4K UHD',
      visualStyle: '사이버펑크 네온 하이웨이 대시보드 60fps 렌더링',
      totalTracks: 10,
      duration: '1:34:20',
      youtubeDescription: `드라이브할 때 볼륨을 높여보세요. 80년대 레트로 시티팝의 황홀한 밤.

🎧 Tracklist
00:00 01. Midnight Expressway - City Synth
04:12 02. Neon Reflections - Retro Groove
08:24 03. Tokyo Twilight - Funk Wave
12:50 04. Endless Highway - Dream Driver

제작: 플리마스터 팩토리 & 스튜디오 원클릭 파이프라인`,
      trackList: [
        { title: 'Midnight Expressway', time: '04:12', artist: 'City Synth' },
        { title: 'Neon Reflections', time: '04:12', artist: 'Retro Groove' },
        { title: 'Tokyo Twilight', time: '04:26', artist: 'Funk Wave' },
        { title: 'Endless Highway', time: '04:40', artist: 'Dream Driver' },
      ],
    },
    audioChords: [
      [293.66, 349.23, 440.0, 523.25], // Dm7
      [196.0, 246.94, 293.66, 392.0],  // G7
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [220.0, 277.18, 329.63, 415.3],  // A7
    ],
  },
  {
    id: 'deep_coding',
    name: '새벽 코딩 & 딥 포커스',
    subtitle: '잡념을 없애고 몰입을 극대화하는 칠합',
    genre: 'Deep Focus Chillhop / Minimal',
    bpm: 82,
    badge: '작업/공부 추천',
    factory: {
      algorithmName: 'Zero-Distraction Alpha Waves Focus Model',
      targetSunoPrompt: 'Minimalist chillhop beats, muted acoustic guitar loops, warm sub bass, organic vinyl textures, deep focus alpha waves, study music, seamless loopable, 82 bpm',
      lyricsStructure: `[Structure: Fully Instrumental]
[Section A: Ambient Rain & Sine Sub]
[Section B: Rhythmic Head-nod Beats]
[Section C: Soft Kalimba & Electric Rhodes Texture]`,
      instrumentTags: ['Muted Guitar', 'Warm Sub Bass', 'Organic Vinyl Texture', 'Kalimba Tap'],
      autoInputStatus: 'Suno AI 프롬프트 필드 자동 주입 완료',
    },
    studio: {
      videoTitle: '💻 벼락치기 코딩 & 과제 몰입을 위한 딥 포커스 칠합 플레이리스트',
      aspectRatio: '16:9 4K UHD',
      visualStyle: '새벽 연구실 책상 & 타이머 비주얼라이저 오버레이',
      totalTracks: 12,
      duration: '2:05:10',
      youtubeDescription: `집중이 필요할 때 켜두는 무방해 칠합 배경음악입니다.

🎧 Tracklist
00:00 01. Flow State - Deep Focus
03:30 02. Terminal Glow - Lo-Fi Code
07:15 03. Midnight Compile - Synth Pulse
11:00 04. Clean Architecture - Ambient Chill

제작: 플리마스터 올인원 솔루션`,
      trackList: [
        { title: 'Flow State', time: '03:30', artist: 'Deep Focus' },
        { title: 'Terminal Glow', time: '03:45', artist: 'Lo-Fi Code' },
        { title: 'Midnight Compile', time: '03:45', artist: 'Synth Pulse' },
        { title: 'Clean Architecture', time: '04:10', artist: 'Ambient Chill' },
      ],
    },
    audioChords: [
      [220.0, 261.63, 329.63, 392.0],  // Am7
      [174.61, 220.0, 261.63, 329.63], // Fmaj7
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [196.0, 246.94, 293.66, 349.23], // G7
    ],
  },
  {
    id: 'sunday_brunch',
    name: '햇살 가득 일요일 브런치',
    subtitle: '기분 좋은 햇살 아래 달콤한 어쿠스틱 팝',
    genre: 'Acoustic Folk / Sweet Indie Pop',
    bpm: 96,
    badge: '카페 사장님 픽',
    factory: {
      algorithmName: 'Sunny Daylight Acoustic Harmony System',
      targetSunoPrompt: 'Bright acoustic nylon guitar fingerpicking, light shaker percussion, upright jazz bass, cheerful melodica, sunny Sunday brunch atmosphere, warm spring breeze, 96 bpm',
      lyricsStructure: `[Verse 1]
창문 너머 쏟아지는 눈부신 햇살
커피 향 가득한 일요일의 여유
[Chorus]
천천히 걸어도 괜찮은 오늘
우리의 웃음이 번지는 시간`,
      instrumentTags: ['Acoustic Nylon Guitar', 'Upright Wood Bass', 'Gentle Shaker', 'Vintage Melodica'],
      autoInputStatus: 'Suno AI 프롬프트 필드 자동 주입 완료',
    },
    studio: {
      videoTitle: '☕ 햇살 가득한 휴일 아침, 기분 좋아지는 브런치 카페 어쿠스틱 BGM',
      aspectRatio: '16:9 4K UHD',
      visualStyle: '자연광이 쏟아지는 베이커리 카페 4K 힐링 영상',
      totalTracks: 9,
      duration: '1:18:00',
      youtubeDescription: `휴일 아침 브런치와 함께하는 편안한 어쿠스틱 음악입니다.

🎧 Tracklist
00:00 01. Sunday Morning - Acoustic Folk
03:40 02. Sweet Brioche - Melodica Waltz
07:20 03. Spring Breeze - Soft Guitar
11:05 04. Terrace Sunshine - Indie Pop`,
      trackList: [
        { title: 'Sunday Morning', time: '03:40', artist: 'Acoustic Folk' },
        { title: 'Sweet Brioche', time: '03:40', artist: 'Melodica Waltz' },
        { title: 'Spring Breeze', time: '03:45', artist: 'Soft Guitar' },
        { title: 'Terrace Sunshine', time: '03:55', artist: 'Indie Pop' },
      ],
    },
    audioChords: [
      [261.63, 329.63, 392.0, 523.25], // C
      [196.0, 246.94, 293.66, 392.0],  // G
      [220.0, 261.63, 329.63, 440.0],  // Am
      [174.61, 220.0, 261.63, 349.23], // F
    ],
  },
];
