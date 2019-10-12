from django.shortcuts import render, redirect
# Create your views here.
from django.http import HttpResponse, HttpResponseNotFound
# importing loading from django template
from django.template import loader
from django.views.decorators.http import require_http_methods
from login.forms import LoginForm
from login.File_handle import file_upload


@require_http_methods(['Post'])
def hello(request):
    return HttpResponse("<h1>" +
                        "Hello, Welcome to Django!" +
                        "</h2>")


def login(request):
    if request.method == "POST":
        login_form = LoginForm(request.POST)
        if login_form.is_valid():
            try:
                # file_upload(request.FILES['file'])
                return HttpResponse("<h1>" +
                                    "Hello, Welcome to Django and File uploaded successfully!" +
                                    "</h2>")
            except:
                pass
    else:
        login_form = LoginForm()
    return render(request, 'registration/login.html', {'form': login_form})


def new_account(request):
    template = loader.get_template('registration/create-account.html')  # getting our template
    return HttpResponse(template.render())  # rendering the template in HttpResponse


def info(request):
    return redirect('README.md')
