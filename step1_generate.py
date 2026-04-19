import pandas as pd
import numpy as np

def generate_data():
    print("正在生成原始数据...")
    np.random.seed(42)
    n_users = 1000

    # 1. 模拟正常数据：身高(cm)服从正态分布 N(170, 10), 体重(kg)服从 N(70, 15)
    # 数学基础：概率分布 (Normal Distribution)
    heights = np.random.normal(170, 10, n_users)
    weights = np.random.normal(70, 15, n_users)

    # 2. 插入“突变”异常数据 (Outliers)
    n_outliers = 20
    # 极端异常值：如身高3米，或者体重极轻
    heights[:n_outliers] = np.random.uniform(50, 300, n_outliers)
    weights[:n_outliers] = np.random.uniform(5, 200, n_outliers)

    df = pd.DataFrame({'height': heights, 'weight': weights})

    # 3. 计算 BMI 并判断初步状态
    df['BMI'] = df['weight'] / ((df['height'] / 100) ** 2)
    
    def judge_health(bmi):
        if bmi < 18.5: return 'Underweight'
        elif 18.5 <= bmi < 24: return 'Normal'
        elif 24 <= bmi < 28: return 'Overweight'
        else: return 'Obese'

    df['health_status'] = df['BMI'].apply(judge_health)

    # 保存为 Excel 文件
    output_file = "user_health_raw.xlsx"
    df.to_excel(output_file, index=False)
    print(f"数据生成完成！已保存至 {output_file}")
    print(df.head())

if __name__ == "__main__":
    generate_data()
