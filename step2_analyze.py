import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

def analyze_and_clean():
    print("正在加载数据进行科学分析...")
    try:
        df = pd.read_excel("user_health_raw.xlsx")
    except Exception as e:
        print("未找到原始数据文件，请先运行 step1_generate.py")
        return

    # 1. 描述性统计
    # 数学基础：均值、中位数、方差
    summary = df[['height', 'weight']].agg(['mean', 'median', 'std', 'var'])
    print("\n--- 描述性分析报告 ---")
    print(summary)

    # 2. 只有科学的数据才是生产力：使用标准差法 (Z-Score) 清洗数据
    # 数学基础：概率论 - 3个标准差原则 (68-95-99.7 原则)
    mean_h = df['height'].mean()
    std_h = df['height'].std()
    
    # 定义边界：超出 3 个标准差即为异常
    lower_bound = mean_h - 3 * std_h
    upper_bound = mean_h + 3 * std_h
    
    df_clean = df[(df['height'] >= lower_bound) & (df['height'] <= upper_bound)]
    print(f"\n清洗完成！剔除了 {len(df) - len(df_clean)} 条异常记录。")

    # 3. 多维度可视化与相关性分析
    # 数学基础：相关系数 (Correlation)
    plt.rcParams['font.sans-serif'] = ['SimHei'] # Windows 常用中文字体
    plt.rcParams['axes.unicode_minus'] = False

    # 计算特征之间的关系
    corr = df_clean[['height', 'weight', 'BMI']].corr()
    print("\n--- 特征相关性矩阵 ---")
    print(corr)

    # 绘制 Pairplot 全景图
    sns.pairplot(df_clean[['height', 'weight', 'BMI', 'health_status']], hue='health_status')
    plt.title("特征全景关系分析图 (Seaborn Pairplot)")
    
    # 保存结果
    df_clean.to_excel("user_health_clean.xlsx", index=False)
    plt.show()

if __name__ == "__main__":
    analyze_and_clean()
