
def file_upload(file):
    with open('login/static/file_upload/' + file.name, 'wb+') as destination: #create file_upload directory to store file
        for chunk in file.chunks():
            destination.write(chunk)