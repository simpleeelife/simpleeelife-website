# SIMPLEEELIFE公式サイト兼ブログ 開発記録

## 2025/7/15

### ブログ機能実装 (2025年7月)

#### 技術的な実装詳細

##### ブログページ実装
- 動的ルーティング: `/blog/[slug]`
- Sanity CMSとの統合
- 静的サイト生成 (SSG) の実装

##### 主な技術的課題と解決策

1. **Sanity連携**
   - `getPostBySlug()` 関数の実装
   - 記事データのマッピング
   - 型定義の最適化

2. **Next.js 14対応**
   - サーバーコンポーネントとクライアントコンポーネントの適切な使用
   - `generateStaticParams()` 関数の実装

3. **型定義の課題**
   - Sanityの複雑な型構造に対応
   - マッピング関数の実装

#### 現在の実装状況

##### ブログ一覧ページ
- 最新3件の記事表示
- サムネイル表示
- 記事メタ情報の表示

##### 個別記事ページ
- 動的ルーティング
- 記事本文表示
- PortableTextによるリッチテキスト対応

#### 未実装の機能

1. カテゴリーフィルター
2. 検索機能
3. 関連記事レコメンド
4. シェアボタン
5. コメント機能

### 技術的メモ

#### 型定義の変遷

```typescript
// 初期の型定義
interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  // ...
}

// 最新の型定義
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  // ...
}
```

#### クエリの進化

```typescript
// 初期のSanityクエリ
const query = `*[_type == "post"]`

// 最適化されたクエリ
const query = `*[_type == "post" && publishedAt <= now()] | order(publishedAt desc)`
```

### 今後の開発課題

1. サムネイル画像の動的生成
2. 記事のカテゴリー実装
3. 検索機能の追加
4. パフォーマンス最適化
5. SEO対応

### 開発上の注意点

- 型安全性の確保
- パフォーマンスを意識したコーディング
- Sanityとの継続的な連携
- Next.jsの最新仕様への対応

### 環境情報

- Next.js: 14.2.5
- React: 18.3.1
- Sanity: 最新版
- ホスティング: Vercel


## 2025/7/16

###  1. 問題の発見と解決
    - 画像表示の問題を特定
    - 画像機能を一時的に無効化
    - シンプルな実装に戻す判断
###  2. ステップバイステップの改善
#### 1. シンプルなクエリに修正
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "excerpt": pt::text(body[0]),
    "categories": categories[]->{ _id, title }
  }`
#### 2. Post型の整理
  interface Post {
    _id: string
    title: string
    slug: {
      current: string
    }
    publishedAt: string
    excerpt?: string
    categories?: Category[]
  }
 #### 3. シンプルなカード表示
  <article className="blog-page-post-card">
    <Link href={`/blog/${post.slug.current}`}>
      <div className="blog-page-post-card-content">
        {/* カテゴリー、日付、タイトル、抜粋 */}
      </div>
    </Link>
  </article>
### 3. デバッグ機能の追加
    - 記事数の表示
    - Sanity設定の確認
    - 最終更新日時
### 4. 最終的な改善点
    - 不要な機能を削除
    - コードの簡素化
    - エラーハンドリングの改善
    - デバッグ情報の追加
### 5. 成果
    - 安定したブログ機能の実現
    - クリーンなコード
    - デバッグのしやすさ向上
  これにより、より安定した/blog機能が完成しました。画像機能は後日、改めて実装することで、段階的な改善が可能になります。