/**
 * 16-Zone MahaVastu Shastra Compliance Engine
 */

export interface VastuZone {
  id: string
  name: string
  element: string
  deity: string
  attributes: string
  idealFor: string[]
  badFor: string[]
}

export const VASTU_ZONES: VastuZone[] = [
  { id: "N", name: "उत्तर (North)", element: "जल (Water)", deity: "कुबेर", attributes: "धन आगमन व नए अवसर", idealFor: ["मुख्य द्वार", "तिजोरी", "बैठक"], badFor: ["शौचालय", "रसोई", "लाल रंग"] },
  { id: "NNE", name: "उत्तर-उत्तर-पूर्व (NNE)", element: "जल (Water)", deity: "धन्वंतरि", attributes: "स्वास्थ्य व रोग प्रतिरोधक क्षमता", idealFor: ["दवाइयां", "विश्राम", "योग"], badFor: ["शौचालय", "कचरा"] },
  { id: "NE", name: "ईशान (North-East)", element: "जल (Water)", deity: "भगवान शिव", attributes: "दिव्य स्पष्टता व ध्यान", idealFor: ["पूजा घर (Mandir)", "खुला स्थान"], badFor: ["शौचालय", "रसोई", "सीढ़ियां"] },
  { id: "ENE", name: "पूर्व-उत्तर-पूर्व (ENE)", element: "वायु (Air)", deity: "इंद्र", attributes: "आनंद व ताजगी", idealFor: ["लिविंग रूम", "हॉबी रूम"], badFor: ["शौचालय"] },
  { id: "E", name: "पूर्व (East)", element: "वायु (Air)", deity: "सूर्य देव", attributes: "सामाजिक प्रतिष्ठा व नेटवर्किंग", idealFor: ["मुख्य द्वार", "अध्ययन"], badFor: ["शौचालय", "कबाड़"] },
  { id: "ESE", name: "पूर्व-दक्षिण-पूर्व (ESE)", element: "वायु (Air)", deity: "पूषा", attributes: "मंथन व निर्णय क्षमता", idealFor: ["शोध", "चिंतन"], badFor: ["शयनकक्ष"] },
  { id: "SE", name: "आग्नेय (South-East)", element: "अग्नि (Fire)", deity: "अग्नि देव", attributes: "धन की तरलता व ऊर्जा", idealFor: ["रसोई (Kitchen)", "विद्युत उपकरण"], badFor: ["जल स्रोत", "बेडरूम"] },
  { id: "SSE", name: "दक्षिण-दक्षिण-पूर्व (SSE)", element: "अग्नि (Fire)", deity: "यम", attributes: "आत्मविश्वास व शारीरिक बल", idealFor: ["जिम", "सक्रिय कार्य"], badFor: ["शौचालय"] },
  { id: "S", name: "दक्षिण (South)", element: "अग्नि (Fire)", deity: "यमराज", attributes: "यश, नाम व विश्राम", idealFor: ["शयनकक्ष", "कार्यालय"], badFor: ["जल भराव", "पूजा घर"] },
  { id: "SSW", name: "दक्षिण-दक्षिण-पश्चिम (SSW)", element: "पृथ्वी (Earth)", deity: "गंधर्व", attributes: "विसर्जन व अपव्यय", idealFor: ["शौचालय", "कचरा"], badFor: ["मुख्य द्वार", "तिजोरी", "बेडरूम"] },
  { id: "SW", name: "नैऋत्य (South-West)", element: "पृथ्वी (Earth)", deity: "पितृ / निरृति", attributes: "स्थिरता, संबंध व दक्षता", idealFor: ["मास्टर बेडरूम", "मुखिया का कमरा"], badFor: ["शौचालय", "पूजा घर", "गड्ढा"] },
  { id: "WSW", name: "पश्चिम-दक्षिण-पश्चिम (WSW)", element: "अंतरिक्ष (Space)", deity: "दौवारिक", attributes: "विद्या व बचत", idealFor: ["स्टडी रूम", "बच्चों का कमरा"], badFor: ["शौचालय"] },
  { id: "W", name: "पश्चिम (West)", element: "अंतरिक्ष (Space)", deity: "वरुण देव", attributes: "प्राप्ति व व्यापारिक लाभ", idealFor: ["तिजोरी", "भोजन कक्ष"], badFor: ["गंदगी", "अग्नि"] },
  { id: "WNW", name: "पश्चिम-उत्तर-पश्चिम (WNW)", element: "अंतरिक्ष (Space)", deity: "रुद्र", attributes: "भावनात्मक अवसाद से मुक्ति", idealFor: ["शौचालय", "डिटॉक्स एरिया"], badFor: ["बेडरूम"] },
  { id: "NW", name: "वायव्य (North-West)", element: "वायु (Air)", deity: "वायु देव", attributes: "सहयोग व बैंकिंग", idealFor: ["अतिथि कक्ष", "स्टोर"], badFor: ["मास्टर बेडरूम"] },
  { id: "NNW", name: "उत्तर-उत्तर-पश्चिम (NNW)", element: "जल (Water)", deity: "सोम", attributes: "आकर्षण व दांपत्य सुख", idealFor: ["दंपत्ति का शयनकक्ष"], badFor: ["शौचालय"] }
]

