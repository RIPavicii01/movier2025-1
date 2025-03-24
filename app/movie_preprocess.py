import pandas as pd

movies_df = pd.read_csv("data/movies.csv")
print(movies_df)

movies_df['movieId'] = movies_df['movieId'].astype(str)
links_df = pd.read_csv('data/links.csv', dtype=str)
merged_df = movies_df.merge(links_df, on='movieId', how='left')
print(merged_df)
print(movies_df.columns)