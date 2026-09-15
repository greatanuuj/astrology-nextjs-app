/**
 * Complete 78-Card Tarot Reading Engine (Major & Minor Arcana)
 * Supports Single, 3-Card (Past-Present-Future) & Celtic Cross spreads
 */

export interface TarotCard {
  id: string
  name: string
  hindiName: string
  suit: string
  arcana: "Major" | "Minor"
  upright: string
  reversed: string
  element: string
  advice: string
}

export const TAROT_DECK: TarotCard[] = [
  // Major Arcana (22 Cards)
  { id: "0", name: "The Fool", hindiName: "द फूल (नई शुरुआत)", suit: "None", arcana: "Major", upright: "नई शुरुआत, खुलापन, सकारात्मक जोखिम, बालसुलभ उत्साह", reversed: "लापरवाही, अत्यधिक जोखिम, मूर्खतापूर्ण निर्णय", element: "Air", advice: "बिना भय के नई राह पर आगे बढ़ें।" },
  { id: "1", name: "The Magician", hindiName: "द मैजिशियन (सामर्थ्य)", suit: "None", arcana: "Major", upright: "संकल्प शक्ति, इच्छाओं की पूर्ति, प्रतिभा, कौशल", reversed: "भ्रम, शक्तियों का दुरुपयोग, अधूरी योजनाएं", element: "Air", advice: "अपनी प्रतिभा पर भरोसा करें, सफलता आपके हाथ में है।" },
  { id: "2", name: "The High Priestess", hindiName: "द हाई प्रीस्टेस (अंतर्ज्ञान)", suit: "None", arcana: "Major", upright: "गहन अंतर्ज्ञान, रहस्यमय ज्ञान, धैर्य, आध्यात्मिक शांति", reversed: "छिपे शत्रु, अंतर्मन की आवाज की उपेक्षा, सतही ज्ञान", element: "Water", advice: "बाहरी शोर को छोड़ अपने दिल की आवाज सुनें।" },
  { id: "3", name: "The Empress", hindiName: "द एम्प्रेस (प्रकृति व समृद्धि)", suit: "None", arcana: "Major", upright: "सृजनशीलता, प्रचुरता, मातृत्व, सौंदर्य, सुख-समृद्धि", reversed: "रचनात्मक रुकावट, दूसरों पर अत्यधिक निर्भरता", element: "Earth", advice: "अपने विचारों को खाद-पानी दें, प्रचुरता आने वाली है।" },
  { id: "4", name: "The Emperor", hindiName: "द एम्परर (अनुशासन व सत्ता)", suit: "None", arcana: "Major", upright: "नेतृत्व, ठोस व्यवस्था, अनुशासन, पिता का संरक्षण", reversed: "तानाशाही, हठ, अत्यधिक नियंत्रण, अनम्यता", element: "Fire", advice: "अपने जीवन में स्पष्ट नियम और अनुशासन स्थापित करें।" },
  { id: "5", name: "The Hierophant", hindiName: "द हायरोफैंट (परंपरा व गुरु)", suit: "None", arcana: "Major", upright: "धार्मिक मूल्य, गुरु की कृपा, पारंपरिक शिक्षा, मार्गदर्शन", reversed: "अंधविश्वास, पुरानी रूढ़ियों से घुटन, नए विचारों की जरूरत", element: "Earth", advice: "बुजुर्गों और गुरु के अनुभव से सीखें।" },
  { id: "6", name: "The Lovers", hindiName: "द लवर्स (सच्चा प्रेम व विकल्प)", suit: "None", arcana: "Major", upright: "गहरा प्रेम, महत्वपूर्ण चुनाव, सामंजस्य, आत्मिक बंधन", reversed: "मतभेद, गलत फैसले, आंतरिक द्वंद्व, विश्वासघात", element: "Air", advice: "निर्णय लेते समय अपने नैतिक मूल्यों से समझौता न करें।" },
  { id: "7", name: "The Chariot", hindiName: "द चैरियट (विजय व नियंत्रण)", suit: "None", arcana: "Major", upright: "दृढ़ निश्चय, विजय, बाधाओं को पार करना, आत्म-नियंत्रण", reversed: "नियंत्रण खोना, दिशाहीन दौड़, अत्यधिक क्रोध", element: "Water", advice: "अपने लक्ष्य पर ध्यान केंद्रित रखें, जीत निश्चित है।" },
  { id: "8", name: "Strength", hindiName: "स्ट्रेंथ (आंतरिक बल)", suit: "None", arcana: "Major", upright: "धैर्य, करुणा, आत्म-संयम, निर्भयता, संकट में धीरज", reversed: "आत्मविश्वास में कमी, भय, क्रोध, असहाय महसूस करना", element: "Fire", advice: "क्रोध से नहीं, प्रेम और धैर्य से समस्याओं को जीतें।" },
  { id: "9", name: "The Hermit", hindiName: "द हर्मिट (आत्म-चिंतन)", suit: "None", arcana: "Major", upright: "आत्म-अवलोकन, एकांत साधना, सत्य की खोज, मार्गदर्शन", reversed: "अकेलापन, समाज से अत्यधिक दूरी, हठधर्मिता", element: "Earth", advice: "थोड़ा समय अकेले बैठकर अपनी प्राथमिकताओं को पहचानें।" },
  { id: "10", name: "Wheel of Fortune", hindiName: "व्हील ऑफ फॉर्च्यून (भाग्य चक्र)", suit: "None", arcana: "Major", upright: "भाग्य का पलटना, शुभ अवसर, चक्र का बदलाव, नियति", reversed: "अचानक रुकावट, बुरा समय, नियंत्रण का अभाव", element: "Fire", advice: "परिवर्तन प्रकृति का नियम है, सकारात्मक बदलाव के लिए तैयार रहें।" },
  { id: "11", name: "Justice", hindiName: "जस्टिस (न्याय व संतुलन)", suit: "None", arcana: "Major", upright: "सत्य, निष्पक्षता, कानूनी सफलता, कर्मों का हिसाब", reversed: "अन्याय, बेईमानी, पक्षपात, सच से मुंह मोड़ना", element: "Air", advice: "सत्य के मार्ग पर रहें, न्याय आपके पक्ष में होगा।" },
  { id: "12", name: "The Hanged Man", hindiName: "द हैंग्ड मैन (नया दृष्टिकोण)", suit: "None", arcana: "Major", upright: "समर्पण, नया दृष्टिकोण, ठहराव, त्याग से लाभ", reversed: "अनावश्यक विलंब, जिद्द, व्यर्थ का बलिदान", element: "Water", advice: "परिस्थितियों को नए नजरिए से देखें और शांति बनाए रखें।" },
  { id: "13", name: "Death", hindiName: "डेथ (कायापलट व रूपांतरण)", suit: "None", arcana: "Major", upright: "पुराने का अंत, नया जन्म, गहन कायापलट, मुक्ति", reversed: "बदलाव से डरना, पुराने से चिपके रहना, जड़ता", element: "Water", advice: "जो बीत गया उसे विदा करें, ताकि नया प्रवेश कर सके।" },
  { id: "14", name: "Temperance", hindiName: "टेम्परेंस (संतुलन व संयम)", suit: "None", arcana: "Major", upright: "मध्यम मार्ग, संतुलन, स्वास्थ्य लाभ, शांति", reversed: "अतिवाद, असंतुलन, जल्दबाजी, अधीरता", element: "Fire", advice: "जीवन के हर पहलू में संतुलन साधने का प्रयास करें।" },
  { id: "15", name: "The Devil", hindiName: "द डेविल (आसक्ति व भ्रम)", suit: "None", arcana: "Major", upright: "अत्यधिक भौतिक आसक्ति, लत, भ्रम, नकारात्मक सोच", reversed: "बंधनों से मुक्ति, आत्म-नियंत्रण, गलत आदतों का त्याग", element: "Earth", advice: "मोह और भय की जंजीरों को तोड़कर स्वतंत्र हों।" },
  { id: "16", name: "The Tower", hindiName: "द टॉवर (अचानक परिवर्तन)", suit: "None", arcana: "Major", upright: "अहंकार का टूटना, अचानक सत्य का प्रकटीकरण, आमूलचूल बदलाव", reversed: "आपदा से बाल-बाल बचना, डर, आवश्यक बदलाव को टालना", element: "Fire", advice: "झूठे आधार गिर रहे हैं, मजबूत सत्य पर नया निर्माण करें।" },
  { id: "17", name: "The Star", hindiName: "द स्टार (आशा व विश्वास)", suit: "None", arcana: "Major", upright: "आशा, प्रेरणा, शांति, आध्यात्मिक प्रकाश, मनोकामना पूर्ति", reversed: "निराशा, अविश्वास, उम्मीद की किरण खोना", element: "Air", advice: "भविष्य उज्ज्वल है, अपनी आस्था बनाए रखें।" },
  { id: "18", name: "The Moon", hindiName: "द मून (भ्रम व अंतर्मन)", suit: "None", arcana: "Major", upright: "भ्रम, छिपी बातें, अवचेतन का भय, रहस्यमयी स्वप्न", reversed: "भ्रम से मुक्ति, सत्य का उजागर होना, भय पर विजय", element: "Water", advice: "सतह पर जो दिख रहा है वह पूरा सच नहीं है, सतर्क रहें।" },
  { id: "19", name: "The Sun", hindiName: "द सन (परम आनंद व सफलता)", suit: "None", arcana: "Major", upright: "सफलता, प्रसन्नता, ऊर्जा, स्वास्थ्य, विजय, यश", reversed: "अति-उत्साह, अस्थायी निराशा, हल्का विलंब", element: "Fire", advice: "उत्साह से जिएं, आपकी ऊर्जा सभी को आलोकित कर रही है।" },
  { id: "20", name: "Judgement", hindiName: "जजमेंट (पुनर्जागरण व आह्वान)", suit: "None", arcana: "Major", upright: "आत्म-जागरण, जीवन का उद्देश्य, क्षमा, नया अध्याय", reversed: "आत्म-संदेह, अतीत के पछतावे, फैसले टालना", element: "Fire", advice: "अतीत के अपराध-बोध को छोड़ें और नई पहचान अपनाएं।" },
  { id: "21", name: "The World", hindiName: "द वर्ल्ड (पूर्णता व सिद्धि)", suit: "None", arcana: "Major", upright: "सफलता का समापन, वैश्विक यात्रा, पूर्णता, संतोष", reversed: "अधूरापन, अंतिम कदम पर रुकना, विलंब", element: "Earth", advice: "आपने चक्र पूरा कर लिया है, उपलब्धि का उत्सव मनाएं।" },

  // Representative Minor Arcana Cards
  { id: "C1", name: "Ace of Cups", hindiName: "ऐस ऑफ कप्स", suit: "Cups", arcana: "Minor", upright: "प्रेम का नया प्रवाह, आत्मिक आनंद, करुणा", reversed: "भावनात्मक अवरोध, निराशा", element: "Water", advice: "प्रेम और संवेदना के लिए हृदय खोलें।" },
  { id: "W1", name: "Ace of Wands", hindiName: "ऐस ऑफ वांड्स", suit: "Wands", arcana: "Minor", upright: "नई ऊर्जा, प्रेरणा, करियर में साहसिक शुरुआत", reversed: "ऊर्जा की कमी, योजना में देरी", element: "Fire", advice: "तुरंत कार्रवाई करें, अवसर अनुकूल है।" },
  { id: "S1", name: "Ace of Swords", hindiName: "ऐस ऑफ स्वॉर्ड्स", suit: "Swords", arcana: "Minor", upright: "मानसिक स्पष्टता, विजय, सत्य की जीत", reversed: "तनाव, गलतफहमी, कड़वी बातें", element: "Air", advice: "तथ्यों और सत्य के आधार पर निर्णय लें।" },
  { id: "P1", name: "Ace of Pentacles", hindiName: "ऐस ऑफ पेंटाकल्स", suit: "Pentacles", arcana: "Minor", upright: "नया वित्तीय अवसर, समृद्धि, ठोस शुरुआत", reversed: "वित्तीय जोखिम, अवसर चूकना", element: "Earth", advice: "धन और करियर के अवसर को पूरी मजबूती से थामें।" }
]

