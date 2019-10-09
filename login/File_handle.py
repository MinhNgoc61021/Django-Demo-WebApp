
def file_upload(file):
    with open('login/static/file_upload/' + file.name, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)