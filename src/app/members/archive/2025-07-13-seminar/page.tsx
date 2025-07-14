import Link from 'next/link';
import Script from 'next/script';

export default function SeminarPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-bg min-h-screen flex items-center justify-center text-center p-4">
        <div id="stars-container"></div>
        <div className="z-10 fade-in visible">
          <h1 className="font-mincho text-5xl md:text-7xl font-bold text-white tracking-wider leading-relaxed">
            <span className="block text-2xl md:text-3xl text-blue-300">クォンタム・ジャーナリング ワーク実践セミナー</span>
            未来の記憶を思い出す
          </h1>
          <p className="mt-6 text-2xl md:text-4xl font-bold text-gray-300 font-mincho">〜とんでもなく大きな夢を描く〜</p>
          <p className="mt-10 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            あなたの魂が震えるような「とんでもなく大きな夢」を、一緒に見つけませんか？<br />
            これは、あなたの中にすでに存在する「未来の記憶」を思い出す旅です。
          </p>
        </div>
        <Link href="#intro" className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white group">
          <div className="flex flex-col items-center animate-bounce">
            <span className="font-mincho text-lg">旅を始める</span>
            <svg className="w-8 h-8 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </Link>
      </header>

      <main>
        {/* New Section 1: Previous Work */}
        <section className="min-h-screen flex items-center justify-center text-center p-6 bg-black bg-opacity-10">
          <div className="max-w-4xl mx-auto fade-in">
            <h3 className="text-2xl md:text-3xl text-blue-300 font-mincho">前回(6/15)のワーク</h3>
            <p className="mt-6 font-mincho text-4xl md:text-6xl font-bold text-white leading-relaxed whitespace-nowrap">「私を＜私＞たらしめているもの」</p>
            <p className="mt-4 text-2xl md:text-4xl text-gray-300">を言語化しました</p>
          </div>
        </section>

        {/* New Section 2: Important Perspective */}
        <section className="min-h-screen flex items-center justify-center text-center p-6">
          <div className="max-w-5xl mx-auto fade-in">
            <h3 className="text-2xl md:text-3xl text-purple-300 font-mincho">大切な視点</h3>
            <p className="mt-8 font-mincho text-4xl md:text-6xl font-bold text-white leading-relaxed">
              どんな性質にも<br />ポジティブな面とネガティブな面が<br />同じだけ存在する
            </p>
          </div>
        </section>

        {/* New Section 3: Strongest Talent */}
        <section className="min-h-screen flex items-center justify-center text-center p-6 bg-black bg-opacity-10">
          <div className="max-w-5xl mx-auto fade-in">
            <p className="font-mincho text-3xl md:text-5xl font-bold text-white leading-relaxed">
              ネガティブに見える性質の<br />「ポジティブな使い道」を発見することで
            </p>
            <p className="my-8 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 animate-pulse">
              「最強の才能」
            </p>
            <p className="font-mincho text-3xl md:text-5xl font-bold text-white">
              が手に入る
            </p>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section id="intro" className="min-h-screen relative flex flex-col items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop')' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-5xl mx-auto fade-in">
            
            <h2 className="font-mincho font-bold text-6xl md:text-8xl text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              未来の記憶
            </h2>
            <h2 className="font-mincho font-bold text-6xl md:text-8xl text-white mt-8" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              夢
            </h2>

            <div className="mt-20">
              <h2 className="font-mincho text-4xl md:text-5xl font-bold text-white leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                「あなたらしさ」を世界に解き放つと<br />何が起こるだろう？
              </h2>
              <p className="mt-12 font-mincho font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 animate-pulse leading-loose">
                あなたの中に眠る可能性を解き放つ<br />より大きな自己からの呼び声に応える
              </p>
            </div>
          </div>
        </section>

        {/* Big Dream Section */}
        <section id="big-dream" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url('https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=2070&auto=format&fit=crop')' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 fade-in">
            <h2 className="font-mincho font-bold text-5xl md:text-7xl text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              とんでもなく大きな夢を描く
            </h2>
          </div>
        </section>

        {/* Workshop Explanation */}
        <section id="workshop" className="py-24 md:py-32 bg-black bg-opacity-20">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center font-mincho text-4xl md:text-5xl font-bold text-white fade-in">夢を描くための3つのステップ</h2>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass-card rounded-xl p-8 text-center fade-in">
                <div className="text-6xl text-purple-400 font-bold">01</div>
                <h3 className="font-mincho text-3xl font-bold mt-6 text-white">夢の定義を知る</h3>
                <p className="mt-6 text-gray-300 text-lg leading-relaxed">描くのは「現在の延長線上にはない夢」。あなたのコンフォートゾーンの外側にある、想像もつかないような世界です。</p>
              </div>
              {/* Step 2 */}
              <div className="glass-card rounded-xl p-8 text-center fade-in" style={{ transitionDelay: '200ms' }}>
                <div className="text-6xl text-blue-400 font-bold">02</div>
                <h3 className="font-mincho text-3xl font-bold mt-6 text-white">あなたの「役割」を見つける</h3>
                <p className="mt-6 text-gray-300 text-lg leading-relaxed">あなたの夢が、自我の欲求だけでなく多くの人を満たす時、それは広大な自己と繋がり、パワフルなエネルギーを持ちます。</p>
              </div>
              {/* Step 3 */}
              <div className="glass-card rounded-xl p-8 text-center fade-in" style={{ transitionDelay: '400ms' }}>
                <div className="text-6xl text-teal-400 font-bold">03</div>
                <h3 className="font-mincho text-3xl font-bold mt-6 text-white">未来の記憶を思い出す</h3>
                <p className="mt-6 text-gray-300 text-lg leading-relaxed">過去は、この「未来の記憶」を思い出すためにありました。今、未来の夢を設定することで、あなたの現実は変わります。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1 Detail Section */}
        <section id="step1-detail" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-purple-300">01</h2>
              <h3 className="section-title font-mincho text-3xl md:text-4xl font-bold mt-4 inline-block">夢の定義</h3>
              
              <ul className="mt-8 space-y-4 text-lg md:text-xl list-disc list-inside text-gray-300">
                <li>いまの延長線上ではない</li>
                <li>コンフォートゾーンの外側にある</li>
              </ul>
              <p className="mt-4 text-lg md:text-xl text-gray-400 pl-6">例：世界中を旅しながら、写真や文章で人々に感動を届ける</p>

              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400">重要ポイント！</h4>
                <p className="mt-4 font-bold text-2xl md:text-3xl text-purple-300">「自分がどうなりたいか？」</p>
                <div className="mt-6 space-y-4 text-lg md:text-xl">
                  <p><span className="text-red-500 font-bold mr-2">✕</span>素敵な人と恋愛がしたい</p>
                  <p><span className="text-green-500 font-bold mr-2">→ ◎</span>誰からも愛される、魅力的な私になる</p>
                  <p><span className="text-red-500 font-bold mr-2">✕</span>お金持ちの人と結婚したい</p>
                  <p><span className="text-green-500 font-bold mr-2">→ ◎</span>私が豊かさを創り出し、多くの人と分かち合えるようになる</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Step 2 Detail Section */}
        <section id="step2-detail" className="py-24 md:py-32 bg-black bg-opacity-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-blue-300">02</h2>
              <h3 className="section-title font-mincho text-3xl md:text-4xl font-bold mt-4 inline-block">あなたの「役割」を見つける</h3>
              
              <p className="mt-8 text-xl md:text-2xl text-gray-400">未来の記憶 / 夢</p>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400">ヒントは...</h4>
                <p className="mt-4 text-2xl md:text-3xl text-blue-300">「自分が提供する役割」＝「社会性」</p>
              </div>

              <div className="mt-8 space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>自己とは、「他者や社会を包み込むとても広大なもの」</p>
                <p>自己実現とは、「意識の主体としての私＝自我だけが満足することではなく、心全体が満たされる」ということ。他の人々とのつながりや関係なしに、自己実現は語れない</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="text-xl md:text-2xl font-bold text-yellow-400">つまり...</h4>
                <p className="mt-4 text-2xl md:text-3xl text-white font-bold leading-relaxed">自我の欲求を満たすだけでなく、<span className="text-yellow-300">たくさんの人が満たされる「夢」</span>であればあるほど、より大きく、パワフルなエネルギーを持つ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 Detail Continued Section */}
        <section id="step2-detail-continued" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 fade-in">
              <p className="text-xl md:text-2xl text-center text-gray-300 leading-relaxed">「社会」という言葉が大きすぎてイメージが湧かない場合は、<br />身近な家族や友人でO.K.</p>
              
              <div className="mt-12">
                <h4 className="text-2xl md:text-3xl font-bold text-center text-blue-300">あなたが「自然と提供している役割」</h4>
                <ul className="mt-8 space-y-4 text-lg md:text-xl text-gray-300">
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span>人々が健やかに過ごせるように、健康を提供する</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span>人々が心穏やかでいられるように、安心と安全を提供する</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span>人々の毎日が輝くように、喜びや幸せを提供する</li>
                </ul>
              </div>

              <p className="mt-12 text-center text-xl md:text-2xl text-yellow-300 font-bold leading-relaxed">あなたが「したいこと」「自然とやってしまうこと」は、<br />あなたの役割であり、夢の種。</p>
              
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h4 className="text-xl md:text-2xl font-bold text-red-400">注意してほしいこと</h4>
                <p className="mt-4 text-lg md:text-xl text-gray-300">その役割が「〜しなければいけない」という義務や自己犠牲になっていないか？</p>
                <div className="mt-6 p-6 bg-gray-900 bg-opacity-50 rounded-lg">
                  <p className="text-gray-400">例：社会に対して健康を提供したい</p>
                  <div className="mt-4 space-y-2 text-lg md:text-xl">
                    <p><span className="text-green-500 font-bold mr-2">◎</span>ガンの特効薬を開発したい</p>
                    <p><span className="text-red-500 font-bold mr-2">✕</span>ガンの特効薬を開発しなければならない</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 Detail Section */}
        <section id="step3-detail" className="py-24 md:py-32 bg-black bg-opacity-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-teal-300">03</h2>
              <h3 className="section-title font-mincho text-3xl md:text-4xl font-bold mt-4 inline-block">未来の記憶を思い出す</h3>
              
              <p className="mt-12 text-4xl md:text-5xl text-center font-bold text-white leading-relaxed">あなたの人生は<br />いま設定した夢で決まる</p>

              <div className="mt-12 pt-8 border-t border-gray-700">
                <p className="mt-4 text-xl md:text-2xl text-gray-300 font-bold leading-relaxed text-center">あなたがいま「思い描く夢」「設定する夢」が<br /><span className="text-teal-300 text-3xl md:text-5xl block mt-4">広大な自己とつながっている</span></p>
              </div>

              <div className="mt-16 text-center">
                <p className="text-3xl md:text-4xl text-yellow-300 font-bold" style={{ textShadow: '0 0 8px rgba(252, 211, 77, 0.5)' }}>とりあえずの夢でもいい</p>
                <p className="mt-6 text-lg md:text-xl text-gray-400">例：独立して、自分の商品やサービスで生計を立てたい</p>
              </div>
            </div>
          </div>
        </section>

        {/* Space Check Section */}
        <section id="space-check" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2111&auto=format&fit=crop')' }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 fade-in">
            <h2 className="font-mincho font-bold text-6xl md:text-8xl text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              スペースチェック
            </h2>
          </div>
        </section>

        {/* Journaling Title Section */}
        <section id="journaling-title" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop')' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 fade-in">
            <h2 className="font-mincho font-bold text-5xl md:text-7xl text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              直観ジャーナリング・ワーク
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-gray-200">思考を挟まず、魂の声に耳を澄ます時間です</p>
          </div>
        </section>

        {/* Question 1 Section */}
        <section id="question-1" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url('https://images.unsplash.com/photo-1517836903269-5ab4b90a6f2c?q=80&w=2070&auto=format&fit=crop')' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-5xl mx-auto fade-in">
            <h3 className="font-mincho font-bold text-3xl md:text-5xl text-white leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              もし、お金や時間、能力といった、<br />あらゆる制限がなかったとしたら…<br />あなたは何を成し遂げたいですか？
            </h3>
          </div>
        </section>

        {/* Question 2 Section */}
        <section id="question-2" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1980&auto=format&fit=crop')' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-5xl mx-auto fade-in">
            <h3 className="font-mincho font-bold text-3xl md:text-5xl text-white leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              あなたがこの世界に、<br />たった一つだけ何かを残せるとしたら…<br />何を残しますか？
            </h3>
          </div>
        </section>

        {/* Question 3 Section */}
        <section id="question-3" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532372576221-f5a38fb11e33?q=80&w=2070&auto=format&fit=crop')` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-5xl mx-auto fade-in">
            <h3 className="font-mincho font-bold text-3xl md:text-5xl text-white leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              未来のあなたは<br />
              「これをするために生まれてきたんだ」<br />
              とわかり、心の底から感動し<br />
              魂が震えるような感覚を覚えています<br />
              どんな感情を味わっていますか？
            </h3>
          </div>
        </section>

        {/* Question 4 Section */}
        <section id="question-4" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1484589065579-248a07199b04?q=80&w=1934&auto=format&fit=crop')` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-5xl mx-auto fade-in">
            <h3 className="font-mincho font-bold text-3xl md:text-5xl text-white leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              「心の底から感動し魂が震える」<br />のはどんなことでしょうか？
            </h3>
          </div>
        </section>

        {/* 5 Compasses Section */}
        <section id="compass" className="py-24 md:py-32 bg-black bg-opacity-20">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center font-mincho text-4xl md:text-5xl font-bold text-white fade-in">夢をパワフルにする5つの羅針盤</h2>
            <div className="mt-16 max-w-4xl mx-auto space-y-8">
              {/* Compass 1 */}
              <div className="glass-card rounded-lg p-8 flex items-center fade-in">
                <svg className="w-12 h-12 text-purple-400 mr-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <div>
                  <h3 className="font-bold text-2xl text-purple-300">過去のできない自分に縛られていないか？</h3>
                  <p className="mt-2 text-gray-400">「どうせ私には無理だ」という過去の声ではなく、未来の無限の可能性に立っているか</p>
                </div>
              </div>
              {/* Compass 2 */}
              <div className="glass-card rounded-lg p-8 flex items-center fade-in">
                <svg className="w-12 h-12 text-blue-400 mr-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                <div>
                  <h3 className="font-bold text-2xl text-blue-300">現在の自分の延長線上にないことか？</h3>
                  <p className="mt-2 text-gray-400">心が本当にワクワクするような、コンフォートゾーンの外側にある夢か</p>
                </div>
              </div>
              {/* Compass 3 */}
              <div className="glass-card rounded-lg p-8 flex items-center fade-in">
                <svg className="w-12 h-12 text-teal-400 mr-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <div>
                  <h3 className="font-bold text-2xl text-teal-300">社会性のあることか？</h3>
                  <p className="mt-2 text-gray-400">喜びが、あなただけのものではなく、家族、友人、社会、世界といった、誰かの喜びにもつながっているか</p>
                </div>
              </div>
              {/* Compass 4 */}
              <div className="glass-card rounded-lg p-8 flex items-center fade-in">
                <svg className="w-12 h-12 text-pink-400 mr-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                <div>
                  <h3 className="font-bold text-2xl text-pink-300">ほんとうに自分が「したい」ことか？</h3>
                  <p className="mt-2 text-gray-400">「〜すべき」「〜ねばならない」という義務感ではなく、「〜したい！」という純粋な欲求か</p>
                </div>
              </div>
              {/* Compass 5 */}
              <div className="glass-card rounded-lg p-8 flex items-center fade-in">
                <svg className="w-12 h-12 text-yellow-400 mr-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l-1.172 1.172a4 4 0 00-5.656 0L9 3m9 18l-1.172-1.172a4 4 0 00-5.656 0L9 21"></path></svg>
                <div>
                   <h3 className="font-bold text-2xl text-yellow-300">その夢が実現したことをイメージしたとき、感動があるか？</h3>
                   <p className="mt-2 text-gray-400">魂が震えるような、温かい、満たされた感覚があるか</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Question Section */}
        <section id="question-5" className="min-h-screen relative flex items-center justify-center text-center p-6 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/seminar/question-5-bg.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 fade-in">
            <h3 className="font-mincho font-bold text-3xl md:text-5xl text-white leading-relaxed" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              あなたの「とんでもなく大きな夢」は？
            </h3>
          </div>
        </section>


        {/* Closing Section */}
        <footer className="py-24 md:py-32 text-center">
            <div className="container mx-auto px-6">
                <h2 className="font-mincho text-4xl md:text-5xl font-bold text-white fade-in">あなたの旅は、ここから始まる</h2>
                <p className="mt-10 max-w-4xl mx-auto text-lg md:text-xl text-gray-400 leading-loose fade-in">
                    今日描いた夢は、これからのあなたの人生を照らす力強い光となります。現実は、あなたの心の状態を映し出す鏡。内側から湧き上がる「こう生きたい」という声に従うとき、世界はあなたを応援し始めます。
                </p>
                <button id="get-support-btn" className="cta-button inline-block text-white font-bold py-4 px-10 rounded-full mt-16 text-xl fade-in">
                    ✨ サポートを受ける
                </button>
                <p className="mt-20 text-gray-500 text-sm fade-in">&copy; 2025 シンプリィライフ. All Rights Reserved.</p>
            </div>
        </footer>
    </main>
    
    <Script src="/js/seminar-animations.js" strategy="lazyOnload" />
</>
  );
}