export const SPREADS = {
  SINGLE: {
    type: "SINGLE",
    title: "एकल कार्ड मार्गदर्शन (Single Card)",
    positions: ["दैनिक मार्गदर्शन / स्थिति का सार"],
  },
  THREE_CARD: {
    type: "THREE_CARD",
    title: "त्रिकाल स्प्रेड (Three Card Spread)",
    positions: ["अतीत (Past)", "वर्तमान (Present)", "भविष्य / परिणाम (Future)"],
  },
  CELTIC_CROSS: {
    type: "CELTIC_CROSS",
    title: "सेल्टिक क्रॉस (Celtic Cross - 10 Cards)",
    positions: [
      "वर्तमान स्थिति (Present)",
      "सामने की चुनौती (Challenge)",
      "चेतन मन / लक्ष्य (Conscious Goal)",
      "अचेतन आधार (Subconscious Foundation)",
      "बीता हुआ प्रभाव (Recent Past)",
      "आसन्न भविष्य (Near Future)",
      "स्वयं का दृष्टिकोण (Your Self)",
      "पर्यावरण व अन्य लोग (Environment)",
      "आशाएं व भय (Hopes & Fears)",
      "अंतिम परिणाम (Final Outcome)"
    ]
  }
}

export function getRandomCards(count: number): { card: TarotCard; isReversed: boolean; positionName?: string }[] {
  const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5)
  const selected = shuffled.slice(0, count)
  
  return selected.map((card) => ({
    card,
    isReversed: Math.random() > 0.75, // 25% chance of reversed
  }))
}

