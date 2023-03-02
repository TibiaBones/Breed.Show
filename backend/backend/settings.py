from pathlib import Path
import os


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-w+pd9ql!0%4t6zc&6+r@y+7qcv*o#bxvdlx07frk-4nw-5%v8x'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['breedshow.by', 'localhost', '127.0.0.1']


# Application definition

INSTALLED_APPS = [
    'account.apps.AccountConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'social_django',
    'django_extensions',    
    'rest_framework',
    'api',
    'rest_framework.authtoken',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR / 'templates'
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

AUTH_USER_MODEL = 'account.User'



# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static'
]
STATIC_ROOT = os.path.join(BASE_DIR / "staticfiles")
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR / 'media')

# указывает адрес, куда Django будет перенаправлять пользователя при успешной авторизации, 
# если не указан GET-параметр next
LOGIN_REDIRECT_URL = 'dashboard'
# адрес, куда нужно перенаправлять пользователя для входа
# в систему, например из обработчиков с декоратором login_required
LOGIN_URL = 'login'
# адрес, перейдя по которому, пользователь выйдет из своего
# аккаунта
LOGOUT_URL = 'logout'


EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

"""
к основному бэкэнду ModelBackend, который
использует логин и пароль пользователя в качестве идентификационных дан-
ных, мы добавили собственный бэкэнд, который проверяет e-mail вместо ло-
гина. Помните, что Django будет использовать бэкэнды по порядку, поэтому
теперь пользователь сможет аутентифицироваться и с помощью электронной
почты. Идентификационные данные сначала будут проверены ModelBackend.
Если этот бэкэнд не вернет объект пользователя, Django попробует аутентифи-
цировать его с помощью нашего класса, EmailAuthBackend.
"""
AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'account.authentication.EmailAuthBackend',
    'social_core.backends.facebook.FacebookOAuth2',    
    'social_core.backends.google.GoogleOAuth2',
]


# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

SOCIAL_AUTH_FACEBOOK_KEY = '717099183103990' # Facebook App ID
SOCIAL_AUTH_FACEBOOK_SECRET = 'befa1f1efb97db3283b1f10782b5dddc' # Facebook App Secret
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']

SOCIAL_AUTH_TWITTER_KEY = '' # Twitter API Key
SOCIAL_AUTH_TWITTER_SECRET = '' # Twitter API Secret

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '891666884087-dehkib4i8u2gemtecfuknr917dass5oi.apps.googleusercontent.com' # Google Consumer Key
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = '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' # Google Consumer Secret


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES':[
    'rest_framework.authentication.TokenAuthentication',
]
}
