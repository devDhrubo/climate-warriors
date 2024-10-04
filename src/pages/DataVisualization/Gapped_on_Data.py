#how the data was merged
import dask.dataframe as dd

file_path = r'C:\Users\momru\Desktop\NSAC-2024\0Final Work\seal level Datasets\web\data.csv'

ddf = dd.read_csv(file_path, na_values=['--'])
ddf = ddf.dropna(subset=['SLA'])

nth = 100
ddf['row_index'] = ddf.index
ddf_gap = ddf[ddf['row_index'] % nth == 0]

ddf_gap = ddf_gap.drop(columns=['row_index'])
sampled_df = ddf_gap.compute()

output_file = r'C:\Users\momru\Desktop\NSAC-2024\0Final Work\seal level Datasets\web\data_gapped.csv'
sampled_df.to_csv(output_file, index=False)

print(f"Gapped dataset saved to {output_file}")

