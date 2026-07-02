import { Post } from '@/lib/types'

export function ImageDisplay({ post }: { post: Post }) {
  // 画像がある場合
  if (post.mainImage?.asset?.url) {
    return (
      <div className="blog-page-post-card-image">
        <img 
          src={post.mainImage.asset.url} 
          alt={post.title}
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      </div>
    )
  }
  
  // 画像がない場合（グラデーション）
  return (
    <div 
      className="blog-page-post-card-image" 
      style={{ 
        background: 'linear-gradient(45deg, #007bff, #00d2ff)', 
        width: '100%', 
        height: '200px', 
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px'
      }}
    >
      画像なし
    </div>
  )
}