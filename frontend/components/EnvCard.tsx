"use client";

interface EnvCardProps {
  envName: string;
  status: 'Active' | 'Pending' | '未構築';
  version: string;
  canUpdate: boolean;
}

export const EnvCard = ({ envName, status, version, canUpdate }: EnvCardProps) => {
  return (
    <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all shadow-xl group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-rose-400 transition-colors">
            {envName}
          </h3>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Current: <span className="text-slate-300">{version}</span>
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 
            status === 'Pending' ? 'bg-amber-500/10 text-amber-400' : 
            'bg-slate-700/50 text-slate-400'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              status === 'Active' ? 'bg-emerald-500 animate-pulse' : 
              status === 'Pending' ? 'bg-amber-500' : 'bg-slate-500'
            }`}></span>
            {status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <button 
          disabled={!canUpdate && status !== '未構築'}
          className={`py-2 rounded-lg font-bold text-sm transition-all shadow-inner ${
            canUpdate || status === '未構築'
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20' 
              : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
          }`}
        >
          {status === '未構築' ? '新規構築' : '更新 (Apply)'}
        </button>
        <button className="py-2 border border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-all text-slate-400">
          履歴参照
        </button>
      </div>
      
      {canUpdate && (
        <p className="text-[10px] text-amber-500 mt-3 italic animate-bounce text-center">
          ⚠️ GitHubに新しいバージョンがあります
        </p>
      )}
    </div>
  );
};
