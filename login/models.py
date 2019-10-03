from django.db import models

class Student(models.Model):
    username = models.CharField(max_length = 45)
    password = models.CharField(max_length = 60)
    fullname = models.CharField(max_length = 45)

# Create your models here.
