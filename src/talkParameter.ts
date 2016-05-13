//text	合成するテキスト。エンコーディングは UTF-8。	必須。 Unicode で 200 文字以内。
//speaker	話者名。後述の「話者一覧」の中のいずれかを指定します。	必須。
//format	音声ファイルフォーマット。以下のいずれかを指定します。
//wav(圧縮無し)
//ogg(Ogg Vorbisフォーマットでの圧縮)
//aac(AACフォーマットでの圧縮)
//wav
//emotion	感情カテゴリの指定。 話者 haruka、hikari、takeru、santa、bear にのみ使用できます。 以下のいずれかを指定します。
//happiness 喜
//anger 怒
//sadness 悲
//emotion_level	感情レベルの指定。1〜4を指定できます。数値が大きいほど感情が強くなります。		2
//pitch	音の高低を数値で指定します。値が小さいほど低い音になります。	50から200(%)まで。	100(%)
//speed	話す速度を数値で指定します。値が小さいほど遅い話し方になります。	50から400(%)まで。	100(%)
//volume	音量を数値で指定します。値が小さいほど小さい音になります。	50から200(%)まで。	100(%)

export interface TalkParameter {
  text: string;
  speaker: Speaker;
  format: Format;
  emotion: Emotion;
  emotion_level: number;
  pitch: number;
  speed: number;
  volume: number;
}

//emotion	感情カテゴリの指定。 話者 haruka、hikari、takeru、santa、bear にのみ使用できます。 以下のいずれかを指定します。
//happiness 喜
//anger 怒
//sadness 悲
export enum Speaker {
  show,//(男性)
  haruka,//(女性)
  hikari,//(女性)
  takeru,//(男性)
  santa,//(サンタ)
  bear //(凶暴なクマ)
}

export enum Format {
  wav, //(圧縮無し)
  ogg, //(Ogg Vorbisフォーマットでの圧縮)
  aac //(AACフォーマットでの圧縮)
}

export enum Emotion {
  happiness, //喜
  anger, //怒
  sadness  //悲
}
