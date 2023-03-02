from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),   
    path('', views.startpage, name='startpage'),
    path('social-auth/', include('social_django.urls', namespace='social')),
    path('api/', include('api.urls')),
]

if settings.DEBUG:
    """
    Функция static() подходит только для локальной разработки, но не для применения на
боевых серверах. Никогда не используйте Django в качестве поставщика статических
и медиафайлов
    """
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)