# Fuzz testing
As a devops my method of testing an app for input is fuzzing.

I will use one of libraries which can accept a working format (json or text) and produced a fuzzed version.

This way I can produce thousands of test-cases instead of just 25 and I can make passing all those part of integration tests that every app needs to go through.

# Exmaple of libraries
https://github.com/mseclab/PyJFuzz

https://github.com/npryce/snodge

# Example

As an example I produced a sample of fuzzed data that now I can run and check our parse with it.

Even further I can later fuzz our json consumer apps too.

```bash
for i in ./fuzzed/*.txt;do cat $i |../parse/target/debug/mb ;done 
```
