"use client";
import React from 'react';
import { GitCommit, AlertTriangle } from 'lucide-react';

export default function DiffSection() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">ネットワーク構築</h2>
          <span className="px-2 py-1 rounded text-xs bg-yellow-900/30 text-yellow-400 border border-yellow-700/50 flex items-center gap-1">
            <AlertTriangle size={12}/> 未同期の差分あり
          </span>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm font-semibold">
          <GitCommit size={18}/> GitHubへ保存
        </button>
      </header>
      <div className="flex-1 grid grid-cols-2 gap-px bg-slate-700 rounded-xl overflow-hidden border border-slate-700">
        <div className="bg-slate-900 p-6 overflow-auto">
          <p className="text-[10px] text-green-400 font-bold mb-4 uppercase">AI Proposed Plan</p>
          <pre className="text-sm font-mono text-green-400 leading-relaxed">
{`resource "google_compute_network" "vpc" {
+ name = "yogibo-vpc-main"
+ auto_create_subnetworks = false
}`}
          </pre>
        </div>
        <div className="bg-slate-900 p-6 overflow-auto border-l border-slate-800 text-slate-500">
          <p className="text-[10px] text-slate-500 font-bold mb-4 uppercase">Current GitHub</p>
          <pre className="text-sm font-mono leading-relaxed">
{`resource "google_compute_network" "vpc" {
  name = "szlife-vpc"
  auto_create_subnetworks = false
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
