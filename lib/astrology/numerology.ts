/**
 * Authentic Numerology & Lo Shu Grid Engine (Chaldean & Pythagorean Systems)
 */

const NUMEROLOGY_MEANINGS: { [key: number]: { title: string; desc: string; planet: string } } = {
  1: {
    title: "सूर्य (Sun) - अद्वितीय नेतृत्व व स्वतंत्रता",
    desc: "मूलांक 1 वाले व्यक्ति जन्मजात नेता, स्वाभिमानी, महत्वाकांक्षी और साहसी होते हैं। वे किसी के अधीन काम करने के बजाय स्वतंत्र रूप से निर्णय लेना पसंद करते हैं।",
    planet: "सूर्य (Sun)"
  },
  2: {
    title: "चंद्रमा (Moon) - शांति, संवेदनशीलता व सहयोग",
    desc: "मूलांक 2 वाले जातक अत्यंत कोमल हृदय, कल्पनाशील, कूटनीतिज्ञ और शांतिप्रिय होते हैं। दूसरों के साथ तालमेल बिठाने और संबंधों को संजोने में कुशल होते हैं।",
    planet: "चंद्र (Moon)"
  },
  3: {
    title: "बृहस्पति (Jupiter) - ज्ञान, सृजनशीलता व अभिव्यक्ति",
    desc: "मूलांक 3 वाले व्यक्ति बहुमुखी प्रतिभा के धनी, आशावादी, उत्कृष्ट वक्ता और विद्या-प्रिय होते हैं। शिक्षा, परामर्श और रचनात्मक क्षेत्रों में चमकते हैं।",
    planet: "गुरु (Jupiter)"
  },
  4: {
    title: "राहु (Rahu) - अनुशासन, व्यावहारिकता व क्रांति",
    desc: "मूलांक 4 वाले जातक यथार्थवादी, कठोर परिश्रमी, व्यवस्थापक और लीक से हटकर नए रास्ते बनाने वाले होते हैं। जीवन में अचानक बड़े परिवर्तन आते हैं।",
    planet: "राहु (Rahu)"
  },
  5: {
    title: "बुध (Mercury) - गतिशीलता, व्यापार व वाकपटुता",
    desc: "मूलांक 5 वाले व्यक्ति चंचल, हाजिरजवाब, नए विचारों के प्रेमी, यात्राओं के शौकीन और व्यापारिक बुद्धि से संपन्न होते हैं। हर माहौल में ढल जाते हैं।",
    planet: "बुध (Mercury)"
  },
  6: {
    title: "शुक्र (Venus) - सौंदर्य, प्रेम, कला व गृहस्थ सुख",
    desc: "मूलांक 6 वाले व्यक्ति आकर्षक, कलात्मक, परिवार के प्रति समर्पित, विलासिता प्रेमी और शांति स्थापित करने वाले होते हैं। उत्तम भोजन व सौंदर्य प्रिय होता है।",
    planet: "शुक्र (Venus)"
  },
  7: {
    title: "केतु (Ketu) - गहन विश्लेषण, अध्यात्म व शोध",
    desc: "मूलांक 7 वाले जातक दार्शनिक, एकांतप्रिय, गूढ़ रहस्यों के खोजी और तीव्र अंतर्ज्ञान (Intuition) से संपन्न होते हैं। शोध और अध्यात्म में सफलता मिलती है।",
    planet: "केतु (Ketu)"
  },
  8: {
    title: "शनि (Saturn) - धैर्य, कर्मयोग, न्याय व भौतिक सिद्धि",
    desc: "मूलांक 8 वाले व्यक्ति गंभीर, कर्मठ, दृढ़-संकल्पी और न्यायप्रिय होते हैं। सफलता धीरे-धीरे परंतु अत्यंत मजबूत और स्थायी रूप से प्राप्त होती है।",
    planet: "शनि (Saturn)"
  },
  9: {
    title: "मंगल (Mars) - अदम्य पराक्रम, परोपकार व ऊर्जा",
    desc: "मूलांक 9 वाले जातक जोशीले, निडर, स्पष्टवादी और मानवतावादी होते हैं। किसी भी अन्याय के विरुद्ध खड़े होने और समाज सेवा में सबसे आगे रहते हैं।",
    planet: "मंगल (Mars)"
  }
}

