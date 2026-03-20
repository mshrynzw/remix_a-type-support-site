// スケジュール用のアイコン

export function ReceptionIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 時計 */}
      <circle cx="30" cy="30" r="20" stroke="#EC4899" strokeWidth="2" fill="none" />
      <path d="M30 15 L30 30 L40 35" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="30" r="2" fill="#EC4899" />
    </svg>
  );
}

export function LunchIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* お弁当箱 */}
      <rect x="15" y="25" width="30" height="20" rx="2" stroke="#EC4899" strokeWidth="2" fill="none" />
      <line x1="15" y1="32" x2="45" y2="32" stroke="#EC4899" strokeWidth="2" />
      <circle cx="25" cy="37" r="3" stroke="#EC4899" strokeWidth="1.5" fill="none" />
      <rect x="32" y="35" width="8" height="5" stroke="#EC4899" strokeWidth="1.5" fill="none" />
      <line x1="20" y1="28" x2="40" y2="28" stroke="#EC4899" strokeWidth="1.5" />
    </svg>
  );
}

export function WorkIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* パソコン */}
      <rect x="15" y="20" width="30" height="20" stroke="#EC4899" strokeWidth="2" fill="none" />
      <rect x="12" y="40" width="36" height="3" stroke="#EC4899" strokeWidth="2" fill="none" />
      <line x1="24" y1="43" x2="36" y2="43" stroke="#EC4899" strokeWidth="2" />
      {/* 画面 */}
      <rect x="18" y="23" width="24" height="14" stroke="#EC4899" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function EndIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ドア */}
      <rect x="20" y="15" width="20" height="30" rx="1" stroke="#EC4899" strokeWidth="2" fill="none" />
      <circle cx="35" cy="30" r="1.5" fill="#EC4899" />
      <path d="M25 20 L25 40 M30 20 L30 40 M35 20 L35 40" stroke="#EC4899" strokeWidth="1" />
      <rect x="18" y="45" width="24" height="2" fill="#EC4899" />
    </svg>
  );
}
