
from django.contrib import admin
from django.urls import path
from core.views import PostView, EventHandler


urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', PostView.as_view()),
    path('events', EventHandler.as_view())
]


# Posts