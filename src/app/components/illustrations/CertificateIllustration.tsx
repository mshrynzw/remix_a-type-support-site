// 障害福祉サービス受給者証のイラスト
export function CertificateIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 証書・カードのイラスト */}
      <rect x="20" y="35" width="80" height="50" rx="4" stroke="#EC4899" strokeWidth="2" fill="none" />
      <rect x="30" y="45" width="60" height="4" fill="#FFC0CB" />
      <rect x="30" y="55" width="45" height="3" fill="#FFC0CB" />
      <rect x="30" y="63" width="50" height="3" fill="#FFC0CB" />
      <rect x="30" y="71" width="35" height="3" fill="#FFC0CB" />
      {/* 認証マーク */}
      <circle cx="85" cy="65" r="8" stroke="#EC4899" strokeWidth="2" fill="none" />
      <path d="M82 65 L84 67 L88 63" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
