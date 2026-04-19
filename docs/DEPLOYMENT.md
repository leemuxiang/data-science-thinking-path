# 部署与环境配置 (Deployment Guide)

本项目推荐在 Windows 平台使用 `uv` 进行部署。

## 1. 环境准备
- **操作系统**: Windows 10/11 (推荐使用 PowerShell 或 Windows Terminal)。
- **工具**: [uv](https://github.com/astral-sh/uv) (极速 Python 包管理工具)。

## 2. 安装 uv
在 PowerShell 中运行以下官方安装命令：
```powershell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

## 3. 初始化项目
进入项目根目录：
```bash
# 自动创建虚拟环境并安装所有依赖
uv sync
```

## 4. 依赖项说明 (Dependencies)
本项目依赖以下核心库，已在 `pyproject.toml` 中定义：
- `pandas` & `openpyxl`: 用于表格数据处理。
- `numpy`: 用于高效数值计算。
- `scikit-learn`: 用于机器学习建模。
- `seaborn` & `matplotlib`: 用于数据可视化分析。

## 5. 前端部署
本项目的前端 Web 界面基于 Vite 构建：
- **开发模式**: `npm run dev`
- **构建生产版本**: `npm run build`
- **运行端口**: 默认 3000
