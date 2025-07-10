// 1. SNS 링크 객체의 타입을 정의합니다.
interface SnsLink {
  linkhome?: string // Optional (필수 아님)
  linkyout?: string
  linkig?: string
  linkspot?: string
  linkapple?: string
  linkfam?: string // linkfam도 추가되었으니 여기에 포함
}

// 2. 개별 DJ 정보 객체의 타입을 정의합니다.
interface DjInfo {
  id: string
  name: string
  description: string // 짧은 설명
  descript2: string // 긴 설명
  imageUrl: string
  logoImg: string
  snsLink: SnsLink[] // 위에서 정의한 SnsLink 객체의 배열
}

// 3. djData 객체 자체의 타입을 정의합니다.
// Record<string, DjInfo>는 "모든 문자열 키(string)에 대해 DjInfo 타입을 값으로 가질 수 있는 객체"를 의미합니다.
export const djData: Record<string, DjInfo> = {
  // <--- 여기에 Record<string, DjInfo> 타입 정의 추가
  dubvision: {
    id: 'dubvision',
    name: 'DUBVISION',
    description: '“Energetic beats, endlessly soaring hopeful melodies.”',
    descript2:
      'DubVision, the Dutch sibling duo Stephan and Victor Leicher, stands as a pivotal force in modern progressive house. They’ve profoundly shaped the genre with their signature sound: uplifting, intricate melodies and energetic, powerful drops. Since 2010, DubVision has masterfully crafted tracks that build tension, culminating in euphoric climaxes. While rooted in progressive house, they skillfully blend elements of big room and other genres,always delivered with pristine production quality.Their influence is amplified through collaborations with titans like Martin Garrix, Afrojack, and Alesso, creating global anthems that resonate deeply with fans. A staple at major global festivals including Tomorrowland, DubVision consistently delivers electrifying performances that become peak moments for thousands. DubVision continues to define the sound of progressive house, ensuring an exciting future for their evolving artistry.\nTheir notable tracks include “Starlight (Keep Me Afloat)” (with Martin Garrix), “Anywhere With You” (with Afrojack and Lucas & Steve), “One Last Time” (with Alesso), and “New Memories.” If you’re a fan of progressive house, DubVision’s music is definitely worth checking out!',
    imageUrl: '/prog/images/dub_4.png',
    logoImg: '/prog/images/dub_logo.png',
    snsLink: [
      {
        linkhome: 'https://www.dubvisionmusic.com',
        linkyout: 'https://www.youtube.com/@DubVisionMusic', // 실제 YouTube 링크로 수정
        linkig:
          'https://www.instagram.com/dubvisionmusic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        linkspot: 'https://open.spotify.com/artist/7btNCDaPu2sMoa0skkAzy4?si=023c921316b24d77', // 실제 Spotify 링크로 수정
        linkapple: 'https://music.apple.com/kr/artist/dubvision/453713844',
      },
    ],
  },
  matisseSadko: {
    id: 'matisseSadko',
    name: 'MATISSE & SADKO',
    description: '“Grandiose sound, overwhelming scale.”',
    descript2:
      'Matisse & Sadko, the renowned Russian sibling duo, Aleksandr and Yury Parkhomenko, have significantly impacted the EDM scene with their majestic and melodic sound. They are especially celebrated for their iconic collaborations with Martin Garrix.Primarily known for progressive house and big room house, their music features epic, cinematic melodies and powerful, energetic drops, all delivered with pristine production quality.Their extensive partnership with Martin Garrix has produced numerous global anthems, including “Dragon,” “Forever,” and “Won’t Let You Go.” They’ve also collaborated with other giants like Steve Angello and Tiësto, while showcasing their unique sound through their independent label, MONoMARK. A consistent presence at major global festivals like Tomorrowland, Matisse & Sadko continue to deliver unforgettable performances, solidifying their unique and enduring legacy in electronic music.\nBy consistently delivering highly emotional and energetic music that prioritizes quality over transient trends, Matisse & Sadko have carved out a unique and enduring legacy in the EDM scene.',
    imageUrl: '/prog/images/ms_3.png', // 'prog/' 접두사 제거
    logoImg: '/prog/images/ms_logo.png', // 'prog/' 접두사 제거
    snsLink: [
      {
        linkhome: 'https://www.matissesadko.com',
        linkyout: 'https://www.youtube.com/@MatisseSadkoMusic', // 실제 YouTube 링크로 수정
        linkig:
          'https://www.instagram.com/matissesadko?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        linkspot: 'https://open.spotify.com/artist/5Sc9clIDjKOCyQyhvzSITx?si=ed7708ce1d5a415a', // 실제 Spotify 링크로 수정
        linkapple: 'https://music.apple.com/kr/artist/matisse-sadko/445823323',
      },
    ],
  },
  thirdParty: {
    id: 'thirdParty',
    name: 'THIRD PARTY',
    description: '"Melodies that deliver deep emotion, a lyrical journey to fill your night."',
    descript2:
      "Third Party, the British DJ and producer duo Jonnie Macaire and Harry Bass, are acclaimed for their melodic progressive house sound. They create more than just beats; they craft emotional narratives and grand soundscapes. Their signature style is built on emotional, lyrical melodies and progressive buildups, drawing listeners into a deep musical journey. They're renowned for high-quality production that ensures a rich and refined sound. Third Party gained global recognition with their collaboration with Martin Garrix, [Lions in the Wild,] an anthem played worldwide. Tracks like [Everyday Of My Life] and [Live Forever] further define their sound. They also champion new talent through their 'Release Records' label. A consistent presence at major festivals like Tomorrowland, Third Party delivers immersive and energetic live sets that are truly unforgettable. They continue to push the boundaries of progressive house, solidifying their unique place in electronic music.",
    imageUrl: '/prog/images/tp_3.png',
    logoImg: '/prog/images/tp_logo.png',
    snsLink: [
      {
        linkhome: 'https://www.thirdpartypresents.com',
        linkyout: 'https://www.youtube.com/@thirdpartylive', // 실제 YouTube 링크로 수정
        linkig:
          'https://www.instagram.com/thirdpartylive?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        linkspot: 'https://open.spotify.com/artist/7LIH8tS4w4fC2iGzfj5fpw?si=7119f965582f45ea', // 실제 Spotify 링크로 수정
        linkapple: 'https://music.apple.com/kr/artist/third-party/275078207',
        linkfam: 'https://www.djthirdparty.com',
      },
    ],
  },
  sickIndividuals: {
    id: 'sickIndividuals',
    name: 'SICK INDIVIDUALS',
    description: '"Powerful drops, unpredictable variations. Dynamic sound that shakes the club."',
    descript2:
      'The Dutch duo Joep Smeele and Rinze Hofstee, known as Sick Individuals, are celebrated for their dynamic blend of progressive house and diverse electronic genres. Their unique background in classical music composition infuses their sound with innovation.They deliver powerful beats and captivating melodies, seamlessly moving between progressive, electro, big room, and even experimental sounds. Every track is meticulously produced for a fresh, polished experience. Globally recognized for hits like "I Am" (with Axwell) and numerous remixes for stars like Rihanna and Avicii, Sick Individuals consistently delivers high-energy live shows. Their performances are a fusion of raw power, refined sound, and compelling visuals.Sick Individuals continuously pushes the boundaries of electronic music with their signature powerful and versatile sound.',
    imageUrl: '/prog/images/si_3.png',
    logoImg: '/prog/images/sick_logo.png',
    snsLink: [
      {
        linkhome: 'https://www.sickindividuals.com',
        linkyout: 'https://www.youtube.com/@sickindividuals', // 실제 YouTube 링크로 수정
        linkig:
          'https://www.instagram.com/sickindividuals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        linkspot: 'https://open.spotify.com/artist/0XQWfvMLDBRjqdy9Gmr6dt?si=e221d604928e461b', // 실제 Spotify 링크로 수정
        linkapple: 'https://music.apple.com/kr/artist/sick-individuals/270362240',
      },
    ],
  },
}