export function analyzeVastu(roomType: string, direction: string) {
  const zone = VASTU_ZONES.find(z => z.id === direction) || VASTU_ZONES[0]
  
  let score = 7
  let rating = "अनुकूल (Favorable)"
  let recommendation = ""
  let remedy = ""

  const isMandir = roomType.toLowerCase().includes("mandir") || roomType.toLowerCase().includes("pooja")
  const isKitchen = roomType.toLowerCase().includes("kitchen") || roomType.toLowerCase().includes("rasoi")
  const isBedroom = roomType.toLowerCase().includes("bedroom") || roomType.toLowerCase().includes("master")
  const isToilet = roomType.toLowerCase().includes("toilet") || roomType.toLowerCase().includes("washroom")
  const isLocker = roomType.toLowerCase().includes("locker") || roomType.toLowerCase().includes("tijori")

  if (isMandir) {
    if (["NE", "N", "E"].includes(zone.id)) {
      score = 10; rating = "सर्वोत्तम (Best)"; recommendation = "ईशान/उत्तर/पूर्व में पूजा घर आध्यात्मिक ऊर्जा और मानसिक शांति को चरम पर ले जाता है।"
    } else if (["S", "SW", "SE"].includes(zone.id)) {
      score = 3; rating = "अत्यंत दोषपूर्ण (Severe Defect)"; recommendation = "दक्षिण या नैऋत्य में पूजा घर मानसिक तनाव और कलह उत्पन्न करता है।"
      remedy = "पूजा स्थल पर पीला या हल्का क्रीम कपड़ा बिछाएं और गंगाजल का नियमित छिड़काव करें।"
    }
  } else if (isKitchen) {
    if (["SE", "SSE"].includes(zone.id)) {
      score = 10; rating = "सर्वोत्तम (Best)"; recommendation = "आग्नेय कोण रसोई का प्राकृतिक स्थान है, अन्नपूर्णा की कृपा बनी रहती है।"
    } else if (["NE", "N"].includes(zone.id)) {
      score = 2; rating = "अग्नि-जल महादोष"; recommendation = "ईशान कोण (जल) में चूल्हा जलने से धन हानि और स्वास्थ्य विकार होते हैं।"
      remedy = "चूल्हे के नीचे हरा मार्बल या वड़ोदरा ग्रीन स्टोन का स्लैब रखें, इससे अग्नि-जल का द्वंद्व शांत होता है।"
    }
  } else if (isBedroom) {
    if (["SW", "S"].includes(zone.id)) {
      score = 9.5; rating = "अति उत्तम (Best)"; recommendation = "नैऋत्य कोण में शयनकक्ष परिवार के मुखिया को स्थिरता, निर्णय क्षमता और सम्मान देता है।"
    } else if (["ESE", "WNW"].includes(zone.id)) {
      score = 4; rating = "तनावपूर्ण (Restless Sleep)"; recommendation = "इस दिशा में सोने से लगातार अत्यधिक चिंता और अनिद्रा रहती है।"
      remedy = "बिस्तर की दिशा बदलें और कमरे में सुगंधित कपूर या लैवेंडर का प्रयोग करें।"
    }
  } else if (isToilet) {
    if (["SSW", "WNW", "ESE"].includes(zone.id)) {
      score = 10; rating = "उत्तम विसर्जन (Ideal)"; recommendation = "विसर्जन क्षेत्र में शौचालय नकारात्मक ऊर्जा को घर से बाहर निकालता है।"
    } else if (["NE", "N"].includes(zone.id)) {
      score = 1; rating = "गंभीर महावास्तु दोष"; recommendation = "ईशान या उत्तर में शौचालय नए अवसरों और स्वास्थ्य में भयंकर रुकावट डालता है।"
      remedy = "टॉयलेट सीट के चारों ओर फर्श पर तांबे (Copper) या नीले रंग की पट्टी लगाएं और कांच के कटोरे में समुद्री नमक रखें।"
    }
  } else if (isLocker) {
    if (["N", "W"].includes(zone.id)) {
      score = 10; rating = "कुबेर स्थान (Prosperity)"; recommendation = "उत्तर दिशा कुबेर देव का स्थान है, तिजोरी का द्वार उत्तर में खुलना अत्यंत शुभ है।"
    }
  }

  const positives = [
    `यह क्षेत्र '${zone.element}' तत्व और '${zone.deity}' से संबंधित है।`,
    `इस दिशा की मूल शक्ति: ${zone.attributes}।`
  ]

  const recommendations = [
    recommendation || `इस कमरे को स्वच्छ और व्यवस्थित रखें ताकि सकारात्मक ऊर्जा का प्रवाह बना रहे।`,
    remedy ? `विशेष उपचार: ${remedy}` : `इस दिशा के लिए शुभ रंग: ${zone.element.includes("जल") ? "हल्का नीला / सफेद" : zone.element.includes("अग्नि") ? "हल्का लाल / गुलाबी" : "क्रीम / पीला"}।`
  ]

  return {
    roomType,
    direction: zone.name,
    zoneId: zone.id,
    element: zone.element,
    score,
    rating,
    positives,
    negatives: score < 5 ? ["दिशा का तत्व कमरे के प्रयोजन से मेल नहीं खा रहा है।"] : [],
    recommendations,
    remedy
  }
}

export function generateVastuReport(analysis: any): string {
  return `
दिव्य दृष्टि वास्तु शास्त्र मूल्यांकन रिपोर्ट
=================================================
कमरा/स्थान: ${analysis.roomType}
दिशा: ${analysis.direction} (${analysis.element} तत्व)
वास्तु स्कोर: ${analysis.score}/10 [${analysis.rating}]

१. सकारात्मक पहलू:
${analysis.positives.map((p: string) => `- ${p}`).join("\n")}

२. वास्तु सुझाव व उपाय:
${analysis.recommendations.map((r: string, i: number) => `${i + 1}. ${r}`).join("\n")}
`
}
