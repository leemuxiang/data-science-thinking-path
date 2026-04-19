import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

def machine_learning_analysis():
    print("进入机器学习预测阶段...")
    try:
        df = pd.read_excel("user_health_clean.xlsx")
    except Exception as e:
        print("未找到清洗后的数据文件，请先运行 step2_analyze.py")
        return

    # 1. 准备特征与目标
    # 数学基础：线性代数 - 将样本转化为多维向量
    X = df[['height', 'weight']]
    y = df['health_status']

    # 2. 划分数据集
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # 3. 训练模型
    # 数学基础：优化理论/微积分 - 模型在后台寻找损失函数的最小值（梯度下降的离散变体）
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # 4. 软分类预测 (Soft Classification)
    # 数学基础：概率论 - 给出预测为各个类别的概率，而不仅仅是一个标签
    print("\n--- 概率分类示例 (前5条) ---")
    probs = model.predict_proba(X_test[:5])
    for i, p in enumerate(probs):
        class_probs = dict(zip(model.classes_, p))
        print(f"样本 {i+1} 属于各健康状态的概率: {class_probs}")

    # 5. 模型评估
    y_pred = model.predict(X_test)
    print("\n--- 模型性能评估报告 ---")
    print(classification_report(y_test, y_pred))

if __name__ == "__main__":
    machine_learning_analysis()
