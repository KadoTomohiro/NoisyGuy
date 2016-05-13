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
//emotion	感情カテゴリの指定。 話者 haruka、hikari、takeru、santa、bear にのみ使用できます。 以下のいずれかを指定します。
//happiness 喜
//anger 怒
//sadness 悲
(function (Speaker) {
    Speaker[Speaker["show"] = 0] = "show";
    Speaker[Speaker["haruka"] = 1] = "haruka";
    Speaker[Speaker["hikari"] = 2] = "hikari";
    Speaker[Speaker["takeru"] = 3] = "takeru";
    Speaker[Speaker["santa"] = 4] = "santa";
    Speaker[Speaker["bear"] = 5] = "bear"; //(凶暴なクマ)
})(exports.Speaker || (exports.Speaker = {}));
var Speaker = exports.Speaker;
(function (Format) {
    Format[Format["wav"] = 0] = "wav";
    Format[Format["ogg"] = 1] = "ogg";
    Format[Format["aac"] = 2] = "aac"; //(AACフォーマットでの圧縮)
})(exports.Format || (exports.Format = {}));
var Format = exports.Format;
(function (Emotion) {
    Emotion[Emotion["happiness"] = 0] = "happiness";
    Emotion[Emotion["anger"] = 1] = "anger";
    Emotion[Emotion["sadness"] = 2] = "sadness"; //悲
})(exports.Emotion || (exports.Emotion = {}));
var Emotion = exports.Emotion;
//# sourceMappingURL=talkParameter.js.map