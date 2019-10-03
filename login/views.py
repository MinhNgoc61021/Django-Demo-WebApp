from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse
#importing loading from django template
from django.template import loader

def hello(request):
    return HttpResponse("<h1>" +
                            "Hello, Welcome to Django!" +
                        "</h2>")

def new_account(request):
    template = loader.get_template('login.html')  # getting our template
    return HttpResponse(template.render())  # rendering the template in HttpResponse
