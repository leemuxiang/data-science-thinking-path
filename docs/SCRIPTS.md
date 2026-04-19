# Python 脚本详细说明 (Scripts Documentation)

本项目提供了一组线性执行的 Python 脚本，用于模拟完整的数据分析流程。

## 1. `step1_generate.py` —— 数据生成
- **功能**：模拟 1000 名用户的身高和体重数据。
- **科学逻辑**：
  - 核心数据使用 `np.random.normal` 生成，模拟自然界常见的正态分布。
  - 混入 2% 的异常噪声（如身高 3 米、体重 5 公斤等），用于后续的清洗实验。
- **输出产物**：`user_health_raw.xlsx`

## 2. `step2_analyze.py` —— 科学清洗与探索
- **功能**：对脏数据进行预处理和可视化分析。
- **关键操作**：
  - **Z-Score 过滤**：计算身高的均值和标准差，剔除 3 倍标准差之外的极端异常值。
  - **相关性计算**：使用 `df.corr()` 计算特征间的关联度。
  - **可视化**：调用 Seaborn 的 `pairplot` 展示身高、体重、BMI 的多维分布。
- **输出产物**：`user_health_clean.xlsx` 及弹出图表。

## 3. `step3_ml.py` —— 机器学习预测
- **功能**：训练随机森林模型分类器。
- **核心逻辑**：
  - **特征工程**：将身高、体重作为预测向量。
  - **模型训练**：基于清洗后的数据逻辑寻找分类边界。
  - **概率输出**：展示 `predict_proba`，演示模型对边界样本的置信度判断。
- **评估指标**：输出 Precision, Recall 和 F1-score。

## 运行方式 (Windows)
```bash
uv run step1_generate.py
uv run step2_analyze.py
uv run step3_ml.py
```
