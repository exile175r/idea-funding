const getImagePath = (path) => {
  return `${process.env.PUBLIC_URL || ''}${path}`;
};

const product = [
  {
    "id": '001',
    "name": "루미에어 스마트 무드램프",
    "category": "스마트홈·조명",
    "tags": ["조명", "AI", "무드램프", "스마트홈", "인테리어"],
    "image_url": "/images/products/001/",
    "image_name": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    "description": "사용자의 기분과 날씨에 맞춰 색과 밝기를 자동 조절하는 AI 무드램프",
    "creator": {
      "name": "루미에어 스튜디오",
      "profile": "조명과 감성을 결합한 스마트 라이프스타일 제품을 만드는 팀"
    },
    "funding": {
      "goal": 8000000,
      "current": 5420000,
      "percent": 68,
      "backers": 212,
      "daysLeft": 18,
      "startDate": "2025-08-15",
      "endDate": "2025-09-30"
    },
    "rewards": [
      {
        "id": 1,
        "name": "얼리버드 세트",
        "price": 59000,
        "description": "루미에어 무드램프 1개 + 전용 리모컨",
        "delivery": "2025-10-20",
        "limit": 150,
        "sold": 97
      },
      {
        "id": 2,
        "name": "프리미엄 세트",
        "price": 89000,
        "description": "루미에어 무드램프 1개 + 전용 리모컨 + 컬러 필터 3종",
        "delivery": "2025-10-25",
        "limit": 100,
        "sold": 88
      }
    ],
    "story": {
      "title": "빛으로 감정을 표현하는 새로운 방법",
      "content": "우리는 조명이 단순히 공간을 밝히는 도구가 아니라, 감정을 표현하고 분위기를 만드는 매개체라고 생각했습니다. 루미에어는 사용자의 기분, 날씨, 시간대에 맞춰 자동으로 색과 밝기를 조절하여, 하루의 순간을 특별하게 만들어줍니다.",
      "features": [
        "AI 기반 기분 분석 및 색상 추천",
        "날씨·시간대 연동 자동 조명 모드",
        "스마트폰 앱 및 음성 명령 지원",
        "USB-C 충전 및 무선 사용 가능"
      ],
      "inner": {
        "overview": [
          "AI 스마트 무드램프는 인공지능 기술과 감각적인 조명 디자인을 결합한 차세대 인테리어 조명입니다.",
          "단순한 조명이 아닌, 공간의 분위기와 사용자 상태에 맞춰 빛과 색을 변화시키며, 스마트 홈 환경과 완벽하게 연동됩니다."
        ],
        "keyFeatures": [
          "AI 기반 조명 제어 : 시간대, 날씨, 사용자 기분에 따라 자동으로 색상과 밝기를 조절",
          "프리미엄 디자인 : 매끄러운 곡선과 미니멀한 형태, 고급스러운 매트 마감",
          "다채로운 컬러 : 그라데이션 부드럽게 변화하는 오렌지~블루 톤의 빛으로 공간에 생동감 부여",
          "스마트 홈 연동 : Alexa, Google Home, SmartThings 등과 호환",
          "터치 & 음성 제어 : 간단한 터치 또는 음성 명령으로 조명 모드 변경 가능"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "25cm(H) × 10cm(W) × 8cm(D)"],
          ["무게", "1.2kg"],
          ["재질", "알루미늄 합금 + 강화 아크릴"],
          ["색상 모드", "1,600만 컬러 지원"],
          ["연결 방식", "Wi-Fi / Bluetooth"],
          ["전원", "USB-C (5V/2A)"],
          ["소비 전력", "최대 10W"],
          ["호환", "OS	iOS / Android"]
        ],
        "usageScenarios": [
          ["text", "침실 무드등: 취침 전 은은한 조명으로 편안한 분위기 조성"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "작업 공간 집중등: 차가운 톤의 빛으로 집중력 향상"],
          ["text", "파티 & 이벤트: 음악과 연동된 다이내믹 라이트 쇼"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "명상 & 휴식: 부드러운 색 변화로 심신 안정"],
        ],
        "components": [
          "AI 스마트 무드램프 본체",
          "USB-C 전원 케이블",
          "사용 설명서",
          "보증서"
        ]
      }
    },
    "specs": {
      "material": "알루미늄, 강화유리, LED 모듈",
      "size": "150mm × 150mm × 250mm",
      "weight": "850g",
      "color": "화이트, 블랙, 로즈골드",
      "warranty": "2년"
    },
    "reviews": [
      {
        "id": 1,
        "name": "박**",
        "rating": 5,
        "date": "2025-08-28",
        "content": "밤마다 분위기가 달라져서 너무 좋아요. 앱 연동도 편리합니다.",
        "verified": true
      },
      {
        "id": 2,
        "name": "정**",
        "rating": 4,
        "date": "2025-08-25",
        "content": "디자인이 예쁘고 기능도 만족스러운데, 배터리 지속 시간이 조금 더 길었으면 좋겠어요.",
        "verified": true
      }
    ]
  },
  {
    "id": '002',
    "name": "포켓브루 원터치 커피메이커",
    "category": "주방·조리도구",
    "tags": ["커피", "휴대용", "원터치", "캠핑", "아웃도어"],
    "image_url": "/images/products/002/",
    "image_name": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    "description": "언제 어디서나 원터치로 커피를 추출하는 휴대용 커피메이커",
    "creator": {
      "name": "브루랩",
      "profile": "커피를 사랑하는 엔지니어들이 만든 휴대용 커피 솔루션"
    },
    "funding": {
      "goal": 3000000,
      "current": 1850000,
      "percent": 62,
      "backers": 98,
      "daysLeft": 25,
      "startDate": "2025-09-01",
      "endDate": "2025-09-26"
    },
    "rewards": [
      {
        "id": 1,
        "name": "커피러버 세트",
        "price": 45000,
        "description": "포켓브루 1개 + 전용 머그컵",
        "delivery": "2025-10-05",
        "limit": 200,
        "sold": 120
      }
    ],
    "story": {
      "title": "커피를 사랑하는 모든 순간을 위해",
      "content": "캠핑, 여행, 사무실 어디서든 원터치로 커피를 즐길 수 있도록 설계했습니다.",
      "features": [
        "원터치 추출",
        "USB 충전식",
        "이중 단열 머그 포함"
      ],
      "inner": {
        "overview": [
          "포켓브루 원터치 커피메이커는 언제 어디서든 간편하게 커피를 즐길 수 있도록 설계된 휴대용 추출기입니다.",
          "복잡한 과정 없이 버튼 하나로 신선한 커피를 추출하며, 캠핑이나 사무실 등 다양한 장소에서 커피 타임을 완성합니다."
        ],
        "keyFeatures": [
          "원터치 추출: 버튼 하나로 빠르고 간편하게 커피 추출",
          "USB 충전식: 어디서든 충전 가능하며 무선 사용 지원",
          "이중 단열 머그 포함: 온도 유지와 휴대성 강화",
          "컴팩트 디자인: 백팩이나 여행가방에 쉽게 수납 가능",
          "분리형 구조: 세척이 간편하고 위생적으로 사용 가능"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "80mm × 80mm × 200mm"],
          ["무게", "500g"],
          ["재질", "스테인리스, ABS 플라스틱"],
          ["전원", "USB 충전 (5V/1.5A)"],
          ["추출 방식", "원터치 자동 추출"],
          ["용량", "머그 기준 250ml"],
          ["호환", "분쇄 원두 / 캡슐 커피"]
        ],
        "usageScenarios": [
          ["text", "캠핑 아침: 자연 속에서 따뜻한 커피 한 잔으로 시작하는 하루"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "사무실 브레이크 타임: 책상 위에서 빠르게 즐기는 커피 타임"],
          ["text", "여행 중 휴게소: 차 안에서도 간편하게 커피 추출"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "홈카페: 공간을 차지하지 않는 미니멀 커피메이커로 집에서도 전문 바리스타 느낌"]
        ],
        "components": 'components.png'
      }
    },
    "specs": {
      "material": "스테인리스, ABS 플라스틱",
      "size": "80mm × 80mm × 200mm",
      "weight": "500g",
      "color": "블랙, 실버",
      "warranty": "1년"
    },
    "reviews": []
  },
  {
    "id": '003',
    "name": "에어브리즈 휴대용 공기청정기",
    "category": "웰빙·헬스케어",
    "tags": ["공기청정", "휴대용", "USB충전", "미세먼지", "아로마"],
    "image_url": "/images/products/003/",
    "image_name": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    "description": "주머니 속에 넣고 다니는 개인용 공기청정기, 아로마 기능 포함",
    "creator": {
      "name": "브리즈랩",
      "profile": "휴대용 웰빙 기기를 전문적으로 개발하는 스타트업"
    },
    "funding": {
      "goal": 4000000,
      "current": 2150000,
      "percent": 54,
      "backers": 134,
      "daysLeft": 20,
      "startDate": "2025-09-05",
      "endDate": "2025-09-25"
    },
    "rewards": [
      {
        "id": 1,
        "name": "아로마 세트",
        "price": 39000,
        "description": "에어브리즈 본체 + 아로마 캡슐 3종",
        "delivery": "2025-10-15",
        "limit": 200,
        "sold": 88
      }
    ],
    "story": {
      "title": "언제 어디서나 맑은 공기를",
      "content": "도심 속에서도 깨끗한 공기를 마실 수 있도록 설계된 휴대용 공기청정기입니다.",
      "features": [
        "HEPA 필터 장착",
        "아로마 캡슐 교체 가능",
        "USB-C 충전"
      ],
      "inner": {
        "overview": [
          "에어브리즈 휴대용 공기청정기는 도심 속에서도 맑은 공기를 누릴 수 있도록 설계된 개인용 웰빙 디바이스입니다.",
          "주머니에 쏙 들어가는 크기와 아로마 기능까지 더해져, 언제 어디서든 쾌적한 호흡 환경을 제공합니다."
        ],
        "keyFeatures": [
          "HEPA 필터 탑재: 초미세먼지까지 걸러주는 고성능 필터",
          "아로마 캡슐 교체 가능: 기분에 따라 향기 선택 가능",
          "USB-C 충전: 간편한 충전과 무선 사용 지원",
          "초소형 디자인: 휴대성과 공간 활용에 최적화",
          "저소음 설계: 조용한 환경에서도 방해 없이 사용 가능"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "70mm × 70mm × 150mm"],
          ["무게", "300g"],
          ["재질", "ABS 플라스틱, 필터"],
          ["전원", "USB-C (5V/1A)"],
          ["필터", "HEPA H13 등급"],
          ["기능", "공기청정 + 아로마 디퓨저"],
          ["사용 시간", "최대 8시간"],
          ["호환", "아로마 캡슐 전용"]
        ],
        "usageScenarios": [
          ["text", "출퇴근길: 지하철이나 버스 안에서 개인용 공기청정기로 쾌적한 호흡"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "카페나 도서관: 조용한 공간에서도 저소음으로 쾌적한 공기 유지"],
          ["text", "야외 활동: 캠핑이나 산책 중에도 맑은 공기와 향기 제공"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "사무실 책상 위: 집중력을 높여주는 향기와 깨끗한 공기"]
        ],
        "components": 'components.png'
      }
    },
    "specs": {
      "material": "ABS 플라스틱, 필터",
      "size": "70mm × 70mm × 150mm",
      "weight": "300g",
      "color": "화이트, 민트",
      "warranty": "1년"
    },
    "reviews": [],
    "image_prompt": "A compact portable air purifier with a sleek white and mint design, placed on a cafe table, soft daylight, realistic photography style"
  },
  {
    "id": '004',
    "name": "펫케어 자동 급식기",
    "category": "반려동물 용품",
    "tags": ["반려동물", "자동급식기", "스마트홈", "고양이", "강아지"],
    "image_url": "/images/products/004/",
    "image_name": ["1.png", "2.png", "3.png", "4.png", "5.png"],
    "description": "정해진 시간에 자동으로 사료를 배급하는 스마트 급식기",
    "creator": {
      "name": "펫케어랩",
      "profile": "반려동물과 보호자의 삶을 편리하게 만드는 IoT 제품 개발사"
    },
    "funding": {
      "goal": 5000000,
      "current": 3250000,
      "percent": 65,
      "backers": 178,
      "daysLeft": 15,
      "startDate": "2025-09-02",
      "endDate": "2025-09-22"
    },
    "rewards": [
      {
        "id": 1,
        "name": "스탠다드 세트",
        "price": 79000,
        "description": "펫케어 자동 급식기 1대",
        "delivery": "2025-10-10",
        "limit": 150,
        "sold": 102
      }
    ],
    "story": {
      "title": "혼자 있는 반려동물도 행복하게",
      "content": "외출 중에도 반려동물의 식사를 챙길 수 있는 스마트 급식기입니다.",
      "features": [
        "정시 사료 배급",
        "앱 연동",
        "음성 메시지 녹음 기능"
      ],
      "inner": {
        "overview": [
          "펫케어 자동 급식기는 반려동물이 혼자 있는 시간에도 규칙적인 식사를 할 수 있도록 도와주는 스마트 IoT 기기입니다.",
          "앱을 통해 급식 시간과 양을 설정할 수 있으며, 보호자의 음성 메시지를 녹음해 반려동물에게 따뜻한 정서적 안정감을 제공합니다."
        ],
        "keyFeatures": [
          "정시 사료 배급: 설정된 시간에 자동으로 사료 제공",
          "앱 연동: 스마트폰으로 급식 스케줄 및 사료량 조절 가능",
          "음성 메시지 기능: 보호자의 목소리를 녹음해 식사 시간에 재생",
          "대용량 저장: 최대 3kg까지 사료 저장 가능",
          "분리형 구조: 사료통과 급식 트레이 분리 가능, 세척 용이"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "250mm × 250mm × 350mm"],
          ["무게", "2.5kg"],
          ["재질", "ABS, 스테인리스"],
          ["전원", "DC 어댑터 (5V/2A)"],
          ["저장 용량", "최대 3kg"],
          ["연동 방식", "Wi-Fi / Bluetooth"],
          ["호환 OS", "iOS / Android"],
          ["기능", "자동 급식 / 음성 메시지 / 앱 제어"]
        ],
        "usageScenarios": [
          ["text", "출근 후 집에 혼자 있는 반려동물에게 정해진 시간에 사료 제공"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "여행 중에도 앱으로 급식 스케줄 조절"],
          ["text", "식사 시간에 보호자의 음성 메시지로 반려동물에게 안정감 제공"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "다묘·다견 가정에서도 효율적인 급식 관리 가능"]
        ],
        "components": 'components.png'
      }
    },
    "specs": {
      "material": "ABS, 스테인리스",
      "size": "250mm × 250mm × 350mm",
      "weight": "2.5kg",
      "color": "화이트, 블랙",
      "warranty": "1년"
    },
    "reviews": [],
    "image_prompt": "A modern smart pet feeder with a transparent food container and LED display, a happy cat eating from it, modern kitchen background, photorealistic"
  },
  {
    "id": '005',
    "name": "에코팟 스마트 허브 플랜터",
    "category": "친환경·업사이클링",
    "tags": ["스마트가드닝", "허브재배", "친환경", "IoT", "실내정원"],
    "image_url": "/images/products/005/",
    "image_name": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
    "description": "실내에서 자동으로 허브를 재배할 수 있는 IoT 플랜터",
    "creator": {
      "name": "그린테크랩",
      "profile": "스마트 가드닝 솔루션을 개발하는 친환경 스타트업"
    },
    "funding": {
      "goal": 6000000,
      "current": 4120000,
      "percent": 69,
      "backers": 189,
      "daysLeft": 19,
      "startDate": "2025-09-03",
      "endDate": "2025-09-22"
    },
    "rewards": [
      {
        "id": 1,
        "name": "허브 스타터 세트",
        "price": 69000,
        "description": "에코팟 본체 + 바질·민트·로즈마리 씨앗 세트",
        "delivery": "2025-10-20",
        "limit": 150,
        "sold": 98
      }
    ],
    "story": {
      "title": "집 안에서 즐기는 신선한 허브",
      "content": "물 주기, 조명, 온도까지 자동으로 관리해주는 스마트 플랜터입니다.",
      "features": [
        "자동 급수 시스템",
        "LED 성장 조명",
        "앱 연동"
      ],
      "inner": {
        "overview": [
          "에코팟 스마트 허브 플랜터는 실내에서도 손쉽게 허브를 재배할 수 있도록 설계된 IoT 기반 플랜터입니다.",
          "자동 급수와 성장 조명, 온도 조절 기능을 통해 식물 재배 경험을 간편하고 즐겁게 만들어줍니다."
        ],
        "keyFeatures": [
          "자동 급수 시스템: 토양 습도에 따라 물을 자동 공급",
          "LED 성장 조명: 식물 생장에 최적화된 스펙트럼 조명 제공",
          "앱 연동: 스마트폰으로 급수 주기, 조명 시간 등 설정 가능",
          "친환경 설계: 저전력 소비와 재활용 가능한 소재 사용",
          "다양한 허브 재배 가능: 바질, 민트, 로즈마리 등 다양한 허브 호환"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "200mm × 200mm × 300mm"],
          ["무게", "1.2kg"],
          ["재질", "ABS, 강화유리"],
          ["전원", "USB-C (5V/2A)"],
          ["급수 방식", "자동 센서 기반 급수"],
          ["조명", "LED 성장 조명 (풀 스펙트럼)"],
          ["앱 호환", "iOS / Android"],
          ["재배 가능 식물", "허브류 및 소형 식물"]
        ],
        "usageScenarios": [
          ["text", "주방에서 직접 키운 바질로 신선한 요리 완성"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "거실 인테리어와 공기 정화 효과를 동시에"],
          ["text", "아이들과 함께하는 식물 성장 관찰 교육"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "퇴근 후 허브 향기로 힐링하는 저녁 시간"]
        ],
        "components": 'components.png'
      }
    },
    "specs": {
      "material": "ABS, 강화유리",
      "size": "200mm × 200mm × 300mm",
      "weight": "1.2kg",
      "color": "화이트, 그린",
      "warranty": "1년"
    },
    "reviews": [],
    "image_prompt": "A modern smart indoor herb planter with LED grow lights, basil and mint growing inside, placed on a kitchen counter, bright natural light, photorealistic"
  },
  {
    "id": '006',
    "name": "슬립웨이브 수면 유도기",
    "category": "웰빙·헬스케어",
    "tags": ["수면", "힐링", "화이트노이즈", "휴대용", "LED무드"],
    "image_url": "/images/products/006/",
    "image_name": ["1.png", "2.png", "3.png"],
    "description": "파도 소리와 은은한 빛으로 숙면을 돕는 휴대용 수면 유도기",
    "creator": {
      "name": "드림사운드",
      "profile": "수면과 휴식을 위한 사운드·조명 기기를 개발하는 브랜드"
    },
    "funding": {
      "goal": 3500000,
      "current": 2280000,
      "percent": 65,
      "backers": 142,
      "daysLeft": 12,
      "startDate": "2025-09-05",
      "endDate": "2025-09-17"
    },
    "rewards": [
      {
        "id": 1,
        "name": "슬립 스타터 세트",
        "price": 49000,
        "description": "슬립웨이브 본체 + 파도·숲·비 소리 모드",
        "delivery": "2025-10-05",
        "limit": 200,
        "sold": 156
      }
    ],
    "story": {
      "title": "파도처럼 잔잔한 밤",
      "content": "자연의 소리와 빛으로 깊은 숙면을 유도합니다.",
      "features": [
        "화이트노이즈·자연음 지원",
        "LED 무드 조명",
        "타이머 기능"
      ],
      "inner": {
        "overview": [
          "슬립웨이브 수면 유도기는 자연의 소리와 은은한 빛으로 깊은 숙면을 유도하는 휴대용 힐링 디바이스입니다.",
          "파도, 숲, 빗소리 등 다양한 자연음을 통해 마음을 안정시키고, LED 무드 조명으로 편안한 분위기를 조성합니다."
        ],
        "keyFeatures": [
          "화이트노이즈·자연음 지원: 파도, 숲, 비 등 다양한 사운드 모드 제공",
          "LED 무드 조명: 은은한 블루톤 조명으로 수면 환경 최적화",
          "타이머 기능: 원하는 시간에 자동 종료 설정 가능",
          "휴대성 강화: 가볍고 컴팩트한 디자인으로 여행 시에도 사용 가능",
          "저소음 설계: 조용한 작동으로 수면 방해 없이 사용 가능"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "120mm × 120mm × 80mm"],
          ["무게", "400g"],
          ["재질", "ABS, LED"],
          ["전원", "USB-C (5V/1A)"],
          ["사운드 모드", "파도 / 숲 / 비 / 화이트노이즈"],
          ["조명", "LED 무드 조명 (블루톤)"],
          ["타이머", "15 / 30 / 60분 설정 가능"],
          ["호환", "모든 USB 전원 장치"]
        ],
        "usageScenarios": [
          ["text", "침실에서 파도 소리와 함께 깊은 숙면 유도"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "출장 중 호텔에서 낯선 환경을 안정시키는 자연음"],
          ["text", "아이의 수면 습관 형성에 도움을 주는 부드러운 빛과 소리"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "명상이나 요가 시간에 집중력 향상 및 심신 안정"]
        ],
        "components": [
          "슬립웨이브 본체",
          "USB-C 충전 케이블",
          "사용 설명서",
          "보증서"
        ]
      }
    },
    "specs": {
      "material": "ABS, LED",
      "size": "120mm × 120mm × 80mm",
      "weight": "400g",
      "color": "화이트, 블루",
      "warranty": "1년"
    },
    "reviews": [],
    "image_prompt": "A small portable sleep aid device emitting soft blue light, with ocean wave sound icons on display, placed on a bedside table, cozy bedroom background, photorealistic"
  },
  {
    "id": "007",
    "name": "아쿠아팟 휴대용 정수병",
    "category": "웰빙·헬스케어",
    "tags": ["정수", "휴대용", "캠핑", "여행", "친환경"],
    "image_url": "/images/products/007/",
    "image_name": ["1.png", "2.png", "3.png"],
    "description": "언제 어디서나 깨끗한 물을 마실 수 있는 휴대용 정수병",
    "creator": {
      "name": "워터세이프",
      "profile": "휴대용 정수 솔루션 전문 브랜드"
    },
    "funding": {
      "goal": 2500000,
      "current": 1620000,
      "percent": 65,
      "backers": 94,
      "daysLeft": 14,
      "startDate": "2025-09-05",
      "endDate": "2025-09-19"
    },
    "rewards": [
      {
        "id": 1,
        "name": "트래블 세트",
        "price": 39000,
        "description": "아쿠아팟 본체 + 필터 2개",
        "delivery": "2025-10-10",
        "limit": 150,
        "sold": 88
      }
    ],
    "story": {
      "title": "깨끗한 물, 어디서든",
      "content": "캠핑, 여행, 등산 어디서든 안전하게 물을 마실 수 있도록 설계된 정수병입니다.",
      "features": [
        "3중 필터 시스템",
        "BPA Free 소재",
        "500ml 용량"
      ],
      "inner": {
        "overview": [
          "아쿠아팟 휴대용 정수병은 언제 어디서든 깨끗한 물을 마실 수 있도록 설계된 친환경 정수 솔루션입니다.",
          "3중 필터 시스템과 BPA Free 소재로 안전성과 휴대성을 모두 갖추었으며, 캠핑이나 여행, 일상 속에서도 유용하게 사용할 수 있습니다."
        ],
        "keyFeatures": [
          "3중 필터 시스템: 활성탄, 미세망, 나노필터로 불순물 제거",
          "BPA Free 소재: 인체에 무해한 친환경 트라이탄 사용",
          "500ml 용량: 휴대성과 충분한 수분 섭취를 고려한 최적 용량",
          "간편한 세척: 분리형 구조로 손쉬운 관리",
          "무전원 정수: 배터리 없이 물만 넣으면 즉시 정수 가능"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "70mm × 70mm × 250mm"],
          ["무게", "350g"],
          ["재질", "트라이탄, 활성탄 필터"],
          ["용량", "500ml"],
          ["필터 구성", "3중 필터 (활성탄 / 미세망 / 나노필터)"],
          ["사용 방식", "무전원 정수"],
          ["호환", "수돗물 / 계곡물 / 생수"],
          ["세척", "분리형 구조로 손쉬운 세척"]
        ],
        "usageScenarios": [
          ["text", "캠핑장에서 계곡물도 안심하고 마실 수 있는 정수 기능"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "비행기나 기차 여행 중에도 간편하게 수분 보충"],
          ["text", "도심 속 출퇴근길에도 휴대하기 좋은 친환경 정수병"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "등산이나 트레킹 중 자연 속에서 깨끗한 물을 바로 음용"]
        ],
        "components": [
          "아쿠아팟 본체",
          "교체용 필터 2개",
          "사용 설명서",
          "보증서"
        ]
      }
    },
    "specs": {
      "material": "트라이탄, 활성탄 필터",
      "size": "70mm × 70mm × 250mm",
      "weight": "350g",
      "color": "블루, 그린",
      "warranty": "1년"
    },
    "reviews": []
  },
  {
    "id": "008",
    "name": "플렉스데스크 접이식 스마트 책상",
    "category": "오피스·생산성",
    "tags": ["스마트가구", "높이조절", "접이식", "홈오피스", "인체공학"],
    "image_url": "/images/products/008/",
    "image_name": ["1.png", "2.png", "3.png"],
    "description": "높이 조절과 접이식 기능을 갖춘 스마트 책상",
    "creator": {
      "name": "워크플로우",
      "profile": "인체공학적 오피스 가구 전문 브랜드"
    },
    "funding": {
      "goal": 7000000,
      "current": 4980000,
      "percent": 71,
      "backers": 210,
      "daysLeft": 21,
      "startDate": "2025-09-01",
      "endDate": "2025-09-22"
    },
    "rewards": [
      {
        "id": 1,
        "name": "홈오피스 세트",
        "price": 159000,
        "description": "플렉스데스크 1개 + 전용 케이블 정리함",
        "delivery": "2025-10-25",
        "limit": 100,
        "sold": 76
      }
    ],
    "story": {
      "title": "작업 환경을 유연하게",
      "content": "높이 조절과 접이식 기능으로 공간 활용도를 극대화한 스마트 책상입니다.",
      "features": [
        "전동 높이 조절",
        "간편 접이식 구조",
        "케이블 정리 시스템"
      ],
      "inner": {
        "overview": [
          "플렉스데스크 접이식 스마트 책상은 공간 효율성과 인체공학을 동시에 고려한 스마트 오피스 가구입니다.",
          "높이 조절과 접이식 기능을 통해 다양한 작업 환경에 유연하게 대응하며, 홈오피스나 협소한 공간에서도 최적의 생산성을 제공합니다."
        ],
        "keyFeatures": [
          "전동 높이 조절: 버튼 하나로 원하는 높이로 조절 가능",
          "접이식 구조: 사용하지 않을 때 간편하게 접어 보관 가능",
          "케이블 정리 시스템: 책상 하단에 케이블을 깔끔하게 정리할 수 있는 전용 공간 제공",
          "튼튼한 소재: 강화목재와 알루미늄 프레임으로 안정적인 내구성",
          "저소음 모터: 조절 시 소음 최소화로 쾌적한 작업 환경 유지"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "1200mm × 600mm × 750mm"],
          ["무게", "18kg"],
          ["재질", "강화목재, 알루미늄"],
          ["전원", "DC 어댑터 (24V)"],
          ["조절 범위", "650mm ~ 1250mm"],
          ["접이식 기능", "2단 접이식 구조"],
          ["호환", "모든 데스크탑 및 노트북 환경"],
          ["부가 기능", "케이블 정리함 포함"]
        ],
        "usageScenarios": [
          ["text", "홈오피스에서 장시간 작업 시 높이 조절로 자세 교정"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "작업 후 책상을 접어 공간을 넓게 활용"],
          ["text", "학생의 공부 공간이나 창작 작업 공간으로도 활용 가능"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "협소한 원룸이나 스튜디오에서도 효율적인 공간 구성"]
        ],
        "components": [
          "플렉스데스크 본체",
          "사용 설명서",
          "보증서"
        ]
      }
    },
    "specs": {
      "material": "강화목재, 알루미늄",
      "size": "1200mm × 600mm × 750mm",
      "weight": "18kg",
      "color": "화이트, 월넛",
      "warranty": "2년"
    },
    "reviews": []
  },
  {
    "id": "009",
    "name": "쿨브리즈 휴대용 넥팬",
    "category": "생활가전",
    "tags": ["휴대용선풍기", "넥밴드", "여름", "USB충전", "저소음"],
    "image_url": "/images/products/009/",
    "image_name": ["1.png", "2.png", "3.png"],
    "description": "목에 걸고 사용하는 휴대용 무선 선풍기",
    "creator": {
      "name": "쿨에어랩",
      "profile": "휴대용 냉방 기기 전문 브랜드"
    },
    "funding": {
      "goal": 2000000,
      "current": 1450000,
      "percent": 73,
      "backers": 112,
      "daysLeft": 10,
      "startDate": "2025-09-08",
      "endDate": "2025-09-18"
    },
    "rewards": [
      {
        "id": 1,
        "name": "서머 세트",
        "price": 29000,
        "description": "쿨브리즈 넥팬 1개 + 전용 파우치",
        "delivery": "2025-09-30",
        "limit": 200,
        "sold": 150
      }
    ],
    "story": {
      "title": "시원함을 목에 걸다",
      "content": "무더운 여름, 손이 자유로운 휴대용 넥팬으로 시원함을 즐기세요.",
      "features": [
        "3단 풍속 조절",
        "저소음 모터",
        "USB-C 충전"
      ],
      "inner": {
        "overview": [
          "쿨브리즈 휴대용 넥팬은 무더운 여름철, 손을 자유롭게 유지하면서도 시원함을 누릴 수 있도록 설계된 넥밴드형 선풍기입니다.",
          "가볍고 인체공학적인 디자인으로 목에 부담 없이 착용 가능하며, USB-C 충전과 저소음 모터로 실내외 어디서든 쾌적한 냉방을 제공합니다."
        ],
        "keyFeatures": [
          "3단 풍속 조절: 상황에 따라 원하는 바람 세기 선택 가능",
          "저소음 모터: 조용한 환경에서도 방해 없이 사용 가능",
          "USB-C 충전: 빠르고 간편한 충전 방식 지원",
          "360도 회전 노즐: 바람 방향을 자유롭게 조절 가능",
          "인체공학적 디자인: 목에 안정적으로 착용되며 장시간 사용에도 편안함 유지"
        ],
        "specifications": [
          ["항목", "내용"],
          ["크기", "180mm × 180mm × 50mm"],
          ["무게", "250g"],
          ["재질", "ABS, 실리콘"],
          ["전원", "USB-C (5V/1A)"],
          ["풍속 조절", "3단계"],
          ["사용 시간", "최대 6시간 (풍속에 따라 상이)"],
          ["충전 시간", "약 2시간"],
          ["색상", "화이트 / 블랙 / 민트"]
        ],
        "usageScenarios": [
          ["text", "야외 산책이나 운동 중에도 손을 자유롭게 유지하며 시원함 제공"],
          ["image", "inner1.png"],
          ["image", "inner2.png"],
          ["text", "출퇴근길 대중교통 안에서 조용하게 사용할 수 있는 저소음 냉방"],
          ["text", "캠핑이나 페스티벌 등 야외 활동 시 필수 아이템"],
          ["image", "inner3.png"],
          ["image", "inner4.png"],
          ["text", "실내에서도 책상 앞에서 조용하게 사용할 수 있어 업무 집중도 향상"]
        ],
        "components": 'components.png'
      }
    },
    "specs": {
      "material": "ABS, 실리콘",
      "size": "180mm × 180mm × 50mm",
      "weight": "250g",
      "color": "화이트, 블랙, 민트",
      "warranty": "1년"
    },
    "reviews": []
  },
]

export { product, getImagePath };