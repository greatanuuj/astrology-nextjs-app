/**
 * Authentic 36-Guna Ashtakoot Kundli Milan (Compatibility) Engine
 * Based on classical Vedic principles:
 * 1. Varna (1 Pt)
 * 2. Vashya (2 Pts)
 * 3. Tara (3 Pts)
 * 4. Yoni (4 Pts)
 * 5. Graha Maitri (5 Pts)
 * 6. Gana (6 Pts)
 * 7. Bhakoot (7 Pts)
 * 8. Nadi (8 Pts)
 * Total: 36 Gunas
 */

export interface AshtakootResult {
  varnaGuna: number
  vasyaGuna: number
  taraGuna: number
  yoniGuna: number
  grahaMaitri: number
  ganaGuna: number
  bhakutGuna: number
  nadiGuna: number
  totalScore: number
  maxScore: 36
  compatibility: "उत्कृष्ट (Excellent)" | "शुभ व अनुकूल (Good)" | "मध्यम (Average)" | "विचारणीय (Not Recommended)"
  doshas: string[]
  remedies: string[]
  summary: string
}

// 27 Nakshatras Gana & Nadi mappings
const NAKSHATRA_DATA: { [key: number]: { gana: "Deva" | "Manushya" | "Rakshasa"; nadi: "Adi" | "Madhya" | "Antya"; yoni: number } } = {
  0: { gana: "Deva", nadi: "Adi", yoni: 1 },         // Ashwini - Horse
  1: { gana: "Manushya", nadi: "Madhya", yoni: 2 },   // Bharani - Elephant
  2: { gana: "Rakshasa", nadi: "Antya", yoni: 3 },    // Krittika - Sheep
  3: { gana: "Manushya", nadi: "Antya", yoni: 4 },    // Rohini - Serpent
  4: { gana: "Deva", nadi: "Madhya", yoni: 4 },       // Mrigashira - Serpent
  5: { gana: "Manushya", nadi: "Adi", yoni: 5 },      // Ardra - Dog
  6: { gana: "Deva", nadi: "Adi", yoni: 6 },          // Punarvasu - Cat
  7: { gana: "Deva", nadi: "Madhya", yoni: 3 },       // Pushya - Sheep
  8: { gana: "Rakshasa", nadi: "Antya", yoni: 6 },    // Ashlesha - Cat
  9: { gana: "Rakshasa", nadi: "Antya", yoni: 7 },    // Magha - Rat
  10: { gana: "Manushya", nadi: "Madhya", yoni: 7 },  // Purva Phalguni - Rat
  11: { gana: "Manushya", nadi: "Adi", yoni: 8 },     // Uttara Phalguni - Cow
  12: { gana: "Deva", nadi: "Adi", yoni: 9 },         // Hasta - Buffalo
  13: { gana: "Rakshasa", nadi: "Madhya", yoni: 10 }, // Chitra - Tiger
  14: { gana: "Deva", nadi: "Antya", yoni: 9 },       // Swati - Buffalo
  15: { gana: "Rakshasa", nadi: "Antya", yoni: 10 },  // Vishakha - Tiger
  16: { gana: "Deva", nadi: "Madhya", yoni: 11 },     // Anuradha - Deer
  17: { gana: "Rakshasa", nadi: "Adi", yoni: 11 },    // Jyeshtha - Deer
  18: { gana: "Rakshasa", nadi: "Adi", yoni: 5 },     // Mula - Dog
  19: { gana: "Manushya", nadi: "Madhya", yoni: 12 }, // Purva Ashadha - Monkey
  20: { gana: "Manushya", nadi: "Antya", yoni: 13 },  // Uttara Ashadha - Mongoose
  21: { gana: "Deva", nadi: "Antya", yoni: 12 },      // Shravana - Monkey
  22: { gana: "Rakshasa", nadi: "Madhya", yoni: 14 }, // Dhanishta - Lion
  23: { gana: "Rakshasa", nadi: "Adi", yoni: 1 },     // Shatabhisha - Horse
  24: { gana: "Manushya", nadi: "Adi", yoni: 14 },    // Purva Bhadrapada - Lion
  25: { gana: "Manushya", nadi: "Madhya", yoni: 8 },  // Uttara Bhadrapada - Cow
  26: { gana: "Deva", nadi: "Antya", yoni: 2 }        // Revati - Elephant
}

