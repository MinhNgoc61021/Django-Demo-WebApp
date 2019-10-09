from django.db import models


class User(models.Model):
    username = models.CharField(max_length=45)
    password = models.CharField(max_length=60)
    fullname = models.CharField(max_length=45)

    class Meta:
        db_table = 'user'
# Create your models here.
