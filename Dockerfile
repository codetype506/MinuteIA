FROM python:3.12.3

WORKDIR /app


COPY . /app


RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 5000 8888


CMD ["bash", "-c", "flask run --host=0.0.0.0 & jupyter notebook --ip=0.0.0.0 --port=8888 --allow-root --no-browser --NotebookApp.token='' --NotebookApp.password=''"]

