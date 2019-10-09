from django import forms
from login.models import User


class UserForm(forms.Form):
    username = forms.CharField(max_length=45)
    password = forms.CharField(max_length=60)
    fullname = forms.CharField(max_length=45)
    file = forms.FileField()
    # for creating file input
