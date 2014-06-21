#!/bin/sh

# The data captured by the EPC block are in the epc_uVec1 and epc_uVec2 files
# You can process them here, e.g. archive them

FILENAME=$(date +%s)
cp /rex/rexcore/epc_uVec1 /rex/rexcore/${FILENAME}_1.csv
cp /rex/rexcore/epc_uVec2 /rex/rexcore/${FILENAME}_2.csv

# If you perform some complex computations, you will probably want to feed the 
# results back to REX algorithm. The EPC block reads the data from the epc_yVec1
# and epc_yVec2 files. 
# In this example the testing data will be returned

cp /rex/rexcore/epc_srcdata1.csv /rex/rexcore/epc_yVec1
cp /rex/rexcore/epc_srcdata2.csv /rex/rexcore/epc_yVec2 