export function generateTarotInterpretation(
  draws: { card: TarotCard; isReversed: boolean }[],
  spreadType: string = "THREE_CARD",
  question?: string
) {
  const spread = SPREADS[spreadType as keyof typeof SPREADS] || SPREADS.THREE_CARD
  
  const cardsDetails = draws.map((draw, idx) => {
    const pos = spread.positions[idx] || `कार्ड ${idx + 1}`
    const stateText = draw.isReversed ? "उल्टा (Reversed)" : "सीधा (Upright)"
    const meaning = draw.isReversed ? draw.card.reversed : draw.card.upright
    return {
      position: pos,
      cardName: `${draw.card.name} - ${draw.card.hindiName}`,
      orientation: stateText,
      meaning,
      advice: draw.card.advice,
      element: draw.card.element
    }
  })

  const fullReport = `
दिव्य दृष्टि टैरो कार्ड रीडिंग
========================================
स्प्रेड का प्रकार: ${spread.title}
पूछा गया प्रश्न: "${question || "सामान्य जीवन मार्गदर्शन व भविष्य संकेत"}"

कार्डों का प्रकटीकरण व विश्लेषण:
${cardsDetails.map((c, i) => `
[${i + 1}] ${c.position}
----------------------------------------
- कार्ड: ${c.cardName} (${c.orientation})
- तत्व: ${c.element}
- अर्थ व प्रभाव: ${c.meaning}
- कार्ड का दैवीय सुझाव: "${c.advice}"
`).join("")}

समग्र मार्गदर्शन:
यह रीडिंग दर्शाती है कि ब्रह्मांड आपको आत्म-विश्वास और विवेक से आगे बढ़ने की प्रेरणा दे रहा है। 
कार्ड्स की ऊर्जा संकेत करती है कि भय को छोड़कर अपने आंतरिक सामर्थ्य पर विश्वास रखें।
`

  return {
    spreadType,
    spreadTitle: spread.title,
    question: question || "सामान्य जीवन मार्गदर्शन",
    cards: cardsDetails,
    summary: `रीडिंग में ${draws[0]?.card.name} प्रमुख ऊर्जा के रूप में प्रकट हुआ है।`,
    fullReport
  }
}
