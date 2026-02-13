import { DiffSection } from '@/components/DiffSection';
import { EnvCard } from '@/components/EnvCard';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans">
      {/* サイドバー */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900 flex flex-col shrink-0">
        <div className="p-6 text-xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
          Yogibo Admin CP
        </div>
        <nav className="flex-1 px-4 space-y-6 overflow-y-auto">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Code Sync</p>
            <ul className="space-y-1">
              <li className="px-3 py-2 bg-rose-500/10 text-rose-400 rounded-md cursor-pointer">プロジェクト基本設定</li>
              <li className="px-3 py-2 hover:bg-slate-800 rounded-md cursor-pointer transition-colors text-slate-400">ネットワーク構築</li>
              <li className="px-3 py-2 hover:bg-slate-800 rounded-md cursor-pointer transition-colors text-slate-400">機密情報管理</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Environments</p>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 px-3 py-2 hover:bg-slate-800 rounded-md cursor-pointer italic text-slate-400"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Production</li>
              <li className="flex items-center gap-2 px-3 py-2 hover:bg-slate-800 rounded-md cursor-pointer italic text-slate-400"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Staging</li>
              <li className="flex items-center gap-2 px-3 py-2 hover:bg-slate-800 rounded-md cursor-pointer text-blue-400 font-bold"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Development</li>
            </ul>
            <button className="mt-4 w-full py-2 border border-dashed border-slate-700 rounded-md text-sm hover:border-slate-500 transition-all text-slate-500">+ 新規環境を追加</button>
          </div>
        </nav>
      </aside>

      {/* メインエリア */}
      <main className="flex-1 overflow-y-auto bg-slate-950">
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-900/50 sticky top-0 z-10">
          <div className="text-sm font-medium">szlife-admin-shared / <span className="text-rose-400 font-bold">プロジェクト基本設定</span></div>
          <div className="flex items-center gap-4 text-xs text-slate-500 italic">Connected: szlife-github-repo</div>
        </header>

        <div className="p-8 space-y-10">
          {/* Diff Section */}
          <DiffSection />

          {/* Environment Cards */}
          <section>
            <h2 className="text-lg font-bold mb-4">Environment Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EnvCard envName="Production" status="Active" version="v1.0.2" canUpdate={false} />
              <EnvCard envName="Staging" status="Pending" version="v1.0.3" canUpdate={true} />
              <EnvCard envName="Dev-OTA" status="Active" version="v1.0.3" canUpdate={false} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