const CHALDEAN_MAP: { [key: string]: number } = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
}

const VOWELS = ["A", "E", "I", "O", "U"]

function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    let sum = 0
    while (num > 0) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    num = sum
  }
  return num || 1
}

export function calculateNumerology(fullName: string, dateOfBirth: Date) {
  const day = dateOfBirth.getDate()
  const month = dateOfBirth.getMonth() + 1
  const year = dateOfBirth.getFullYear()

  // 1. Mulank (Life Path / Driver Number): Day reduced to single digit
  const lifePathNum = reduceToSingleDigit(day)

  // 2. Bhagyank (Destiny / Conductor Number): Full Date reduced to single digit
  const destinyNum = reduceToSingleDigit(day + month + year)

  // 3. Name Numerology (Chaldean)
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, "")
  let totalName = 0
  let vowelsTotal = 0
  let consonantsTotal = 0

  for (const ch of cleanName) {
    const val = CHALDEAN_MAP[ch] || 1
    totalName += val
    if (VOWELS.includes(ch)) {
      vowelsTotal += val
    } else {
      consonantsTotal += val
    }
  }

  const expressionNum = reduceToSingleDigit(totalName)
  const soulUrgeNum = reduceToSingleDigit(vowelsTotal)
  const personalityNum = reduceToSingleDigit(consonantsTotal)

  // 4. Lo Shu 3x3 Magic Grid
  // Standard positions:
  // 4  9  2
  // 3  5  7
  // 8  1  6
  const dateDigits = `${day}${month}${year}`.split("").map(Number).filter(n => n > 0)
  const loShuCounts: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }
  dateDigits.forEach(d => { if (loShuCounts[d] !== undefined) loShuCounts[d]++ })

  // Planes analysis
  const mentalPlane = [4, 9, 2].filter(n => loShuCounts[n] > 0).length === 3
  const emotionalPlane = [3, 5, 7].filter(n => loShuCounts[n] > 0).length === 3
  const practicalPlane = [8, 1, 6].filter(n => loShuCounts[n] > 0).length === 3
  const willPlane = [9, 5, 1].filter(n => loShuCounts[n] > 0).length === 3

  const luckyColorsMap: { [key: number]: string[] } = {
    1: ["नारंगी (Orange)", "सुनहरा (Gold)", "पीला (Yellow)"],
    2: ["दूधिया सफेद (White)", "सिल्वर (Silver)", "हल्का हरा (Light Green)"],
    3: ["हल्दी पीला (Yellow)", "केसरिया (Saffron)", "सुनहरा (Gold)"],
    4: ["गहरा नीला (Blue)", "भूरा (Brown)", "स्लेटी (Grey)"],
    5: ["पन्ना हरा (Green)", "हल्का नीला (Sky Blue)", "सफेद (White)"],
    6: ["गुलाबी (Pink)", "सफेद (White)", "हल्का नीला (Light Blue)"],
    7: ["हल्का पीला (Cream)", "सफेद (White)", "हल्का हरा (Pastel Green)"],
    8: ["गहरा नीला (Navy Blue)", "काला (Black)", "जामुनी (Purple)"],
    9: ["लाल (Red)", "गुलाबी (Rose)", "नारंगी (Orange)"]
  }

  const luckyDaysMap: { [key: number]: string[] } = {
    1: ["रविवार (Sunday)", "गुरुवार (Thursday)"],
    2: ["सोमवार (Monday)", "रविवार (Sunday)"],
    3: ["गुरुवार (Thursday)", "मंगलवार (Tuesday)"],
    4: ["शनिवार (Saturday)", "रविवार (Sunday)"],
    5: ["बुधवार (Wednesday)", "शुक्रवार (Friday)"],
    6: ["शुक्रवार (Friday)", "बुधवार (Wednesday)"],
    7: ["सोमवार (Monday)", "गुरुवार (Thursday)"],
    8: ["शनिवार (Saturday)", "शुक्रवार (Friday)"],
    9: ["मंगलवार (Tuesday)", "गुरुवार (Thursday)"]
  }

  return {
    lifePathNum,
    destinyNum,
    expressionNum,
    soulUrgeNum,
    personalityNum,
    lifePathDesc: NUMEROLOGY_MEANINGS[lifePathNum]?.desc || "",
    destinyDesc: NUMEROLOGY_MEANINGS[destinyNum]?.desc || "",
    soulUrgeDesc: NUMEROLOGY_MEANINGS[soulUrgeNum]?.desc || "",
    personalityDesc: NUMEROLOGY_MEANINGS[personalityNum]?.desc || "",
    expressionDesc: NUMEROLOGY_MEANINGS[expressionNum]?.desc || "",
    luckyNumbers: [lifePathNum, destinyNum, reduceToSingleDigit(lifePathNum + destinyNum)],
    luckyColors: luckyColorsMap[lifePathNum] || ["पीला (Yellow)"],
    luckyDays: luckyDaysMap[lifePathNum] || ["रविवार (Sunday)"],
    loShuGrid: {
      row1: [loShuCounts[4] ? "4" : "", loShuCounts[9] ? "9" : "", loShuCounts[2] ? "2" : ""],
      row2: [loShuCounts[3] ? "3" : "", loShuCounts[5] ? "5" : "", loShuCounts[7] ? "7" : ""],
      row3: [loShuCounts[8] ? "8" : "", loShuCounts[1] ? "1" : "", loShuCounts[6] ? "6" : ""],
      planes: {
        mentalPlane: mentalPlane ? "सक्रिय (प्रखर बौद्धिक क्षमता)" : "अपूर्ण",
        emotionalPlane: emotionalPlane ? "सक्रिय (गहन भावनात्मक संतुलन)" : "अपूर्ण",
        practicalPlane: practicalPlane ? "सक्रिय (ठोस व्यावसायिक कुशलता)" : "अपूर्ण",
        willPlane: willPlane ? "सक्रिय (अदम्य इच्छाशक्ति व संकल्प)" : "अपूर्ण",
      }
    }
  }
}

