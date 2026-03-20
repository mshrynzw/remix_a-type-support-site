import {
  EndIcon,
  LunchIcon,
  ReceptionIcon,
  WorkIcon,
} from "../illustrations/ScheduleIcons";

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          一日のスケジュール
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
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
  );
}

