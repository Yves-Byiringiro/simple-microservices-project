from rest_framework import serializers
from .models import Post

class PostSeriliazer(serializers.Serializer):
    title       = serializers.CharField()
    date    = serializers.CharField()
    content     = serializers.CharField()


class GetPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Post
        fields  = ['id', 'title', 'date', 'content']


class EventSeriliazer(serializers.Serializer):
    title       = serializers.CharField()
    content     = serializers.CharField()
    date    = serializers.CharField()





# Posts