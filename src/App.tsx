import React, { useState } from 'react';
import { 
  Database, 
  Search, 
  BarChart3, 
  BrainCircuit, 
  ChevronRight, 
  Code2, 
  Calculator, 
  Layers,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Terminal,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data & Constants ---

const STEPS = [
  {
    id: 1,
    title: '数据生成与模拟',
    icon: <Database className="w-6 h-6" />,
    library: 'NumPy',
    math: '概率分布 / 正态分布',
    description: '使用随机过程模拟真实的身高体重。在数学上，这就是从特定概率密度函数中进行采样。',
    code: `heights = np.random.normal(170, 10, 1000)\n# 模拟无效记录\nheights[:20] = np.random.uniform(50, 300, 20)`,
    thought: '数据不是天上掉下来的。在没有真实数据前，科学家用数学分布来构建基准模型。'
  },
  {
    id: 2,
    title: '科学清洗与统计',
    icon: <Search className="w-6 h-6" />,
    library: 'Pandas',
    math: '统计学 / Z-Score (标准差)',
    description: '通过计算均值和标准差，判定哪些数据属于“离群点”。3σ原则是数学上界定异常的经典方法。',
    code: `df_clean = df[(df['height'] > mean - 3*std) & (df['height'] < mean + 3*std)]`,
    thought: '垃圾进，垃圾出。剔除异常值是为了保证回归直线的斜率不被错误样本带偏。'
  },
  {
    id: 3,
    title: '多维关联可视化',
    icon: <BarChart3 className="w-6 h-6" />,
    library: 'Seaborn / Matplotlib',
    math: '统计学 / 相关系数 (Correlation)',
    description: '分析变量间的同步变化强度。热力图和配对图是对高维向量空间的投影展示。',
    code: `sns.heatmap(df.corr(), annot=True)\nsns.pairplot(df, hue='health_status')`,
    thought: '图表不仅是给看的，它是为了发现特征之间的共线性。'
  },
  {
    id: 4,
    title: '机器学习预测',
    icon: <BrainCircuit className="w-6 h-6" />,
    library: 'Scikit-learn',
    math: '微积分 (最优化) / 概率 (软分类)',
    description: '模型通过梯度下降等迭代算法寻找损失函数最小值，并最终输出属于某一类别的概率。',
    code: `model.fit(X_train, y_train)\nprobs = model.predict_proba(X_test)`,
    thought: 'AI的本质是求解一个超高维度的方程组，找到能让预测误差最小的那组参数。'
  }
];

const MATH_MAPPING = [
  { lib: 'NumPy', concept: '线性代数 / 矩阵运算', usage: '多维阵列的向量化并行计算', icon: <Layers className="text-blue-500" /> },
  { lib: 'Pandas', concept: '描述性统计', usage: '均值、分位数、数据清洗逻辑', icon: <FileCode className="text-green-500" /> },
  { lib: 'Matplotlib', concept: '解析几何 / 函数图像', usage: '坐标轴转换、数据空间映射', icon: <Activity className="text-purple-500" /> },
  { lib: 'Sklearn', concept: '最优化理论 / 导数与偏导数', usage: '梯度下降寻找模型最优解', icon: <BrainCircuit className="text-orange-500" /> },
];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex bg-bg-main min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-[260px] bg-bg-sidebar text-[#F8FAFC] flex flex-col p-6 shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div className="font-bold text-lg tracking-tight">SciAnalyst</div>
        </div>

        <nav className="space-y-1 flex-grow">
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] mb-4 ml-4">
            Analysis Pipeline
          </div>
          {STEPS.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 group ${
                activeStep === idx 
                  ? 'bg-accent text-white font-medium shadow-lg shadow-accent/20' 
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className={activeStep === idx ? 'text-white' : 'text-white/40 group-hover:text-white/70'}>
                {step.icon}
              </div>
              <span>{step.title}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="bg-black/20 p-4 rounded-xl font-mono text-[10px] leading-relaxed">
            <div className="opacity-40 mb-2 uppercase tracking-widest font-bold">Environment</div>
            <div className="text-white/80">Python 3.11 (uv managed)</div>
            <div className="text-accent">.venv-ds-thinking</div>
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col p-6 gap-6 h-screen overflow-hidden">
        {/* Header Row */}
        <header className="flex justify-between items-center bg-white px-6 h-16 rounded-2xl border border-border-theme shrink-0 shadow-sm">
          <div className="text-xs text-text-secondary flex items-center gap-2">
            Projects <ChevronRight className="w-3 h-3" /> DS_Study_A <ChevronRight className="w-3 h-3" /> 
            <strong className="text-text-primary font-bold">Step {activeStep + 1}: {STEPS[activeStep].library}</strong>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#DCFCE7] text-[#166534] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Live Analysis
            </div>
            <button className="bg-accent text-white px-4 py-1.5 rounded-lg text-[11px] font-bold hover:bg-accent/90 transition-colors shadow-sm">
              Refresh Execution
            </button>
          </div>
        </header>

        {/* Content Area Row */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-0 overflow-y-auto pr-1">
          {/* Analysis Card */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-border-theme p-8 flex flex-col shadow-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="p-3 bg-accent-soft rounded-xl text-accent">
                {STEPS[activeStep].icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-primary leading-none mb-1">{STEPS[activeStep].title}</h2>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">Using Library: {STEPS[activeStep].library}</p>
              </div>
            </div>

            <div className="flex-1 space-y-8">
              <section>
                <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.1em] mb-3">Scientific Hypothesis / Goal</div>
                <p className="text-text-primary text-sm leading-relaxed font-medium">
                  {STEPS[activeStep].description}
                </p>
              </section>

              <div className="p-5 bg-bg-main rounded-xl border border-border-theme">
                <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.1em] mb-3 flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Thinking Process
                </div>
                <p className="font-mono text-xs text-slate-600 leading-relaxed italic">
                   " {STEPS[activeStep].thought} "
                </p>
              </div>

              <section className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border-theme bg-white">
                  <div className="text-[9px] font-bold text-text-secondary uppercase tracking-widest mb-1">Mathematical Mapping</div>
                  <div className="text-sm font-bold text-accent">{STEPS[activeStep].math}</div>
                </div>
                <div className="p-4 rounded-xl border border-border-theme bg-white">
                  <div className="text-[9px] font-bold text-text-secondary uppercase tracking-widest mb-1">Execution Speed</div>
                  <div className="text-sm font-bold text-[#166534]">~145ms (Optimized)</div>
                </div>
              </section>
            </div>
          </div>

          {/* Code & Mapping Side Card */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#0F172A] rounded-2xl p-6 flex-1 shadow-xl flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Scientific Implementation</div>
                <Code2 className="w-4 h-4 text-white/20" />
              </div>
              <div className="flex-1 font-mono text-xs overflow-auto">
                <pre className="text-indigo-300 leading-6">
                  <code>{STEPS[activeStep].code}</code>
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border-theme p-6 shadow-sm">
              <h4 className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-4">Library Foundations</h4>
              <div className="space-y-4">
                {MATH_MAPPING.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-bg-main flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-text-primary">{item.lib}</div>
                      <div className="text-[9px] text-text-secondary">{item.concept}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Logs Row */}
        <section className="bg-[#0F172A] h-[160px] rounded-2xl p-5 shrink-0 overflow-hidden font-mono shadow-2xl relative">
          <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-3 sticky top-0 bg-[#0F172A]">
            Terminal Pipeline Logs
          </div>
          <div className="space-y-1 overflow-y-auto h-full pr-2 text-[11px]">
            <div className="flex gap-3">
              <span className="text-white/20">[14:20:01]</span>
              <span className="text-blue-400 font-bold">[INFO]</span>
              <span className="text-white/60 underline decoration-white/10 decoration-dashed underline-offset-4">uv .venv</span> active. Successfully established environment context.
            </div>
            <div className="flex gap-3">
              <span className="text-white/20">[14:20:02]</span>
              <span className="text-blue-400 font-bold">[INFO]</span>
              <span className="text-white/80 italic">import {STEPS[activeStep].library} as ds_core...</span>
            </div>
            <div className="flex gap-3">
              <span className="text-white/20">[14:20:03]</span>
              <span className="text-emerald-400 font-bold">[DONE]</span>
              <span className="text-white/80">Analysis step {activeStep + 1} finalized. Numerical precision within safety bounds.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-white/20">[14:20:04]</span>
              <span className="text-white/40">{">>>"} python step{activeStep + 1}_exec.py --debug</span>
            </div>
            <div className="flex gap-3 pt-2">
              <span className="text-white/20">[14:20:05]</span>
              <span className="text-indigo-400 font-bold">[PROC]</span>
              <span className="text-white/60">Mapping outputs to visual coordinate space using Matplotlib...</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-6 text-[9px] text-white/10 font-bold uppercase tracking-widest">
            Pipeline v1.0.4-stable
          </div>
        </section>
      </main>
    </div>
  );
}

