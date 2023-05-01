from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework import status
from rest_framework.response import Response
import requests

from .serializers import PostSeriliazer, GetPostsSerializer
from .models import Post

class PostView(APIView):
    def post(self, request):
        if request.method == 'POST':
            form = PostSeriliazer(data=request.data)

            if form.is_valid():
                try:
                    title    = form.data.get('title')
                    date = form.data.get('date')
                    content  = form.data.get('content')

                    check_exist = Post.objects.filter(title=title, date=date).exists()

                    if check_exist:
                        return Response({ 'message': 'post already exists' }, status=status.HTTP_409_CONFLICT)

                    post = Post.objects.create(title=title, content=content, date=date)
                    post.save()

                    url = 'http://localhost:8002/events'

                    response = requests.post(url, json={ 'type':'PostCreated', 'data': {'id': post.id,'title': title,'content': content, 'date': date }})

                    if response.status_code == 200:
                        print('POST request successful.')
                    else:
                        print('POST request failed with status code:', response.status_code)

                    return Response({ 'message':'post created' }, status=status.HTTP_201_CREATED)
                except Exception as e:
                    print("**********************************************")
                    print(str(e))
                    print("**********************************************")
                    return Response({ 'message': 'something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            return Response({ 'message': 'invalid inputs' }, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        try:
            posts = Post.objects.all()
            serialized_posts = GetPostsSerializer(posts, many=True).data 

            return Response({ 'posts': serialized_posts}, status=status.HTTP_200_OK)
        except Exception as e:
            print("**********************************************")
            print(str(e))
            print("**********************************************")
            return Response({ 'message': 'something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class EventHandler(APIView):
    def post(self, request):
        if request.method == 'POST':
            try:
                print({'Event Received': request.data['type']}) 
                return Response({ 'message': 'success' }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({ 'message': 'something went wrong'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)