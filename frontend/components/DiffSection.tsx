"use client"; // インタラクティブな動作のために必要

export const DiffSection = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end">
        <h2 className="text-lg font-bold border-l-4 border-rose-500 pl-3">AIコード生成と差分確認</h2>
        <button className="bg-rose-600 hover:bg-rose-500 px-6 py-2 rounded-lg font-bold shadow-lg shadow-rose-900/40 transition-all active:scale-95 text-white">
          GitHubへ保存（コミット）
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono text-xs md:text-sm">
        <div className="bg-slate-900 p-5 rounded-xl border border-rose-900/30 ring-1 ring-rose-500/20">
          <p className="text-xs text-rose-400 mb-3 font-sans font-bold">✦ AI生成（設定書 Ver.2）</p>
          <pre className="overflow-x-auto leading-relaxed">
{`resource "google_project_service" "api" {
  project = var.project_id
  service = "cloudrun.googleapis.com"
`}
<span className="bg-red-900/50 text-red-200 block w-full px-1 font-bold">+ disable_on_destroy = false</span>
{`}`}
          </pre>
        </div>
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 opacity-60">
          <p className="text-xs text-slate-500 mb-3 font-sans">GitHub現行コード</p>
          <pre className="overflow-x-auto leading-relaxed text-slate-400">
{`resource "google_project_service" "api" {
  project = var.project_id
  service = "cloudrun.googleapis.com"
}`}
          </pre>
        </div>
      </div>
    </section>
  );
};
