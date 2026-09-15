/**
 * Authentic Daily Rashifal (Horoscope) Engine for all 12 Zodiac Signs
 */

export interface RashiForecast {
  rashi: string
  hindiName: string
  lord: string
  element: string
  career: string
  finance: string
  health: string
  relationships: string
  personal: string
  luckyColor: string
  luckyNumber: number
  luckyDay: string
  overallPred: string
}

export const RASHIFAL_DATA: { [key: string]: RashiForecast } = {
  Aries: {
    rashi: "Aries",
    hindiName: "मेष राशि",
    lord: "मंगल (Mars)",
    element: "अग्नि (Fire)",
    career: "कार्यक्षेत्र में आपके नेतृत्व और साहस की प्रशंसा होगी। नए प्रोजेक्ट्स शुरू करने के लिए समय अत्यंत अनुकूल है।",
    finance: "आर्थिक स्थिति सुदृढ़ रहेगी। रुका हुआ धन वापस मिलने के प्रबल योग हैं। जोखिम भरे निवेश में सावधानी रखें।",
    health: "ऊर्जा का स्तर उच्च रहेगा। सिरदर्द या अत्यधिक उत्तेजना से बचें, पर्याप्त जल का सेवन करें।",
    relationships: "जीवनसाथी के साथ सामंजस्य बढ़ेगा। प्रेम संबंधों में स्पष्ट संवाद से गलतफहमियां दूर होंगी।",
    personal: "आत्म-विश्वास में वृद्धि होगी। अपने लक्ष्यों पर केंद्रित रहकर आगे बढ़ें।",
    luckyColor: "लाल (Crimson Red)",
    luckyNumber: 9,
    luckyDay: "मंगलवार (Tuesday)",
    overallPred: "आज का दिन नए संकल्पों और कर्म की विजय का दिन है।"
  },
  Taurus: {
    rashi: "Taurus",
    hindiName: "वृषभ राशि",
    lord: "शुक्र (Venus)",
    element: "पृथ्वी (Earth)",
    career: "स्थिर और संतुलित प्रगति होगी। सहकर्मियों का पूरा सहयोग मिलेगा। कला व वित्तीय क्षेत्र से जुड़े लोगों को लाभ होगा।",
    finance: "भूमि, भवन या आभूषण में निवेश के अवसर प्राप्त होंगे। अनावश्यक विलासिता के खर्चों पर नियंत्रण रखें।",
    health: "गले और खान-पान का ध्यान रखें। ताजा व सात्विक भोजन ग्रहण करें।",
    relationships: "पारिवारिक वातावरण सुखद रहेगा। जीवनसाथी से कोई सुंदर उपहार या सुखद समाचार मिल सकता है।",
    personal: "धैर्य और शांति आपकी सबसे बड़ी ताकत सिद्ध होगी।",
    luckyColor: "सफेद / हल्का गुलाबी (Rose Pink)",
    luckyNumber: 6,
    luckyDay: "शुक्रवार (Friday)",
    overallPred: "सुख, शांति और पारिवारिक सौहार्द से भरपूर अनुकूल दिन रहेगा।"
  },
  Gemini: {
    rashi: "Gemini",
    hindiName: "मिथुन राशि",
    lord: "बुध (Mercury)",
    element: "वायु (Air)",
    career: "संचार, लेखन, मीडिया और व्यापार में असाधारण सफलता। नए संपर्कों से भविष्य के मार्ग खुलेंगे।",
    finance: "व्यापारिक सौदों से अच्छा मुनाफा होगा। आय के एक से अधिक साधन विकसित होने की संभावना है।",
    health: "मानसिक थकान से बचें। नियमित योग और प्राणायाम से ताजगी बनी रहेगी।",
    relationships: "मित्रों से सहयोग मिलेगा। प्रियजन के साथ लंबी सुखद बातचीत होगी।",
    personal: "अपनी बुद्धि और हास्य-विनोद से कठिन परिस्थितियों को भी सहज बना लेंगे।",
    luckyColor: "पन्ना हरा (Emerald Green)",
    luckyNumber: 5,
    luckyDay: "बुधवार (Wednesday)",
    overallPred: "बौद्धिक श्रेष्ठता और व्यापारिक विस्तार का दिन है।"
  },
  Cancer: {
    rashi: "Cancer",
    hindiName: "कर्क राशि",
    lord: "चंद्र (Moon)",
    element: "जल (Water)",
    career: "कार्यस्थल पर आपकी संवेदनशीलता और निष्ठा को पहचान मिलेगी। उच्चाधिकारियों का आशीर्वाद रहेगा।",
    finance: "पैतृक संपत्ति या माता के सहयोग से धन लाभ के योग। संचित बचत में वृद्धि होगी।",
    health: "भावनात्मक तनाव से बचें। छाती और फेफड़ों का ख्याल रखें।",
    relationships: "माता के साथ मधुर संबंध रहेंगे। दांपत्य जीवन में भावनात्मक निकटता और विश्वास बढ़ेगा।",
    personal: "अपने अंतर्मन की आवाज पर भरोसा करें, यह आपको सही मार्ग दिखाएगी।",
    luckyColor: "दूधिया सफेद (Pearl White)",
    luckyNumber: 2,
    luckyDay: "सोमवार (Monday)",
    overallPred: "मानसिक शांति, स्नेह और ईश्वरीय कृपा का अनुभव होगा।"
  },
  Leo: {
    rashi: "Leo",
    hindiName: "सिंह राशि",
    lord: "सूर्य (Sun)",
    element: "अग्नि (Fire)",
    career: "समाज और कार्यक्षेत्र में आपका प्रभाव बढ़ेगा। राजकीय या प्रशासनिक कार्यों में मनचाही सफलता।",
    finance: "आर्थिक स्थिति मजबूत रहेगी। सामाजिक प्रतिष्ठा पर व्यय हो सकता है। सरकारी क्षेत्रों से लाभ।",
    health: "हार्ट और रीढ़ की हड्डी का ध्यान रखें। सुबह सूर्य नमस्कार करना अत्यंत फलदायी रहेगा।",
    relationships: "अहंकार को बीच में न आने दें। जीवनसाथी की भावनाओं का आदर करने से प्रेम बढ़ेगा।",
    personal: "उदारता और सत्यनिष्ठा से सबका दिल जीतेंगे।",
    luckyColor: "सुनहरा / केसरिया (Gold / Saffron)",
    luckyNumber: 1,
    luckyDay: "रविवार (Sunday)",
    overallPred: "मान-सम्मान, पद-प्रतिष्ठा और तेजस्विता का विस्तार होगा।"
  },
  Virgo: {
    rashi: "Virgo",
    hindiName: "कन्या राशि",
    lord: "बुध (Mercury)",
    element: "पृथ्वी (Earth)",
    career: "बारीकी से किए गए कार्यों में अभूतपूर्व सफलता। प्रतियोगी परीक्षाओं और विश्लेषण में श्रेष्ठ प्रदर्शन।",
    finance: "बजट का पालन करने से बचत बढ़ेगी। पुराने कर्जों को चुकाने में प्रगति होगी।",
    health: "पाचन तंत्र और पेट का ध्यान रखें। हल्का व सुपाच्य भोजन लें।",
    relationships: "रिश्तों में अत्यधिक आलोचना से बचें। दूसरों के सकारात्मक गुणों की सराहना करें।",
    personal: "आपकी व्यावहारिक सोच हर मुश्किल पहेली को सुलझा देगी।",
    luckyColor: "हल्का हरा (Light Green)",
    luckyNumber: 5,
    luckyDay: "बुधवार (Wednesday)",
    overallPred: "कर्म और अनुशासन से सभी कार्य सुचारू रूप से संपन्न होंगे।"
  },
  Libra: {
    rashi: "Libra",
    hindiName: "तुला राशि",
    lord: "शुक्र (Venus)",
    element: "वायु (Air)",
    career: "साझेदारी के कार्यों में उत्तम लाभ। न्याय, परामर्श और डिजाइनिंग के क्षेत्रों में प्रशंसा।",
    finance: "धन का प्रवाह अच्छा रहेगा। सौंदर्य व कलात्मक वस्तुओं की खरीदारी पर व्यय संभव है।",
    health: "गुर्दों (Kidneys) और त्वचा का ध्यान रखें। प्रचुर मात्रा में पानी पिएं।",
    relationships: "विवाह और प्रेम संबंधों के लिए स्वर्णिम दिन। सामंजस्य और मधुरता चरम पर रहेगी।",
    personal: "संतुलित निर्णय लेने से जीवन में स्थिरता आएगी।",
    luckyColor: "सिल्वर / हल्का नीला (Sky Blue)",
    luckyNumber: 6,
    luckyDay: "शुक्रवार (Friday)",
    overallPred: "सौंदर्य, प्रेम और सामाजिक प्रतिष्ठा में वृद्धि का दिन।"
  },
  Scorpio: {
    rashi: "Scorpio",
    hindiName: "वृश्चिक राशि",
    lord: "मंगल (Mars)",
    element: "जल (Water)",
    career: "गूढ़ शोध, गुप्त योजनाएं और तकनीकी कार्यों में बड़ी सफलता। विरोधियों पर पूर्ण विजय।",
    finance: "अकस्मात धन लाभ या वसीयत से लाभ के योग। गुप्त वित्तीय स्रोतों से धन आगमन।",
    health: "ऊर्जावान रहेंगे। क्रोध और अत्यधिक तनाव से रक्तचाप बढ़ सकता है, शांत रहें।",
    relationships: "रिश्तों में गहराई और वफादारी रहेगी। शक और ईर्ष्या से दूर रहें।",
    personal: "गहन इच्छाशक्ति से असंभव को भी संभव बना सकेंगे।",
    luckyColor: "गहरा लाल / मैरून (Maroon)",
    luckyNumber: 9,
    luckyDay: "मंगलवार (Tuesday)",
    overallPred: "आंतरिक बल और रहस्यों को भेदने की अद्भुत शक्ति का दिन।"
  },
  Sagittarius: {
    rashi: "Sagittarius",
    hindiName: "धनु राशि",
    lord: "गुरु (Jupiter)",
    element: "अग्नि (Fire)",
    career: "उच्च शिक्षा, अध्यापन, कानून और धार्मिक कार्यों में अभूतपूर्व प्रगति। विदेश से शुभ समाचार।",
    finance: "भाग्य का पूरा साथ मिलेगा। दीर्घकालिक निवेशों से प्रचुर आर्थिक लाभ होगा।",
    health: "जांघों और लिवर का ध्यान रखें। अत्यधिक वसायुक्त भोजन से परहेज करें।",
    relationships: "पिता और गुरुजनों का आशीर्वाद मिलेगा। जीवनसाथी के साथ वैचारिक तालमेल रहेगा।",
    personal: "आशावादिता और ज्ञान का प्रकाश आपके चारों ओर फैलेगा।",
    luckyColor: "पीला (Bright Yellow)",
    luckyNumber: 3,
    luckyDay: "गुरुवार (Thursday)",
    overallPred: "भाग्य का उदय, धर्म और ज्ञान में वृद्धि का दिन।"
  },
  Capricorn: {
    rashi: "Capricorn",
    hindiName: "मकर राशि",
    lord: "शनि (Saturn)",
    element: "पृथ्वी (Earth)",
    career: "कठिन परिश्रम का स्थायी फल मिलेगा। वरिष्ठ अधिकारियों का विश्वास अर्जित करेंगे।",
    finance: "अचल संपत्ति (Real Estate) और दीर्घकालिक बचत में स्थिरता। वित्तीय सुरक्षा मजबूत होगी।",
    health: "जोड़ों और घुटनों का ध्यान रखें। सुबह की धूप में टहलें।",
    relationships: "परिवार के प्रति जिम्मेदारियों को पूरी निष्ठा से निभाएंगे। बुजुर्गों की सेवा करें।",
    personal: "धैर्य और दृढ़ता आपको शिखर पर पहुंचाएगी।",
    luckyColor: "गहरा नीला / काला (Navy Blue)",
    luckyNumber: 8,
    luckyDay: "शनिवार (Saturday)",
    overallPred: "कठोर तपस्या और कर्तव्यपरायणता से सफलता का दिन।"
  },
  Aquarius: {
    rashi: "Aquarius",
    hindiName: "कुंभ राशि",
    lord: "शनि (Saturn)",
    element: "वायु (Air)",
    career: "तकनीक, नवाचार (Innovation) और सामाजिक कार्यों में नई पहचान। बड़े प्रोजेक्ट्स का नेतृत्व।",
    finance: "मित्रों और नेटवर्क के सहयोग से धन लाभ। सामाजिक उपक्रमों में लाभ।",
    health: "पैरों और तंत्रिका तंत्र का ध्यान रखें। पर्याप्त नींद अवश्य लें।",
    relationships: "मित्र मंडली का दायरा बढ़ेगा। समान विचारधारा वाले लोगों से मुलाकात होगी।",
    personal: "आपकी स्वतंत्र और प्रगतिशील सोच समाज को नई दिशा देगी।",
    luckyColor: "आसमानी / जामुनी (Purple / Cyan)",
    luckyNumber: 8,
    luckyDay: "शनिवार (Saturday)",
    overallPred: "नवाचार, मानवीय दृष्टिकोण और सामाजिक लाभ का दिन।"
  },
  Pisces: {
    rashi: "Pisces",
    hindiName: "मीन राशि",
    lord: "गुरु (Jupiter)",
    element: "जल (Water)",
    career: "आध्यात्म, कला, चिकित्सा और विदेश से जुड़े कार्यों में यश। सेवा भाव से मान-सम्मान बढ़ेगा।",
    finance: "दान-पुण्य और शुभ कार्यों पर व्यय। विदेश से धन लाभ के योग।",
    health: "पैरों और अनिद्रा का ख्याल रखें। रात्रि में ध्यान (Meditation) करें।",
    relationships: "सच्चे प्रेम और करुणा की अनुभूति होगी। साथी के प्रति पूर्ण समर्पण रहेगा।",
    personal: "ईश्वर में अटूट विश्वास और परोपकार से मन प्रसन्न रहेगा।",
    luckyColor: "केसरिया / सुनहरा (Saffron / Gold)",
    luckyNumber: 3,
    luckyDay: "गुरुवार (Thursday)",
    overallPred: "आध्यात्मिक आनंद, करुणा और मोक्ष मार्ग का शुभ दिन।"
  }
}

