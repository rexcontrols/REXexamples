#!/bin/bash

# The data captured by the EPC block are in the epc_uVec1 and epc_uVec2 files
# You can process them here, e.g. archive them

FILENAME=$(date +%s)
cp /rex/data/epc_uVec1 /rex/data/${FILENAME}_1.csv
cp /rex/data/epc_uVec2 /rex/data/${FILENAME}_2.csv

# The EPC block reads the data from the epc_yVec1 and epc_yVec2 files. 
# These can be pre-generated or result from computations on the captured data.
# In this example the testing data will be used.

cp /rex/data/epc_testdata1.csv /rex/data/epc_yVec1
cp /rex/data/epc_testdata2.csv /rex/data/epc_yVec2 




