import { PersonMiddleFemale } from "../illustrations/PersonMiddleFemale";
import { PersonOlderMale } from "../illustrations/PersonOlderMale";
import { PersonYoungFemale } from "../illustrations/PersonYoungFemale";
import { PersonYoungMale } from "../illustrations/PersonYoungMale";

export function VoicesSection() {
  return (
    <section
      id="voices"
      className="py-16 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          メンバーさん（ご利用者）の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-shrink-0">
                <PersonYoungMale />
              </div>
              <div>
                <p className="text-pink-500 font-bold text-sm mb-1">20代・男性</p>
                <p className="text-gray-600 text-sm">利用歴：1年</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              「自分のペースで働けるので、無理なく続けられています。
              スタッフの方々も優しく、困ったことがあればすぐに相談できる環境です。
              ここで働き始めて、自信がつきました。」
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-shrink-0">
                <PersonMiddleFemale />
              </div>
              <div>
                <p className="text-pink-500 font-bold text-sm mb-1">40代・女性</p>
                <p className="text-gray-600 text-sm">利用歴：2年</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              「長い間働くことに不安を感じていましたが、
              ここでは無理のない業務内容と丁寧なサポートで安心して働けています。
              仲間もでき、毎日通所するのが楽しみです。」
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-shrink-0">
                <PersonOlderMale />
              </div>
              <div>
                <p className="text-pink-500 font-bold text-sm mb-1">50代・男性</p>
                <p className="text-gray-600 text-sm">利用歴：3年</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              「年齢的にも不安がありましたが、自分に合った仕事を見つけることができました。
              給与をいただきながら働けるので、生活も安定してきました。
              スタッフの皆さんに感謝しています。」
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-shrink-0">
                <PersonYoungFemale />
              </div>
              <div>
                <p className="text-pink-500 font-bold text-sm mb-1">30代・女性</p>
                <p className="text-gray-600 text-sm">利用歴：6ヶ月</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              「最初は緊張していましたが、明るい雰囲気の職場で
              すぐに馴染むことができました。自分のできることから始められるので、
              無理なくステップアップしていけます。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

