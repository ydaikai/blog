# ydaikai.com

[Astro](https://astro.build) で作っている個人ブログのソースです。公開URLは [ydaikai.com](https://ydaikai.com)。

## 記事の書き方

`src/content/blog/` に `.md`（または `.mdx`）ファイルを1つ追加するだけで記事になります。

```md
---
title: '記事タイトル'
description: '記事の概要'
pubDate: 'Jul 04 2026'
---

本文をここに Markdown で書く。
```

frontmatter は `src/content/config.ts` のスキーマで型チェックされます。

| フィールド     | 必須 | 説明                         |
| -------------- | :--: | ---------------------------- |
| `title`        |  ✅  | 記事タイトル                 |
| `description`  |  ✅  | 一覧・OGP用の概要文          |
| `pubDate`      |  ✅  | 公開日（例: `Jul 04 2026`）  |
| `updatedDate`  |      | 更新日                       |
| `heroImage`    |      | アイキャッチ画像のパス       |

保存して `main` に push すれば、CI/CD 経由で自動的に公開されます。

## 開発

```sh
npm install
npm run dev      # localhost:4321 でローカル確認
npm run build    # 本番ビルド（./dist/）
npm run preview  # ビルド結果をローカルでプレビュー
```

## 構成

```text
src/
├── content/blog/   # 記事（Markdown / MDX）
├── components/     # Header, Footer, BaseHead など
├── layouts/        # BlogPost レイアウト
├── pages/          # index / about / blog 一覧・詳細 / rss.xml
├── styles/         # グローバルCSS（ライト/ダークモード対応）
└── consts.ts       # サイトタイトル・説明などのグローバル設定
public/             # 画像などの静的ファイル
public/works/       # ポートフォリオ（作曲・DJ・プロジェクトなど）用の置き場所（未着手）
```

- ダークモード切り替え、RSS配信、サイトマップに対応済み。
- ナビゲーションは `Blog` / `About` のみのミニマル構成。