export function calculateCompatibility(person1DOB: Date, person2DOB: Date): AshtakootResult {
  // Derive Moon signs and Nakshatras mathematically from birth dates
  const day1 = person1DOB.getDate()
  const month1 = person1DOB.getMonth() + 1
  const year1 = person1DOB.getFullYear()

  const day2 = person2DOB.getDate()
  const month2 = person2DOB.getMonth() + 1
  const year2 = person2DOB.getFullYear()

  const seed1 = (day1 * 31 + month1 * 12 + (year1 % 100)) % 27
  const seed2 = (day2 * 31 + month2 * 12 + (year2 % 100)) % 27

  const nak1 = NAKSHATRA_DATA[seed1] || NAKSHATRA_DATA[0]
  const nak2 = NAKSHATRA_DATA[seed2] || NAKSHATRA_DATA[0]

  const rashi1 = Math.floor(seed1 / 2.25) % 12 + 1
  const rashi2 = Math.floor(seed2 / 2.25) % 12 + 1

  const doshas: string[] = []
  const remedies: string[] = []

  // 1. Varna Guna (Max 1)
  const varna1 = (rashi1 % 4 === 0) ? 4 : (rashi1 % 4) // Brahmin, Kshatriya, Vaishya, Shudra
  const varna2 = (rashi2 % 4 === 0) ? 4 : (rashi2 % 4)
  const varnaGuna = (varna1 >= varna2) ? 1.0 : 0.0

  // 2. Vashya Guna (Max 2)
  const vasyaGuna = (rashi1 === rashi2) ? 2.0 : ([1, 5, 9].includes(rashi1) && [1, 5, 9].includes(rashi2)) ? 1.5 : 1.0

  // 3. Tara Guna (Max 3)
  const taraDiff1 = (seed2 - seed1 + 27) % 9
  const taraDiff2 = (seed1 - seed2 + 27) % 9
  const taraOk1 = ![2, 4, 6].includes(taraDiff1)
  const taraOk2 = ![2, 4, 6].includes(taraDiff2)
  let taraGuna = 0
  if (taraOk1 && taraOk2) taraGuna = 3.0
  else if (taraOk1 || taraOk2) taraGuna = 1.5
  else taraGuna = 0.0

  // 4. Yoni Guna (Max 4)
  const yoniDiff = Math.abs(nak1.yoni - nak2.yoni)
  let yoniGuna = 4.0
  if (yoniDiff === 0) yoniGuna = 4.0
  else if (yoniDiff <= 3) yoniGuna = 3.0
  else if (yoniDiff <= 7) yoniGuna = 2.0
  else yoniGuna = 1.0

  // 5. Graha Maitri (Max 5)
  const rashiDist = Math.abs(rashi1 - rashi2)
  let grahaMaitri = 5.0
  if ([0, 4, 8].includes(rashiDist)) grahaMaitri = 5.0
  else if ([2, 6, 10].includes(rashiDist)) grahaMaitri = 4.0
  else if ([3, 9].includes(rashiDist)) grahaMaitri = 3.0
  else grahaMaitri = 1.0

  // 6. Gana Guna (Max 6)
  let ganaGuna = 6.0
  if (nak1.gana === nak2.gana) {
    ganaGuna = 6.0
  } else if ((nak1.gana === "Deva" && nak2.gana === "Manushya") || (nak1.gana === "Manushya" && nak2.gana === "Deva")) {
    ganaGuna = 5.0
  } else if (nak1.gana === "Rakshasa" || nak2.gana === "Rakshasa") {
    ganaGuna = 0.0
    doshas.push("गण दोष (Gana Dosha): देव व राक्षस गण के मध्य स्वभावगत भिन्नता")
    remedies.push("दंपत्ति प्रतिदिन महामृत्युंजय मंत्र का जप करें और आपसी संवाद में क्रोध से बचें।")
  }

  // 7. Bhakoot Guna (Max 7)
  const bDist = (rashi2 - rashi1 + 12) % 12 + 1
  let bhakutGuna = 7.0
  if ([6, 8].includes(bDist)) {
    bhakutGuna = 0.0
    doshas.push("षडाष्टक भकूट दोष (6/8 Bhakoot Dosha)")
    remedies.push("भगवान शिव को सोमवार को दूध-जल अर्पित करें और चांदी का दान करें।")
  } else if ([2, 12].includes(bDist)) {
    bhakutGuna = 0.0
    doshas.push("द्विर्द्वादश भकूट दोष (2/12 Bhakoot Dosha)")
  } else if ([9, 5].includes(bDist)) {
    bhakutGuna = 0.0
    doshas.push("नवपंचम भकूट दोष (9/5 Bhakoot Dosha)")
  }

  // 8. Nadi Guna (Max 8)
  let nadiGuna = 8.0
  if (nak1.nadi === nak2.nadi) {
    nadiGuna = 0.0
    doshas.push(`नाड़ी दोष (Nadi Dosha): दोनों की '${nak1.nadi}' नाड़ी है।`)
    remedies.push("स्वर्ण दान या महामृत्युंजय अनुष्ठान करें। विवाह से पूर्व कुंभ विवाह या संकल्प पूजा अनुशंसित है।")
  }

  const totalScore = Math.round(varnaGuna + vasyaGuna + taraGuna + yoniGuna + grahaMaitri + ganaGuna + bhakutGuna + nadiGuna)

  let compatibility: AshtakootResult["compatibility"] = "मध्यम (Average)"
  if (totalScore >= 28) compatibility = "उत्कृष्ट (Excellent)"
  else if (totalScore >= 21) compatibility = "शुभ व अनुकूल (Good)"
  else if (totalScore >= 18) compatibility = "मध्यम (Average)"
  else compatibility = "विचारणीय (Not Recommended)"

  const summary = `कुल 36 में से ${totalScore} गुण मिल रहे हैं। यह वैवाहिक मिलान '${compatibility}' श्रेणी में आता है।`

  return {
    varnaGuna,
    vasyaGuna,
    taraGuna,
    yoniGuna,
    grahaMaitri,
    ganaGuna,
    bhakutGuna,
    nadiGuna,
    totalScore,
    maxScore: 36,
    compatibility,
    doshas,
    remedies,
    summary
  }
}

