import { AgeIllustration } from "../illustrations/AgeIllustration";
import { CertificateIllustration } from "../illustrations/CertificateIllustration";
import { DisabilityIllustration } from "../illustrations/DisabilityIllustration";
import { HealthIllustration } from "../illustrations/HealthIllustration";
import { WorkDesireIllustration } from "../illustrations/WorkDesireIllustration";

export function TargetSection() {
  return (
    <section
      id="target"
      className="py-16 bg-pink-50 opacity-75 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ご利用対象者について
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-45" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <DisabilityIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                障害のある方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                身体障害、知的障害、精神障害、発達障害など、さまざまな障害のある方が対象です。
                障害の種類や程度に関わらず、ご相談いただけます。
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-45" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <AgeIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                18歳以上65歳未満の方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                原則として、18歳以上65歳未満の方を対象としています。
                年齢や生活状況に応じた働き方をサポートいたします。
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-45" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <CertificateIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                受給者証をお持ちの方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                障害福祉サービス受給者証をお持ちの方、またはこれから取得予定の方が対象です。
                取得に関するサポートも行っています。
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-45" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <WorkDesireIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                働く意欲のある方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                「働きたい」という気持ちを大切にしています。
                経験やスキルの有無に関わらず、一緒に成長していきましょう。
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-45" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <HealthIllustration />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                通所可能な健康状態
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                週に数日から通所できる健康状態の方を対象としています。
                体調に合わせて、勤務時間の調整も可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
