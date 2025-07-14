import { redirect } from 'next/navigation';

export default function LoginPage({ searchParams }: { searchParams: { password?: string } }) {
  const correctPassword = process.env.MEMBER_PASSWORD; // 環境変数からパスワードを取得

  if (searchParams.password === correctPassword) {
    redirect('/members'); // パスワードが正しければ会員ページへリダイレクト
  }

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', color: 'white' }}>
      <h1>会員専用ページ ログイン</h1>
      <p>アクセスするにはパスワードを入力してください。</p>
      <form action="/members/login" method="GET" style={{ marginTop: '20px' }}>
        <input
          type="password"
          name="password"
          placeholder="パスワードを入力"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
            backgroundColor: '#333',
            color: 'white',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'var(--accent-blue)',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          ログイン
        </button>
      </form>
      {searchParams.password && searchParams.password !== correctPassword && (
        <p style={{ color: 'red', marginTop: '10px' }}>パスワードが間違っています。</p>
      )}
    </div>
  );
}