export function generateNumerologyReport(fullName: string, dateOfBirth: Date): string {
  const res = calculateNumerology(fullName, dateOfBirth)

  return `
दिव्य दृष्टि अंकशास्त्र व लो-शू चक्र विश्लेषण
=================================================
जातक: ${fullName}
जन्म तारीख: ${dateOfBirth.toLocaleDateString("hi-IN")}

१. प्रमुख अंक गणना:
- मूलांक (Life Path / Driver Number): ${res.lifePathNum}
  -> ${res.lifePathDesc}
- भाग्यांक (Destiny / Conductor Number): ${res.destinyNum}
  -> ${res.destinyDesc}
- नामांक (Expression Number): ${res.expressionNum}
- आत्म-अभिलाषा अंक (Soul Urge Number): ${res.soulUrgeNum}
- व्यक्तित्व अंक (Personality Number): ${res.personalityNum}

२. शुभ तत्व (Lucky Attributes):
- भाग्यशाली अंक: ${res.luckyNumbers.join(", ")}
- अनुकूल रंग: ${res.luckyColors.join(", ")}
- अनुकूल वार: ${res.luckyDays.join(", ")}

३. लो-शू 3x3 ग्रिड विश्लेषण:
[4: ${res.loShuGrid.row1[0] || '-'}] [9: ${res.loShuGrid.row1[1] || '-'}] [2: ${res.loShuGrid.row1[2] || '-'}]
[3: ${res.loShuGrid.row2[0] || '-'}] [5: ${res.loShuGrid.row2[1] || '-'}] [7: ${res.loShuGrid.row2[2] || '-'}]
[8: ${res.loShuGrid.row3[0] || '-'}] [1: ${res.loShuGrid.row3[1] || '-'}] [6: ${res.loShuGrid.row3[2] || '-'}]

- मानसिक तल (Mental Plane): ${res.loShuGrid.planes.mentalPlane}
- भावनात्मक तल (Emotional Plane): ${res.loShuGrid.planes.emotionalPlane}
- व्यावहारिक तल (Practical Plane): ${res.loShuGrid.planes.practicalPlane}
- इच्छाशक्ति तल (Will Plane): ${res.loShuGrid.planes.willPlane}
`
}
