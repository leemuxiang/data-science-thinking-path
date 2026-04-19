# 数据科学思维导图 (Data Science Thinking Path)

[![Python Support](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/)
[![Env Managed by uv](https://img.shields.io/badge/Env-uv-green.svg)](https://github.com/astral-sh/uv)
[![Design-Professional_Polish](https://img.shields.io/badge/Design-Professional_Polish-blueviolet.svg)](#)

这是一个专为学习数据科学方法论而设计的全栈应用。它通过一个**身高体重健康分析**的实际案例，演示了如何使用 Python 的现代工具链（Pandas, NumPy, Scikit-learn）进行科学分析，并深度关联了背后的数学基石（线性代数、统计学、微积分）。

## 🌟 特色功能
- **反向映射学习法**：不直接教授枯燥数学，而是通过代码功能反推所需的数学知识。
- **专业工作台界面**：基于 React 构建的 Professional Polish 主题，提供沉浸式的分析体验。
- **现代化 Python 工具链**：完全兼容 Windows 平台，采用 `uv` 进行零配置环境同步。
- **闭环实战脚本**：从模拟数据生成到异常值清洗，再到机器学习概率预测。

## 📂 目录结构
- `/src`: 前端 React 展示源码。
- `/docs`: 详细项目文档（设计、脚本说明、部署指南）。
- `/step1_generate.py`: 步骤一：数据模拟。
- `/step2_analyze.py`: 步骤二：科学分析与清洗。
- `/step3_ml.py`: 步骤三：机器学习建模。
- `pyproject.toml`: UV 项目依赖配置。

## 🚀 快速上手 (Windows)

### 1. 克隆并进入项目
```bash
git clone <project-url>
cd ds-thinking-path
```

### 2. 同步 Python 环境 (使用 uv)
```bash
uv sync
```

### 3. 执行数据分析工作流
```bash
uv run step1_generate.py
uv run step2_analyze.py
uv run step3_ml.py
```

### 4. 运行 Web 面板
```bash
npm install
npm run dev
```

## 📖 详细文档
- 📘 [设计理念与数学映射](./docs/DESIGN.md)
- 🐍 [Python 脚本参数说明](./docs/SCRIPTS.md)
- ⚙️ [部署与工程化配置](./docs/DEPLOYMENT.md)

### 核心库使用指南 (Python Libraries)
- 🔢 [NumPy - 数组与采样](./docs/NUMPY_GUIDE.md)
- 🐼 [Pandas - 数据清洗与分析](./docs/PANDAS_GUIDE.md)
- 📈 [Matplotlib - 基础图形绘制](./docs/MATPLOTLIB_GUIDE.md)
- 🎨 [Seaborn - 统计可视化](./docs/SEABORN_GUIDE.md)
- 🤖 [Scikit-learn - 机器学习](./docs/SKLEARN_GUIDE.md)

## ⚖️ 许可证
Apache-2.0
