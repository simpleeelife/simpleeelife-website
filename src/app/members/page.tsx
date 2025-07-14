import Link from 'next/link';

export default function MembersPage() {
  return (
    <div style={{ padding: '100px 20px', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>会員専用ページへようこそ！</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* 上段 */}
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>過去の部屋</h2>
            <p style={cardDescriptionStyle}>これまでのアーカイブコンテンツ</p>
          </div>
        </Link>
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>未来の部屋</h2>
            <p style={cardDescriptionStyle}>今後のイベントや計画</p>
          </div>
        </Link>
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>いまの部屋</h2>
            <p style={cardDescriptionStyle}>現在の活動や最新情報</p>
          </div>
        </Link>

        {/* 下段 */}
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>参加者一覧</h2>
            <p style={cardDescriptionStyle}>メンバーの紹介</p>
          </div>
        </Link>
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>クリエイティブ</h2>
            <p style={cardDescriptionStyle}>作品やアイデアの共有</p>
          </div>
        </Link>
        <Link href="/members/archive" style={{ textDecoration: 'none' }}>
          <div style={cardStyle}>
            <h2 style={cardTitleStyle}>雑談アーカイブ</h2>
            <p style={cardDescriptionStyle}>過去の雑談や交流の記録</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  padding: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  marginBottom: '10px',
  color: 'var(--accent-blue)',
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--text-muted)',
};
