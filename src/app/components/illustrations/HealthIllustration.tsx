// 健康状態のイラスト
export function HealthIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ハート＋チェックマーク */}
      <path d="M60 85 C60 85 30 65 30 45 C30 35 35 30 42 30 C48 30 54 35 60 42 C66 35 72 30 78 30 C85 30 90 35 90 45 C90 65 60 85 60 85 Z" 
            stroke="#EC4899" strokeWidth="2" fill="none" />
      {/* チェックマーク */}
      <circle cx="60" cy="50" r="15" fill="white" />
      <circle cx="60" cy="50" r="15" stroke="#EC4899" strokeWidth="2" fill="none" />
      <path d="M52 50 L57 55 L68 44" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
