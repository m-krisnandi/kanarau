# Panduan CI/CD & Deploy Kanarau: Frontend Vercel + Backend Tencent VPS

Arsitektur ini memisahkan beban kerja secara cerdas dan efisien:
- **Frontend (Web):** Dihosting di **Vercel** pada subdomain `https://kanarau.pdfumi.com` (100% Gratis Selamanya).
- **Backend (API):** Berjalan di **VPS Tencent / SumoPod Rp90rb** pada subdomain `https://api-kanarau.pdfumi.com` (Dibatasi RAM 384 MB).
- **Database (PostgreSQL):** Dibuat dan dijalankan **100% otomatis** oleh Docker Compose (Dibatasi RAM 150 MB).

Dengan konfigurasi ini:
- **Tidak perlu beli domain baru.** Cukup memanfaatkan domain `pdfumi.com` yang sudah Anda miliki.
- **Sertifikat SSL Gratis:** Menggunakan format satu tingkat (`kanarau.pdfumi.com` dan `api-kanarau.pdfumi.com`) sehingga tercover 100% oleh sertifikat SSL gratis Cloudflare.
- **Zero-touch CI/CD:** Setiap kali Anda melakukan `git push origin main`, frontend otomatis ter-deploy ke Vercel dan backend otomatis ter-deploy ke VPS Tencent.

---

## Bagian 1: Setup Frontend di Vercel (Sekali Setup)

1. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
2. Klik tombol **Add New...** -> **Project**.
3. Pilih repository GitHub **`kanarau`**.
4. Pada bagian **Root Directory**, klik **Edit** lalu pilih folder: `web`.
5. Framework Preset akan otomatis terdeteksi sebagai **Vite**.
6. Buka bagian **Environment Variables**, tambahkan 1 variabel:
   - **Key:** `VITE_API_BASE`
   - **Value:** `https://api-kanarau.pdfumi.com`
7. Klik **Deploy**.

### Pasang Subdomain di Vercel:
Setelah deploy selesai:
1. Buka project Kanarau di Vercel -> Tab **Settings** -> **Domains**.
2. Masukkan domain: `kanarau.pdfumi.com` -> Klik **Add**.
3. Vercel akan memberikan petunjuk CNAME (biasanya `cname.vercel-dns.com`).

---

## Bagian 2: Setup Secrets di GitHub Repository `kanarau`

Buka browser: **GitHub Repo Kanarau** -> Tab **Settings** -> **Secrets and variables** -> **Actions** -> Klik **New repository secret**.

Tambahkan secret berikut (gunakan SSH Key yang sama dengan Pdfumi):

| Nama Secret | Nilai yang Dimasukkan |
|---|---|
| `VPS_HOST` | IP Public VPS Tencent Anda (contoh: `123.45.67.89`) |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | Salin seluruh isi file private key `~/.ssh/github_deploy` |
| `VPS_PORT` | `22` |
| `KANARAU_PROD_ENV` | Salin seluruh isi konfigurasi environment di bawah ini: |

Contoh isi secret `KANARAU_PROD_ENV`:
```env
SERVER_PORT=8085
DB_PASSWORD=PasswordKuatKanarau123!
JWT_SECRET=rahasia-jwt-kanarau-production-minimal-256-bit-key-harus-panjang-dan-acak-12345
KANARAU_CORS_ORIGINS=https://kanarau.pdfumi.com,https://kanarau.vercel.app,https://*.vercel.app
```

---

## Bagian 3: Konfigurasi Subdomain API di Caddyfile VPS

Agar backend Kanarau bisa diakses publik dengan HTTPS otomatis melalui domain Anda:

1. Buka file Caddyfile di folder Pdfumi VPS:
   ```bash
   nano /opt/pdfumi/deploy/Caddyfile
   ```
2. Tambahkan blok ini di bagian paling bawah:
   ```caddy
   api-kanarau.pdfumi.com {
       encode zstd gzip

       reverse_proxy 172.17.0.1:8085 {
           transport http {
               response_header_timeout 60s
           }
       }
   }
   ```
3. Reload Caddy:
   ```bash
   cd /opt/pdfumi
   docker compose -f docker-compose.prod.yml exec caddy caddy reload --config /etc/caddy/Caddyfile
   ```

---

## Bagian 4: Pengaturan DNS di Cloudflare

Buka dashboard DNS Cloudflare untuk domain `pdfumi.com`, tambahkan 2 record berikut:

1. **Frontend Kanarau (Vercel):**
   - **Type:** `CNAME`
   - **Name:** `kanarau`
   - **Target:** `cname.vercel-dns.com`
   - **Proxy:** DNS only (Awan Abu-abu) atau Proxied

2. **Backend API Kanarau (VPS Tencent):**
   - **Type:** `A`
   - **Name:** `api-kanarau`
   - **IPv4 address:** `IP_VPS_ANDA`
   - **Proxy:** ON (Awan Oranye)

---

## Cara Melakukan Deploy Selanjutnya (Sepenuhnya Otomatis)

Ketika Anda melakukan perubahan kode di Kanarau (baik frontend maupun backend), Anda cukup menjalankan:

```bash
git add .
git commit -m "Update fitur kanarau"
git push origin main
```

- **Frontend:** Otomatis di-build dan di-publish oleh **Vercel** ke `https://kanarau.pdfumi.com`.
- **Backend & Database:** Otomatis di-build, di-provisioning, dan di-restart di **VPS Tencent** oleh **GitHub Actions** di `https://api-kanarau.pdfumi.com`.
