import { DisabilityIllustration } from "./illustrations/DisabilityIllustration";
import { AgeIllustration } from "./illustrations/AgeIllustration";
import { CertificateIllustration } from "./illustrations/CertificateIllustration";
import { WorkDesireIllustration } from "./illustrations/WorkDesireIllustration";
import { HealthIllustration } from "./illustrations/HealthIllustration";
import { PersonYoungMale } from "./illustrations/PersonYoungMale";
import { PersonMiddleFemale } from "./illustrations/PersonMiddleFemale";
import { PersonOlderMale } from "./illustrations/PersonOlderMale";
import { PersonYoungFemale } from "./illustrations/PersonYoungFemale";
import { ReceptionIcon, LunchIcon, WorkIcon, EndIcon } from "./illustrations/ScheduleIcons";

export function HomePage() {
  return (
    <div className="relative">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-pink-50 to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              あなたらしく働く場所
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              就労継続支援A型事業所として、<br />
              一人ひとりに寄り添った就労支援を提供します
            </p>
            <a
              href="#contact"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* 事業所についてセクション */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            A型事業所とは
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              就労継続支援A型事業所は、障害のある方が雇用契約を結んで働くことができる福祉サービスです。
              最低賃金以上の給与を受け取りながら、自分のペースで働くことができます。
            </p>
            <p className="text-gray-700 leading-relaxed">
              私たちの事業所では、一人ひとりの特性や希望に合わせた業務内容を提供し、
              安心して長く働ける環境づくりを心がけています。
            </p>
          </div>
        </div>
      </section>

      {/* ご利用対象者についてセクション */}
      <section id="target" className="py-16 bg-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ご利用対象者について
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 障害のある方 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <DisabilityIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                障害のある方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                身体障害、知的障害、精神障害、発達障害など、何らかの障害をお持ちの方が対象です。
                障害の種類や程度に関わらず、ご相談いただけます。
              </p>
            </div>

            {/* 年齢制限 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <AgeIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                18歳以上65歳未満の方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                原則として18歳以上65歳未満の方が対象となります。
                年齢や生活状況に応じた働き方をサポートいたします。
              </p>
            </div>

            {/* 受給者証 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <CertificateIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                受給者証をお持ちの方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                障害福祉サービス受給者証をお持ちの方、
                またはこれから取得予定の方が対象です。
                取得のサポートも行っています。
              </p>
            </div>

            {/* 働く意欲 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <WorkDesireIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                働く意欲のある方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                「働きたい」という気持ちを大切にします。
                経験やスキルは問いません。一緒に成長していきましょう。
              </p>
            </div>

            {/* 健康状態 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <HealthIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                通所可能な健康状態
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                週に数日からでも通所できる健康状態の方が対象です。
                体調に合わせた勤務時間の調整も可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 一日のスケジュールセクション */}
      <section id="schedule" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            一日のスケジュール
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* 10:00 受付/準備開始 */}
              <div className="bg-pink-50 p-6 rounded-lg flex items-start gap-6">
                <div className="flex-shrink-0">
                  <ReceptionIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    10:00
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    受付・準備開始
                  </h3>
                  <p className="text-gray-600">
                    朝はゆっくり出勤できます。体調など自由に相談できます。
                  </p>
                </div>
              </div>

              {/* 12:00前後 お昼休憩 */}
              <div className="bg-pink-50 p-6 rounded-lg flex items-start gap-6">
                <div className="flex-shrink-0">
                  <LunchIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    12:00前後
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    お昼休憩
                  </h3>
                  <p className="text-gray-600">
                    ゆっくりお昼を食べて休憩を取ります。仲間と楽しくおしゃべりも！
                  </p>
                </div>
              </div>

              {/* 14:00頃 業務再開 */}
              <div className="bg-pink-50 p-6 rounded-lg flex items-start gap-6">
                <div className="flex-shrink-0">
                  <WorkIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    14:00頃
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    業務再開
                  </h3>
                  <p className="text-gray-600">
                    午後も自分のペースで業務を続けます。無理なく働けます。
                  </p>
                </div>
              </div>

              {/* 16:00頃 就労終了 */}
              <div className="bg-pink-50 p-6 rounded-lg flex items-start gap-6">
                <div className="flex-shrink-0">
                  <EndIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    16:00頃
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    就労終了
                  </h3>
                  <p className="text-gray-600">
                    仕事を終え、また明日元気に会いましょう！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メンバーさん（ご利用者）の声セクション */}
      <section id="voices" className="py-16 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            メンバーさん（ご利用者）の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 20代男性 */}
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

            {/* 40代女性 */}
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

            {/* 50代男性 */}
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

            {/* 30代女性 */}
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

      {/* お問い合わせセクション */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            お問い合わせ
          </h2>
          <div className="max-w-2xl mx-auto bg-pink-50 p-8 rounded-lg">
            <p className="text-center text-gray-700 mb-6">
              見学や体験利用も随時受け付けています。<br />
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
    </div>
  );
}
