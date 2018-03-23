FROM python:2

RUN apt-get update && apt-get install git

RUN git clone https://github.com/mseclab/PyJFuzz.git /opt/pyfuzz && cd /opt/pyfuzz && python setup.py install

ENTRYPOINT [ "pjf" ]
