# 项目设计文档 (Project Design)

## 1. 核心设计理念
本项目旨在通过实战案例（身高体重健康分析）来展示数据科学的全流程，并反向映射出每一项编程操作背后的数学基础。通过这种“由果导因”的学习方式，帮助学习者理解：
- **为什么需要这些库？** (NumPy, Pandas, Scikit-learn)
- **这些库在数学上做了什么？** (正态分布采样、矩阵运算、梯度下降、概率推理)

## 2. 视觉设计 (Professional Polish)
界面采用了“专业工作台”风格：
- **侧边栏 (Sidebar)**：代表数据处理的生命周期。
- **工作区 (Main Workspace)**：集成了科学假设、思考过程、代码实现和数学映射。
- **终端 (Terminal)**：模拟真实的脚本执行流，增强沉浸感。
- **调色板**：使用深蓝 (Slate 900) 与 科技蓝 (Blue 600) 的组合，传达一种精确、可靠的科学氛围。

## 3. 数学映射逻辑 (The Math-Code Map)
| 阶段 | 编程工具 | 数学领域 | 具体应用 |
| :--- | :--- | :--- | :--- |
| 数据模拟 | NumPy | 概率论 | 正态分布 (Normal Distribution) 采样 |
| 数据清洗 | Pandas | 统计学 | Z-Score (标准差) 离群点检测 |
| 关联分析 | Seaborn | 统计学 | 皮尔逊相关系数 (Correlation Coefficient) |
| 模型训练 | Sklearn | 微积分 / 最优化 | 损失函数最小化、梯度下降优化 |
| 软分类 | Sklearn | 概率论 | 条件概率输出 (Predict Proba) |

## 4. 技术栈
- **前端**: React 18, Tailwind CSS, Lucide Icons, Framer Motion.
- **后端 (数据处理)**: Python 3.11+.
- **包管理**: `uv` (Windows/Linux/MacOS 通用极速工具)。
