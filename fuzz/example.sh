#!/bin/bash
docker build . -t fuzzer:v0.0.1
docker run fuzzer:v0.0.1 --J '{"a":1}'
