from django.shortcuts import render, redirect
# Create your views here.
from django.http import HttpResponse, HttpResponseNotFound
# importing loading from django template
from django.template import loader
from django.views.decorators.http import require_http_methods
from login.forms import UserForm
from login.File_handle import file_upload


@require_http_methods(['Post'])
def hello(request):
    return HttpResponse("<h1>" +
                        "Hello, Welcome to Django!" +
                        "</h2>")


def login(request):
    if request.method == "POST":
        user_form= UserForm(request.POST, request.FILES)
        if user_form.is_valid():
            try:
                file_upload(request.FILES['file'])
                return HttpResponse("<h1>" +
                                    "Hello, Welcome to Django and File uploaded successfully!" +
                                    "</h2>")
            except:
                pass
    else:
        user_form = UserForm()
    return render(request, 'login.html', {'form': user_form})


def new_account(request):
    template = loader.get_template('create-account.html')  # getting our template
    return HttpResponse(template.render())  # rendering the template in HttpResponse
