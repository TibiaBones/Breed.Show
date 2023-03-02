from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
# from django.contrib import messages
from .forms import LoginForm, UserRegistrationForm, ProfileRegistrationForm, UserEditForm, ProfileEditForm, KennelRegistrationForm
from .models import Profile, Kennel
from django.contrib.auth.models import Group


"""
Django предоставляет класс UserCreationForm, который расположен в модуле
django.contrib.auth.forms. Он очень похож на класс формы UserRegistrationForm, созданный нами.
"""
def register(request):
    if request.method == 'POST':
        user_form = UserRegistrationForm(request.POST, request.FILES)
        profile_form = ProfileRegistrationForm(request.POST)       
        kennel_form = KennelRegistrationForm(request.POST)
        
        if user_form.is_valid() and profile_form.is_valid() and kennel_form.is_valid():
            
            # Create a new user object but avoid saving it yet
            new_user = user_form.save(commit=False)
            # Set the chosen password
            new_user.set_password(user_form.cleaned_data['password'])
            # Save the User object
            new_user.save()
            
            #####################################################
            # Create the user profile
            # Создание профиля пользователя.
            #Profile.objects.create(user=new_user)            
            profile = profile_form.save(commit=False)
            profile.user = new_user
            profile.save()

            # One user Group
            #user_group = Group.objects.get(name=profile_form.cleaned_data['groups'])
            #user_group = Group.objects.get(name="lover")
            #new_user.groups.add(user_group)
            
            #print(profile_form.cleaned_data["location"])
            if profile_form.cleaned_data["location"] == None:
                user_group = Group.objects.get(name="lover")
                new_user.groups.add(user_group)
            else:
                user_group = Group.objects.get(name="breeder")
                new_user.groups.add(user_group)
            ###########################################################

            kennel = kennel_form.save(commit=False)
            kennel.owner = new_user
            kennel.animal = 'pet'         
            kennel.save()
                   
            
            return render(request,
                          'account/register_done.html',
                          {'new_user': new_user})
    else:
        user_form = UserRegistrationForm()
        profile_form = ProfileRegistrationForm()
        kennel_form = KennelRegistrationForm()
    return render(request,
                  'account/register.html',
                  {
                    'user_form': user_form,
                    'profile_form': profile_form,
                    
                    })


"""
Эта функция не используется т.к.
Django также предоставляет шаблоны URLов для обработчиков аутентифи-
кации. Вы можете закомментировать то, что мы указывали в файле urls.py для
приложения account, и вместо этого подключить пути приложения django.con-
trib.auth.urls
path('', include('django.contrib.auth.urls')),

Обратите внимание на различия между authenticate() и login(). Функция authenticate()
проверяет идентификационные данные и возвращает объект User, если они корректны.
Функция login() сохраняет текущего пользователя в сессии
"""
#def user_login(request):
#    if request.method == 'POST':
#        form = LoginForm(request.POST)
#        if form.is_valid():
#            cd = form.cleaned_data
#            user = authenticate(request,
#                                username=cd['username'],
#                                password=cd['password'])
#            if user is not None:
#                if user.is_active:
#                    login(request, user)
#                    return HttpResponse('Authenticated '\
#                                        'successfully')
#                else:
#                    return HttpResponse('Disabled account')
#            else:
#                return HttpResponse('Invalid login')
#    else:
#        form = LoginForm()
#    return render(request, 'account/login.html', {'form': form})
#
#


"""
В противном случае пользователь перенаправляется на страницу
логина
При этом в GET-параметре задается next -адрес запрашиваемой страни-
цы. Таким образом, после успешного прохождения авторизации пользователь
будет перенаправлен на страницу, куда он пытался попасть. Именно для этих
целей мы вставили скрытое поле next в форму логина

Также мы добавили переменную контекста section, с помощью которой смо-
жем узнать, какой раздел сайта сейчас просматривает пользователь.
"""
@login_required
def dashboard(request):
    user = request.user
    profile = Profile.objects.get(user=user)
    kennel = Kennel.objects.get(owner=user)

    return render(request,
                  'account/dashboard.html',
                  {
                    'section': 'dashboard',
                    'profile': profile, 
                    'user': user, 
                    'kennel': kennel,
                  })


@login_required
def settings(request):
    return render(request, 'account/settings.html', {})


@login_required
def edit(request):
    if request.method == 'POST':
        user_form = UserEditForm(instance=request.user,
                                 data=request.POST,
                                 files=request.FILES)
        profile_form = ProfileEditForm(
                                    instance=request.user.profile,
                                    data=request.POST,
                                    files=request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            #messages.success(request, 'Profile updated successfully')
            return redirect('dashboard') 
        else:
            pass
            #messages.error(request, 'Error updating your profile')
    else:
        user_form = UserEditForm(instance=request.user)
        profile_form = ProfileEditForm(instance=request.user.profile)
    return render(request,
                  'account/edit.html',                  
                  {'user_form': user_form,
                   'profile_form': profile_form})