// 若い男性のバストアップイラスト
export function PersonYoungMale() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 顔 */}
      <ellipse cx="50" cy="42" rx="16" ry="18" fill="#FFE8D6" stroke="#8B4513" strokeWidth="1.5" />
      
      {/* 髪 - 短髪（茶色） */}
      <path d="M34 32 Q34 20 42 18 Q50 16 58 18 Q66 20 66 32 L66 38 Q66 42 64 42 L36 42 Q34 42 34 38 Z" 
            fill="#8B6F47" stroke="#6B5435" strokeWidth="1.5" />
      
      {/* 耳 */}
      <ellipse cx="34" cy="42" rx="3" ry="5" fill="#FFD4B3" stroke="#8B4513" strokeWidth="1" />
      <ellipse cx="66" cy="42" rx="3" ry="5" fill="#FFD4B3" stroke="#8B4513" strokeWidth="1" />
      
      {/* 眉毛 */}
      <path d="M40 36 Q43 35 46 36" stroke="#6B5435" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 36 Q57 35 60 36" stroke="#6B5435" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* 目 */}
      <circle cx="43" cy="40" r="2" fill="#2C1810" />
      <circle cx="57" cy="40" r="2" fill="#2C1810" />
      <circle cx="43.5" cy="39.5" r="0.8" fill="white" />
      <circle cx="57.5" cy="39.5" r="0.8" fill="white" />
      
      {/* 頬の赤み */}
      <ellipse cx="38" cy="46" rx="4" ry="3" fill="#FFB6B6" opacity="0.4" />
      <ellipse cx="62" cy="46" rx="4" ry="3" fill="#FFB6B6" opacity="0.4" />
      
      {/* 鼻 */}
      <path d="M50 44 L48 48" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" />
      
      {/* 口 - 笑顔 */}
      <path d="M43 50 Q50 54 57 50" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      
      {/* 首 */}
      <rect x="45" y="58" width="10" height="8" fill="#FFE8D6" stroke="#8B4513" strokeWidth="1.5" />
      
      {/* 服（グレーのシャツ） */}
      <path d="M32 66 L32 85 Q32 90 37 90 L63 90 Q68 90 68 85 L68 66 Q68 64 66 64 L60 64 L55 62 L45 62 L40 64 L34 64 Q32 64 32 66 Z" 
            fill="#E8E8E8" stroke="#8B4513" strokeWidth="1.5" />
      
      {/* 襟 */}
      <path d="M45 62 L48 68 L50 66 L52 68 L55 62" stroke="#8B4513" strokeWidth="1.5" fill="none" />
    </svg>
  );
}