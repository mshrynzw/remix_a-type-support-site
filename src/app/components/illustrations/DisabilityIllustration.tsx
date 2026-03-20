// 障害のある方のイラスト
export function DisabilityIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 人物 - 車椅子のシンプルなイラスト */}
      <circle cx="60" cy="30" r="12" stroke="#EC4899" strokeWidth="2" fill="none" />
      <path d="M60 42 L60 70" stroke="#EC4899" strokeWidth="2" />
      <path d="M45 55 L60 55 L75 55" stroke="#EC4899" strokeWidth="2" />
      {/* 車椅子の車輪 */}
      <circle cx="48" cy="90" r="15" stroke="#EC4899" strokeWidth="2" fill="none" />
      <circle cx="72" cy="90" r="15" stroke="#EC4899" strokeWidth="2" fill="none" />
      {/* 車椅子のフレーム */}
      <path d="M60 70 L48 90 M60 70 L72 90" stroke="#EC4899" strokeWidth="2" />
      <path d="M48 75 L72 75" stroke="#EC4899" strokeWidth="2" />
    </svg>
  );
}