export function generateRashifal(rashiInput: string, date: Date = new Date()): RashiForecast {
  const clean = rashiInput.trim()
  const key = Object.keys(RASHIFAL_DATA).find(
    k => k.toLowerCase() === clean.toLowerCase() || 
         RASHIFAL_DATA[k].hindiName.includes(clean)
  ) || "Aries"

  return RASHIFAL_DATA[key]
}

export function generateRashifalReport(r: RashiForecast): string {
  return `
दिव्य दृष्टि दैनिक राशिफल (Daily Horoscope)
=================================================
राशि: ${r.hindiName} (${r.rashi})
स्वामी ग्रह: ${r.lord} | तत्व: ${r.element}
तारीख: ${new Date().toLocaleDateString("hi-IN")}

१. जीवन के मुख्य क्षेत्र:
- करियर व व्यवसाय: ${r.career}
- वित्त व समृद्धि: ${r.finance}
- स्वास्थ्य व ऊर्जा: ${r.health}
- प्रेम व दांपत्य: ${r.relationships}
- व्यक्तिगत विकास: ${r.personal}

२. शुभ तत्व (Auspicious Elements):
- भाग्यशाली रंग: ${r.luckyColor}
- भाग्यशाली अंक: ${r.luckyNumber}
- भाग्यशाली वार: ${r.luckyDay}

३. समग्र निष्कर्ष:
"${r.overallPred}"
`
}
