import Link from 'next/link';

export default function ArchivePage() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', color: 'white' }}>
      <h1>雑談アーカイブ</h1>
      <p style={{ marginBottom: '30px' }}>過去の雑談や交流の記録です。</p>
      
      <div style={{ marginBottom: '20px' }}>
        <Link href="/members/archive/2025-07-13-seminar" style={{ color: 'var(--accent-blue)', textDecoration: 'underline', fontSize: '1.2rem' }}>
          2025年7月13日開催ワーク実践セミナー資料
        </Link>
      </div>

      <Link href="/members" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>
        &larr; 会員ページに戻る
      </Link>
    </div>
  );
}
