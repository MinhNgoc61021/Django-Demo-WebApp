from django import forms
from login.models import User


class LoginForm(forms.Form):
    username = forms.CharField(max_length=45)
    password = forms.CharField(widget=forms.PasswordInput())


    # fullname = forms.CharField(max_length=45)
    # file = forms.FileField()
    # for creating file input
