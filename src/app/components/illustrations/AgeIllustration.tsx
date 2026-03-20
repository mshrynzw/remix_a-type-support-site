// 年齢制限のイラスト（18歳以上65歳未満）
export function AgeIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* カレンダー/年齢を表すイラスト */}
      <rect x="25" y="25" width="70" height="70" rx="4" stroke="#EC4899" strokeWidth="2" fill="none" />
      <rect x="25" y="25" width="70" height="15" fill="#FFC0CB" />
      <circle cx="37" cy="32.5" r="2" fill="#EC4899" />
      <circle cx="83" cy="32.5" r="2" fill="#EC4899" />
      {/* 18の数字 */}
      <text x="45" y="65" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#EC4899">18</text>
      <text x="42" y="85" fontFamily="Arial" fontSize="12" fill="#EC4899">歳以上</text>
    </svg>
  );
}
