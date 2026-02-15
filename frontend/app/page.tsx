"use client";
import React, { useState } from 'react';
import { Layout, Globe, Lock, AlertTriangle, GitCommit } from 'lucide-react';

export default function AdminPanel() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 1. ナビゲーション（左サイドバー） */}
      <aside className="w-64 border-r border-slate-700 flex flex-col bg-slate-800">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold tracking-tighter text-blue-400">Yogibo Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-6">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-3">コード生成・同期</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 cursor-pointer"><Layout size={18}/> プロジェクト基本設定</li>
              <li className="flex items-center gap-3 p-2 rounded bg-blue-600 text-white cursor-pointer"><Globe size={18}/> ネットワーク構築</li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 cursor-pointer"><Lock size={18}/> 機密情報管理</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-3">環境デプロイ</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 cursor-pointer"><span className="w-2 h-2 rounded-full bg-red-500"></span> 本番環境</li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 cursor-pointer"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> ステージング</li>
              <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-700 cursor-pointer"><span className="w-2 h-2 rounded-full bg-blue-500"></span> 開発環境</li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* 2. メインコンテンツ */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-slate-700 flex items-center justify-between px-8 bg-slate-800/50">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-medium">ネットワーク構築</h2>
            <span className="px-2 py-1 rounded text-xs bg-yellow-900/30 text-yellow-400 border border-yellow-700/50 flex items-center gap-1">
              <AlertTriangle size={12}/> 未同期の差分あり
            </span>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm font-semibold transition">
            <GitCommit size={18}/> GitHubへ保存 (Commit)
          </button>
        </header>

        <section className="flex-1 flex gap-px bg-slate-700">
          <div className="flex-1 bg-slate-900 p-6 overflow-auto">
            <p className="text-xs text-slate-500 mb-4 uppercase">AI生成 / 設定書ベース (New)</p>
            <pre className="text-sm font-mono text-green-400">
{`resource "google_compute_network" "vpc" {
+ name = "yogibo-vpc-main"
+ auto_create_subnetworks = false
}`}
            </pre>
          </div>
          <div className="flex-1 bg-slate-900 p-6 overflow-auto border-l border-slate-700 text-slate-400">
            <p className="text-xs text-slate-500 mb-4 uppercase">GitHub 現行コード (Current)</p>
            <pre className="text-sm font-mono">
{`resource "google_compute_network" "vpc" {
  name = "szlife-vpc"
  auto_create_subnetworks = false
}`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
