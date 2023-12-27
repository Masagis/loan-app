# LOAN APP

Repositori ini adalah codebase aplikasi pinjaman sederhana

## Get Started

1. Install [Node.js v12.22.0](https://nodejs.org/en/) atau diatasnya
2. Install [Yarn v1.22](https://yarnpkg.com/) atau diatasnya
3. Clone repositori ini
4. Jalankan perintah `yarn install` atau `npm install`
5. Jalankan perintah `yarn serve` atau `npm run serve`
6. Akses web di `http://localhost:3000`

## Folder Structure

- `public`: berisi asset yang bisa akses public
  - `img`: berisi file gambar
- `src`: berisi semua folder pendukung
  - `assets`: folder berisikan utilitas
    - `fonts`: berisi file font
    - `img`: berisi file gambar
  - `components`: berisi reusable komponen yang dipakai di banyak tempat
  - `locale`: berisi file untuk pembuatan multi bahasa
  - `models`: berisi file variable untuk membantu pengembangan
  - `pages`: folder ini berisi splitting component. Misal pada Homepage, setiap section dipecah menjadi component, maka splitting component tersebut ditaroh disini.
  - `plugins`: berisi file css dari vuetify
  - `router`: default router. Disini tidak boleh ada file/folder lain selain untuk router.
  - `store`: berisi file dari state management aplikasi
  - `utils` (jika diperlukan): folder yang berisi kumpulan variable pembantu
- `tests`: berisi file unit testing (sementara belum ada unit testing yang di gunakan).

## Git Flow Rule

### Important Branch

Branch `develop` adalah default branch. Setiap kali developer ingin membuat branch baru yang ter-update, **_maka wajib membuat dari branch development sebagai source_**

### Branch Naming

Ada 4 tipe penamaan branch, yaitu `feature`, `fixing`, `hot-fix`, dan `docs`.

- `feature` digunakan untuk branch yang tujuannya untuk pembuatan fitur baru.
- `fixing`: digunakan untuk branch yang tujuannya untuk memperbaiki issue/bug yang major.
- `hot-fix`: digunakan untuk branch yang tujuannya untuk memperbaiki issue/bug yang minor.
- `docs`: digunakan untuk branch yang tujuannya untuk merubah dokumentasi (readme).

```
Contoh:
- feature/blabla/login //branch untuk fitur login
```

### Merge Branch

Untuk melakukan merge antar branch, maka dilakukan dengan menggunakan fitur pull request (PR) yang disediakan oleh repositori. Lebih jauh tentang merge branch atau yang lainnya dapat menghubungi team terkait.

### Commit Rule

Berikan pesan commit dengan template berikut:
`type(scope): message`

- `type`:
  - `feat`: jika yang dilakukan ada membuat fitur baru.
  - `fix`: jika yang dilakukan adalah fixing major bug.
  - `hot-fix`: jika yang dilakukan adalah fixing minor bug.
  - `docs`: jika yang dilakukan adalah update readme.
- `scope`: mendeskripsikan bagian yang terkena dampak perubahan code.
- `message`: pesan commit secara singkat yang mendeskripsikan perubahan yang dilakukan.

```
Contoh:
- feat(login): add layouting login cms
- feat(detail): add detail section
- fix(konfirmasi): refactor code if else kondisi
- docs(main readme): update folder structure
```
