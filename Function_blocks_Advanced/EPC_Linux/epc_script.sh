#!/bin/bash

# The data captured by the EPC block are in the epc_uVec1 and epc_uVec2 files
# You can process them here, e.g. archive them

FILENAME=$(date +%s)
cp /rex/rexcore/epc_uVec1 /rex/rexcore/${FILENAME}_1.csv
cp /rex/rexcore/epc_uVec2 /rex/rexcore/${FILENAME}_2.csv

# The EPC block reads the data from the epc_yVec1 and epc_yVec2 files. 
# These can be pre-generated or result from computations on the captured data.
# In this example the testing data will be used.

cp /rex/rexcore/epc_testdata1.csv /rex/rexcore/epc_yVec1
cp /rex/rexcore/epc_testdata2.csv /rex/rexcore/epc_yVec2 




