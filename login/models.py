from django.db import models
from django.forms import ModelForm


class User(models.Model):
    # id = models.IntegerField()
    username = models.CharField(max_length=45)
    password = models.CharField(max_length=60)
    fullname = models.CharField(max_length=45)

    class Meta:
        db_table = 'user'

class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password', 'fullname']
# Create your models here.
