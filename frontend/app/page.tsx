"use client";
import React from 'react';
import DiffSection from '../components/DiffSection';
import { Layout, Globe, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* サイドバー（既存の資産と調和させる） */}
      <aside className="w-64 border-r border-slate-800 p-6 bg-slate-950">
        <h1 className="text-xl font-bold mb-8 text-blue-500">Yogibo Admin</h1>
        <nav className="space-y-4">
          <div className="text-xs text-slate-500 uppercase tracking-widest">Code Sync</div>
          <div className="flex items-center gap-3 p-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30"><Globe size={18}/> ネットワーク構築</div>
          <div className="flex items-center gap-3 p-2 text-slate-400 hover:bg-slate-800 rounded-lg"><Layout size={18}/> プロジェクト設定</div>
        </nav>
      </aside>

      {/* メインエリア：ここに既存の DiffSection を流し込みます */}
      <main className="flex-1 overflow-auto p-8">
        <DiffSection />
      </main>
    </div>
  );
}
