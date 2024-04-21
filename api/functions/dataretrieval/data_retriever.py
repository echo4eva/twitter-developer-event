#opening users data
import gzip
import pandas
# Open the compressed file
with gzip.open('twibot-22.csv.gz', 'rb') as f:
    # Read the contents of the file
    contents = f.read()

# Write the uncompressed contents to a new file
with open('twibot-22.csv', 'wb') as f:
    f.write(contents)

import gzip

# Open the compressed file
with gzip.open('twibot-22.csv.gz', 'rb') as f:
    # Read the contents of the file
    contents = f.read()

# Write the uncompressed contents to a new file
with open('twibot-22.csv', 'wb') as f:
    f.write(contents)
