export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          お問い合わせ
        </h2>
        <div className="max-w-2xl mx-auto bg-pink-50 p-8 rounded-lg">
          <p className="text-center text-gray-700 mb-6">
            見学や体験利用も随時受け付けています。
            <br />
            お気軽にお問い合わせください。
          </p>
          <div className="text-center space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">お電話でのお問い合わせ</p>
              <p className="text-2xl font-bold text-pink-500">000-0000-0000</p>
              <p className="text-sm text-gray-600 mt-1">受付時間：平日 9:00〜17:00</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-600 mb-1">所在地</p>
              <p className="text-gray-700">〒000-0000</p>
              <p className="text-gray-700">東京都○○区○○ 1-2-3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

