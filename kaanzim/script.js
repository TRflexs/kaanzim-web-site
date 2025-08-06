const languageSelector = document.getElementById("languageSelector");
const quote = document.getElementById("quote");
const video = document.getElementById("mainVideo");
const audio = document.getElementById("voiceOver");

const translations = {
  tr: "GÜNEŞE NERDEN BAKARSAN BAK GÖTÜN HER ZAMAN ARKANDADIR.",
  takumi: "太陽をどこから見ても、あなたのお尻は常にあなたの後ろにある",
  zhiyu: "無論你往哪裡看太陽，你的屁股總是在你身後",
  hans: "Egal, wohin du in die Sonne schaust, dein Arsch ist immer hinter dir.",
  conchita: "NO IMPORTA DONDE MIRES AL SOL, TU TRASERO SIEMPRE ESTÁ DETRÁS DE TI.",
  raveena: "चाहे आप सूरज को कहीं भी देखें, आपका पिछला हिस्सा हमेशा आपके पीछे ही रहेगा.",
  giorgio: "NON IMPORTA DOVE GUARDI IL SOLE, IL TUO CULO È SEMPRE DIETRO DI TE.",
  en: "NO MATTER WHEREVER YOU LOOK AT THE SUN, YOUR ASS IS ALWAYS BEHIND YOU",
  ar:"أينما تنظر إلى الشمس، مؤخرتك دائمًا خلفك",
  mhp:"TOPLAYIN 40 YAPAR!",
  krd:".",
  otuzuc:"BENİM ADIM YOSHİKAGE KİRA",
  az:"GÜNƏŞƏ HARADAN BAXSAN OLDUĞUNDA, GÖTÜN HƏMİŞƏ SİZİN ARXANIZDADIR",
  ulan:"Ulan sende siktir git a.",
  eren:"Ore no nawa Eren Yeager",
  wanda:"wanda nara emzir beni çocukların babası benim",
  messi:"Ankara messi kara messi ankara messi",
  roblox:"Robloxta bir oyun var o oyunda robox",
  shaco:"Neden bu kadar ciddisin",
  köylü:"GÜNEŞE NERDEN BAKARSAN BAK GÖTÜN HER ZAMAN ARKANDADIR",
  trump:"(TÜTÜN ÇEKMİŞ BİR SESLE)GÜNEŞE NERDEN BAKARSAN BAK GÖTÜN HER ZAMAN ARKANDADIR",
  lvbelc5:"ONLAR ARKADAN HAVLARLAR",
  arda:"Arda güleer milöh",
  terim:"O ciyano fatto berni pere domanike serno si sermaye perke cone conevel tesi",
  insan:"Biz at değiliz biz insanız insanlar...",
  arap:"İçtim şarabı, giydim çorabı, s. arabı"

  


};

languageSelector.addEventListener("change", () => {
  const selected = languageSelector.value;

  quote.textContent = translations[selected] || translations["tr"];

  audio.src = `audio/${selected}.mp3`;
  audio.loop = true;      // Döngüyü garanti altına al
  audio.play();

  video.currentTime = 0;
  video.play();
});

window.addEventListener("DOMContentLoaded", () => {
  video.volume = 0;        // Video sesi kapalı
  video.muted = true;      // Muted açık
  video.loop = true;       // Video döngüde
  video.play();

  audio.src = "audio/tr.mp3";
  audio.loop = true;       // Ses döngüde
  audio.play();
});
