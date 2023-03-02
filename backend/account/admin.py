from django.contrib import admin
from .models import Profile, User, Kennel


#@admin.register(User)
#class UserAdmin(admin.ModelAdmin):
#    list_display = ['user', 'date_of_birth', 'photo']
admin.site.register(User)


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'city',
        'location',                
    ]


@admin.register(Kennel)
class KennelAdmin(admin.ModelAdmin):
    list_display = [
        'owner',
        'name',
        'animal',
        'breed',                
    ]
