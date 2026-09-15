# 🌟 दिव्य दृष्टि ज्योतिष महा-मंच (Divya Drishti Astrology Platform)
### Complete Full-Stack Next.js 14 + Prisma + Tailwind Online Web Platform

This repository contains the complete, deployment-ready full-stack online web application built for **Lovable.dev**, **Vercel**, or **GitHub**.

---

## 🚀 Key Modules Included

1. **🔮 Vedic Kundli (जन्म पत्रिका)**:
   - High-precision astronomical calculation (NASA JPL / Jean Meeus algorithms).
   - Official N.C. Lahiri Ayanamsha (Chitra Paksha).
   - Ascendant (Lagna), 27 Nakshatras & 4 Padas, Planetary degrees & signs.
   - Vimshottari Mahadasha balance calculation.
   - Manglik Dosha detection with classical cancellation rules.

2. **🃏 Tarot Reading (टैरो कार्ड्स)**:
   - Complete 78-card deck (Major & Minor Arcana).
   - Single Card, Three-Card (Past, Present, Future), and Celtic Cross spreads.
   - Upright and reversed orientation interpretations.

3. **🔢 Numerology & Lo Shu Grid (अंकशास्त्र)**:
   - Mulank (Life Path), Bhagyank (Destiny), Expression, Soul Urge numbers.
   - 3x3 Lo Shu Magic Grid with mental, emotional, practical, and will planes.
   - Lucky numbers, lucky colors, lucky days.

4. **🧭 16-Zone MahaVastu Shastra (वास्तु शास्त्र)**:
   - 16 directional zones analysis with 5 elements (Panchatattva).
   - Room compliance evaluator (Mandir, Kitchen, Bedroom, Toilet, Locker, Entrance).
   - Non-destructive remedies (Metal strip therapy, color balance).

5. **♈ Daily Rashifal (दैनिक राशिफल)**:
   - Daily forecast for all 12 Zodiac signs (Aries to Pisces).
   - Career, Finance, Health, Relationships, and lucky parameters.

6. **💑 36 Guna Ashtakoot Kundli Milan (कुंडली मिलान)**:
   - Complete 36-Guna matching:
     - Varna (1), Vashya (2), Tara (3), Yoni (4), Graha Maitri (5), Gana (6), Bhakoot (7), Nadi (8).
   - Nadi Dosha, Bhakoot Dosha, and Gana Dosha detection with classical remedies.

7. **🔐 User Authentication & Database (Prisma + PostgreSQL)**:
   - Signup, Login, Password Hashing with bcrypt, JWT token generation, Protected routes.

---

## 🛠️ How to Deploy on Lovable.dev

1. Go to **[Lovable.dev](https://lovable.dev)** and start a new project.
2. Connect your GitHub repository or paste the files in the order specified in `COMPLETE_CODE_LOVABLE.md`.
3. Set your environment variables in `.env.local` or in the Lovable settings:
   - `DATABASE_URL`: Your PostgreSQL database URL (from [Neon.tech](https://neon.tech) or [Supabase.com](https://supabase.com) - both free).
   - `JWT_SECRET`: Any random 32-character string.
4. Click **Deploy / Run**!

---

## ⚡ How to Run Locally

If you have Node.js installed:

```bash
# 1. Install dependencies
npm install

# 2. Push database schema
npx prisma db push

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 How to Deploy to Vercel (1-Click Free Hosting)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/astrology-app.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com)**, click **Add New Project**, and import your repository.
3. Add the `DATABASE_URL` and `JWT_SECRET` environment variables.
4. Click **Deploy**! Your app will be live on a public `.vercel.app` URL.