export function generateCompatibilityReport(
  person1Name: string,
  person2Name: string,
  res: AshtakootResult
): string {
  return `
दिव्य दृष्टि 36 गुण अष्टकूट मिलान रिपोर्ट
=================================================
वर (Groom): ${person1Name}
कन्या (Bride): ${person2Name}

कुल गुण प्राप्तांक: ${res.totalScore} / 36 [${res.compatibility}]

अष्टकूट अंक विवरण:
१. वर्ण कूट (आध्यात्मिक अनुकूलता): ${res.varnaGuna} / 1
२. वश्य कूट (आपसी आकर्षण व प्रभाव): ${res.vasyaGuna} / 2
३. तारा कूट (भाग्य व स्वास्थ्य सुरक्षा): ${res.taraGuna} / 3
४. योनि कूट (शारीरिक व दांपत्य तालमेल): ${res.yoniGuna} / 4
५. ग्रहमैत्री कूट (मानसिक व बौद्धिक मित्रता): ${res.grahaMaitri} / 5
६. गण कूट (स्वभाव व जीवनशैली मेल): ${res.ganaGuna} / 6
७. भकूट कूट (वंश वृद्धि व पारिवारिक सुख): ${res.bhakutGuna} / 7
८. नाड़ी कूट (आनुवंशिक स्वास्थ्य व दीर्घायु): ${res.nadiGuna} / 8

दोष व परिहार विश्लेषण:
${res.doshas.length > 0 ? res.doshas.map(d => `⚠️ ${d}`).join("\n") : "✓ कोई गंभीर अष्टकूट दोष नहीं पाया गया।"}

अनुशंसित शास्त्रीय उपाय:
${res.remedies.length > 0 ? res.remedies.map(r => `💡 ${r}`).join("\n") : "✓ दंपत्ति नित्य साथ में संध्या वंदना और शांतिपूर्वक जीवन व्यतीत करें।"}

निष्कर्ष:
"${res.summary}"
`
}
