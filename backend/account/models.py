from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    avatar = models.ImageField(upload_to='media/users/avatar/', blank=True)    


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    city = models.CharField(max_length=50, blank=True, null=True)
    location = models.CharField(max_length=50, blank=True, null=True)    


class Kennel(models.Model):
    owner = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)    
    name = models.CharField(max_length=50, blank=True, null=True)
    animal = models.CharField(max_length=50, blank=True, null=True)
    breed = models.CharField(max_length=50, blank=True, null=True)
